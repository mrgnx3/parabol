import styled from '@emotion/styled'
import graphql from 'babel-plugin-relay/macro'
import React from 'react'
import {useFragment} from 'react-relay'
import {PALETTE} from '~/styles/paletteV3'
import relativeDate from '~/utils/date/relativeDate'
import {
  ThreadedCommentHeader_comment$key,
  ThreadedCommentHeader_comment$data
} from '~/__generated__/ThreadedCommentHeader_comment.graphql'
import CommentAuthorOptionsButton from './CommentAuthorOptionsButton'
import AddReactjiButton from './ReflectionCard/AddReactjiButton'
import ThreadedItemHeaderDescription from './ThreadedItemHeaderDescription'
import ThreadedReplyButton from './ThreadedReplyButton'

const HeaderActions = styled('div')<{isViewerComment: boolean}>(({isViewerComment}) => ({
  color: PALETTE.SLATE_600,
  display: 'flex',
  fontWeight: 600,
  paddingRight: !isViewerComment ? 32 : 8
}))

const AddReactji = styled(AddReactjiButton)({
  display: 'flex',
  marginRight: 4
})

interface Props {
  comment: ThreadedCommentHeader_comment$key
  editComment: () => void
  onToggleReactji: (emojiId: string) => void
  onReply: () => void
  dataCy: string
  meetingId: string
}

const getName = (comment: ThreadedCommentHeader_comment$data) => {
  const {isActive, createdByUserNullable, isViewerComment} = comment
  if (!isActive) return 'Message Deleted'
  if (createdByUserNullable?.preferredName) return createdByUserNullable.preferredName
  return isViewerComment ? 'Anonymous (You)' : 'Anonymous'
}

const ThreadedCommentHeader = (props: Props) => {
  const {comment: commentRef, onReply, editComment, onToggleReactji, dataCy, meetingId} = props
  const comment = useFragment(
    graphql`
      fragment ThreadedCommentHeader_comment on Comment {
        id
        createdByUserNullable: createdByUser {
          preferredName
        }
        isActive
        isViewerComment
        reactjis {
          id
        }
        updatedAt
      }
    `,
    commentRef
  )
  const {id: commentId, isActive, isViewerComment, reactjis, updatedAt} = comment
  const name = getName(comment)
  const hasReactjis = reactjis.length > 0
  return (
    <ThreadedItemHeaderDescription title={name} subTitle={relativeDate(updatedAt)}>
      {isActive && (
        <HeaderActions isViewerComment={isViewerComment}>
          {!hasReactjis && (
            <>
              <AddReactji onToggle={onToggleReactji} />
              <ThreadedReplyButton dataCy={`${dataCy}`} onReply={onReply} />
            </>
          )}
          {isViewerComment && (
            <CommentAuthorOptionsButton
              dataCy={`${dataCy}`}
              editComment={editComment}
              commentId={commentId}
              meetingId={meetingId}
            />
          )}
        </HeaderActions>
      )}
    </ThreadedItemHeaderDescription>
  )
}

export default ThreadedCommentHeader
