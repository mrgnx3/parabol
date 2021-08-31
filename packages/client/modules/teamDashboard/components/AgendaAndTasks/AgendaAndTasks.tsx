import styled from '@emotion/styled'
import graphql from 'babel-plugin-relay/macro'
import React, {useRef} from 'react'
import {PreloadedQuery, usePreloadedQuery} from 'react-relay'
import LabelHeading from '~/components/LabelHeading/LabelHeading'
import {AgendaAndTasksQuery} from '~/__generated__/AgendaAndTasksQuery.graphql'
import useDocumentTitle from '../../../../hooks/useDocumentTitle'
import {Breakpoint, DrawerTypes, RightSidebar} from '../../../../types/constEnums'
import TeamColumnsContainer from '../../containers/TeamColumns/TeamColumnsContainer'
import TeamTasksHeaderContainer from '../../containers/TeamTasksHeader/TeamTasksHeaderContainer'
import AgendaListAndInput from '../AgendaListAndInput/AgendaListAndInput'
import ManageTeamList from '../ManageTeam/ManageTeamList'
import CloseSidebar from '../CloseSidebar/CloseSidebar'
import ResponsiveDashSidebar from '../../../../components/ResponsiveDashSidebar'
import {PALETTE} from '../../../../styles/paletteV3'
import ToggleAgendaListMutation from '../../../../mutations/ToggleAgendaListMutation'
import ToggleManageTeamMutation from '../../../../mutations/ToggleManageTeamMutation'
import useAtmosphere from '../../../../hooks/useAtmosphere'
import useMutationProps from '../../../../hooks/useMutationProps'
import useBreakpoint from '../../../../hooks/useBreakpoint'
import StartMeetingFAB from '../../../../components/StartMeetingFAB'

const RootBlock = styled('div')({
  display: 'flex',
  height: '100%',
  width: '100%'
})

const TasksMain = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '100%',
  overflow: 'auto',
  position: 'relative'
})

const TasksHeader = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%'
})

const TasksContent = styled('div')({
  display: 'flex',
  flex: 1,
  height: '100%',
  margin: 0,
  minHeight: 0,
  width: '100%'
})

const SidebarHeader = styled('div')({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px 8px 16px 16px'
})

const SidebarContent = styled('div')<{isDesktop: boolean}>(({isDesktop}) => ({
  backgroundColor: PALETTE.WHITE,
  display: 'flex',
  overflow: 'hidden',
  // hacky: padding-bottom makes space for the agenda input on desktop
  padding: `0 0 ${isDesktop ? 58 : 0}px`,
  height: '100vh',
  flexDirection: 'column',
  width: RightSidebar.WIDTH
}))

const StyledLabelHeading = styled(LabelHeading)({
  fontSize: 14,
  textTransform: 'none'
})

interface Props {
  queryRef: PreloadedQuery<AgendaAndTasksQuery>
}

const AgendaAndTasks = (props: Props) => {
  const {queryRef} = props
  const data = usePreloadedQuery<AgendaAndTasksQuery>(
    graphql`
      query AgendaAndTasksQuery($teamId: ID!) {
        viewer {
          dashSearch
          team(teamId: $teamId) {
            id
            name
            ...AgendaListAndInput_team
            ...ManageTeamList_team
            ...TeamTasksHeaderContainer_team
          }
          teamMember(teamId: $teamId) {
            hideAgenda
            hideManageTeam
            manageTeamMemberId
          }
          ...TeamColumnsContainer_viewer
        }
      }
    `,
    queryRef,
    {UNSTABLE_renderPolicy: 'full'}
  )

  const {viewer} = data
  const {dashSearch} = viewer
  const team = viewer.team!
  const teamMember = viewer.teamMember!
  const {hideAgenda, hideManageTeam, manageTeamMemberId} = teamMember
  const {id: teamId, name: teamName} = team
  const atmosphere = useAtmosphere()
  useDocumentTitle(`Team Dashboard | ${teamName}`, teamName)
  const isDesktop = useBreakpoint(Breakpoint.SIDEBAR_LEFT)
  const sidebarTypeRef = useRef<string | null>(null)
  if (!hideAgenda && hideManageTeam) {
    sidebarTypeRef.current = DrawerTypes.AGENDA
  } else if (hideAgenda && !hideManageTeam) {
    sidebarTypeRef.current = DrawerTypes.MANAGE_TEAM
  }
  const showAgenda = sidebarTypeRef.current === DrawerTypes.AGENDA
  const {submitting, onError, onCompleted, submitMutation} = useMutationProps()
  const toggleSidebar = () => {
    if (!submitting) {
      submitMutation()
      if (!hideManageTeam) {
        ToggleManageTeamMutation(atmosphere, {teamId}, {onError, onCompleted})
      } else if (!hideAgenda) {
        ToggleAgendaListMutation(atmosphere, teamId, onError, onCompleted)
      }
    }
  }

  return (
    <RootBlock>
      <TasksMain>
        <TasksHeader>
          <TeamTasksHeaderContainer team={team} />
        </TasksHeader>
        <TasksContent>
          <TeamColumnsContainer viewer={viewer} />
        </TasksContent>
        <StartMeetingFAB isAbsolute />
      </TasksMain>
      <ResponsiveDashSidebar
        isOpen={!hideAgenda || !hideManageTeam}
        isRightDrawer
        onToggle={toggleSidebar}
      >
        <SidebarContent isDesktop={isDesktop}>
          <SidebarHeader>
            <StyledLabelHeading>{showAgenda ? 'Team Agenda' : 'Manage Team'}</StyledLabelHeading>
            <CloseSidebar isAgenda={showAgenda} teamId={teamId} />
          </SidebarHeader>
          {showAgenda ? (
            <AgendaListAndInput dashSearch={dashSearch || ''} meeting={null} team={team} />
          ) : (
            <ManageTeamList manageTeamMemberId={manageTeamMemberId} team={team} />
          )}
        </SidebarContent>
      </ResponsiveDashSidebar>
    </RootBlock>
  )
}
export default AgendaAndTasks
