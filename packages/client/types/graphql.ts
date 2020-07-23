// AUTOMATICALLY GENERATED FILE - DO NOT EDIT

// tslint:disable

export interface IGraphQLResponseRoot {
  data?: IQuery | IMutation | ISubscription;
  errors?: Array<IGraphQLResponseError>;
}

export interface IGraphQLResponseError {
  /** Required for all errors */
  message: string;
  locations?: Array<IGraphQLResponseErrorLocation>;
  /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
  [propName: string]: any;
}

export interface IGraphQLResponseErrorLocation {
  line: number;
  column: number;
}

export interface IQuery {
  __typename: 'Query';
  viewer: IUser | null;
  getDemoEntities: IGetDemoEntitiesPayload;
  massInvitation: IMassInvitationPayload;
  verifiedInvitation: IVerifiedInvitationPayload;
  SAMLIdP: string | null;
}

export interface IGetDemoEntitiesOnQueryArguments {
  /**
   * the reflection bodies to entitize
   */
  text: string;
}

export interface IMassInvitationOnQueryArguments {
  /**
   * The mass invitation token
   */
  token: string;
}

export interface IVerifiedInvitationOnQueryArguments {
  /**
   * The invitation token
   */
  token: string;
}

export interface ISAMLIdPOnQueryArguments {
  /**
   * the email associated with a SAML login
   */
  email: string;

  /**
   * true if the user was invited, else false
   */
  isInvited?: boolean | null;
}

/**
 * The user account profile
 */
export interface IUser {
  __typename: 'User';

  /**
   * The userId provided by us
   */
  id: string;

  /**
   * All the integrations that the user could possibly use
   */
  allAvailableIntegrations: Array<SuggestedIntegration>;
  archivedTasks: ITaskConnection | null;
  archivedTasksCount: number | null;

  /**
   * The auth for the user. access token is null if not viewer. Use isActive to check for presence
   */
  atlassianAuth: IAtlassianAuth | null;

  /**
   * The assumed company this organizaiton belongs to
   */
  company: ICompany | null;

  /**
   * The socketIds that the user is currently connected with
   */
  connectedSockets: Array<string | null> | null;

  /**
   * The timestamp the user was created
   */
  createdAt: any | null;

  /**
   * The user email
   */
  email: any;

  /**
   * Any super power given to the user via a super user
   */
  featureFlags: IUserFeatureFlags;

  /**
   * The auth for the user. access token is null if not viewer. Use isActive to check for presence
   */
  githubAuth: IGitHubAuth | null;

  /**
   * An array of objects with information about the user's identities.
   *       More than one will exists in case accounts are linked
   */
  identities: Array<AuthIdentity | null> | null;

  /**
   * true if the user is not currently being billed for service. removed on every websocket handshake
   */
  inactive: boolean | null;
  invoiceDetails: IInvoice | null;
  invoices: IInvoiceConnection | null;

  /**
   * true if the user is a billing leader on any organization, else false
   */
  isAnyBillingLeader: boolean;

  /**
   * true if the user is currently online
   */
  isConnected: boolean | null;

  /**
   * true if the user is the first to sign up from their domain, else false
   */
  isPatientZero: boolean;

  /**
   * the reason the user account was removed
   */
  reasonRemoved: string | null;

  /**
   * true if the user was removed from parabol, else false
   */
  isRemoved: boolean;

  /**
   * the endedAt timestamp of the most recent meeting they were a member of
   */
  lastMetAt: any | null;

  /**
   * The largest number of consecutive months the user has checked into a meeting
   */
  monthlyStreakMax: number;

  /**
   * The number of consecutive 30-day intervals that the user has checked into a meeting as of this moment
   */
  monthlyStreakCurrent: number;

  /**
   * the most important actions for the user to perform
   */
  suggestedActions: Array<SuggestedAction>;

  /**
   * the number of times the user clicked pay later
   */
  payLaterClickCount: number;

  /**
   * The timeline of important events for the viewer
   */
  timeline: ITimelineEventConnection;

  /**
   * the ID of the newest feature, null if the user has dismissed it
   */
  newFeatureId: string | null;

  /**
   * The new feature released by Parabol. null if the user already hid it
   */
  newFeature: INewFeatureBroadcast | null;

  /**
   * url of user’s profile picture
   */
  picture: any;

  /**
   * The application-specific name, defaults to email before the tld
   */
  preferredName: string;

  /**
   * url of user’s raster profile picture (if user profile pic is an SVG, raster will be a PNG)
   */
  rasterPicture: any;

  /**
   * The last time the user connected via websocket or navigated to a common area
   */
  lastSeenAt: any | null;

  /**
   * The path the user was last seen at (rough heuristic)
   */
  lastSeenAtURL: string | null;

  /**
   * The meeting member associated with this user, if a meeting is currently in progress
   */
  meetingMember: MeetingMember | null;

  /**
   * A previous meeting that the user was in (present or absent)
   */
  meeting: NewMeeting | null;

  /**
   * A previous meeting that the user was in (present or absent)
   */
  newMeeting: NewMeeting | null;

  /**
   * all the notifications for a single user
   */
  notifications: INotificationConnection;

  /**
   * get a single organization and the count of users by status
   */
  organization: IOrganization | null;

  /**
   * The connection between a user and an organization
   */
  organizationUser: IOrganizationUser | null;

  /**
   * A single user that is connected to a single organization
   */
  organizationUsers: Array<IOrganizationUser>;

  /**
   * Get the list of all organizations a user belongs to
   */
  organizations: Array<IOrganization>;

  /**
   * a string with message stating that the user is over the free tier limit, else null
   */
  overLimitCopy: string | null;

  /**
   * The integrations that the user would probably like to use
   */
  suggestedIntegrations: ISuggestedIntegrationQueryPayload;
  tasks: ITaskConnection;

  /**
   * A query for a team
   */
  team: ITeam | null;

  /**
   * The invitation sent to the user, even if it was sent before they were a user
   */
  teamInvitation: ITeamInvitationPayload;

  /**
   * all the teams the user is on that the viewer can see.
   */
  teams: Array<ITeam>;

  /**
   * The team member associated with this user
   */
  teamMember: ITeamMember | null;

  /**
   * The highest tier of any org the user belongs to
   */
  tier: TierEnum;

  /**
   * all the teams the user is a part of that the viewer can see
   */
  tms: Array<string>;

  /**
   * The timestamp the user was last updated
   */
  updatedAt: any | null;
  userOnTeam: IUser | null;
}

export interface IAllAvailableIntegrationsOnUserArguments {
  /**
   * a teamId to use as a filter for the access tokens
   */
  teamId: string;
}

export interface IArchivedTasksOnUserArguments {
  first?: number | null;

  /**
   * the datetime cursor
   */
  after?: any | null;

  /**
   * The unique team ID
   */
  teamId: string;
}

export interface IArchivedTasksCountOnUserArguments {
  /**
   * The unique team ID
   */
  teamId: string;
}

export interface IAtlassianAuthOnUserArguments {
  /**
   * The teamId for the atlassian auth token
   */
  teamId: string;
}

export interface IGithubAuthOnUserArguments {
  /**
   * The teamId for the auth object
   */
  teamId: string;
}

export interface IInvoiceDetailsOnUserArguments {
  /**
   * The id of the invoice
   */
  invoiceId: string;
}

export interface IInvoicesOnUserArguments {
  first?: number | null;

  /**
   * the datetime cursor
   */
  after?: any | null;

  /**
   * The id of the organization
   */
  orgId: string;
}

export interface ITimelineOnUserArguments {
  /**
   * the datetime cursor
   */
  after?: any | null;

  /**
   * the number of timeline events to return
   */
  first: number;
}

export interface IMeetingMemberOnUserArguments {
  /**
   * The specific meeting ID
   */
  meetingId: string;
}

export interface IMeetingOnUserArguments {
  /**
   * The meeting ID
   */
  meetingId: string;
}

export interface INewMeetingOnUserArguments {
  /**
   * The meeting ID
   */
  meetingId: string;
}

export interface INotificationsOnUserArguments {
  first: number;
  after?: any | null;
}

export interface IOrganizationOnUserArguments {
  /**
   * the orgId
   */
  orgId: string;
}

export interface IOrganizationUserOnUserArguments {
  /**
   * the orgId
   */
  orgId: string;
}

export interface ISuggestedIntegrationsOnUserArguments {
  /**
   * a teamId to use as a filter to provide more accurate suggestions
   */
  teamId: string;
}

export interface ITasksOnUserArguments {
  first?: number | null;

  /**
   * the datetime cursor
   */
  after?: any | null;

  /**
   * The unique team ID
   */
  teamId?: string | null;
}

export interface ITeamOnUserArguments {
  /**
   * The team ID for the desired team
   */
  teamId: string;
}

export interface ITeamInvitationOnUserArguments {
  /**
   * The meetingId to check for the invitation, if teamId not available (e.g. on a meeting route)
   */
  meetingId?: string | null;

  /**
   * The teamId to check for the invitation
   */
  teamId?: string | null;
}

export interface ITeamMemberOnUserArguments {
  /**
   * The team the user is on
   */
  teamId: string;
}

export interface IUserOnTeamOnUserArguments {
  /**
   * The other user
   */
  userId: string;
}

export type SuggestedIntegration =
  | ISuggestedIntegrationGitHub
  | ISuggestedIntegrationJira;

export interface ISuggestedIntegration {
  __typename: 'SuggestedIntegration';
  id: string;
  service: TaskServiceEnum;
}

/**
 * The list of services for task integrations
 */
export const enum TaskServiceEnum {
  github = 'github',
  jira = 'jira'
}

/**
 * A connection to a list of items.
 */
export interface ITaskConnection {
  __typename: 'TaskConnection';

  /**
   * Page info with cursors coerced to ISO8601 dates
   */
  pageInfo: IPageInfoDateCursor | null;

  /**
   * A list of edges.
   */
  edges: Array<ITaskEdge>;
}

/**
 * Information about pagination in a connection.
 */
export interface IPageInfoDateCursor {
  __typename: 'PageInfoDateCursor';

  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;

  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;

  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: any | null;

  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: any | null;
}

/**
 * An edge in a connection.
 */
export interface ITaskEdge {
  __typename: 'TaskEdge';

  /**
   * The item at the end of the edge
   */
  node: ITask;
  cursor: any | null;
}

/**
 * A long-term task shared across the team, assigned to a single user
 */
export interface ITask {
  __typename: 'Task';

  /**
   * shortid
   */
  id: string;

  /**
   * The rich text body of the item
   */
  content: string;

  /**
   * The timestamp the item was created
   */
  createdAt: any;

  /**
   * The userId that created the item
   */
  createdBy: string;

  /**
   * The user that created the item
   */
  createdByUser: IUser;

  /**
   * the replies to this threadable item
   */
  replies: Array<Threadable>;

  /**
   * The ID of the thread
   */
  threadId: string | null;

  /**
   * The item that spurred the threaded discussion
   */
  threadSource: ThreadSourceEnum | null;

  /**
   * the parent, if this threadable is a reply, else null
   */
  threadParentId: string | null;

  /**
   * the order of this threadable, relative to threadParentId
   */
  threadSortOrder: number | null;

  /**
   * The timestamp the item was updated
   */
  updatedAt: any;

  /**
   * The agenda item that the task was created in, if any
   */
  agendaItem: IAgendaItem | null;

  /**
   * a user-defined due date
   */
  dueDate: any | null;

  /**
   * a list of users currently editing the task (fed by a subscription, so queries return null)
   */
  editors: Array<ITaskEditorDetails>;
  integration: TaskIntegration | null;

  /**
   * the foreign key for the meeting the task was created in
   */
  meetingId: string | null;

  /**
   * the foreign key for the meeting the task was marked as complete
   */
  doneMeetingId: string | null;

  /**
   * the shared sort order for tasks on the team dash & user dash
   */
  sortOrder: number;

  /**
   * The status of the task
   */
  status: TaskStatusEnum;

  /**
   * The tags associated with the task
   */
  tags: Array<string>;

  /**
   * The id of the team (indexed). Needed for subscribing to archived tasks
   */
  teamId: string;

  /**
   * The team this task belongs to
   */
  team: ITeam;

  /**
   * * The userId, index useful for server-side methods getting all tasks under a user
   */
  userId: string;

  /**
   * The user the task is assigned to
   */
  user: IUser;
}

/**
 * An item that can be put in a thread
 */
export type Threadable = ITask | IComment;

/**
 * An item that can be put in a thread
 */
export interface IThreadable {
  __typename: 'Threadable';

  /**
   * shortid
   */
  id: string;

  /**
   * The rich text body of the item
   */
  content: string;

  /**
   * The timestamp the item was created
   */
  createdAt: any;

  /**
   * The userId that created the item
   */
  createdBy: string | null;

  /**
   * The user that created the item
   */
  createdByUser: IUser | null;

  /**
   * the replies to this threadable item
   */
  replies: Array<Threadable>;

  /**
   * The ID of the thread
   */
  threadId: string | null;

  /**
   * The item that spurred the threaded discussion
   */
  threadSource: ThreadSourceEnum | null;

  /**
   * the parent, if this threadable is a reply, else null
   */
  threadParentId: string | null;

  /**
   * the order of this threadable, relative to threadParentId
   */
  threadSortOrder: number | null;

  /**
   * The timestamp the item was updated
   */
  updatedAt: any;
}

/**
 * The source of the thread
 */
export const enum ThreadSourceEnum {
  AGENDA_ITEM = 'AGENDA_ITEM',
  REFLECTION_GROUP = 'REFLECTION_GROUP'
}

/**
 * A request placeholder that will likely turn into 1 or more tasks
 */
export interface IAgendaItem {
  __typename: 'AgendaItem';

  /**
   * The unique agenda item id teamId::shortid
   */
  id: string;

  /**
   * the comments and tasks created from the discussion
   */
  thread: IThreadableConnection;

  /**
   * The body of the agenda item
   */
  content: string;

  /**
   * The timestamp the agenda item was created
   */
  createdAt: any | null;

  /**
   * true if the agenda item has not been processed or deleted
   */
  isActive: boolean;

  /**
   * True if the agenda item has been pinned
   */
  pinned: boolean | null;

  /**
   * If pinned, this is the unique id of the original agenda item
   */
  pinnedParentId: string | null;

  /**
   * The sort order of the agenda item in the list
   */
  sortOrder: number;

  /**
   * *The team for this agenda item
   */
  teamId: string;

  /**
   * The teamMemberId that created this agenda item
   */
  teamMemberId: string;

  /**
   * The meetingId of the agenda item
   */
  meetingId: string | null;

  /**
   * The timestamp the agenda item was updated
   */
  updatedAt: any | null;

  /**
   * The team member that created the agenda item
   */
  teamMember: ITeamMember;
}

export interface IThreadOnAgendaItemArguments {
  first: number;

  /**
   * the incrementing sort order in string format
   */
  after?: string | null;
}

/**
 * The source of a discusson thread
 */
export type ThreadSource = IAgendaItem | IRetroReflectionGroup;

/**
 * The source of a discusson thread
 */
export interface IThreadSource {
  __typename: 'ThreadSource';

  /**
   * shortid
   */
  id: string;

  /**
   * the comments and tasks created from the discussion
   */
  thread: IThreadableConnection;
}

export interface IThreadOnThreadSourceArguments {
  first: number;

  /**
   * the incrementing sort order in string format
   */
  after?: string | null;
}

/**
 * A connection to a list of items.
 */
export interface IThreadableConnection {
  __typename: 'ThreadableConnection';

  /**
   * Page info with strings (sortOrder) as cursors
   */
  pageInfo: IPageInfo | null;

  /**
   * A list of edges.
   */
  edges: Array<IThreadableEdge>;
}

/**
 * Information about pagination in a connection.
 */
export interface IPageInfo {
  __typename: 'PageInfo';

  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;

  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;

  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;

  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

/**
 * An edge in a connection.
 */
export interface IThreadableEdge {
  __typename: 'ThreadableEdge';

  /**
   * The item at the end of the edge
   */
  node: Threadable;
  cursor: string | null;
}

/**
 * A member of a team
 */
export interface ITeamMember {
  __typename: 'TeamMember';

  /**
   * An ID for the teamMember. userId::teamId
   */
  id: string;

  /**
   * The datetime the team member was created
   */
  createdAt: any;

  /**
   * true if the user is a part of the team, false if they no longer are
   */
  isNotRemoved: boolean | null;

  /**
   * Is user a team lead?
   */
  isLead: boolean | null;

  /**
   * hide the agenda list on the dashboard
   */
  hideAgenda: boolean;

  /**
   * The user email
   */
  email: any;

  /**
   * url of user’s profile picture
   */
  picture: any;

  /**
   * The place in line for checkIn, regenerated every meeting
   */
  checkInOrder: number;

  /**
   * true if this team member belongs to the user that queried it
   */
  isSelf: boolean;

  /**
   * The meeting specifics for the meeting the team member is currently in
   */
  meetingMember: MeetingMember | null;

  /**
   * The name of the assignee
   */
  preferredName: string;

  /**
   * The slack auth for the team member.
   */
  slackAuth: ISlackAuth | null;

  /**
   * A list of events and the slack channels they get posted to
   */
  slackNotifications: Array<ISlackNotification>;

  /**
   * Tasks owned by the team member
   */
  tasks: ITaskConnection | null;

  /**
   * The team this team member belongs to
   */
  team: ITeam | null;

  /**
   * foreign key to Team table
   */
  teamId: string;

  /**
   * The user for the team member
   */
  user: IUser;

  /**
   * foreign key to User table
   */
  userId: string;
}

export interface IMeetingMemberOnTeamMemberArguments {
  meetingId: string;
}

export interface ITasksOnTeamMemberArguments {
  first?: number | null;

  /**
   * the datetime cursor
   */
  after?: any | null;
}

/**
 * All the user details for a specific meeting
 */
export type MeetingMember = IRetrospectiveMeetingMember | IActionMeetingMember;

/**
 * All the user details for a specific meeting
 */
export interface IMeetingMember {
  __typename: 'MeetingMember';

  /**
   * A composite of userId::meetingId
   */
  id: string;

  /**
   * true if present, false if absent, else null
   */
  isCheckedIn: boolean | null;
  meetingId: string;
  meetingType: MeetingTypeEnum;
  teamId: string;
  teamMember: ITeamMember;
  user: IUser;
  userId: string;

  /**
   * The last time a meeting was updated (stage completed, finished, etc)
   */
  updatedAt: any;
}

/**
 * The type of meeting
 */
export const enum MeetingTypeEnum {
  action = 'action',
  retrospective = 'retrospective'
}

/**
 * OAuth token for a team member
 */
export interface ISlackAuth {
  __typename: 'SlackAuth';

  /**
   * shortid
   */
  id: string;

  /**
   * true if the auth is updated & ready to use for all features, else false
   */
  isActive: boolean;

  /**
   * The access token to slack, only visible to the owner. Used as a fallback to botAccessToken
   */
  accessToken: string | null;

  /**
   * the parabol bot user id
   */
  botUserId: string | null;

  /**
   * the parabol bot access token, used as primary communication
   */
  botAccessToken: string | null;

  /**
   * The timestamp the provider was created
   */
  createdAt: any;

  /**
   * The default channel to assign to new team notifications
   */
  defaultTeamChannelId: string;

  /**
   * The id of the team in slack
   */
  slackTeamId: string | null;

  /**
   * The name of the team in slack
   */
  slackTeamName: string | null;

  /**
   * The userId in slack
   */
  slackUserId: string;

  /**
   * The name of the user in slack
   */
  slackUserName: string;

  /**
   * *The team that the token is linked to
   */
  teamId: string;

  /**
   * The timestamp the token was updated at
   */
  updatedAt: any;

  /**
   * The user that the access token is attached to
   */
  userId: string;
}

/**
 * an event trigger and slack channel to receive it
 */
export interface ISlackNotification {
  __typename: 'SlackNotification';
  id: string;
  event: SlackNotificationEventEnum;
  eventType: SlackNotificationEventTypeEnum;

  /**
   * null if no notification is to be sent
   */
  channelId: string | null;
  teamId: string;
  userId: string;
}

/**
 * The event that triggers a slack notification
 */
export const enum SlackNotificationEventEnum {
  meetingStart = 'meetingStart',
  meetingEnd = 'meetingEnd',
  MEETING_STAGE_TIME_LIMIT_END = 'MEETING_STAGE_TIME_LIMIT_END',
  MEETING_STAGE_TIME_LIMIT_START = 'MEETING_STAGE_TIME_LIMIT_START'
}

/**
 * The type of event for a slack notification
 */
export const enum SlackNotificationEventTypeEnum {
  /**
   * notification that concerns the whole team
   */
  team = 'team',

  /**
   * notification that concerns a single member on the team
   */
  member = 'member'
}

/**
 * A team
 */
export interface ITeam {
  __typename: 'Team';

  /**
   * A shortid for the team
   */
  id: string;

  /**
   * The datetime the team was created
   */
  createdAt: any;

  /**
   * The userId that created the team. Non-null at v2.22.0+
   */
  createdBy: string | null;

  /**
   * true if the team was created when the account was created, else false
   */
  isOnboardTeam: boolean;

  /**
   * The type of the last meeting run
   */
  lastMeetingType: MeetingTypeEnum;

  /**
   * The hash and expiration for a token that allows anyone with it to join the team
   */
  massInvitation: IMassInvitation | null;

  /**
   * true if the underlying org has a validUntil date greater than now. if false, subs do not work
   */
  isPaid: boolean | null;

  /**
   * The name of the team
   */
  name: string;

  /**
   * The organization to which the team belongs
   */
  orgId: string;

  /**
   * Arbitrary tags that the team uses
   */
  tags: Array<string | null> | null;

  /**
   * The datetime the team was last updated
   */
  updatedAt: any | null;
  customPhaseItems: Array<CustomPhaseItem | null> | null;

  /**
   * The outstanding invitations to join the team
   */
  teamInvitations: Array<ITeamInvitation>;

  /**
   * true if the viewer is the team lead, else false
   */
  isLead: boolean;

  /**
   * The team-specific settings for running all available types of meetings
   */
  meetingSettings: TeamMeetingSettings;

  /**
   * a list of meetings that are currently in progress
   */
  activeMeetings: Array<NewMeeting>;

  /**
   * The new meeting in progress, if any
   */
  meeting: NewMeeting | null;

  /**
   * The level of access to features on the parabol site
   */
  tier: TierEnum;
  organization: IOrganization;

  /**
   * The agenda items for the upcoming or current meeting
   */
  agendaItems: Array<IAgendaItem>;

  /**
   * All of the tasks for this team
   */
  tasks: ITaskConnection;

  /**
   * All the team members actively associated with the team
   */
  teamMembers: Array<ITeamMember>;

  /**
   * true if the team has been archived
   */
  isArchived: boolean | null;
}

export interface IMassInvitationOnTeamArguments {
  /**
   * the meetingId to optionally direct them to
   */
  meetingId?: string | null;
}

export interface IMeetingSettingsOnTeamArguments {
  /**
   * the type of meeting for the settings
   */
  meetingType: MeetingTypeEnum;
}

export interface IMeetingOnTeamArguments {
  /**
   * The unique meetingId
   */
  meetingId: string;
}

export interface ITasksOnTeamArguments {
  first?: number | null;

  /**
   * the datetime cursor
   */
  after?: any | null;
}

export interface ITeamMembersOnTeamArguments {
  /**
   * the field to sort the teamMembers by
   */
  sortBy?: string | null;
}

/**
 * An invitation and expiration
 */
export interface IMassInvitation {
  __typename: 'MassInvitation';

  /**
   * the invitation token
   */
  id: string;

  /**
   * the expiration for the token
   */
  expiration: any;
  meetingId: string | null;
}

export type CustomPhaseItem = IRetroPhaseItem;

export interface ICustomPhaseItem {
  __typename: 'CustomPhaseItem';

  /**
   * shortid
   */
  id: string;
  createdAt: any;

  /**
   * The type of phase item
   */
  phaseItemType: CustomPhaseItemTypeEnum | null;

  /**
   * true if the phase item is currently used by the team, else false
   */
  isActive: boolean | null;

  /**
   * foreign key. use the team field
   */
  teamId: string;

  /**
   * The team that owns this customPhaseItem
   */
  team: ITeam | null;
  updatedAt: any;
}

/**
 * The type of phase item
 */
export const enum CustomPhaseItemTypeEnum {
  retroPhaseItem = 'retroPhaseItem'
}

/**
 * An invitation to become a team member
 */
export interface ITeamInvitation {
  __typename: 'TeamInvitation';

  /**
   * The unique invitation Id
   */
  id: string;

  /**
   * null if not accepted, else the datetime the invitation was accepted
   */
  acceptedAt: any | null;

  /**
   * null if not accepted, else the userId that accepted the invitation
   */
  acceptedBy: string | null;

  /**
   * The datetime the invitation was created
   */
  createdAt: any;

  /**
   * The email of the invitee
   */
  email: any;

  /**
   * The datetime the invitation expires. Changes when team is archived.
   */
  expiresAt: any;

  /**
   * The userId of the person that sent the invitation
   */
  invitedBy: string;

  /**
   * The userId of the person that sent the invitation
   */
  inviter: IUser;

  /**
   * the meetingId that the invite was generated for
   */
  meetingId: string | null;

  /**
   * The team invited to
   */
  teamId: string;

  /**
   * 48-byte hex encoded random string
   */
  token: string;
}

/**
 * The team settings for a specific type of meeting
 */
export type TeamMeetingSettings =
  | IRetrospectiveMeetingSettings
  | IActionMeetingSettings;

/**
 * The team settings for a specific type of meeting
 */
export interface ITeamMeetingSettings {
  __typename: 'TeamMeetingSettings';
  id: string;

  /**
   * The type of meeting these settings apply to
   */
  meetingType: MeetingTypeEnum | null;

  /**
   * The broad phase types that will be addressed during the meeting
   */
  phaseTypes: Array<NewMeetingPhaseTypeEnum>;

  /**
   * FK
   */
  teamId: string;

  /**
   * The team these settings belong to
   */
  team: ITeam | null;
}

/**
 * The phase of the meeting
 */
export const enum NewMeetingPhaseTypeEnum {
  lobby = 'lobby',
  checkin = 'checkin',
  updates = 'updates',
  firstcall = 'firstcall',
  agendaitems = 'agendaitems',
  lastcall = 'lastcall',
  reflect = 'reflect',
  group = 'group',
  vote = 'vote',
  discuss = 'discuss',
  SUMMARY = 'SUMMARY'
}

/**
 * A team meeting history for all previous meetings
 */
export type NewMeeting = IRetrospectiveMeeting | IActionMeeting;

/**
 * A team meeting history for all previous meetings
 */
export interface INewMeeting {
  __typename: 'NewMeeting';

  /**
   * The unique meeting id. shortid.
   */
  id: string;

  /**
   * The timestamp the meeting was created
   */
  createdAt: any;

  /**
   * The userId of the desired facilitator (different form facilitatorUserId if disconnected)
   */
  defaultFacilitatorUserId: string;

  /**
   * The timestamp the meeting officially ended
   */
  endedAt: any | null;

  /**
   * The location of the facilitator in the meeting
   */
  facilitatorStageId: string;

  /**
   * The userId (or anonymousId) of the most recent facilitator
   */
  facilitatorUserId: string;

  /**
   * The facilitator team member
   */
  facilitator: ITeamMember;

  /**
   * The team members that were active during the time of the meeting
   */
  meetingMembers: Array<MeetingMember>;

  /**
   * The auto-incrementing meeting number for the team
   */
  meetingNumber: number;
  meetingType: MeetingTypeEnum;

  /**
   * The name of the meeting
   */
  name: string;

  /**
   * The organization this meeting belongs to
   */
  organization: IOrganization;

  /**
   * The phases the meeting will go through, including all phase-specific state
   */
  phases: Array<NewMeetingPhase>;

  /**
   * true if should show the org the conversion modal, else false
   */
  showConversionModal: boolean;

  /**
   * The time the meeting summary was emailed to the team
   */
  summarySentAt: any | null;

  /**
   * foreign key for team
   */
  teamId: string;

  /**
   * The team that ran the meeting
   */
  team: ITeam;

  /**
   * The last time a meeting was updated (stage completed, finished, etc)
   */
  updatedAt: any | null;

  /**
   * The meeting member of the viewer
   */
  viewerMeetingMember: MeetingMember;
}

/**
 * An organization
 */
export interface IOrganization {
  __typename: 'Organization';

  /**
   * The unique organization ID
   */
  id: string;

  /**
   * The top level domain this organization is linked to, null if only generic emails used
   */
  activeDomain: string | null;

  /**
   * false if the activeDomain is null or was set automatically via a heuristic, true if set manually
   */
  isActiveDomainTouched: boolean;

  /**
   * The datetime the organization was created
   */
  createdAt: any;

  /**
   * The safe credit card details
   */
  creditCard: ICreditCard | null;

  /**
   * The assumed company this organizaiton belongs to
   */
  company: ICompany | null;

  /**
   * true if the viewer is the billing leader for the org
   */
  isBillingLeader: boolean;

  /**
   * The name of the organization
   */
  name: string;

  /**
   * The org avatar
   */
  picture: any | null;

  /**
   * all the teams the viewer is on in the organization
   */
  teams: Array<ITeam>;

  /**
   * The level of access to features on the parabol site
   */
  tier: TierEnum;

  /**
   * THe datetime the current billing cycle ends
   */
  periodEnd: any | null;

  /**
   * The datetime the current billing cycle starts
   */
  periodStart: any | null;

  /**
   * The total number of retroMeetings given to the team
   * @deprecated "Unlimited retros for all!"
   */
  retroMeetingsOffered: number;

  /**
   * Number of retro meetings that can be run (if not pro)
   * @deprecated "Unlimited retros for all!"
   */
  retroMeetingsRemaining: number;

  /**
   * true if should show the org the conversion modal, else false
   */
  showConversionModal: boolean;

  /**
   * The customerId from stripe
   */
  stripeId: string | null;

  /**
   * The subscriptionId from stripe
   */
  stripeSubscriptionId: string | null;

  /**
   * The last upcoming invoice email that was sent, null if never sent
   */
  upcomingInvoiceEmailSentAt: any | null;

  /**
   * The datetime the organization was last updated
   */
  updatedAt: any | null;
  organizationUsers: IOrganizationUserConnection;

  /**
   * The count of active & inactive users
   */
  orgUserCount: IOrgUserCount;

  /**
   * The leaders of the org
   */
  billingLeaders: Array<IUser>;
}

export interface IOrganizationUsersOnOrganizationArguments {
  after?: string | null;
  first?: number | null;
}

/**
 * A credit card
 */
export interface ICreditCard {
  __typename: 'CreditCard';

  /**
   * The brand of the credit card, as provided by stripe
   */
  brand: string;

  /**
   * The MM/YY string of the expiration date
   */
  expiry: string;

  /**
   * The last 4 digits of a credit card
   */
  last4: string;
}

/**
 * A grouping of organizations. Automatically grouped by top level domain of each
 */
export interface ICompany {
  __typename: 'Company';

  /**
   * the top level domain
   */
  id: string;

  /**
   * the number of active teams across all organizations
   */
  activeTeamCount: number;

  /**
   * the number of active users across all organizations
   */
  activeUserCount: number;

  /**
   * the last time any team in the organization started a meeting, null if no meetings were ever run
   */
  lastMetAt: any | null;

  /**
   * the total number of meetings started across all teams on all organizations
   */
  meetingCount: number;

  /**
   * the longest monthly streak for meeting at least once per month for any team in the company
   */
  monthlyTeamStreakMax: number;

  /**
   * Get the list of all organizations that belong to the company
   */
  organizations: Array<IOrganization>;

  /**
   * The highest tier for any organization within the company
   */
  tier: TierEnum;

  /**
   * the total number of users across all organizations
   */
  userCount: number;
}

/**
 * The pay tier of the team
 */
export const enum TierEnum {
  personal = 'personal',
  pro = 'pro',
  enterprise = 'enterprise'
}

/**
 * A connection to a list of items.
 */
export interface IOrganizationUserConnection {
  __typename: 'OrganizationUserConnection';

  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo;

  /**
   * A list of edges.
   */
  edges: Array<IOrganizationUserEdge>;
}

/**
 * An edge in a connection.
 */
export interface IOrganizationUserEdge {
  __typename: 'OrganizationUserEdge';

  /**
   * The item at the end of the edge
   */
  node: IOrganizationUser;

  /**
   * A cursor for use in pagination
   */
  cursor: string;
}

/**
 * organization-specific details about a user
 */
export interface IOrganizationUser {
  __typename: 'OrganizationUser';

  /**
   * orgId::userId
   */
  id: string;

  /**
   * true if the user is paused and the orgs are not being billed, else false
   */
  inactive: boolean;

  /**
   * the datetime the user first joined the org
   */
  joinedAt: any;

  /**
   * The last moment a billing leader can remove the user from the org & receive a refund. Set to the subscription periodEnd
   */
  newUserUntil: any;

  /**
   * FK
   */
  orgId: string;

  /**
   * The user attached to the organization
   */
  organization: IOrganization;

  /**
   * if not a member, the datetime the user was removed from the org
   */
  removedAt: any | null;

  /**
   * role of the user in the org
   */
  role: OrgUserRole | null;

  /**
   * FK
   */
  userId: string;

  /**
   * The user attached to the organization
   */
  user: IUser;

  /**
   * Their level of access to features on the parabol site
   */
  tier: TierEnum | null;
}

/**
 * The role of the org user
 */
export const enum OrgUserRole {
  BILLING_LEADER = 'BILLING_LEADER'
}

export interface IOrgUserCount {
  __typename: 'OrgUserCount';

  /**
   * The number of orgUsers who have an inactive flag
   */
  inactiveUserCount: number;

  /**
   * The number of orgUsers who do not have an inactive flag
   */
  activeUserCount: number;
}

export type NewMeetingPhase =
  | IReflectPhase
  | IAgendaItemsPhase
  | ICheckInPhase
  | IDiscussPhase
  | IGenericMeetingPhase
  | IUpdatesPhase;

export interface INewMeetingPhase {
  __typename: 'NewMeetingPhase';

  /**
   * shortid
   */
  id: string;
  meetingId: string;

  /**
   * The type of phase
   */
  phaseType: NewMeetingPhaseTypeEnum;
  stages: Array<NewMeetingStage>;
}

/**
 * An instance of a meeting phase item. On the client, this usually represents a single view
 */
export type NewMeetingStage =
  | IRetroDiscussStage
  | IGenericMeetingStage
  | IAgendaItemsStage
  | ICheckInStage
  | IUpdatesStage;

/**
 * An instance of a meeting phase item. On the client, this usually represents a single view
 */
export interface INewMeetingStage {
  __typename: 'NewMeetingStage';

  /**
   * stageId, shortid
   */
  id: string;

  /**
   * The datetime the stage was completed
   */
  endAt: any | null;

  /**
   * foreign key. try using meeting
   */
  meetingId: string;

  /**
   * The meeting this stage belongs to
   */
  meeting: NewMeeting | null;

  /**
   * true if the facilitator has completed this stage, else false. Should be boolean(endAt)
   */
  isComplete: boolean;

  /**
   * true if any meeting participant can navigate to this stage
   */
  isNavigable: boolean;

  /**
   * true if the facilitator can navigate to this stage
   */
  isNavigableByFacilitator: boolean;

  /**
   * The phase this stage belongs to
   */
  phase: NewMeetingPhase | null;

  /**
   * The type of the phase
   */
  phaseType: NewMeetingPhaseTypeEnum | null;

  /**
   * The datetime the stage was started
   */
  startAt: any | null;

  /**
   * Number of times the facilitator has visited this stage
   */
  viewCount: number | null;

  /**
   * true if a time limit is set, false if end time is set, null if neither is set
   */
  isAsync: boolean | null;

  /**
   * true if the viewer is ready to advance, else false
   */
  isViewerReady: boolean;

  /**
   * the number of meeting members ready to advance, excluding the facilitator
   */
  readyCount: number;

  /**
   * The datetime the phase is scheduled to be finished, null if no time limit or end time is set
   */
  scheduledEndTime: any | null;

  /**
   * The suggested ending datetime for a phase to be completed async, null if not enough data to make a suggestion
   */
  suggestedEndTime: any | null;

  /**
   * The suggested time limit for a phase to be completed together, null if not enough data to make a suggestion
   */
  suggestedTimeLimit: number | null;

  /**
   * The number of milliseconds left before the scheduled end time. Useful for
   * unsynced client clocks. null if scheduledEndTime is null
   */
  timeRemaining: number | null;
}

export interface ITaskEditorDetails {
  __typename: 'TaskEditorDetails';

  /**
   * The userId of the person editing the task
   */
  userId: string;

  /**
   * The name of the userId editing the task
   */
  preferredName: string;
}

export type TaskIntegration = ITaskIntegrationGitHub | ITaskIntegrationJira;

export interface ITaskIntegration {
  __typename: 'TaskIntegration';
  id: string;
  service: TaskServiceEnum;
}

/**
 * The status of the task
 */
export const enum TaskStatusEnum {
  active = 'active',
  stuck = 'stuck',
  done = 'done',
  future = 'future'
}

/**
 * OAuth token for a team member
 */
export interface IAtlassianAuth {
  __typename: 'AtlassianAuth';

  /**
   * shortid
   */
  id: string;

  /**
   * true if the auth is valid, else false
   */
  isActive: boolean;

  /**
   * The access token to atlassian, useful for 1 hour. null if no access token available
   */
  accessToken: string | null;

  /**
   * *The atlassian account ID
   */
  accountId: string;

  /**
   * The atlassian cloud IDs that the user has granted
   */
  cloudIds: Array<string>;

  /**
   * The timestamp the provider was created
   */
  createdAt: any;

  /**
   * The refresh token to atlassian to receive a new 1-hour accessToken, always null since server secret is required
   */
  refreshToken: string | null;

  /**
   * *The team that the token is linked to
   */
  teamId: string;

  /**
   * The timestamp the token was updated at
   */
  updatedAt: any;

  /**
   * The user that the access token is attached to
   */
  userId: string;
}

/**
 * The user account profile
 */
export interface IUserFeatureFlags {
  __typename: 'UserFeatureFlags';

  /**
   * true if the user has access to retro meeting video
   */
  video: boolean;

  /**
   * true if jira is allowed
   */
  jira: boolean;
}

/**
 * OAuth token for a team member
 */
export interface IGitHubAuth {
  __typename: 'GitHubAuth';

  /**
   * shortid
   */
  id: string;

  /**
   * true if an access token exists, else false
   */
  isActive: boolean;

  /**
   * The access token to github. good forever
   */
  accessToken: string | null;

  /**
   * *The GitHub login used for queries
   */
  login: string;

  /**
   * The timestamp the provider was created
   */
  createdAt: any;

  /**
   * *The team that the token is linked to
   */
  teamId: string;

  /**
   * The timestamp the token was updated at
   */
  updatedAt: any;

  /**
   * The user that the access token is attached to
   */
  userId: string;
}

/**
 * An authentication strategy to log in to Parabol
 */
export type AuthIdentity = IAuthIdentityGoogle | IAuthIdentityLocal;

/**
 * An authentication strategy to log in to Parabol
 */
export interface IAuthIdentity {
  __typename: 'AuthIdentity';

  /**
   * true if the email address using this strategy is verified, else false
   */
  isEmailVerified: boolean;
  type: AuthIdentityTypeEnum;
}

/**
 * The types of authentication strategies
 */
export const enum AuthIdentityTypeEnum {
  LOCAL = 'LOCAL',
  GOOGLE = 'GOOGLE'
}

/**
 * A monthly billing invoice for an organization
 */
export interface IInvoice {
  __typename: 'Invoice';

  /**
   * A shortid for the invoice
   */
  id: string;

  /**
   * The tier this invoice pays for
   */
  tier: TierEnum;

  /**
   * The amount the card will be charged (total + startingBalance with a min value of 0)
   */
  amountDue: number;

  /**
   * The datetime the invoice was first generated
   */
  createdAt: any;

  /**
   * The discount coupon information from Stripe, if any discount applied
   */
  coupon: ICoupon | null;

  /**
   * The total amount for the invoice (in USD)
   */
  total: number;

  /**
   * The emails the invoice was sent to
   */
  billingLeaderEmails: Array<any>;

  /**
   * the card used to pay the invoice
   */
  creditCard: ICreditCard | null;

  /**
   * The timestamp for the end of the billing cycle
   */
  endAt: any;

  /**
   * The date the invoice was created
   */
  invoiceDate: any;

  /**
   * An invoice line item for previous month adjustments
   */
  lines: Array<IInvoiceLineItem>;

  /**
   * The details that comprise the charges for next month
   */
  nextPeriodCharges: INextPeriodCharges;

  /**
   * *The organization id to charge
   */
  orgId: string;

  /**
   * The persisted name of the org as it was when invoiced
   */
  orgName: string;

  /**
   * the datetime the invoice was successfully paid
   */
  paidAt: any | null;

  /**
   * The URL to pay via stripe if payment was not collected in app
   */
  payUrl: string | null;

  /**
   * The picture of the organization
   */
  picture: any | null;

  /**
   * The timestamp for the beginning of the billing cycle
   */
  startAt: any;

  /**
   * The balance on the customer account (in cents)
   */
  startingBalance: number;

  /**
   * the status of the invoice. starts as pending, moves to paid or unpaid depending on if the payment succeeded
   */
  status: InvoiceStatusEnum;
}

/**
 * The discount coupon from Stripe, if any
 */
export interface ICoupon {
  __typename: 'Coupon';

  /**
   * The ID of the discount coupon from Stripe
   */
  id: string;

  /**
   * The amount off the invoice, if any
   */
  amountOff: number | null;

  /**
   * The name of the discount coupon from Stripe
   */
  name: string;

  /**
   * The percent off the invoice, if any
   */
  percentOff: number | null;
}

/**
 * A single line item charge on the invoice
 */
export interface IInvoiceLineItem {
  __typename: 'InvoiceLineItem';

  /**
   * The unique line item id
   */
  id: string;

  /**
   * The amount for the line item (in USD)
   */
  amount: number;

  /**
   * A description of the charge. Only present if we have no idea what the charge is
   */
  description: string | null;

  /**
   * Array of user activity line items that roll up to total activity (add/leave/pause/unpause)
   */
  details: Array<IInvoiceLineItemDetails>;

  /**
   * The total number of days that all org users have been inactive during the billing cycle
   */
  quantity: number | null;

  /**
   * The line item type for a monthly billing invoice
   */
  type: InvoiceLineItemEnum;
}

/**
 * The per-user-action line item details,
 */
export interface IInvoiceLineItemDetails {
  __typename: 'InvoiceLineItemDetails';

  /**
   * The unique detailed line item id
   */
  id: string;

  /**
   * The amount for the line item (in USD)
   */
  amount: number;

  /**
   * The email affected by this line item change
   */
  email: any;

  /**
   * End of the event. Only present if a pause action gets matched up with an unpause action
   */
  endAt: any | null;

  /**
   * The parent line item id
   */
  parentId: string;

  /**
   * The timestamp for the beginning of the period of no charge
   */
  startAt: any | null;
}

/**
 * A big picture line item
 */
export const enum InvoiceLineItemEnum {
  ADDED_USERS = 'ADDED_USERS',
  INACTIVITY_ADJUSTMENTS = 'INACTIVITY_ADJUSTMENTS',
  OTHER_ADJUSTMENTS = 'OTHER_ADJUSTMENTS',
  REMOVED_USERS = 'REMOVED_USERS'
}

/**
 * A single line item for the charges for next month
 */
export interface INextPeriodCharges {
  __typename: 'NextPeriodCharges';

  /**
   * The amount for the line item (in USD)
   */
  amount: number;

  /**
   * The datetime the next period will end
   */
  nextPeriodEnd: any;

  /**
   * The total number of days that all org users have been inactive during the billing cycle
   */
  quantity: number;

  /**
   * The per-seat monthly price of the subscription (in dollars), null if invoice is not per-seat
   */
  unitPrice: number | null;

  /**
   * "year" if enterprise, else "month" for pro
   */
  interval: string | null;
}

/**
 * The payment status of the invoice
 */
export const enum InvoiceStatusEnum {
  PENDING = 'PENDING',
  PAID = 'PAID',
  FAILED = 'FAILED',
  UPCOMING = 'UPCOMING'
}

/**
 * A connection to a list of items.
 */
export interface IInvoiceConnection {
  __typename: 'InvoiceConnection';

  /**
   * Page info with cursors coerced to ISO8601 dates
   */
  pageInfo: IPageInfoDateCursor | null;

  /**
   * A list of edges.
   */
  edges: Array<IInvoiceEdge>;
}

/**
 * An edge in a connection.
 */
export interface IInvoiceEdge {
  __typename: 'InvoiceEdge';

  /**
   * The item at the end of the edge
   */
  node: IInvoice;
  cursor: any | null;
}

/**
 * A past event that is important to the viewer
 */
export type SuggestedAction =
  | ISuggestedActionCreateNewTeam
  | ISuggestedActionInviteYourTeam
  | ISuggestedActionTryActionMeeting
  | ISuggestedActionTryRetroMeeting
  | ISuggestedActionTryTheDemo;

/**
 * A past event that is important to the viewer
 */
export interface ISuggestedAction {
  __typename: 'SuggestedAction';

  /**
   * shortid
   */
  id: string;

  /**
   * * The timestamp the action was created at
   */
  createdAt: any;

  /**
   * The priority of the suggested action compared to other suggested actions (smaller number is higher priority)
   */
  priority: number | null;

  /**
   * * The timestamp the action was removed at
   */
  removedAt: any;

  /**
   * The specific type of suggested action
   */
  type: SuggestedActionTypeEnum;

  /**
   * * The userId this action is for
   */
  userId: string;

  /**
   * The user than can see this event
   */
  user: IUser;
}

/**
 * The specific type of the suggested action
 */
export const enum SuggestedActionTypeEnum {
  inviteYourTeam = 'inviteYourTeam',
  tryTheDemo = 'tryTheDemo',
  tryRetroMeeting = 'tryRetroMeeting',
  createNewTeam = 'createNewTeam',
  tryActionMeeting = 'tryActionMeeting'
}

/**
 * A connection to a list of items.
 */
export interface ITimelineEventConnection {
  __typename: 'TimelineEventConnection';

  /**
   * Page info with cursors coerced to ISO8601 dates
   */
  pageInfo: IPageInfoDateCursor | null;

  /**
   * A list of edges.
   */
  edges: Array<ITimelineEventEdge>;
}

/**
 * An edge in a connection.
 */
export interface ITimelineEventEdge {
  __typename: 'TimelineEventEdge';

  /**
   * The item at the end of the edge
   */
  node: TimelineEvent;
  cursor: any | null;
}

/**
 * A past event that is important to the viewer
 */
export type TimelineEvent =
  | ITimelineEventCompletedActionMeeting
  | ITimelineEventCompletedRetroMeeting
  | ITimelineEventJoinedParabol
  | ITimelineEventTeamCreated;

/**
 * A past event that is important to the viewer
 */
export interface ITimelineEvent {
  __typename: 'TimelineEvent';

  /**
   * shortid
   */
  id: string;

  /**
   * * The timestamp the event was created at
   */
  createdAt: any;

  /**
   * the number of times the user has interacted with (ie clicked) this event
   */
  interactionCount: number;

  /**
   * The orgId this event is associated with. Null if not traceable to one org
   */
  orgId: string | null;

  /**
   * The organization this event is associated with
   */
  organization: IOrganization | null;

  /**
   * the number of times the user has seen this event
   */
  seenCount: number;

  /**
   * The teamId this event is associated with. Null if not traceable to one team
   */
  teamId: string | null;

  /**
   * The team that can see this event
   */
  team: ITeam | null;

  /**
   * The specific type of event
   */
  type: TimelineEventEnum;

  /**
   * * The userId that can see this event
   */
  userId: string;

  /**
   * The user than can see this event
   */
  user: IUser;

  /**
   * true if the timeline event is active, false if arvhiced
   */
  isActive: boolean;
}

/**
 * The specific type of event
 */
export const enum TimelineEventEnum {
  retroComplete = 'retroComplete',
  actionComplete = 'actionComplete',
  joinedParabol = 'joinedParabol',
  createdTeam = 'createdTeam'
}

/**
 * The latest features released by Parabol
 */
export interface INewFeatureBroadcast {
  __typename: 'NewFeatureBroadcast';
  id: string;

  /**
   * The description of the new features
   */
  copy: string;

  /**
   * The permalink to the blog post describing the new features
   */
  url: string;
}

/**
 * A connection to a list of items.
 */
export interface INotificationConnection {
  __typename: 'NotificationConnection';

  /**
   * Page info with cursors coerced to ISO8601 dates
   */
  pageInfo: IPageInfoDateCursor | null;

  /**
   * A list of edges.
   */
  edges: Array<INotificationEdge>;
}

/**
 * An edge in a connection.
 */
export interface INotificationEdge {
  __typename: 'NotificationEdge';

  /**
   * The item at the end of the edge
   */
  node: Notification;
  cursor: any | null;
}

export type Notification =
  | INotificationTeamInvitation
  | INotifyTeamArchived
  | INotifyTaskInvolves
  | INotifyKickedOut
  | INotificationMeetingStageTimeLimitEnd
  | INotifyPaymentRejected
  | INotifyPromoteToOrgLeader;

export interface INotification {
  __typename: 'Notification';

  /**
   * A shortid for the notification
   */
  id: string;

  /**
   * UNREAD if new, READ if viewer has seen it, CLICKED if viewed clicked it
   */
  status: NotificationStatusEnum;

  /**
   * The datetime to activate the notification & send it to the client
   */
  createdAt: any;
  type: NotificationEnum;

  /**
   * *The userId that should see this notification
   */
  userId: string;
}

/**
 * The status of the notification interaction
 */
export const enum NotificationStatusEnum {
  UNREAD = 'UNREAD',
  READ = 'READ',
  CLICKED = 'CLICKED'
}

/**
 * The kind of notification
 */
export const enum NotificationEnum {
  KICKED_OUT = 'KICKED_OUT',
  PAYMENT_REJECTED = 'PAYMENT_REJECTED',
  PROMOTE_TO_BILLING_LEADER = 'PROMOTE_TO_BILLING_LEADER',
  TEAM_INVITATION = 'TEAM_INVITATION',
  TEAM_ARCHIVED = 'TEAM_ARCHIVED',
  TASK_INVOLVES = 'TASK_INVOLVES',
  MEETING_STAGE_TIME_LIMIT_END = 'MEETING_STAGE_TIME_LIMIT_END'
}

/**
 * The details associated with a task integrated with GitHub
 */
export interface ISuggestedIntegrationQueryPayload {
  __typename: 'SuggestedIntegrationQueryPayload';
  error: IStandardMutationError | null;

  /**
   * true if the items returned are a subset of all the possible integration, else false (all possible integrations)
   */
  hasMore: boolean | null;

  /**
   * All the integrations that are likely to be integrated
   */
  items: Array<SuggestedIntegration> | null;
}

export interface IStandardMutationError {
  __typename: 'StandardMutationError';

  /**
   * The title of the error
   */
  title: string | null;

  /**
   * The full error
   */
  message: string;
}

/**
 * The response to a teamInvitation query
 */
export interface ITeamInvitationPayload {
  __typename: 'TeamInvitationPayload';

  /**
   * The team invitation, if any
   */
  teamInvitation: ITeamInvitation | null;

  /**
   * the teamId of the team trying to join
   */
  teamId: string | null;

  /**
   * one of the active meetings trying to join
   */
  meetingId: string | null;
}

export interface IGetDemoEntitiesPayload {
  __typename: 'GetDemoEntitiesPayload';
  error: IStandardMutationError | null;
  entities: Array<IGoogleAnalyzedEntity> | null;
}

export interface IGoogleAnalyzedEntity {
  __typename: 'GoogleAnalyzedEntity';

  /**
   * The lemma (dictionary entry) of the entity name. Fancy way of saying the singular form of the name, if plural.
   */
  lemma: string;

  /**
   * The name of the entity. Usually 1 or 2 words. Always a noun, sometimes a proper noun.
   */
  name: string;

  /**
   * The salience of the entity in the provided text. The salience of all entities always sums to 1
   */
  salience: number;
}

export interface IMassInvitationPayload {
  __typename: 'MassInvitationPayload';
  errorType: TeamInvitationErrorEnum | null;

  /**
   * The name of the person that sent the invitation, present if errorType is expired
   */
  inviterName: string | null;

  /**
   * The teamId from the token
   */
  teamId: string | null;

  /**
   * name of the inviting team, present if invitation exists
   */
  teamName: string | null;
}

/**
 * The reason the invitation failed
 */
export const enum TeamInvitationErrorEnum {
  accepted = 'accepted',
  expired = 'expired',
  notFound = 'notFound'
}

export interface IVerifiedInvitationPayload {
  __typename: 'VerifiedInvitationPayload';
  errorType: TeamInvitationErrorEnum | null;

  /**
   * The name of the person that sent the invitation, present if errorType is expired
   */
  inviterName: string | null;

  /**
   * The email of the person that send the invitation, present if errorType is expired
   */
  inviterEmail: string | null;

  /**
   * true if the mx record is hosted by google, else falsy
   */
  isGoogle: boolean | null;

  /**
   * a string to redirect to the sso IdP, else null
   */
  ssoURL: string | null;

  /**
   * The valid invitation, if any
   */
  teamInvitation: ITeamInvitation | null;

  /**
   * name of the inviting team, present if invitation exists
   */
  teamName: string | null;
  meetingId: string | null;
  meetingName: string | null;
  meetingType: MeetingTypeEnum | null;

  /**
   * The userId of the invitee, if already a parabol user
   */
  userId: string | null;

  /**
   * The invitee, if already a parabol user, present if errorType is null
   */
  user: IUser | null;
}

export interface IMutation {
  __typename: 'Mutation';

  /**
   * Redeem an invitation token for a logged in user
   */
  acceptTeamInvitation: IAcceptTeamInvitationPayload;

  /**
   * Create a new agenda item
   */
  addAgendaItem: IAddAgendaItemPayload | null;
  addAtlassianAuth: IAddAtlassianAuthPayload;

  /**
   * Add a comment to a discussion
   */
  addComment: AddCommentPayload;

  /**
   * Add or remove a reactji to a reflection
   */
  addReactjiToReflection: AddReactjiToReflectionPayload;

  /**
   * Add or remove a reactji from a reactable
   */
  addReactjiToReactable: AddReactjiToReactablePayload;

  /**
   * Add a new template full of prompts
   */
  addReflectTemplate: IAddReflectTemplatePayload | null;

  /**
   * Add a new template full of prompts
   */
  addReflectTemplatePrompt: IAddReflectTemplatePromptPayload | null;
  addSlackAuth: IAddSlackAuthPayload;

  /**
   * Give someone advanced features in a flag
   */
  addFeatureFlag: IAddFeatureFlagPayload | null;
  addGitHubAuth: IAddGitHubAuthPayload;

  /**
   * Create a new team and add the first team member
   */
  addOrg: IAddOrgPayload;

  /**
   * Create a new team and add the first team member
   */
  addTeam: IAddTeamPayload;
  archiveOrganization: IArchiveOrganizationPayload;
  archiveTeam: IArchiveTeamPayload;

  /**
   * Archive a timeline event
   */
  archiveTimelineEvent: ArchiveTimelineEventPayload;

  /**
   * Automatically group reflections
   */
  autoGroupReflections: IAutoGroupReflectionsPayload | null;

  /**
   * Change the team a task is associated with
   */
  changeTaskTeam: IChangeTaskTeamPayload | null;

  /**
   * set the interaction status of a notifcation
   */
  setNotificationStatus: ISetNotificationStatusPayload | null;

  /**
   * for troubleshooting by admins, create a JWT for a given userId
   */
  createImposterToken: ICreateImposterTokenPayload;
  createGitHubIssue: ICreateGitHubIssuePayload | null;
  createJiraIssue: ICreateJiraIssuePayload | null;

  /**
   * Create a new mass inivtation and optionally void old ones
   */
  createMassInvitation: CreateMassInvitationPayload;

  /**
   * Create a PUT URL on the CDN for an organization’s profile picture
   */
  createOrgPicturePutUrl: ICreatePicturePutUrlPayload | null;

  /**
   * Create a new reflection
   */
  createReflection: ICreateReflectionPayload | null;

  /**
   * Create a new task, triggering a CreateCard for other viewers
   */
  createTask: ICreateTaskPayload;

  /**
   * Create a PUT URL on the CDN for the currently authenticated user’s profile picture
   */
  createUserPicturePutUrl: ICreateUserPicturePutUrlPayload | null;

  /**
   * Delete a comment from a discussion
   */
  deleteComment: DeleteCommentPayload;

  /**
   * Delete (not archive!) a task
   */
  deleteTask: IDeleteTaskPayload | null;

  /**
   * Delete a user, removing them from all teams and orgs
   */
  deleteUser: IDeleteUserPayload;

  /**
   * Deny a user from joining via push invitation
   */
  denyPushInvitation: IDenyPushInvitationPayload | null;

  /**
   * Redeem an invitation token for a logged in user
   */
  dismissNewFeature: IDismissNewFeaturePayload;

  /**
   * Dismiss a suggested action
   */
  dismissSuggestedAction: IDismissSuggestedActionPayload;

  /**
   * Downgrade a paid account to the personal service
   */
  downgradeToPersonal: IDowngradeToPersonalPayload | null;

  /**
   * Changes the priority of the discussion topics
   */
  dragDiscussionTopic: IDragDiscussionTopicPayload | null;

  /**
   * Send an email to reset a password
   */
  emailPasswordReset: boolean;

  /**
   * Broadcast that the viewer stopped dragging a reflection
   */
  endDraggingReflection: IEndDraggingReflectionPayload | null;

  /**
   * Changes the editing state of a user for a phase item
   */
  editReflection: IEditReflectionPayload | null;

  /**
   * Announce to everyone that you are editing a task
   */
  editTask: IEditTaskPayload | null;

  /**
   * Finish a new meeting
   */
  endNewMeeting: IEndNewMeetingPayload;

  /**
   * flag a viewer as ready to advance to the next stage of a meeting
   */
  flagReadyToAdvance: FlagReadyToAdvancePayload;

  /**
   * pauses the subscription for a single user
   */
  inactivateUser: IInactivateUserPayload | null;

  /**
   * Invalidate all sessions by blacklisting all JWTs issued before now
   */
  invalidateSessions: IInvalidateSessionsPayload;

  /**
   * Send a team invitation to an email address
   */
  inviteToTeam: IInviteToTeamPayload;

  /**
   * Sign up or login using Google
   */
  loginWithGoogle: ILoginWithGooglePayload;

  /**
   * Login using an email address and password
   */
  loginWithPassword: ILoginWithPasswordPayload;

  /**
   * Move a reflect template
   */
  moveReflectTemplatePrompt: IMoveReflectTemplatePromptPayload | null;

  /**
   * Move a team to a different org. Requires billing leader rights on both orgs!
   */
  moveTeamToOrg: string | null;

  /**
   * update a meeting by marking an item complete and setting the facilitator location
   */
  navigateMeeting: INavigateMeetingPayload;

  /**
   * Check a member in as present or absent
   */
  newMeetingCheckIn: INewMeetingCheckInPayload | null;

  /**
   * Increment the count of times the org has clicked pay later
   */
  payLater: IPayLaterPayload;

  /**
   * Request to be invited to a team in real time
   */
  pushInvitation: IPushInvitationPayload | null;

  /**
   * Change a facilitator while the meeting is in progress
   */
  promoteNewMeetingFacilitator: IPromoteNewMeetingFacilitatorPayload | null;

  /**
   * Promote another team member to be the leader
   */
  promoteToTeamLead: IPromoteToTeamLeadPayload | null;

  /**
   * Update the description of a reflection prompt
   */
  reflectTemplatePromptUpdateDescription: IReflectTemplatePromptUpdateDescriptionPayload | null;
  reflectTemplatePromptUpdateGroupColor: IReflectTemplatePromptUpdateGroupColorPayload | null;

  /**
   * Remove an agenda item
   */
  removeAgendaItem: IRemoveAgendaItemPayload | null;

  /**
   * Disconnect a team member from atlassian
   */
  removeAtlassianAuth: IRemoveAtlassianAuthPayload;

  /**
   * Disconnect a team member from GitHub
   */
  removeGitHubAuth: IRemoveGitHubAuthPayload;

  /**
   * Remove a user from an org
   */
  removeOrgUser: IRemoveOrgUserPayload | null;

  /**
   * Remove a template full of prompts
   */
  removeReflectTemplate: IRemoveReflectTemplatePayload | null;

  /**
   * Remove a prompt from a template
   */
  removeReflectTemplatePrompt: IRemoveReflectTemplatePromptPayload | null;

  /**
   * Rename a meeting
   */
  renameMeeting: RenameMeetingPayload;

  /**
   * Rename a reflect template prompt
   */
  renameReflectTemplate: IRenameReflectTemplatePayload | null;

  /**
   * Rename a reflect template
   */
  renameReflectTemplatePrompt: IRenameReflectTemplatePromptPayload | null;

  /**
   * Remove a reflection
   */
  removeReflection: IRemoveReflectionPayload | null;

  /**
   * Disconnect a team member from Slack
   */
  removeSlackAuth: IRemoveSlackAuthPayload;

  /**
   * Remove a team member from the team
   */
  removeTeamMember: IRemoveTeamMemberPayload | null;

  /**
   * Reset the password for an account
   */
  resetPassword: IResetPasswordPayload;

  /**
   * track an event in segment, like when errors are hit
   */
  segmentEventTrack: boolean | null;

  /**
   * Set the selected template for the upcoming retro meeting
   */
  selectRetroTemplate: ISelectRetroTemplatePayload | null;

  /**
   * Share where in the app the viewer is
   */
  setAppLocation: SetAppLocationPayload;

  /**
   * Enabled or disable the icebreaker round
   */
  setCheckInEnabled: ISetCheckInEnabledPayload;

  /**
   * Set the role of a user
   */
  setOrgUserRole: SetOrgUserRolePayload | null;

  /**
   * Focus (or unfocus) a phase item
   */
  setPhaseFocus: ISetPhaseFocusPayload | null;

  /**
   * Set or clear a timer for a meeting stage
   */
  setStageTimer: ISetStageTimerPayload;
  setSlackNotification: ISetSlackNotificationPayload;

  /**
   * Sign up using an email address and password
   */
  signUpWithPassword: ISignUpWithPasswordPayload;

  /**
   * Broadcast that the viewer started dragging a reflection
   */
  startDraggingReflection: IStartDraggingReflectionPayload | null;

  /**
   * Start a new meeting
   */
  startNewMeeting: IStartNewMeetingPayload;

  /**
   * Show/hide the agenda list
   */
  toggleAgendaList: ITeamMember | null;

  /**
   * Update an agenda item
   */
  updateAgendaItem: IUpdateAgendaItemPayload | null;

  /**
   * Update the content of a comment
   */
  updateCommentContent: UpdateCommentContentPayload | null;

  /**
   * Update an existing credit card on file
   */
  updateCreditCard: IUpdateCreditCardPayload | null;

  /**
   * Update an with a change in name, avatar
   */
  updateOrg: IUpdateOrgPayload;

  /**
   * Update a Team's Icebreaker in a new meeting
   */
  updateNewCheckInQuestion: IUpdateNewCheckInQuestionPayload | null;

  /**
   * all the info required to provide an accurate display-specific location of where an item is
   */
  updateDragLocation: boolean | null;

  /**
   * Update the content of a reflection
   */
  updateReflectionContent: IUpdateReflectionContentPayload | null;

  /**
   * Update the title of a reflection group
   */
  updateReflectionGroupTitle: IUpdateReflectionGroupTitlePayload | null;

  /**
   * Change the max votes for participants
   */
  updateRetroMaxVotes: UpdateRetroMaxVotesPayload;

  /**
   * Update a task with a change in content, ownership, or status
   */
  updateTask: IUpdateTaskPayload | null;

  /**
   * Set or unset the due date of a task
   */
  updateTaskDueDate: IUpdateTaskDueDatePayload | null;
  updateTeamName: IUpdateTeamNamePayload | null;

  /**
   * Change the scope of a template
   */
  updateTemplateScope: UpdateTemplateScopePayload;
  updateUserProfile: IUpdateUserProfilePayload | null;

  /**
   * Verify an email address and sign in if not already a user
   */
  verifyEmail: IVerifyEmailPayload;

  /**
   * Cast your vote for a reflection group
   */
  voteForReflectionGroup: IVoteForReflectionGroupPayload | null;

  /**
   * Upgrade an account to the paid service
   */
  upgradeToPro: IUpgradeToProPayload | null;
}

export interface IAcceptTeamInvitationOnMutationArguments {
  /**
   * The 48-byte hex encoded invitation token or the 2-part JWT for mass invitation tokens
   */
  invitationToken?: string | null;

  /**
   * the notification clicked to accept, if any
   */
  notificationId?: string | null;
}

export interface IAddAgendaItemOnMutationArguments {
  /**
   * The new task including an id, teamMemberId, and content
   */
  newAgendaItem: ICreateAgendaItemInput;
}

export interface IAddAtlassianAuthOnMutationArguments {
  code: string;
  teamId: string;
}

export interface IAddCommentOnMutationArguments {
  /**
   * A partial new comment
   */
  comment: IAddCommentInput;
}

export interface IAddReactjiToReflectionOnMutationArguments {
  /**
   * The reflection getting the reaction
   */
  reflectionId: string;

  /**
   * the id of the reactji to add
   */
  reactji: string;

  /**
   * If true, remove the reaction, else add it
   */
  isRemove?: boolean | null;
}

export interface IAddReactjiToReactableOnMutationArguments {
  /**
   * The id of the reactable
   */
  reactableId: string;

  /**
   * the type of the
   */
  reactableType: ReactableEnum;

  /**
   * the id of the reactji to add
   */
  reactji: string;

  /**
   * If true, remove the reaction, else add it
   */
  isRemove?: boolean | null;
}

export interface IAddReflectTemplateOnMutationArguments {
  teamId: string;
}

export interface IAddReflectTemplatePromptOnMutationArguments {
  templateId: string;
}

export interface IAddSlackAuthOnMutationArguments {
  code: string;
  teamId: string;
}

export interface IAddFeatureFlagOnMutationArguments {
  /**
   * the complete or partial email of the person to whom you are giving advanced features.
   *       Matches via a regex to support entire domains
   */
  email: string;

  /**
   * the flag that you want to give to the user
   */
  flag: UserFlagEnum;
}

export interface IAddGitHubAuthOnMutationArguments {
  code: string;
  teamId: string;
}

export interface IAddOrgOnMutationArguments {
  /**
   * The new team object with exactly 1 team member
   */
  newTeam: INewTeamInput;

  /**
   * The name of the new team
   */
  orgName?: string | null;
}

export interface IAddTeamOnMutationArguments {
  /**
   * The new team object
   */
  newTeam: INewTeamInput;
}

export interface IArchiveOrganizationOnMutationArguments {
  /**
   * The orgId to archive
   */
  orgId: string;
}

export interface IArchiveTeamOnMutationArguments {
  /**
   * The teamId to archive (or delete, if team is unused)
   */
  teamId: string;
}

export interface IArchiveTimelineEventOnMutationArguments {
  /**
   * the id for the timeline event
   */
  timelineEventId: string;
}

export interface IAutoGroupReflectionsOnMutationArguments {
  meetingId: string;

  /**
   * A number from 0 to 1 to determine how tightly to pack the groups. Higher means fewer groups
   */
  groupingThreshold: number;
}

export interface IChangeTaskTeamOnMutationArguments {
  /**
   * The task to change
   */
  taskId: string;

  /**
   * The new team to assign the task to
   */
  teamId: string;
}

export interface ISetNotificationStatusOnMutationArguments {
  /**
   * The id of the notification
   */
  notificationId: string;
  status: NotificationStatusEnum;
}

export interface ICreateImposterTokenOnMutationArguments {
  /**
   * The target userId to impersonate
   */
  userId: string;
}

export interface ICreateGitHubIssueOnMutationArguments {
  /**
   * The id of the task to convert to a GH issue
   */
  taskId: string;

  /**
   * The owner/repo string
   */
  nameWithOwner: string;
}

export interface ICreateJiraIssueOnMutationArguments {
  /**
   * The atlassian cloudId for the site
   */
  cloudId: string;

  /**
   * The atlassian key of the project to put the issue in
   */
  projectKey: string;

  /**
   * The id of the task to convert to a Jira issue
   */
  taskId: string;
}

export interface ICreateMassInvitationOnMutationArguments {
  /**
   * the specific meeting where the invite occurred, if any
   */
  meetingId?: string | null;

  /**
   * The teamId to create the mass invitation for
   */
  teamId: string;

  /**
   * If true, will void all existing mass invitations for the team member
   */
  voidOld?: boolean | null;
}

export interface ICreateOrgPicturePutUrlOnMutationArguments {
  /**
   * user-supplied MIME content type
   */
  contentType: string;

  /**
   * user-supplied file size
   */
  contentLength: number;

  /**
   * The organization id to update
   */
  orgId: string;
}

export interface ICreateReflectionOnMutationArguments {
  input: ICreateReflectionInput;
}

export interface ICreateTaskOnMutationArguments {
  /**
   * The new task including an id, status, and type, and teamMemberId
   */
  newTask: ICreateTaskInput;

  /**
   * The part of the site where the creation occurred
   */
  area?: AreaEnum | null;
}

export interface ICreateUserPicturePutUrlOnMutationArguments {
  /**
   * user supplied image metadata
   */
  image: IImageMetadataInput;

  /**
   * a png version of the above image
   */
  pngVersion?: IImageMetadataInput | null;
}

export interface IDeleteCommentOnMutationArguments {
  commentId: string;
}

export interface IDeleteTaskOnMutationArguments {
  /**
   * The taskId to delete
   */
  taskId: string;
}

export interface IDeleteUserOnMutationArguments {
  /**
   * a userId
   */
  userId?: string | null;

  /**
   * the user email
   */
  email?: string | null;

  /**
   * the reason why the user wants to delete their account
   */
  reason?: string | null;
}

export interface IDenyPushInvitationOnMutationArguments {
  teamId: string;
  userId: string;
}

export interface IDismissSuggestedActionOnMutationArguments {
  /**
   * The id of the suggested action to dismiss
   */
  suggestedActionId: string;
}

export interface IDowngradeToPersonalOnMutationArguments {
  /**
   * the org requesting the upgrade
   */
  orgId: string;
}

export interface IDragDiscussionTopicOnMutationArguments {
  meetingId: string;
  stageId: string;
  sortOrder: number;
}

export interface IEmailPasswordResetOnMutationArguments {
  /**
   * email to send the password reset code to
   */
  email: string;
}

export interface IEndDraggingReflectionOnMutationArguments {
  reflectionId: string;

  /**
   * if it was a drop (isDragging = false), the type of item it was dropped on. null if there was no valid drop target
   */
  dropTargetType?: DragReflectionDropTargetTypeEnum | null;

  /**
   * if dropTargetType could refer to more than 1 component, this ID defines which one
   */
  dropTargetId?: string | null;

  /**
   * the ID of the drag to connect to the start drag event
   */
  dragId?: string | null;
}

export interface IEditReflectionOnMutationArguments {
  /**
   * Whether a phaseItem is being edited or not
   */
  isEditing: boolean;
  meetingId: string;
  phaseItemId: string;
}

export interface IEditTaskOnMutationArguments {
  /**
   * The task id that is being edited
   */
  taskId: string;

  /**
   * true if the editing is starting, false if it is stopping
   */
  isEditing: boolean;
}

export interface IEndNewMeetingOnMutationArguments {
  /**
   * The meeting to end
   */
  meetingId: string;
}

export interface IFlagReadyToAdvanceOnMutationArguments {
  meetingId: string;

  /**
   * the stage that the viewer marked as ready
   */
  stageId: string;

  /**
   * true if ready to advance, else false
   */
  isReady: boolean;
}

export interface IInactivateUserOnMutationArguments {
  /**
   * the user to pause
   */
  userId: string;
}

export interface IInviteToTeamOnMutationArguments {
  /**
   * the specific meeting where the invite occurred, if any
   */
  meetingId?: string | null;

  /**
   * The id of the inviting team
   */
  teamId: string;
  invitees: Array<any>;
}

export interface ILoginWithGoogleOnMutationArguments {
  /**
   * The code provided from the OAuth2 flow
   */
  code: string;

  /**
   * optional segment id created before they were a user
   */
  segmentId?: string | null;

  /**
   * if present, the user is also joining a team
   */
  invitationToken?: string | null;
}

export interface ILoginWithPasswordOnMutationArguments {
  email: string;
  password: string;
}

export interface IMoveReflectTemplatePromptOnMutationArguments {
  promptId: string;
  sortOrder: number;
}

export interface IMoveTeamToOrgOnMutationArguments {
  /**
   * The teamId that you want to move
   */
  teamIds: Array<string>;

  /**
   * The ID of the organization you want to move the team to
   */
  orgId: string;
}

export interface INavigateMeetingOnMutationArguments {
  /**
   * The stage that the facilitator would like to mark as complete
   */
  completedStageId?: string | null;

  /**
   * The stage where the facilitator is
   */
  facilitatorStageId?: string | null;

  /**
   * The meeting ID
   */
  meetingId: string;
}

export interface INewMeetingCheckInOnMutationArguments {
  /**
   * The id of the user being marked present or absent
   */
  userId: string;

  /**
   * the meeting currently in progress
   */
  meetingId: string;

  /**
   * true if the member is present, false if absent, null if undecided
   */
  isCheckedIn?: boolean | null;
}

export interface IPayLaterOnMutationArguments {
  /**
   * the org that has clicked pay later
   */
  meetingId: string;
}

export interface IPushInvitationOnMutationArguments {
  /**
   * the meeting ID the pusher would like to join
   */
  meetingId?: string | null;
  teamId: string;
}

export interface IPromoteNewMeetingFacilitatorOnMutationArguments {
  /**
   * userId of the new facilitator for this meeting
   */
  facilitatorUserId: string;
  meetingId: string;
}

export interface IPromoteToTeamLeadOnMutationArguments {
  /**
   * the new team member that will be the leader
   */
  teamMemberId: string;
}

export interface IReflectTemplatePromptUpdateDescriptionOnMutationArguments {
  promptId: string;
  description: string;
}

export interface IReflectTemplatePromptUpdateGroupColorOnMutationArguments {
  promptId: string;
  groupColor: string;
}

export interface IRemoveAgendaItemOnMutationArguments {
  /**
   * The agenda item unique id
   */
  agendaItemId: string;
}

export interface IRemoveAtlassianAuthOnMutationArguments {
  /**
   * the teamId to disconnect from the token
   */
  teamId: string;
}

export interface IRemoveGitHubAuthOnMutationArguments {
  /**
   * the teamId to disconnect from the token
   */
  teamId: string;
}

export interface IRemoveOrgUserOnMutationArguments {
  /**
   * the user to remove
   */
  userId: string;

  /**
   * the org that does not want them anymore
   */
  orgId: string;
}

export interface IRemoveReflectTemplateOnMutationArguments {
  templateId: string;
}

export interface IRemoveReflectTemplatePromptOnMutationArguments {
  promptId: string;
}

export interface IRenameMeetingOnMutationArguments {
  /**
   * the new meeting name
   */
  name: string;

  /**
   * the meeting with the new name
   */
  meetingId: string;
}

export interface IRenameReflectTemplateOnMutationArguments {
  templateId: string;
  name: string;
}

export interface IRenameReflectTemplatePromptOnMutationArguments {
  promptId: string;
  question: string;
}

export interface IRemoveReflectionOnMutationArguments {
  reflectionId: string;
}

export interface IRemoveSlackAuthOnMutationArguments {
  /**
   * the teamId to disconnect from the token
   */
  teamId: string;
}

export interface IRemoveTeamMemberOnMutationArguments {
  /**
   * The teamMemberId of the person who is being removed
   */
  teamMemberId: string;
}

export interface IResetPasswordOnMutationArguments {
  /**
   * the password reset token
   */
  token: string;

  /**
   * The new password for the account
   */
  newPassword: string;
}

export interface ISegmentEventTrackOnMutationArguments {
  event: string;
  options?: ISegmentEventTrackOptions | null;
}

export interface ISelectRetroTemplateOnMutationArguments {
  selectedTemplateId: string;
  teamId: string;
}

export interface ISetAppLocationOnMutationArguments {
  /**
   * The location the viewer is currently at
   */
  location?: string | null;
}

export interface ISetCheckInEnabledOnMutationArguments {
  settingsId: string;

  /**
   * true to turn icebreaker phase on, false to turn it off
   */
  isEnabled: boolean;
}

export interface ISetOrgUserRoleOnMutationArguments {
  /**
   * The org to affect
   */
  orgId: string;

  /**
   * the user who is receiving a role change
   */
  userId: string;

  /**
   * the user’s new role
   */
  role?: string | null;
}

export interface ISetPhaseFocusOnMutationArguments {
  meetingId: string;

  /**
   * The currently focused phase item
   */
  focusedPhaseItemId?: string | null;
}

export interface ISetStageTimerOnMutationArguments {
  /**
   * the id of the meeting
   */
  meetingId: string;

  /**
   * The time the timer is scheduled to go off (based on client clock), null if unsetting the timer
   */
  scheduledEndTime?: any | null;

  /**
   * scheduledEndTime - now. Used to reconcile bad client clocks. Present for time limit, else null
   */
  timeRemaining?: number | null;
}

export interface ISetSlackNotificationOnMutationArguments {
  slackChannelId?: string | null;
  slackNotificationEvents: Array<SlackNotificationEventEnum>;
  teamId: string;
}

export interface ISignUpWithPasswordOnMutationArguments {
  email: string;
  password: string;

  /**
   * optional segment id created before they were a user
   */
  segmentId?: string | null;

  /**
   * used to determine what suggested actions to create
   */
  invitationToken?: string | null;
}

export interface IStartDraggingReflectionOnMutationArguments {
  reflectionId: string;
  dragId: string;
}

export interface IStartNewMeetingOnMutationArguments {
  /**
   * The team starting the meeting
   */
  teamId: string;

  /**
   * The base type of the meeting (action, retro, etc)
   */
  meetingType: MeetingTypeEnum;
}

export interface IToggleAgendaListOnMutationArguments {
  /**
   * the team to hide the agenda for
   */
  teamId: string;
}

export interface IUpdateAgendaItemOnMutationArguments {
  /**
   * The updated item including an id, content, status, sortOrder
   */
  updatedAgendaItem: IUpdateAgendaItemInput;
}

export interface IUpdateCommentContentOnMutationArguments {
  commentId: string;

  /**
   * A stringified draft-js document containing thoughts
   */
  content: string;
}

export interface IUpdateCreditCardOnMutationArguments {
  /**
   * the org requesting the changed billing
   */
  orgId: string;

  /**
   * The token that came back from stripe
   */
  stripeToken: string;
}

export interface IUpdateOrgOnMutationArguments {
  /**
   * the updated org including the id, and at least one other field
   */
  updatedOrg: IUpdateOrgInput;
}

export interface IUpdateNewCheckInQuestionOnMutationArguments {
  /**
   * ID of the Team which will have its Icebreaker updated
   */
  meetingId: string;

  /**
   * The Team's new Icebreaker
   */
  checkInQuestion: string;
}

export interface IUpdateDragLocationOnMutationArguments {
  input: IUpdateDragLocationInput;
}

export interface IUpdateReflectionContentOnMutationArguments {
  reflectionId: string;

  /**
   * A stringified draft-js document containing thoughts
   */
  content: string;
}

export interface IUpdateReflectionGroupTitleOnMutationArguments {
  reflectionGroupId: string;

  /**
   * The new title for the group
   */
  title: string;
}

export interface IUpdateRetroMaxVotesOnMutationArguments {
  /**
   * The total number of votes for each participant
   */
  totalVotes: number;

  /**
   * The total number of votes for each participant to vote on a single topic
   */
  maxVotesPerGroup: number;

  /**
   * the meeting to update
   */
  meetingId: string;
}

export interface IUpdateTaskOnMutationArguments {
  /**
   * The part of the site where the creation occurred
   */
  area?: AreaEnum | null;

  /**
   * the updated task including the id, and at least one other field
   */
  updatedTask: IUpdateTaskInput;
}

export interface IUpdateTaskDueDateOnMutationArguments {
  /**
   * The task id
   */
  taskId: string;

  /**
   * the new due date. if not a valid date, it will unset the due date
   */
  dueDate?: any | null;
}

export interface IUpdateTeamNameOnMutationArguments {
  /**
   * The input object containing the teamId and any modified fields
   */
  updatedTeam: IUpdatedTeamInput;
}

export interface IUpdateTemplateScopeOnMutationArguments {
  /**
   * The id of the template
   */
  templateId: string;

  /**
   * the new scope
   */
  scope: SharingScopeEnum;
}

export interface IUpdateUserProfileOnMutationArguments {
  /**
   * The input object containing the user profile fields that can be changed
   */
  updatedUser: IUpdateUserProfileInput;
}

export interface IVerifyEmailOnMutationArguments {
  /**
   * The 48-byte url-safe base64 encoded verification token
   */
  verificationToken?: string | null;
}

export interface IVoteForReflectionGroupOnMutationArguments {
  /**
   * true if the user wants to remove one of their votes
   */
  isUnvote?: boolean | null;
  reflectionGroupId: string;
}

export interface IUpgradeToProOnMutationArguments {
  /**
   * the org requesting the upgrade
   */
  orgId: string;

  /**
   * The token that came back from stripe
   */
  stripeToken: string;
}

export interface IAcceptTeamInvitationPayload {
  __typename: 'AcceptTeamInvitationPayload';
  error: IStandardMutationError | null;

  /**
   * The new auth token sent to the mutator
   */
  authToken: string | null;

  /**
   * the meetingId to redirect to
   */
  meetingId: string | null;

  /**
   * The team that the invitee will be joining
   */
  team: ITeam | null;

  /**
   * The new team member on the team
   */
  teamMember: ITeamMember | null;
  notifications: INotificationTeamInvitation | null;

  /**
   * For payloads going to the team leader that got new suggested actions
   */
  teamLead: IUser | null;
}

/**
 * A notification sent to a user that was invited to a new team
 */
export interface INotificationTeamInvitation {
  __typename: 'NotificationTeamInvitation';

  /**
   * FK
   */
  teamId: string;

  /**
   * FK
   */
  invitationId: string;

  /**
   * The invitation that triggered this notification
   */
  invitation: ITeamInvitation;
  team: ITeam;

  /**
   * A shortid for the notification
   */
  id: string;

  /**
   * UNREAD if new, READ if viewer has seen it, CLICKED if viewed clicked it
   */
  status: NotificationStatusEnum;

  /**
   * The datetime to activate the notification & send it to the client
   */
  createdAt: any;
  type: NotificationEnum;

  /**
   * *The userId that should see this notification
   */
  userId: string;
}

export type TeamNotification =
  | INotificationTeamInvitation
  | INotifyTaskInvolves
  | INotificationMeetingStageTimeLimitEnd;

export interface ITeamNotification {
  __typename: 'TeamNotification';
  id: string | null;
  type: NotificationEnum | null;
}

export interface ICreateAgendaItemInput {
  /**
   * The content of the agenda item
   */
  content: string;

  /**
   * True if the agenda item has been pinned
   */
  pinned: boolean;
  teamId: string;

  /**
   * The team member ID of the person creating the agenda item
   */
  teamMemberId: string;

  /**
   * The sort order of the agenda item in the list
   */
  sortOrder?: number | null;

  /**
   * The meeting ID of the agenda item
   */
  meetingId?: string | null;
}

export interface IAddAgendaItemPayload {
  __typename: 'AddAgendaItemPayload';
  error: IStandardMutationError | null;
  agendaItem: IAgendaItem | null;
  meetingId: string | null;

  /**
   * The meeting with the updated agenda item, if any
   */
  meeting: NewMeeting | null;
}

export interface IAddAtlassianAuthPayload {
  __typename: 'AddAtlassianAuthPayload';
  error: IStandardMutationError | null;

  /**
   * The newly created auth
   */
  atlassianAuth: IAtlassianAuth | null;

  /**
   * The user with updated atlassianAuth
   */
  user: IUser | null;
}

export interface IAddCommentInput {
  /**
   * A stringified draft-js document containing thoughts
   */
  content: string;

  /**
   * true if the comment should be anonymous
   */
  isAnonymous?: boolean | null;
  meetingId: string;

  /**
   * foreign key for the reflection group or agenda item this was created from
   */
  threadId: string;
  threadSource: ThreadSourceEnum;
  threadSortOrder: number;
  threadParentId?: string | null;
}

/**
 * Return object for AddCommentPayload
 */
export type AddCommentPayload = IErrorPayload | IAddCommentSuccess;

export interface IErrorPayload {
  __typename: 'ErrorPayload';
  error: IStandardMutationError;
}

export interface IAddCommentSuccess {
  __typename: 'AddCommentSuccess';

  /**
   * the comment just created
   */
  comment: IComment;
}

/**
 * A comment on a thread
 */
export interface IComment {
  __typename: 'Comment';

  /**
   * shortid
   */
  id: string;

  /**
   * The rich text body of the item, if inactive, a tombstone text
   */
  content: string;

  /**
   * The timestamp the item was created
   */
  createdAt: any;

  /**
   * The userId that created the item, null if anonymous
   */
  createdBy: string | null;

  /**
   * The user that created the item, null if anonymous
   */
  createdByUser: IUser | null;

  /**
   * the replies to this threadable item
   */
  replies: Array<Threadable>;

  /**
   * The ID of the thread
   */
  threadId: string | null;

  /**
   * The item that spurred the threaded discussion
   */
  threadSource: ThreadSourceEnum | null;

  /**
   * the parent, if this threadable is a reply, else null
   */
  threadParentId: string | null;

  /**
   * the order of this threadable, relative to threadParentId
   */
  threadSortOrder: number | null;

  /**
   * The timestamp the item was updated
   */
  updatedAt: any;

  /**
   * All the reactjis for the given reflection
   */
  reactjis: Array<IReactji>;

  /**
   * true if the agenda item has not been processed or deleted
   */
  isActive: boolean;

  /**
   * true if the comment is anonymous, else false
   */
  isAnonymous: boolean;

  /**
   * true if the viewer wrote this comment, else false
   */
  isViewerComment: boolean;
}

/**
 * An item that can have reactjis
 */
export type Reactable = IComment | IRetroReflection;

/**
 * An item that can have reactjis
 */
export interface IReactable {
  __typename: 'Reactable';

  /**
   * shortid
   */
  id: string;

  /**
   * All the reactjis for the given reflection
   */
  reactjis: Array<IReactji>;
}

/**
 * An aggregate of reactji metadata
 */
export interface IReactji {
  __typename: 'Reactji';

  /**
   * composite of entity:reactjiId
   */
  id: string;

  /**
   * The number of users who have added this reactji
   */
  count: number;

  /**
   * true if the viewer is included in the count, else false
   */
  isViewerReactji: boolean;
}

/**
 * Return object for AddReactjiToReflectionPayload
 */
export type AddReactjiToReflectionPayload =
  | IErrorPayload
  | IAddReactjiToReflectionSuccess;

export interface IAddReactjiToReflectionSuccess {
  __typename: 'AddReactjiToReflectionSuccess';

  /**
   * the reflection with the updated list of reactjis
   */
  reflection: IRetroReflection;
}

/**
 * A reflection created during the reflect phase of a retrospective
 */
export interface IRetroReflection {
  __typename: 'RetroReflection';

  /**
   * shortid
   */
  id: string;

  /**
   * All the reactjis for the given reflection
   */
  reactjis: Array<IReactji>;

  /**
   * The ID of the group that the autogrouper assigned the reflection. Error rate = Sum(autoId != Id) / autoId.count()
   */
  autoReflectionGroupId: string | null;

  /**
   * The timestamp the meeting was created
   */
  createdAt: any | null;

  /**
   * The userId that created the reflection (or unique Id if not a team member)
   */
  creatorId: string | null;

  /**
   * an array of all the socketIds that are currently editing the reflection
   */
  editorIds: Array<string>;

  /**
   * True if the reflection was not removed, else false
   */
  isActive: boolean;

  /**
   * true if the viewer (userId) is the creator of the retro reflection, else false
   */
  isViewerCreator: boolean;

  /**
   * The stringified draft-js content
   */
  content: string;

  /**
   * The entities (i.e. nouns) parsed from the content and their respective salience
   */
  entities: Array<IGoogleAnalyzedEntity>;

  /**
   * The foreign key to link a reflection to its meeting
   */
  meetingId: string;

  /**
   * The retrospective meeting this reflection was created in
   */
  meeting: IRetrospectiveMeeting;
  phaseItem: IRetroPhaseItem;

  /**
   * The plaintext version of content
   */
  plaintextContent: string;

  /**
   * The foreign key to link a reflection to its phaseItem. Immutable. For sorting, use phase item on the group.
   */
  retroPhaseItemId: string;

  /**
   * The foreign key to link a reflection to its group
   */
  reflectionGroupId: string;

  /**
   * The group the reflection belongs to, if any
   */
  retroReflectionGroup: IRetroReflectionGroup | null;

  /**
   * The sort order of the reflection in the group (increments starting from 0)
   */
  sortOrder: number;

  /**
   * The team that is running the meeting that contains this reflection
   */
  team: ITeam;

  /**
   * The timestamp the meeting was updated. Used to determine how long it took to write a reflection
   */
  updatedAt: any | null;
}

/**
 * A retrospective meeting
 */
export interface IRetrospectiveMeeting {
  __typename: 'RetrospectiveMeeting';

  /**
   * The unique meeting id. shortid.
   */
  id: string;

  /**
   * The timestamp the meeting was created
   */
  createdAt: any;

  /**
   * The userId of the desired facilitator (different form facilitatorUserId if disconnected)
   */
  defaultFacilitatorUserId: string;

  /**
   * The timestamp the meeting officially ended
   */
  endedAt: any | null;

  /**
   * The location of the facilitator in the meeting
   */
  facilitatorStageId: string;

  /**
   * The userId (or anonymousId) of the most recent facilitator
   */
  facilitatorUserId: string;

  /**
   * The facilitator team member
   */
  facilitator: ITeamMember;

  /**
   * The team members that were active during the time of the meeting
   */
  meetingMembers: Array<IRetrospectiveMeetingMember>;

  /**
   * The auto-incrementing meeting number for the team
   */
  meetingNumber: number;
  meetingType: MeetingTypeEnum;

  /**
   * The name of the meeting
   */
  name: string;

  /**
   * The organization this meeting belongs to
   */
  organization: IOrganization;

  /**
   * The phases the meeting will go through, including all phase-specific state
   */
  phases: Array<NewMeetingPhase>;

  /**
   * true if should show the org the conversion modal, else false
   */
  showConversionModal: boolean;

  /**
   * The time the meeting summary was emailed to the team
   */
  summarySentAt: any | null;

  /**
   * foreign key for team
   */
  teamId: string;

  /**
   * The team that ran the meeting
   */
  team: ITeam;

  /**
   * The last time a meeting was updated (stage completed, finished, etc)
   */
  updatedAt: any | null;

  /**
   * The retrospective meeting member of the viewer
   */
  viewerMeetingMember: IRetrospectiveMeetingMember;

  /**
   * the threshold used to achieve the autogroup. Useful for model tuning. Serves as a flag if autogroup was used.
   */
  autoGroupThreshold: number | null;

  /**
   * The number of comments generated in the meeting
   */
  commentCount: number;

  /**
   * the number of votes allowed for each participant to cast on a single group
   */
  maxVotesPerGroup: number;

  /**
   * the next smallest distance threshold to guarantee at least 1 more grouping will be achieved
   */
  nextAutoGroupThreshold: number | null;

  /**
   * The number of reflections generated in the meeting
   */
  reflectionCount: number;

  /**
   * a single reflection group
   */
  reflectionGroup: IRetroReflectionGroup | null;

  /**
   * The grouped reflections
   */
  reflectionGroups: Array<IRetroReflectionGroup>;

  /**
   * The settings that govern the retrospective meeting
   */
  settings: IRetrospectiveMeetingSettings;

  /**
   * The number of tasks generated in the meeting
   */
  taskCount: number;

  /**
   * The tasks created within the meeting
   */
  tasks: Array<ITask>;

  /**
   * The number of topics generated in the meeting
   */
  topicCount: number;

  /**
   * the total number of votes allowed for each participant
   */
  totalVotes: number;

  /**
   * The sum total of the votes remaining for the meeting members that are present in the meeting
   */
  votesRemaining: number;
}

export interface IReflectionGroupOnRetrospectiveMeetingArguments {
  reflectionGroupId: string;
}

export interface IReflectionGroupsOnRetrospectiveMeetingArguments {
  sortBy?: ReflectionGroupSortEnum | null;
}

/**
 * All the meeting specifics for a user in a retro meeting
 */
export interface IRetrospectiveMeetingMember {
  __typename: 'RetrospectiveMeetingMember';

  /**
   * A composite of userId::meetingId
   */
  id: string;

  /**
   * true if present, false if absent, else null
   */
  isCheckedIn: boolean | null;
  meetingId: string;
  meetingType: MeetingTypeEnum;
  teamId: string;
  teamMember: ITeamMember;
  user: IUser;
  userId: string;

  /**
   * The last time a meeting was updated (stage completed, finished, etc)
   */
  updatedAt: any;

  /**
   * The tasks assigned to members during the meeting
   */
  tasks: Array<ITask>;
  votesRemaining: number;
}

/**
 * A reflection created during the reflect phase of a retrospective
 */
export interface IRetroReflectionGroup {
  __typename: 'RetroReflectionGroup';

  /**
   * shortid
   */
  id: string;

  /**
   * the comments and tasks created from the discussion
   */
  thread: IThreadableConnection;

  /**
   * The number of comments in this group’s thread, if any
   */
  commentCount: number;

  /**
   * The timestamp the meeting was created
   */
  createdAt: any;

  /**
   * True if the group has not been removed, else false
   */
  isActive: boolean;

  /**
   * The foreign key to link a reflection group to its meeting
   */
  meetingId: string;

  /**
   * The retrospective meeting this reflection was created in
   */
  meeting: IRetrospectiveMeeting;
  phaseItem: IRetroPhaseItem;
  reflections: Array<IRetroReflection>;

  /**
   * The foreign key to link a reflection group to its phaseItem. Immutable.
   */
  retroPhaseItemId: string;

  /**
   * Our auto-suggested title, to be compared to the actual title for analytics
   */
  smartTitle: string | null;

  /**
   * The sort order of the reflection group in the phase item
   */
  sortOrder: number;

  /**
   * The tasks created for this group in the discussion phase
   */
  tasks: Array<ITask>;

  /**
   * The team that is running the retro
   */
  team: ITeam | null;

  /**
   * The title of the grouping of the retrospective reflections
   */
  title: string | null;

  /**
   * true if a user wrote the title, else false
   */
  titleIsUserDefined: boolean;

  /**
   * The timestamp the meeting was updated at
   */
  updatedAt: any | null;

  /**
   * A list of voterIds (userIds). Not available to team to preserve anonymity
   */
  voterIds: Array<string>;

  /**
   * The number of votes this group has received
   */
  voteCount: number;

  /**
   * The number of votes the viewer has given this group
   */
  viewerVoteCount: number | null;
}

export interface IThreadOnRetroReflectionGroupArguments {
  first: number;

  /**
   * the incrementing sort order in string format
   */
  after?: string | null;
}

/**
 * A team-specific retro phase. Usually 3 or 4 exist per team, eg Good/Bad/Change, 4Ls, etc.
 */
export interface IRetroPhaseItem {
  __typename: 'RetroPhaseItem';

  /**
   * shortid
   */
  id: string;
  createdAt: any;

  /**
   * The type of phase item
   */
  phaseItemType: CustomPhaseItemTypeEnum | null;

  /**
   * true if the phase item is currently used by the team, else false
   */
  isActive: boolean | null;

  /**
   * foreign key. use the team field
   */
  teamId: string;

  /**
   * The team that owns this customPhaseItem
   */
  team: ITeam | null;
  updatedAt: any;

  /**
   * the order of the items in the template
   */
  sortOrder: number;

  /**
   * FK for template
   */
  templateId: string;

  /**
   * The template that this prompt belongs to
   */
  template: IReflectTemplate;

  /**
   * The title of the phase of the retrospective. Often a short version of the question
   */
  title: string;

  /**
   * The question to answer during the phase of the retrospective (eg What went well?)
   */
  question: string;

  /**
   * The description to the question for further context. A long version of the question.
   */
  description: string;

  /**
   * The color used to visually group a phase item.
   */
  groupColor: string;
}

/**
 * The team-specific templates for the reflection prompts
 */
export interface IReflectTemplate {
  __typename: 'ReflectTemplate';
  id: string;
  createdAt: any;

  /**
   * True if template can be used, else false
   */
  isActive: boolean;

  /**
   * The time of the meeting the template was last used
   */
  lastUsedAt: any | null;

  /**
   * The name of the template
   */
  name: string;

  /**
   * The prompts that are part of this template
   */
  prompts: Array<IRetroPhaseItem>;

  /**
   * *Foreign key. The organization that owns the team that created the template
   */
  orgId: string;

  /**
   * Who can see this template
   */
  scope: SharingScopeEnum;

  /**
   * *Foreign key. The team this template belongs to
   */
  teamId: string;

  /**
   * The team this template belongs to
   */
  team: ITeam;
  updatedAt: any;
}

/**
 * The scope of a shareable item
 */
export const enum SharingScopeEnum {
  TEAM = 'TEAM',
  ORGANIZATION = 'ORGANIZATION',
  PUBLIC = 'PUBLIC'
}

/**
 * sorts for the reflection group. default is sortOrder. sorting by voteCount filters out items without votes.
 */
export const enum ReflectionGroupSortEnum {
  voteCount = 'voteCount',
  stageOrder = 'stageOrder'
}

/**
 * The retro-specific meeting settings
 */
export interface IRetrospectiveMeetingSettings {
  __typename: 'RetrospectiveMeetingSettings';
  id: string;

  /**
   * The type of meeting these settings apply to
   */
  meetingType: MeetingTypeEnum | null;

  /**
   * The broad phase types that will be addressed during the meeting
   */
  phaseTypes: Array<NewMeetingPhaseTypeEnum>;

  /**
   * FK
   */
  teamId: string;

  /**
   * The team these settings belong to
   */
  team: ITeam | null;

  /**
   * the team-specific questions to ask during a retro
   */
  phaseItems: Array<CustomPhaseItem> | null;

  /**
   * The total number of votes each team member receives for the voting phase
   */
  totalVotes: number;

  /**
   * The maximum number of votes a team member can vote for a single reflection group
   */
  maxVotesPerGroup: number;

  /**
   * FK. The template that will be used to start the retrospective
   */
  selectedTemplateId: string;

  /**
   * The list of templates used to start a retrospective
   */
  reflectTemplates: Array<IReflectTemplate>;

  /**
   * The list of templates used to start a retrospective
   */
  teamTemplates: Array<IReflectTemplate>;

  /**
   * The list of templates shared across the organization to start a retrospective
   */
  organizationTemplates: IReflectTemplateConnection;

  /**
   * The list of templates shared across the organization to start a retrospective
   */
  publicTemplates: IReflectTemplateConnection;
}

export interface IOrganizationTemplatesOnRetrospectiveMeetingSettingsArguments {
  first: number;

  /**
   * The cursor, which is the templateId
   */
  after?: string | null;
}

export interface IPublicTemplatesOnRetrospectiveMeetingSettingsArguments {
  first: number;

  /**
   * The cursor, which is the templateId
   */
  after?: string | null;
}

/**
 * A connection to a list of items.
 */
export interface IReflectTemplateConnection {
  __typename: 'ReflectTemplateConnection';

  /**
   * Information to aid in pagination.
   */
  pageInfo: IPageInfo;

  /**
   * A list of edges.
   */
  edges: Array<IReflectTemplateEdge>;
}

/**
 * An edge in a connection.
 */
export interface IReflectTemplateEdge {
  __typename: 'ReflectTemplateEdge';

  /**
   * The item at the end of the edge
   */
  node: IReflectTemplate;

  /**
   * A cursor for use in pagination
   */
  cursor: string;
}

/**
 * The type of reactable
 */
export const enum ReactableEnum {
  COMMENT = 'COMMENT',
  REFLECTION = 'REFLECTION'
}

/**
 * Return object for AddReactjiToReactablePayload
 */
export type AddReactjiToReactablePayload =
  | IErrorPayload
  | IAddReactjiToReactableSuccess;

export interface IAddReactjiToReactableSuccess {
  __typename: 'AddReactjiToReactableSuccess';

  /**
   * the Reactable with the updated list of reactjis
   */
  reactable: Reactable;
}

export interface IAddReflectTemplatePayload {
  __typename: 'AddReflectTemplatePayload';
  error: IStandardMutationError | null;
  reflectTemplate: IReflectTemplate | null;
}

export interface IAddReflectTemplatePromptPayload {
  __typename: 'AddReflectTemplatePromptPayload';
  error: IStandardMutationError | null;
  prompt: IRetroPhaseItem | null;
}

export interface IAddSlackAuthPayload {
  __typename: 'AddSlackAuthPayload';
  error: IStandardMutationError | null;

  /**
   * The newly created auth
   */
  slackAuth: ISlackAuth | null;

  /**
   * The user with updated slackAuth
   */
  user: IUser | null;
}

/**
 * A flag to give an individual user super powers
 */
export const enum UserFlagEnum {
  video = 'video',
  jira = 'jira'
}

export interface IAddFeatureFlagPayload {
  __typename: 'AddFeatureFlagPayload';
  error: IStandardMutationError | null;

  /**
   * the user that was given the super power. Use users instead in GraphiQL since it may affect multiple users
   */
  user: IUser | null;

  /**
   * the users given the super power
   */
  users: Array<IUser | null> | null;

  /**
   * A human-readable result
   */
  result: string | null;
}

export interface IAddGitHubAuthPayload {
  __typename: 'AddGitHubAuthPayload';
  error: IStandardMutationError | null;

  /**
   * The newly created auth
   */
  githubAuth: IGitHubAuth | null;

  /**
   * The user with updated githubAuth
   */
  user: IUser | null;
}

export interface INewTeamInput {
  /**
   * The name of the team
   */
  name?: string | null;

  /**
   * The unique orginization ID that pays for the team
   */
  orgId?: string | null;
}

export interface IAddOrgPayload {
  __typename: 'AddOrgPayload';
  organization: IOrganization | null;
  error: IStandardMutationError | null;

  /**
   * The new auth token sent to the mutator
   */
  authToken: string | null;
  team: ITeam | null;

  /**
   * The teamMember that just created the new team, if this is a creation
   */
  teamMember: ITeamMember | null;

  /**
   * The ID of the suggestion to create a new team
   */
  removedSuggestedActionId: string | null;
}

export interface IAddTeamPayload {
  __typename: 'AddTeamPayload';
  error: IStandardMutationError | null;

  /**
   * The new auth token sent to the mutator
   */
  authToken: string | null;
  team: ITeam | null;

  /**
   * The teamMember that just created the new team, if this is a creation
   */
  teamMember: ITeamMember | null;

  /**
   * The ID of the suggestion to create a new team
   */
  removedSuggestedActionId: string | null;
}

export interface IArchiveOrganizationPayload {
  __typename: 'ArchiveOrganizationPayload';
  error: IStandardMutationError | null;
  orgId: string | null;
  teams: Array<ITeam> | null;

  /**
   * all the suggested actions that never happened
   */
  removedSuggestedActionIds: Array<string | null> | null;
}

export interface IArchiveTeamPayload {
  __typename: 'ArchiveTeamPayload';
  error: IStandardMutationError | null;
  team: ITeam | null;

  /**
   * A notification explaining that the team was archived and removed from view
   */
  notification: INotifyTeamArchived | null;

  /**
   * all the suggested actions that never happened
   */
  removedSuggestedActionIds: Array<string | null> | null;
}

/**
 * A notification alerting the user that a team they were on is now archived
 */
export interface INotifyTeamArchived {
  __typename: 'NotifyTeamArchived';

  /**
   * the user that archived the team
   */
  archivor: IUser;
  team: ITeam;

  /**
   * A shortid for the notification
   */
  id: string;

  /**
   * UNREAD if new, READ if viewer has seen it, CLICKED if viewed clicked it
   */
  status: NotificationStatusEnum;

  /**
   * The datetime to activate the notification & send it to the client
   */
  createdAt: any;
  type: NotificationEnum;

  /**
   * *The userId that should see this notification
   */
  userId: string;
}

/**
 * Return object for ArchiveTimelineEventPayload
 */
export type ArchiveTimelineEventPayload =
  | IErrorPayload
  | IArchiveTimelineEventSuccess;

export interface IArchiveTimelineEventSuccess {
  __typename: 'ArchiveTimelineEventSuccess';

  /**
   * the archived timelineEvent
   */
  timelineEvent: TimelineEvent;
}

export interface IAutoGroupReflectionsPayload {
  __typename: 'AutoGroupReflectionsPayload';
  error: IStandardMutationError | null;
  meeting: IRetrospectiveMeeting | null;
  reflections: Array<IRetroReflection | null> | null;
  reflectionGroups: Array<IRetroReflectionGroup | null> | null;
  removedReflectionGroups: Array<IRetroReflectionGroup | null> | null;
}

export interface IChangeTaskTeamPayload {
  __typename: 'ChangeTaskTeamPayload';
  error: IStandardMutationError | null;
  task: ITask | null;

  /**
   * the taskId sent to a user who is not on the new team so they can remove it from their client
   */
  removedTaskId: string | null;
}

export interface ISetNotificationStatusPayload {
  __typename: 'SetNotificationStatusPayload';
  error: IStandardMutationError | null;

  /**
   * The updated notification
   */
  notification: Notification | null;
}

export interface ICreateImposterTokenPayload {
  __typename: 'CreateImposterTokenPayload';
  error: IStandardMutationError | null;

  /**
   * The new JWT
   */
  authToken: string | null;

  /**
   * The user you have assumed
   */
  user: IUser | null;
}

export interface ICreateGitHubIssuePayload {
  __typename: 'CreateGitHubIssuePayload';
  error: IStandardMutationError | null;
  task: ITask | null;
}

export interface ICreateJiraIssuePayload {
  __typename: 'CreateJiraIssuePayload';
  error: IStandardMutationError | null;
  task: ITask | null;
}

/**
 * Return object for CreateMassInvitationPayload
 */
export type CreateMassInvitationPayload =
  | IErrorPayload
  | ICreateMassInvitationSuccess;

export interface ICreateMassInvitationSuccess {
  __typename: 'CreateMassInvitationSuccess';

  /**
   * the team with the updated mass inivtation
   */
  team: ITeam;
}

export interface ICreatePicturePutUrlPayload {
  __typename: 'CreatePicturePutUrlPayload';
  error: IStandardMutationError | null;
  url: any | null;
}

export interface ICreateReflectionInput {
  /**
   * A stringified draft-js document containing thoughts
   */
  content?: string | null;
  meetingId: string;

  /**
   * The phase item the reflection belongs to
   */
  retroPhaseItemId: string;
  sortOrder: number;
}

export interface ICreateReflectionPayload {
  __typename: 'CreateReflectionPayload';
  error: IStandardMutationError | null;
  meeting: NewMeeting | null;
  reflectionId: string | null;
  reflection: IRetroReflection | null;

  /**
   * The group automatically created for the reflection
   */
  reflectionGroup: IRetroReflectionGroup | null;

  /**
   * The stages that were unlocked by navigating
   */
  unlockedStages: Array<NewMeetingStage> | null;
}

export interface ICreateTaskInput {
  content?: string | null;

  /**
   * foreign key for the meeting this was created in
   */
  meetingId?: string | null;

  /**
   * foreign key for the reflection group or agenda item this was created from
   */
  threadId?: string | null;
  threadSource?: ThreadSourceEnum | null;
  threadSortOrder?: number | null;
  threadParentId?: string | null;
  sortOrder?: number | null;
  status: TaskStatusEnum;

  /**
   * teamId, the team the task is on
   */
  teamId: string;

  /**
   * userId, the owner of the task
   */
  userId: string;
}

/**
 * The part of the site that is calling the mutation
 */
export const enum AreaEnum {
  meeting = 'meeting',
  teamDash = 'teamDash',
  userDash = 'userDash'
}

export interface ICreateTaskPayload {
  __typename: 'CreateTaskPayload';
  error: IStandardMutationError | null;
  task: ITask | null;
  involvementNotification: INotifyTaskInvolves | null;
}

/**
 * A notification sent to someone who was just added to a team
 */
export interface INotifyTaskInvolves {
  __typename: 'NotifyTaskInvolves';

  /**
   * A shortid for the notification
   */
  id: string;

  /**
   * UNREAD if new, READ if viewer has seen it, CLICKED if viewed clicked it
   */
  status: NotificationStatusEnum;

  /**
   * The datetime to activate the notification & send it to the client
   */
  createdAt: any;
  type: NotificationEnum;

  /**
   * *The userId that should see this notification
   */
  userId: string;

  /**
   * How the user is affiliated with the task
   */
  involvement: TaskInvolvementType;

  /**
   * The taskId that now involves the userId
   */
  taskId: string;

  /**
   * The task that now involves the userId
   */
  task: ITask | null;

  /**
   * The teamMemberId of the person that made the change
   */
  changeAuthorId: string | null;

  /**
   * The TeamMember of the person that made the change
   */
  changeAuthor: ITeamMember;
  teamId: string;

  /**
   * The team the task is on
   */
  team: ITeam;
}

/**
 * How a user is involved with a task (listed in hierarchical order)
 */
export const enum TaskInvolvementType {
  ASSIGNEE = 'ASSIGNEE',
  MENTIONEE = 'MENTIONEE'
}

export interface IImageMetadataInput {
  /**
   * user-supplied MIME content type
   */
  contentType: string;

  /**
   * user-supplied file size
   */
  contentLength: number;
}

export interface ICreateUserPicturePutUrlPayload {
  __typename: 'CreateUserPicturePutUrlPayload';
  error: IStandardMutationError | null;
  url: any | null;
  pngUrl: any | null;
}

/**
 * Return object for DeleteCommentPayload
 */
export type DeleteCommentPayload = IErrorPayload | IDeleteCommentSuccess;

export interface IDeleteCommentSuccess {
  __typename: 'DeleteCommentSuccess';
  commentId: string;

  /**
   * the comment just deleted
   */
  comment: IComment;
}

export interface IDeleteTaskPayload {
  __typename: 'DeleteTaskPayload';
  error: IStandardMutationError | null;

  /**
   * The task that was deleted
   */
  task: ITask | null;
}

export interface IDeleteUserPayload {
  __typename: 'DeleteUserPayload';
  error: IStandardMutationError | null;
}

export interface IDenyPushInvitationPayload {
  __typename: 'DenyPushInvitationPayload';
  error: IStandardMutationError | null;
  teamId: string | null;
  userId: string | null;
}

export interface IDismissNewFeaturePayload {
  __typename: 'DismissNewFeaturePayload';
  error: IStandardMutationError | null;
}

export interface IDismissSuggestedActionPayload {
  __typename: 'DismissSuggestedActionPayload';
  error: IStandardMutationError | null;

  /**
   * The user that dismissed the action
   */
  user: IUser | null;

  /**
   * The id of the removed suggested action
   */
  removedSuggestedActionId: string | null;
}

export interface IDowngradeToPersonalPayload {
  __typename: 'DowngradeToPersonalPayload';
  error: IStandardMutationError | null;

  /**
   * The new Personal Org
   */
  organization: IOrganization | null;

  /**
   * The updated teams under the org
   */
  teams: Array<ITeam | null> | null;
}

export interface IDragDiscussionTopicPayload {
  __typename: 'DragDiscussionTopicPayload';
  error: IStandardMutationError | null;
  meeting: NewMeeting | null;
  stage: IRetroDiscussStage | null;
}

/**
 * The stage where the team discusses a single theme
 */
export interface IRetroDiscussStage {
  __typename: 'RetroDiscussStage';

  /**
   * stageId, shortid
   */
  id: string;

  /**
   * The datetime the stage was completed
   */
  endAt: any | null;

  /**
   * foreign key. try using meeting
   */
  meetingId: string;

  /**
   * The meeting this stage belongs to
   */
  meeting: NewMeeting | null;

  /**
   * true if the facilitator has completed this stage, else false. Should be boolean(endAt)
   */
  isComplete: boolean;

  /**
   * true if any meeting participant can navigate to this stage
   */
  isNavigable: boolean;

  /**
   * true if the facilitator can navigate to this stage
   */
  isNavigableByFacilitator: boolean;

  /**
   * The phase this stage belongs to
   */
  phase: NewMeetingPhase | null;

  /**
   * The type of the phase
   */
  phaseType: NewMeetingPhaseTypeEnum | null;

  /**
   * The datetime the stage was started
   */
  startAt: any | null;

  /**
   * Number of times the facilitator has visited this stage
   */
  viewCount: number | null;

  /**
   * true if a time limit is set, false if end time is set, null if neither is set
   */
  isAsync: boolean | null;

  /**
   * true if the viewer is ready to advance, else false
   */
  isViewerReady: boolean;

  /**
   * the number of meeting members ready to advance, excluding the facilitator
   */
  readyCount: number;

  /**
   * The datetime the phase is scheduled to be finished, null if no time limit or end time is set
   */
  scheduledEndTime: any | null;

  /**
   * The suggested ending datetime for a phase to be completed async, null if not enough data to make a suggestion
   */
  suggestedEndTime: any | null;

  /**
   * The suggested time limit for a phase to be completed together, null if not enough data to make a suggestion
   */
  suggestedTimeLimit: number | null;

  /**
   * The number of milliseconds left before the scheduled end time. Useful for
   * unsynced client clocks. null if scheduledEndTime is null
   */
  timeRemaining: number | null;

  /**
   * foreign key. use reflectionGroup
   */
  reflectionGroupId: string | null;

  /**
   * the group that is the focal point of the discussion
   */
  reflectionGroup: IRetroReflectionGroup | null;

  /**
   * The sort order for reprioritizing discussion topics
   */
  sortOrder: number;
}

/**
 * The possible places a reflection can be dropped
 */
export const enum DragReflectionDropTargetTypeEnum {
  REFLECTION_GROUP = 'REFLECTION_GROUP',
  REFLECTION_GRID = 'REFLECTION_GRID'
}

export interface IEndDraggingReflectionPayload {
  __typename: 'EndDraggingReflectionPayload';
  error: IStandardMutationError | null;
  dragId: string | null;

  /**
   * The drag as sent from the team member
   */
  remoteDrag: IRemoteReflectionDrag | null;

  /**
   * the type of item the reflection was dropped on
   */
  dropTargetType: DragReflectionDropTargetTypeEnum | null;

  /**
   * The ID that the dragged item was dropped on, if dropTargetType is not specific enough
   */
  dropTargetId: string | null;
  meeting: IRetrospectiveMeeting | null;
  meetingId: string | null;
  reflection: IRetroReflection | null;
  reflectionGroupId: string | null;
  reflectionId: string | null;

  /**
   * foreign key to get user
   */
  userId: string | null;

  /**
   * The group encapsulating the new reflection. A new one was created if one was not provided.
   */
  reflectionGroup: IRetroReflectionGroup | null;

  /**
   * The old group the reflection was in
   */
  oldReflectionGroup: IRetroReflectionGroup | null;
}

/**
 * Info associated with a current drag
 */
export interface IRemoteReflectionDrag {
  __typename: 'RemoteReflectionDrag';
  id: string;

  /**
   * The userId of the person currently dragging the reflection
   */
  dragUserId: string | null;

  /**
   * The name of the dragUser
   */
  dragUserName: string | null;
  clientHeight: number | null;
  clientWidth: number | null;

  /**
   * The primary key of the item being drug
   */
  sourceId: string;

  /**
   * The estimated destination of the item being drug
   */
  targetId: string | null;

  /**
   * horizontal distance from the top left of the target
   */
  targetOffsetX: number | null;

  /**
   * vertical distance from the top left of the target
   */
  targetOffsetY: number | null;

  /**
   * the left of the source, relative to the client window
   */
  clientX: number | null;

  /**
   * the top of the source, relative to the client window
   */
  clientY: number | null;
}

export interface IEditReflectionPayload {
  __typename: 'EditReflectionPayload';
  error: IStandardMutationError | null;
  phaseItemId: string | null;

  /**
   * The socketId of the client editing the card (uses socketId to maintain anonymity)
   */
  editorId: string | null;

  /**
   * true if the reflection is being edited, else false
   */
  isEditing: boolean | null;
}

export interface IEditTaskPayload {
  __typename: 'EditTaskPayload';
  error: IStandardMutationError | null;
  task: ITask | null;
  editor: IUser | null;

  /**
   * true if the editor is editing, false if they stopped editing
   */
  isEditing: boolean | null;
}

export interface IEndNewMeetingPayload {
  __typename: 'EndNewMeetingPayload';
  error: IStandardMutationError | null;

  /**
   * true if the meeting was killed (ended before reaching last stage)
   */
  isKill: boolean | null;
  team: ITeam | null;
  meeting: NewMeeting | null;

  /**
   * The ID of the suggestion to try a retro meeting, if tried
   */
  removedSuggestedActionId: string | null;
  removedTaskIds: Array<string> | null;
  updatedTaskIds: Array<string> | null;

  /**
   * Any tasks that were updated during the meeting
   */
  updatedTasks: Array<ITask> | null;
}

/**
 * Return object for FlagReadyToAdvancePayload
 */
export type FlagReadyToAdvancePayload =
  | IErrorPayload
  | IFlagReadyToAdvanceSuccess;

export interface IFlagReadyToAdvanceSuccess {
  __typename: 'FlagReadyToAdvanceSuccess';

  /**
   * the meeting with the updated readyCount
   */
  meeting: NewMeeting;

  /**
   * the stage with the updated readyCount
   */
  stage: NewMeetingStage;
}

export interface IInactivateUserPayload {
  __typename: 'InactivateUserPayload';
  error: IStandardMutationError | null;

  /**
   * The user that has been inactivated
   */
  user: IUser | null;
}

export interface IInvalidateSessionsPayload {
  __typename: 'InvalidateSessionsPayload';
  error: IStandardMutationError | null;

  /**
   * The new, only valid auth token
   */
  authToken: string | null;
}

export interface IInviteToTeamPayload {
  __typename: 'InviteToTeamPayload';
  error: IStandardMutationError | null;

  /**
   * The team the inviter is inviting the invitee to
   */
  team: ITeam | null;

  /**
   * A list of email addresses the invitations were sent to
   */
  invitees: Array<any> | null;

  /**
   * the notification ID if this payload is sent to a subscriber, else null
   */
  teamInvitationNotificationId: string | null;

  /**
   * The notification sent to the invitee if they are a parabol user
   */
  teamInvitationNotification: INotificationTeamInvitation | null;

  /**
   * the `invite your team` suggested action that was removed, if any
   */
  removedSuggestedActionId: string | null;
}

export interface ILoginWithGooglePayload {
  __typename: 'LoginWithGooglePayload';
  error: IStandardMutationError | null;

  /**
   * The new auth token
   */
  authToken: string | null;
  userId: string | null;

  /**
   * the newly created user
   */
  user: IUser | null;
}

export interface ILoginWithPasswordPayload {
  __typename: 'LoginWithPasswordPayload';
  error: IStandardMutationError | null;

  /**
   * The new auth token
   */
  authToken: string | null;
  userId: string | null;

  /**
   * the newly created user
   */
  user: IUser | null;
}

export interface IMoveReflectTemplatePromptPayload {
  __typename: 'MoveReflectTemplatePromptPayload';
  error: IStandardMutationError | null;
  prompt: IRetroPhaseItem | null;
}

export interface INavigateMeetingPayload {
  __typename: 'NavigateMeetingPayload';
  error: IStandardMutationError | null;
  meeting: NewMeeting | null;

  /**
   * The stage that the facilitator is now on
   */
  facilitatorStage: NewMeetingStage | null;

  /**
   * The stage that the facilitator left
   */
  oldFacilitatorStage: NewMeetingStage | null;

  /**
   * Additional details triggered by completing certain phases
   */
  phaseComplete: IPhaseCompletePayload | null;

  /**
   * The stages that were unlocked by navigating
   */
  unlockedStages: Array<NewMeetingStage> | null;
}

export interface IPhaseCompletePayload {
  __typename: 'PhaseCompletePayload';

  /**
   * payload provided if the retro reflect phase was completed
   */
  reflect: IReflectPhaseCompletePayload | null;

  /**
   * payload provided if the retro grouping phase was completed
   */
  group: IGroupPhaseCompletePayload | null;

  /**
   * payload provided if the retro voting phase was completed
   */
  vote: IVotePhaseCompletePayload | null;
}

export interface IReflectPhaseCompletePayload {
  __typename: 'ReflectPhaseCompletePayload';

  /**
   * a list of empty reflection groups to remove
   */
  emptyReflectionGroupIds: Array<string>;
}

export interface IGroupPhaseCompletePayload {
  __typename: 'GroupPhaseCompletePayload';

  /**
   * a list of empty reflection groups to remove
   */
  emptyReflectionGroupIds: Array<string>;

  /**
   * the current meeting
   */
  meeting: IRetrospectiveMeeting;

  /**
   * a list of updated reflection groups
   */
  reflectionGroups: Array<IRetroReflectionGroup | null> | null;
}

export interface IVotePhaseCompletePayload {
  __typename: 'VotePhaseCompletePayload';

  /**
   * the current meeting
   */
  meeting: IRetrospectiveMeeting | null;
}

export interface INewMeetingCheckInPayload {
  __typename: 'NewMeetingCheckInPayload';
  error: IStandardMutationError | null;
  meetingMember: MeetingMember | null;
  meeting: NewMeeting | null;
}

export interface IPayLaterPayload {
  __typename: 'PayLaterPayload';
  error: IStandardMutationError | null;

  /**
   * the ids of the meetings that were showing conversion modals
   */
  meetingId: string | null;

  /**
   * the meetings that were showing conversion modals
   */
  meeting: NewMeeting | null;
}

export interface IPushInvitationPayload {
  __typename: 'PushInvitationPayload';
  error: IStandardMutationError | null;
  user: IUser | null;
  meetingId: string | null;
  team: ITeam | null;
}

export interface IPromoteNewMeetingFacilitatorPayload {
  __typename: 'PromoteNewMeetingFacilitatorPayload';
  error: IStandardMutationError | null;

  /**
   * The meeting in progress
   */
  meeting: NewMeeting | null;
  facilitatorStage: NewMeetingStage | null;

  /**
   * The old meeting facilitator
   */
  oldFacilitator: IUser | null;
}

export interface IPromoteToTeamLeadPayload {
  __typename: 'PromoteToTeamLeadPayload';
  error: IStandardMutationError | null;
  team: ITeam | null;
  oldLeader: ITeamMember | null;
  newLeader: ITeamMember | null;
}

export interface IReflectTemplatePromptUpdateDescriptionPayload {
  __typename: 'ReflectTemplatePromptUpdateDescriptionPayload';
  error: IStandardMutationError | null;
  prompt: IRetroPhaseItem | null;
}

export interface IReflectTemplatePromptUpdateGroupColorPayload {
  __typename: 'ReflectTemplatePromptUpdateGroupColorPayload';
  error: IStandardMutationError | null;
  prompt: IRetroPhaseItem | null;
}

export interface IRemoveAgendaItemPayload {
  __typename: 'RemoveAgendaItemPayload';
  error: IStandardMutationError | null;
  agendaItem: IAgendaItem | null;
  meetingId: string | null;

  /**
   * The meeting with the updated agenda item, if any
   */
  meeting: NewMeeting | null;
}

export interface IRemoveAtlassianAuthPayload {
  __typename: 'RemoveAtlassianAuthPayload';
  error: IStandardMutationError | null;

  /**
   * The ID of the authorization removed
   */
  authId: string | null;
  teamId: string | null;

  /**
   * The user with updated atlassianAuth
   */
  user: IUser | null;
}

export interface IRemoveGitHubAuthPayload {
  __typename: 'RemoveGitHubAuthPayload';
  error: IStandardMutationError | null;

  /**
   * The ID of the authorization removed
   */
  authId: string | null;
  teamId: string | null;

  /**
   * The user with updated githubAuth
   */
  user: IUser | null;
}

export interface IRemoveOrgUserPayload {
  __typename: 'RemoveOrgUserPayload';
  error: IStandardMutationError | null;

  /**
   * The organization the user was removed from
   */
  organization: IOrganization | null;

  /**
   * The teams the user was removed from
   */
  teams: Array<ITeam> | null;

  /**
   * The teamMembers removed
   */
  teamMembers: Array<ITeamMember> | null;

  /**
   * The tasks that were archived or reassigned
   */
  updatedTasks: Array<ITask> | null;

  /**
   * The user removed from the organization
   */
  user: IUser | null;

  /**
   * The notifications for each team the user was kicked out of
   */
  kickOutNotifications: Array<INotifyKickedOut> | null;

  /**
   * The organization member that got removed
   */
  removedOrgMember: IOrganizationUser | null;
  organizationUserId: string | null;
}

/**
 * A notification sent to someone who was just kicked off a team
 */
export interface INotifyKickedOut {
  __typename: 'NotifyKickedOut';

  /**
   * A shortid for the notification
   */
  id: string;

  /**
   * UNREAD if new, READ if viewer has seen it, CLICKED if viewed clicked it
   */
  status: NotificationStatusEnum;

  /**
   * The datetime to activate the notification & send it to the client
   */
  createdAt: any;
  type: NotificationEnum;

  /**
   * *The userId that should see this notification
   */
  userId: string;

  /**
   * the user that evicted recipient
   */
  evictor: IUser;

  /**
   * The name of the team the user is joining
   */
  teamName: string;

  /**
   * The teamId the user was kicked out of
   */
  teamId: string;

  /**
   * The team the task is on
   */
  team: ITeam;
}

export interface IRemoveReflectTemplatePayload {
  __typename: 'RemoveReflectTemplatePayload';
  error: IStandardMutationError | null;
  reflectTemplate: IReflectTemplate | null;
  retroMeetingSettings: IRetrospectiveMeetingSettings | null;
}

export interface IRemoveReflectTemplatePromptPayload {
  __typename: 'RemoveReflectTemplatePromptPayload';
  error: IStandardMutationError | null;
  reflectTemplate: IReflectTemplate | null;
  prompt: IReflectTemplate | null;
}

/**
 * Return object for RenameMeetingPayload
 */
export type RenameMeetingPayload = IErrorPayload | IRenameMeetingSuccess;

export interface IRenameMeetingSuccess {
  __typename: 'RenameMeetingSuccess';

  /**
   * the renamed meeting
   */
  meeting: NewMeeting;
}

export interface IRenameReflectTemplatePayload {
  __typename: 'RenameReflectTemplatePayload';
  error: IStandardMutationError | null;
  reflectTemplate: IReflectTemplate | null;
}

export interface IRenameReflectTemplatePromptPayload {
  __typename: 'RenameReflectTemplatePromptPayload';
  error: IStandardMutationError | null;
  prompt: IRetroPhaseItem | null;
}

export interface IRemoveReflectionPayload {
  __typename: 'RemoveReflectionPayload';
  error: IStandardMutationError | null;
  meeting: NewMeeting | null;
  reflection: IRetroReflection | null;

  /**
   * The stages that were unlocked by navigating
   */
  unlockedStages: Array<NewMeetingStage> | null;
}

export interface IRemoveSlackAuthPayload {
  __typename: 'RemoveSlackAuthPayload';
  error: IStandardMutationError | null;

  /**
   * The ID of the authorization removed
   */
  authId: string | null;
  teamId: string | null;

  /**
   * The user with updated slackAuth
   */
  user: IUser | null;
}

export interface IRemoveTeamMemberPayload {
  __typename: 'RemoveTeamMemberPayload';
  error: IStandardMutationError | null;

  /**
   * The team member removed
   */
  teamMember: ITeamMember | null;

  /**
   * The team the team member was removed from
   */
  team: ITeam | null;

  /**
   * The tasks that got reassigned
   */
  updatedTasks: Array<ITask> | null;

  /**
   * The user removed from the team
   */
  user: IUser | null;

  /**
   * A notification if you were kicked out by the team leader
   */
  kickOutNotification: INotifyKickedOut | null;
}

export interface IResetPasswordPayload {
  __typename: 'ResetPasswordPayload';
  error: IStandardMutationError | null;

  /**
   * The new auth token
   */
  authToken: string | null;
  userId: string | null;

  /**
   * the user that changed their password
   */
  user: IUser | null;
}

export interface ISegmentEventTrackOptions {
  teamId?: string | null;
  orgId?: string | null;
  phase?: NewMeetingPhaseTypeEnum | null;
  eventId?: number | null;
  actionType?: string | null;
}

export interface ISelectRetroTemplatePayload {
  __typename: 'SelectRetroTemplatePayload';
  error: IStandardMutationError | null;
  retroMeetingSettings: IRetrospectiveMeetingSettings | null;
}

/**
 * Return object for SetAppLocationPayload
 */
export type SetAppLocationPayload = IErrorPayload | ISetAppLocationSuccess;

export interface ISetAppLocationSuccess {
  __typename: 'SetAppLocationSuccess';

  /**
   * the user with the updated location
   */
  user: IUser;
}

export interface ISetCheckInEnabledPayload {
  __typename: 'SetCheckInEnabledPayload';
  error: IStandardMutationError | null;
  settings: TeamMeetingSettings | null;
}

export type SetOrgUserRolePayload =
  | ISetOrgUserRoleAddedPayload
  | ISetOrgUserRoleRemovedPayload;

export interface ISetOrgUserRolePayload {
  __typename: 'SetOrgUserRolePayload';
  error: IStandardMutationError | null;
  organization: IOrganization | null;
  updatedOrgMember: IOrganizationUser | null;
}

export interface ISetPhaseFocusPayload {
  __typename: 'SetPhaseFocusPayload';
  error: IStandardMutationError | null;
  meeting: IRetrospectiveMeeting;
  reflectPhase: IReflectPhase;
}

/**
 * The meeting phase where all team members check in one-by-one
 */
export interface IReflectPhase {
  __typename: 'ReflectPhase';

  /**
   * shortid
   */
  id: string;
  meetingId: string;

  /**
   * The type of phase
   */
  phaseType: NewMeetingPhaseTypeEnum;
  stages: Array<IGenericMeetingStage>;

  /**
   * foreign key. use focusedPhaseItem
   */
  focusedPhaseItemId: string | null;

  /**
   * the phase item that the facilitator wants the group to focus on
   */
  focusedPhaseItem: IRetroPhaseItem | null;

  /**
   * FK. The ID of the template used during the reflect phase
   */
  promptTemplateId: string;

  /**
   * The prompts used during the reflect phase
   */
  reflectPrompts: Array<IRetroPhaseItem>;
  teamId: string;
}

/**
 * A stage of a meeting that has no extra state. Only used for single-stage phases
 */
export interface IGenericMeetingStage {
  __typename: 'GenericMeetingStage';

  /**
   * stageId, shortid
   */
  id: string;

  /**
   * The datetime the stage was completed
   */
  endAt: any | null;

  /**
   * foreign key. try using meeting
   */
  meetingId: string;

  /**
   * The meeting this stage belongs to
   */
  meeting: NewMeeting | null;

  /**
   * true if the facilitator has completed this stage, else false. Should be boolean(endAt)
   */
  isComplete: boolean;

  /**
   * true if any meeting participant can navigate to this stage
   */
  isNavigable: boolean;

  /**
   * true if the facilitator can navigate to this stage
   */
  isNavigableByFacilitator: boolean;

  /**
   * The phase this stage belongs to
   */
  phase: NewMeetingPhase | null;

  /**
   * The type of the phase
   */
  phaseType: NewMeetingPhaseTypeEnum | null;

  /**
   * The datetime the stage was started
   */
  startAt: any | null;

  /**
   * Number of times the facilitator has visited this stage
   */
  viewCount: number | null;

  /**
   * true if a time limit is set, false if end time is set, null if neither is set
   */
  isAsync: boolean | null;

  /**
   * true if the viewer is ready to advance, else false
   */
  isViewerReady: boolean;

  /**
   * the number of meeting members ready to advance, excluding the facilitator
   */
  readyCount: number;

  /**
   * The datetime the phase is scheduled to be finished, null if no time limit or end time is set
   */
  scheduledEndTime: any | null;

  /**
   * The suggested ending datetime for a phase to be completed async, null if not enough data to make a suggestion
   */
  suggestedEndTime: any | null;

  /**
   * The suggested time limit for a phase to be completed together, null if not enough data to make a suggestion
   */
  suggestedTimeLimit: number | null;

  /**
   * The number of milliseconds left before the scheduled end time. Useful for
   * unsynced client clocks. null if scheduledEndTime is null
   */
  timeRemaining: number | null;
}

export interface ISetStageTimerPayload {
  __typename: 'SetStageTimerPayload';
  error: IStandardMutationError | null;

  /**
   * The updated stage
   */
  stage: NewMeetingStage | null;
}

export interface ISetSlackNotificationPayload {
  __typename: 'SetSlackNotificationPayload';
  error: IStandardMutationError | null;
  slackNotifications: Array<ISlackNotification> | null;

  /**
   * The user with updated slack notifications
   */
  user: IUser | null;
}

export interface ISignUpWithPasswordPayload {
  __typename: 'SignUpWithPasswordPayload';
  error: IStandardMutationError | null;

  /**
   * The new auth token
   */
  authToken: string | null;
  userId: string | null;

  /**
   * the newly created user
   */
  user: IUser | null;
}

export interface IStartDraggingReflectionPayload {
  __typename: 'StartDraggingReflectionPayload';
  error: IStandardMutationError | null;

  /**
   * The proposed start/end of a drag. Subject to race conditions, it is up to the client to decide to accept or ignore
   */
  remoteDrag: IRemoteReflectionDrag | null;
  meeting: NewMeeting | null;
  meetingId: string | null;
  reflection: IRetroReflection | null;
  reflectionId: string | null;
  teamId: string | null;
}

export interface IStartNewMeetingPayload {
  __typename: 'StartNewMeetingPayload';
  error: IStandardMutationError | null;
  team: ITeam | null;
  meetingId: string | null;
  meeting: NewMeeting | null;
}

export interface IUpdateAgendaItemInput {
  /**
   * The unique agenda item ID, composed of a teamId::shortid
   */
  id: string;

  /**
   * The content of the agenda item
   */
  content?: string | null;

  /**
   * True if agenda item has been pinned
   */
  pinned?: boolean | null;

  /**
   * True if not processed or deleted
   */
  isActive?: boolean | null;

  /**
   * The sort order of the agenda item in the list
   */
  sortOrder?: number | null;
}

export interface IUpdateAgendaItemPayload {
  __typename: 'UpdateAgendaItemPayload';
  agendaItem: IAgendaItem | null;
  meetingId: string | null;

  /**
   * The meeting with the updated agenda item, if any
   */
  meeting: NewMeeting | null;
  error: IStandardMutationError | null;
}

/**
 * Return object for UpdateCommentContentPayload
 */
export type UpdateCommentContentPayload =
  | IErrorPayload
  | IUpdateCommentContentSuccess;

export interface IUpdateCommentContentSuccess {
  __typename: 'UpdateCommentContentSuccess';

  /**
   * the comment with updated content
   */
  comment: IComment;
}

export interface IUpdateCreditCardPayload {
  __typename: 'UpdateCreditCardPayload';
  error: IStandardMutationError | null;

  /**
   * The organization that received the updated credit card
   */
  organization: IOrganization | null;

  /**
   * The teams that are now paid up
   */
  teamsUpdated: Array<ITeam | null> | null;
}

export interface IUpdateOrgInput {
  /**
   * The unique action ID
   */
  id: string;

  /**
   * The name of the org
   */
  name?: string | null;

  /**
   * The org avatar
   */
  picture?: any | null;
}

export interface IUpdateOrgPayload {
  __typename: 'UpdateOrgPayload';
  error: IStandardMutationError | null;

  /**
   * The updated org
   */
  organization: IOrganization | null;
}

export interface IUpdateNewCheckInQuestionPayload {
  __typename: 'UpdateNewCheckInQuestionPayload';
  error: IStandardMutationError | null;
  meeting: NewMeeting | null;
}

export interface IUpdateDragLocationInput {
  id: string;
  clientHeight: number;
  clientWidth: number;
  meetingId: string;

  /**
   * The primary key of the item being drug
   */
  sourceId: string;

  /**
   * The estimated destination of the item being drug
   */
  targetId?: string | null;

  /**
   * The teamId to broadcast the message to
   */
  teamId: string;

  /**
   * horizontal distance from the top left of the target
   */
  targetOffsetX?: number | null;

  /**
   * vertical distance from the top left of the target
   */
  targetOffsetY?: number | null;

  /**
   * the left of the source, relative to the client window
   */
  clientX?: number | null;

  /**
   * the top of the source, relative to the client window
   */
  clientY?: number | null;
}

export interface IUpdateReflectionContentPayload {
  __typename: 'UpdateReflectionContentPayload';
  error: IStandardMutationError | null;
  meeting: NewMeeting | null;
  reflection: IRetroReflection | null;
}

export interface IUpdateReflectionGroupTitlePayload {
  __typename: 'UpdateReflectionGroupTitlePayload';
  error: IStandardMutationError | null;
  meeting: NewMeeting | null;
  reflectionGroup: IRetroReflectionGroup | null;
}

/**
 * Return object for UpdateRetroMaxVotesPayload
 */
export type UpdateRetroMaxVotesPayload =
  | IErrorPayload
  | IUpdateRetroMaxVotesSuccess;

export interface IUpdateRetroMaxVotesSuccess {
  __typename: 'UpdateRetroMaxVotesSuccess';

  /**
   * the meeting with the updated max votes
   */
  meeting: IRetrospectiveMeeting;
}

export interface IUpdateTaskInput {
  /**
   * The task id
   */
  id: string;
  content?: string | null;
  sortOrder?: number | null;
  status?: TaskStatusEnum | null;
  teamId?: string | null;
  userId?: string | null;
}

export interface IUpdateTaskPayload {
  __typename: 'UpdateTaskPayload';
  error: IStandardMutationError | null;
  task: ITask | null;

  /**
   * If a task was just turned private, this its ID, else null
   */
  privatizedTaskId: string | null;
  addedNotification: INotifyTaskInvolves | null;
}

export interface IUpdateTaskDueDatePayload {
  __typename: 'UpdateTaskDueDatePayload';
  error: IStandardMutationError | null;
  task: ITask | null;
}

export interface IUpdatedTeamInput {
  id?: string | null;

  /**
   * The name of the team
   */
  name?: string | null;

  /**
   * A link to the team’s profile image.
   */
  picture?: any | null;
}

export interface IUpdateTeamNamePayload {
  __typename: 'UpdateTeamNamePayload';
  error: IStandardMutationError | null;
  team: ITeam | null;
}

/**
 * Return object for UpdateTemplateScopePayload
 */
export type UpdateTemplateScopePayload =
  | IErrorPayload
  | IUpdateTemplateScopeSuccess;

export interface IUpdateTemplateScopeSuccess {
  __typename: 'UpdateTemplateScopeSuccess';

  /**
   * the template that was just updated, if downscoped, does not provide whole story
   */
  template: IReflectTemplate;

  /**
   * The settings that contain the teamTemplates array that was modified
   */
  settings: IRetrospectiveMeetingSettings;
}

export interface IUpdateUserProfileInput {
  /**
   * A link to the user’s profile image.
   */
  picture?: any | null;

  /**
   * The name, as confirmed by the user
   */
  preferredName?: string | null;
}

export interface IUpdateUserProfilePayload {
  __typename: 'UpdateUserProfilePayload';
  error: IStandardMutationError | null;
  user: IUser | null;

  /**
   * The updated team member
   */
  teamMembers: Array<ITeamMember> | null;
}

export interface IVerifyEmailPayload {
  __typename: 'VerifyEmailPayload';
  error: IStandardMutationError | null;

  /**
   * The new auth token sent to the mutator
   */
  authToken: string | null;
  userId: string | null;
  user: IUser | null;
}

export interface IVoteForReflectionGroupPayload {
  __typename: 'VoteForReflectionGroupPayload';
  error: IStandardMutationError | null;
  meeting: IRetrospectiveMeeting | null;
  meetingMember: IRetrospectiveMeetingMember | null;
  reflectionGroup: IRetroReflectionGroup | null;

  /**
   * The stages that were locked or unlocked by having at least 1 vote
   */
  unlockedStages: Array<NewMeetingStage> | null;
}

export interface IUpgradeToProPayload {
  __typename: 'UpgradeToProPayload';
  error: IStandardMutationError | null;

  /**
   * The new Pro Org
   */
  organization: IOrganization | null;

  /**
   * The updated teams under the org
   */
  teams: Array<ITeam> | null;

  /**
   * the ids of the meetings that were showing conversion modals
   */
  meetingIds: Array<string> | null;

  /**
   * the meetings that were showing conversion modals
   */
  meetings: Array<NewMeeting> | null;
}

export interface ISubscription {
  __typename: 'Subscription';
  meetingSubscription: MeetingSubscriptionPayload;
  notificationSubscription: NotificationSubscriptionPayload;
  organizationSubscription: OrganizationSubscriptionPayload;
  taskSubscription: TaskSubscriptionPayload;
  teamSubscription: TeamSubscriptionPayload;
}

export interface IMeetingSubscriptionOnSubscriptionArguments {
  meetingId: string;
}

export type MeetingSubscriptionPayload =
  | IAddCommentSuccess
  | IAddReactjiToReflectionSuccess
  | IAddReactjiToReactableSuccess
  | IAutoGroupReflectionsPayload
  | ICreateReflectionPayload
  | IDeleteCommentSuccess
  | IDragDiscussionTopicPayload
  | IEndDraggingReflectionPayload
  | IEditReflectionPayload
  | IFlagReadyToAdvanceSuccess
  | INewMeetingCheckInPayload
  | IPromoteNewMeetingFacilitatorPayload
  | IRemoveReflectionPayload
  | ISetAppLocationSuccess
  | ISetPhaseFocusPayload
  | ISetStageTimerPayload
  | IStartDraggingReflectionPayload
  | IUpdateCommentContentSuccess
  | IUpdateDragLocationPayload
  | IUpdateNewCheckInQuestionPayload
  | IUpdateReflectionContentPayload
  | IUpdateReflectionGroupTitlePayload
  | IUpdateRetroMaxVotesSuccess
  | IVoteForReflectionGroupPayload;

export interface IUpdateDragLocationPayload {
  __typename: 'UpdateDragLocationPayload';

  /**
   * The drag as sent from the team member
   */
  remoteDrag: IRemoteReflectionDrag | null;
  userId: string;
}

export type NotificationSubscriptionPayload =
  | IAcceptTeamInvitationPayload
  | IAddFeatureFlagPayload
  | IAddNewFeaturePayload
  | IAddOrgPayload
  | IAddTeamPayload
  | IArchiveTimelineEventSuccess
  | ISetNotificationStatusPayload
  | ICreateTaskPayload
  | IDeleteTaskPayload
  | IDisconnectSocketPayload
  | IEndNewMeetingPayload
  | IInvalidateSessionsPayload
  | IInviteToTeamPayload
  | IMeetingStageTimeLimitPayload
  | IRemoveOrgUserPayload
  | IStripeFailPaymentPayload
  | IUser
  | IAuthTokenPayload;

export interface IAddNewFeaturePayload {
  __typename: 'AddNewFeaturePayload';

  /**
   * the new feature broadcast
   */
  newFeature: INewFeatureBroadcast | null;
}

export interface IDisconnectSocketPayload {
  __typename: 'DisconnectSocketPayload';

  /**
   * The user that disconnected
   */
  user: IUser | null;
}

export interface IMeetingStageTimeLimitPayload {
  __typename: 'MeetingStageTimeLimitPayload';

  /**
   * The new notification that was just created
   */
  notification: INotificationMeetingStageTimeLimitEnd;
}

/**
 * A notification sent to a facilitator that the stage time limit has ended
 */
export interface INotificationMeetingStageTimeLimitEnd {
  __typename: 'NotificationMeetingStageTimeLimitEnd';

  /**
   * A shortid for the notification
   */
  id: string;

  /**
   * UNREAD if new, READ if viewer has seen it, CLICKED if viewed clicked it
   */
  status: NotificationStatusEnum;

  /**
   * The datetime to activate the notification & send it to the client
   */
  createdAt: any;
  type: NotificationEnum;

  /**
   * *The userId that should see this notification
   */
  userId: string;

  /**
   * FK
   */
  meetingId: string;

  /**
   * The meeting that had the time limit expire
   */
  meeting: NewMeeting;
}

export interface IStripeFailPaymentPayload {
  __typename: 'StripeFailPaymentPayload';
  error: IStandardMutationError | null;
  organization: IOrganization | null;

  /**
   * The notification to a billing leader stating the payment was rejected
   */
  notification: INotifyPaymentRejected;
}

/**
 * A notification sent to a user when their payment has been rejected
 */
export interface INotifyPaymentRejected {
  __typename: 'NotifyPaymentRejected';
  organization: IOrganization;

  /**
   * A shortid for the notification
   */
  id: string;

  /**
   * UNREAD if new, READ if viewer has seen it, CLICKED if viewed clicked it
   */
  status: NotificationStatusEnum;

  /**
   * The datetime to activate the notification & send it to the client
   */
  createdAt: any;
  type: NotificationEnum;

  /**
   * *The userId that should see this notification
   */
  userId: string;
}

/**
 * An auth token provided by Parabol to the client
 */
export interface IAuthTokenPayload {
  __typename: 'AuthTokenPayload';

  /**
   * The encoded JWT
   */
  id: string;
}

export type OrganizationSubscriptionPayload =
  | IAddOrgPayload
  | IArchiveOrganizationPayload
  | IDowngradeToPersonalPayload
  | IPayLaterPayload
  | IRemoveOrgUserPayload
  | ISetOrgUserRoleAddedPayload
  | ISetOrgUserRoleRemovedPayload
  | IUpdateCreditCardPayload
  | IUpdateOrgPayload
  | IUpgradeToProPayload;

export interface ISetOrgUserRoleAddedPayload {
  __typename: 'SetOrgUserRoleAddedPayload';
  error: IStandardMutationError | null;
  organization: IOrganization | null;
  updatedOrgMember: IOrganizationUser | null;

  /**
   * If promoted, notify them and give them all other admin notifications
   */
  notificationsAdded: Array<Notification | null> | null;
}

export interface ISetOrgUserRoleRemovedPayload {
  __typename: 'SetOrgUserRoleRemovedPayload';
  error: IStandardMutationError | null;
  organization: IOrganization | null;
  updatedOrgMember: IOrganizationUser | null;
}

export type TaskSubscriptionPayload =
  | IChangeTaskTeamPayload
  | ICreateGitHubIssuePayload
  | ICreateJiraIssuePayload
  | ICreateTaskPayload
  | IDeleteTaskPayload
  | IEditTaskPayload
  | IRemoveOrgUserPayload
  | IRemoveTeamMemberPayload
  | IUpdateTaskPayload
  | IUpdateTaskDueDatePayload;

export type TeamSubscriptionPayload =
  | IAcceptTeamInvitationPayload
  | IAddAgendaItemPayload
  | IAddAtlassianAuthPayload
  | IAddGitHubAuthPayload
  | IAddSlackAuthPayload
  | IAddTeamPayload
  | IArchiveTeamPayload
  | IDenyPushInvitationPayload
  | IDowngradeToPersonalPayload
  | IEndNewMeetingPayload
  | INavigateMeetingPayload
  | IPushInvitationPayload
  | IPromoteToTeamLeadPayload
  | IRemoveAgendaItemPayload
  | IRemoveOrgUserPayload
  | IRemoveTeamMemberPayload
  | IRenameMeetingSuccess
  | ISelectRetroTemplatePayload
  | IStartNewMeetingPayload
  | IUpdateAgendaItemPayload
  | IUpdateCreditCardPayload
  | IUpdateTeamNamePayload
  | IUpgradeToProPayload
  | IAddReflectTemplatePayload
  | IAddReflectTemplatePromptPayload
  | IMoveReflectTemplatePromptPayload
  | IReflectTemplatePromptUpdateDescriptionPayload
  | IReflectTemplatePromptUpdateGroupColorPayload
  | IRemoveAtlassianAuthPayload
  | IRemoveGitHubAuthPayload
  | IRemoveSlackAuthPayload
  | IRemoveReflectTemplatePayload
  | IRemoveReflectTemplatePromptPayload
  | IRenameReflectTemplatePayload
  | IRenameReflectTemplatePromptPayload
  | ISetCheckInEnabledPayload
  | ISetSlackNotificationPayload
  | IUpdateUserProfilePayload
  | IUpdateTemplateScopeSuccess;

/**
 * An action meeting
 */
export interface IActionMeeting {
  __typename: 'ActionMeeting';

  /**
   * The unique meeting id. shortid.
   */
  id: string;

  /**
   * The timestamp the meeting was created
   */
  createdAt: any;

  /**
   * The userId of the desired facilitator (different form facilitatorUserId if disconnected)
   */
  defaultFacilitatorUserId: string;

  /**
   * The timestamp the meeting officially ended
   */
  endedAt: any | null;

  /**
   * The location of the facilitator in the meeting
   */
  facilitatorStageId: string;

  /**
   * The userId (or anonymousId) of the most recent facilitator
   */
  facilitatorUserId: string;

  /**
   * The facilitator team member
   */
  facilitator: ITeamMember;

  /**
   * The team members that were active during the time of the meeting
   */
  meetingMembers: Array<IActionMeetingMember>;

  /**
   * The auto-incrementing meeting number for the team
   */
  meetingNumber: number;
  meetingType: MeetingTypeEnum;

  /**
   * The name of the meeting
   */
  name: string;

  /**
   * The organization this meeting belongs to
   */
  organization: IOrganization;

  /**
   * The phases the meeting will go through, including all phase-specific state
   */
  phases: Array<NewMeetingPhase>;

  /**
   * true if should show the org the conversion modal, else false
   */
  showConversionModal: boolean;

  /**
   * The time the meeting summary was emailed to the team
   */
  summarySentAt: any | null;

  /**
   * foreign key for team
   */
  teamId: string;

  /**
   * The team that ran the meeting
   */
  team: ITeam;

  /**
   * The last time a meeting was updated (stage completed, finished, etc)
   */
  updatedAt: any | null;

  /**
   * The action meeting member of the viewer
   */
  viewerMeetingMember: IActionMeetingMember;

  /**
   * The settings that govern the action meeting
   */
  settings: IActionMeetingSettings;

  /**
   * The number of tasks generated in the meeting
   */
  taskCount: number;

  /**
   * The tasks created within the meeting
   */
  tasks: Array<ITask>;

  /**
   * A single agenda item
   */
  agendaItem: IAgendaItem | null;

  /**
   * All of the agenda items for the meeting
   */
  agendaItems: Array<IAgendaItem>;
}

export interface IAgendaItemOnActionMeetingArguments {
  agendaItemId: string;
}

/**
 * All the meeting specifics for a user in a retro meeting
 */
export interface IActionMeetingMember {
  __typename: 'ActionMeetingMember';

  /**
   * A composite of userId::meetingId
   */
  id: string;

  /**
   * true if present, false if absent, else null
   */
  isCheckedIn: boolean | null;
  meetingId: string;
  meetingType: MeetingTypeEnum;
  teamId: string;
  teamMember: ITeamMember;
  user: IUser;
  userId: string;

  /**
   * The last time a meeting was updated (stage completed, finished, etc)
   */
  updatedAt: any;

  /**
   * The tasks marked as done in the meeting
   */
  doneTasks: Array<ITask>;

  /**
   * The tasks assigned to members during the meeting
   */
  tasks: Array<ITask>;
}

/**
 * The action-specific meeting settings
 */
export interface IActionMeetingSettings {
  __typename: 'ActionMeetingSettings';
  id: string;

  /**
   * The type of meeting these settings apply to
   */
  meetingType: MeetingTypeEnum | null;

  /**
   * The broad phase types that will be addressed during the meeting
   */
  phaseTypes: Array<NewMeetingPhaseTypeEnum>;

  /**
   * FK
   */
  teamId: string;

  /**
   * The team these settings belong to
   */
  team: ITeam | null;
}

/**
 * The meeting phase where all team members discuss the topics with the most votes
 */
export interface IAgendaItemsPhase {
  __typename: 'AgendaItemsPhase';

  /**
   * shortid
   */
  id: string;
  meetingId: string;

  /**
   * The type of phase
   */
  phaseType: NewMeetingPhaseTypeEnum;
  stages: Array<IAgendaItemsStage>;
}

/**
 * The stage where the team discusses a single agenda item
 */
export interface IAgendaItemsStage {
  __typename: 'AgendaItemsStage';

  /**
   * stageId, shortid
   */
  id: string;

  /**
   * The datetime the stage was completed
   */
  endAt: any | null;

  /**
   * foreign key. try using meeting
   */
  meetingId: string;

  /**
   * The meeting this stage belongs to
   */
  meeting: NewMeeting | null;

  /**
   * true if the facilitator has completed this stage, else false. Should be boolean(endAt)
   */
  isComplete: boolean;

  /**
   * true if any meeting participant can navigate to this stage
   */
  isNavigable: boolean;

  /**
   * true if the facilitator can navigate to this stage
   */
  isNavigableByFacilitator: boolean;

  /**
   * The phase this stage belongs to
   */
  phase: NewMeetingPhase | null;

  /**
   * The type of the phase
   */
  phaseType: NewMeetingPhaseTypeEnum | null;

  /**
   * The datetime the stage was started
   */
  startAt: any | null;

  /**
   * Number of times the facilitator has visited this stage
   */
  viewCount: number | null;

  /**
   * true if a time limit is set, false if end time is set, null if neither is set
   */
  isAsync: boolean | null;

  /**
   * true if the viewer is ready to advance, else false
   */
  isViewerReady: boolean;

  /**
   * the number of meeting members ready to advance, excluding the facilitator
   */
  readyCount: number;

  /**
   * The datetime the phase is scheduled to be finished, null if no time limit or end time is set
   */
  scheduledEndTime: any | null;

  /**
   * The suggested ending datetime for a phase to be completed async, null if not enough data to make a suggestion
   */
  suggestedEndTime: any | null;

  /**
   * The suggested time limit for a phase to be completed together, null if not enough data to make a suggestion
   */
  suggestedTimeLimit: number | null;

  /**
   * The number of milliseconds left before the scheduled end time. Useful for
   * unsynced client clocks. null if scheduledEndTime is null
   */
  timeRemaining: number | null;

  /**
   * The id of the agenda item this relates to
   */
  agendaItemId: string;
  agendaItem: IAgendaItem;
}

/**
 * An authentication strategy using Google
 */
export interface IAuthIdentityGoogle {
  __typename: 'AuthIdentityGoogle';

  /**
   * true if the email address using this strategy is verified, else false
   */
  isEmailVerified: boolean;
  type: AuthIdentityTypeEnum;

  /**
   * The googleID for this strategy
   */
  id: string;
}

/**
 * An authentication strategy using an email & password
 */
export interface IAuthIdentityLocal {
  __typename: 'AuthIdentityLocal';

  /**
   * true if the email address using this strategy is verified, else false
   */
  isEmailVerified: boolean;
  type: AuthIdentityTypeEnum;
}

/**
 * The meeting phase where all team members check in one-by-one
 */
export interface ICheckInPhase {
  __typename: 'CheckInPhase';

  /**
   * shortid
   */
  id: string;
  meetingId: string;

  /**
   * The type of phase
   */
  phaseType: NewMeetingPhaseTypeEnum;
  stages: Array<ICheckInStage>;

  /**
   * The checkIn greeting (fun language)
   */
  checkInGreeting: IMeetingGreeting;

  /**
   * The checkIn question of the week (draft-js format)
   */
  checkInQuestion: string;
}

/**
 * A stage that focuses on a single team member
 */
export interface ICheckInStage {
  __typename: 'CheckInStage';

  /**
   * stageId, shortid
   */
  id: string;

  /**
   * The datetime the stage was completed
   */
  endAt: any | null;

  /**
   * foreign key. try using meeting
   */
  meetingId: string;

  /**
   * The meeting this stage belongs to
   */
  meeting: NewMeeting | null;

  /**
   * true if the facilitator has completed this stage, else false. Should be boolean(endAt)
   */
  isComplete: boolean;

  /**
   * true if any meeting participant can navigate to this stage
   */
  isNavigable: boolean;

  /**
   * true if the facilitator can navigate to this stage
   */
  isNavigableByFacilitator: boolean;

  /**
   * The phase this stage belongs to
   */
  phase: NewMeetingPhase | null;

  /**
   * The type of the phase
   */
  phaseType: NewMeetingPhaseTypeEnum | null;

  /**
   * The datetime the stage was started
   */
  startAt: any | null;

  /**
   * Number of times the facilitator has visited this stage
   */
  viewCount: number | null;

  /**
   * true if a time limit is set, false if end time is set, null if neither is set
   */
  isAsync: boolean | null;

  /**
   * true if the viewer is ready to advance, else false
   */
  isViewerReady: boolean;

  /**
   * the number of meeting members ready to advance, excluding the facilitator
   */
  readyCount: number;

  /**
   * The datetime the phase is scheduled to be finished, null if no time limit or end time is set
   */
  scheduledEndTime: any | null;

  /**
   * The suggested ending datetime for a phase to be completed async, null if not enough data to make a suggestion
   */
  suggestedEndTime: any | null;

  /**
   * The suggested time limit for a phase to be completed together, null if not enough data to make a suggestion
   */
  suggestedTimeLimit: number | null;

  /**
   * The number of milliseconds left before the scheduled end time. Useful for
   * unsynced client clocks. null if scheduledEndTime is null
   */
  timeRemaining: number | null;

  /**
   * The meeting member that is the focus for this phase item
   */
  meetingMember: MeetingMember;

  /**
   * foreign key. use teamMember
   */
  teamMemberId: string;

  /**
   * The team member that is the focus for this phase item
   */
  teamMember: ITeamMember;
}

/**
 * An instance of a meeting phase item. On the client, this usually represents a single view
 */
export type NewMeetingTeamMemberStage = ICheckInStage | IUpdatesStage;

/**
 * An instance of a meeting phase item. On the client, this usually represents a single view
 */
export interface INewMeetingTeamMemberStage {
  __typename: 'NewMeetingTeamMemberStage';

  /**
   * The meeting member that is the focus for this phase item
   */
  meetingMember: MeetingMember;

  /**
   * foreign key. use teamMember
   */
  teamMemberId: string;

  /**
   * The team member that is the focus for this phase item
   */
  teamMember: ITeamMember;
}

export interface IMeetingGreeting {
  __typename: 'MeetingGreeting';

  /**
   * The foreign-language greeting
   */
  content: string;

  /**
   * The source language for the greeting
   */
  language: string;
}

/**
 * The meeting phase where all team members discuss the topics with the most votes
 */
export interface IDiscussPhase {
  __typename: 'DiscussPhase';

  /**
   * shortid
   */
  id: string;
  meetingId: string;

  /**
   * The type of phase
   */
  phaseType: NewMeetingPhaseTypeEnum;
  stages: Array<IRetroDiscussStage>;
}

/**
 * An all-purpose meeting phase with no extra state
 */
export interface IGenericMeetingPhase {
  __typename: 'GenericMeetingPhase';

  /**
   * shortid
   */
  id: string;
  meetingId: string;

  /**
   * The type of phase
   */
  phaseType: NewMeetingPhaseTypeEnum;
  stages: Array<IGenericMeetingStage>;
}

/**
 * A project fetched from Jira in real time
 */
export interface IJiraRemoteAvatarUrls {
  __typename: 'JiraRemoteAvatarUrls';
  x48: string;
  x24: string;
  x16: string;
  x32: string;
}

/**
 * A project fetched from Jira in real time
 */
export interface IJiraRemoteProject {
  __typename: 'JiraRemoteProject';
  self: string;
  id: string;
  key: string;
  name: string;
  avatarUrls: IJiraRemoteAvatarUrls;
  projectCategory: IJiraRemoteProjectCategory;
  simplified: boolean;
  style: string;
}

/**
 * A project category fetched from a JiraRemoteProject
 */
export interface IJiraRemoteProjectCategory {
  __typename: 'JiraRemoteProjectCategory';
  self: string;
  id: string;
  name: string;
  description: string;
}

/**
 * A notification alerting the user that they have been promoted (to team or org leader)
 */
export interface INotifyPromoteToOrgLeader {
  __typename: 'NotifyPromoteToOrgLeader';
  organization: IOrganization;

  /**
   * A shortid for the notification
   */
  id: string;

  /**
   * UNREAD if new, READ if viewer has seen it, CLICKED if viewed clicked it
   */
  status: NotificationStatusEnum;

  /**
   * The datetime to activate the notification & send it to the client
   */
  createdAt: any;
  type: NotificationEnum;

  /**
   * *The userId that should see this notification
   */
  userId: string;
}

/**
 * a suggestion to try a retro with your team
 */
export interface ISuggestedActionCreateNewTeam {
  __typename: 'SuggestedActionCreateNewTeam';

  /**
   * shortid
   */
  id: string;

  /**
   * * The timestamp the action was created at
   */
  createdAt: any;

  /**
   * The priority of the suggested action compared to other suggested actions (smaller number is higher priority)
   */
  priority: number | null;

  /**
   * * The timestamp the action was removed at
   */
  removedAt: any;

  /**
   * The specific type of suggested action
   */
  type: SuggestedActionTypeEnum;

  /**
   * * The userId this action is for
   */
  userId: string;

  /**
   * The user than can see this event
   */
  user: IUser;
}

/**
 * a suggestion to invite others to your team
 */
export interface ISuggestedActionInviteYourTeam {
  __typename: 'SuggestedActionInviteYourTeam';

  /**
   * shortid
   */
  id: string;

  /**
   * * The timestamp the action was created at
   */
  createdAt: any;

  /**
   * The priority of the suggested action compared to other suggested actions (smaller number is higher priority)
   */
  priority: number | null;

  /**
   * * The timestamp the action was removed at
   */
  removedAt: any;

  /**
   * The specific type of suggested action
   */
  type: SuggestedActionTypeEnum;

  /**
   * * The userId this action is for
   */
  userId: string;

  /**
   * The user than can see this event
   */
  user: IUser;

  /**
   * The teamId that we suggest you should invite people to
   */
  teamId: string;

  /**
   * The team you should invite people to
   */
  team: ITeam;
}

/**
 * a suggestion to try a retro with your team
 */
export interface ISuggestedActionTryActionMeeting {
  __typename: 'SuggestedActionTryActionMeeting';

  /**
   * shortid
   */
  id: string;

  /**
   * * The timestamp the action was created at
   */
  createdAt: any;

  /**
   * The priority of the suggested action compared to other suggested actions (smaller number is higher priority)
   */
  priority: number | null;

  /**
   * * The timestamp the action was removed at
   */
  removedAt: any;

  /**
   * The specific type of suggested action
   */
  type: SuggestedActionTypeEnum;

  /**
   * * The userId this action is for
   */
  userId: string;

  /**
   * The user than can see this event
   */
  user: IUser;

  /**
   * fk
   */
  teamId: string;

  /**
   * The team you should run an action meeting with
   */
  team: ITeam;
}

/**
 * a suggestion to try a retro with your team
 */
export interface ISuggestedActionTryRetroMeeting {
  __typename: 'SuggestedActionTryRetroMeeting';

  /**
   * shortid
   */
  id: string;

  /**
   * * The timestamp the action was created at
   */
  createdAt: any;

  /**
   * The priority of the suggested action compared to other suggested actions (smaller number is higher priority)
   */
  priority: number | null;

  /**
   * * The timestamp the action was removed at
   */
  removedAt: any;

  /**
   * The specific type of suggested action
   */
  type: SuggestedActionTypeEnum;

  /**
   * * The userId this action is for
   */
  userId: string;

  /**
   * The user than can see this event
   */
  user: IUser;

  /**
   * fk
   */
  teamId: string;

  /**
   * The team you should run a retro with
   */
  team: ITeam;
}

/**
 * a suggestion to invite others to your team
 */
export interface ISuggestedActionTryTheDemo {
  __typename: 'SuggestedActionTryTheDemo';

  /**
   * shortid
   */
  id: string;

  /**
   * * The timestamp the action was created at
   */
  createdAt: any;

  /**
   * The priority of the suggested action compared to other suggested actions (smaller number is higher priority)
   */
  priority: number | null;

  /**
   * * The timestamp the action was removed at
   */
  removedAt: any;

  /**
   * The specific type of suggested action
   */
  type: SuggestedActionTypeEnum;

  /**
   * * The userId this action is for
   */
  userId: string;

  /**
   * The user than can see this event
   */
  user: IUser;
}

/**
 * The details associated with a task integrated with GitHub
 */
export interface ISuggestedIntegrationGitHub {
  __typename: 'SuggestedIntegrationGitHub';
  id: string;
  service: TaskServiceEnum;

  /**
   * The name of the repo. Follows format of OWNER/NAME
   */
  nameWithOwner: string;
}

/**
 * The details associated with a task integrated with Jira
 */
export interface ISuggestedIntegrationJira {
  __typename: 'SuggestedIntegrationJira';
  id: string;
  service: TaskServiceEnum;

  /**
   * URL to a 24x24 avatar icon
   */
  avatar: string;

  /**
   * The project key used by jira as a more human readable proxy for a projectId
   */
  projectKey: string;

  /**
   * The name of the project, prefixed with the cloud name if more than 1 cloudId exists
   */
  projectName: string;

  /**
   * The cloud ID that the project lives on
   */
  cloudId: string;

  /**
   * The full project document fetched from Jira
   */
  remoteProject: IJiraRemoteProject;
}

/**
 * The details associated with a task integrated with GitHub
 */
export interface ITaskIntegrationGitHub {
  __typename: 'TaskIntegrationGitHub';
  id: string;
  service: TaskServiceEnum;
  nameWithOwner: string | null;
  issueNumber: number | null;
}

/**
 * The details associated with a task integrated with Jira
 */
export interface ITaskIntegrationJira {
  __typename: 'TaskIntegrationJira';
  id: string;
  service: TaskServiceEnum;

  /**
   * The project key used by jira as a more human readable proxy for a projectId
   */
  projectKey: string;

  /**
   * The name of the project as defined by jira
   */
  projectName: string;

  /**
   * The cloud ID that the project lives on
   */
  cloudId: string;

  /**
   * The issue key used by jira as a more human readable proxy for the id field
   */
  issueKey: string;

  /**
   * The psuedo-domain to use to generate a base url
   */
  cloudName: string;
}

/**
 * An event for a completed action meeting
 */
export interface ITimelineEventCompletedActionMeeting {
  __typename: 'TimelineEventCompletedActionMeeting';

  /**
   * shortid
   */
  id: string;

  /**
   * * The timestamp the event was created at
   */
  createdAt: any;

  /**
   * the number of times the user has interacted with (ie clicked) this event
   */
  interactionCount: number;

  /**
   * The orgId this event is associated with
   */
  orgId: string;

  /**
   * The organization this event is associated with
   */
  organization: IOrganization | null;

  /**
   * the number of times the user has seen this event
   */
  seenCount: number;

  /**
   * The teamId this event is associated with
   */
  teamId: string;

  /**
   * The team that can see this event
   */
  team: ITeam;

  /**
   * The specific type of event
   */
  type: TimelineEventEnum;

  /**
   * * The userId that can see this event
   */
  userId: string;

  /**
   * The user than can see this event
   */
  user: IUser;

  /**
   * true if the timeline event is active, false if arvhiced
   */
  isActive: boolean;

  /**
   * The meeting that was completed
   */
  meeting: IActionMeeting;

  /**
   * The meetingId that was completed, null if legacyMeetingId is present
   */
  meetingId: string;
}

/**
 * An event for a completed retro meeting
 */
export interface ITimelineEventCompletedRetroMeeting {
  __typename: 'TimelineEventCompletedRetroMeeting';

  /**
   * shortid
   */
  id: string;

  /**
   * * The timestamp the event was created at
   */
  createdAt: any;

  /**
   * the number of times the user has interacted with (ie clicked) this event
   */
  interactionCount: number;

  /**
   * The orgId this event is associated with
   */
  orgId: string;

  /**
   * The organization this event is associated with
   */
  organization: IOrganization | null;

  /**
   * the number of times the user has seen this event
   */
  seenCount: number;

  /**
   * The teamId this event is associated with
   */
  teamId: string;

  /**
   * The team that can see this event
   */
  team: ITeam;

  /**
   * The specific type of event
   */
  type: TimelineEventEnum;

  /**
   * * The userId that can see this event
   */
  userId: string;

  /**
   * The user than can see this event
   */
  user: IUser;

  /**
   * true if the timeline event is active, false if arvhiced
   */
  isActive: boolean;

  /**
   * The meeting that was completed
   */
  meeting: IRetrospectiveMeeting;

  /**
   * The meetingId that was completed
   */
  meetingId: string;
}

/**
 * An event for joining the app
 */
export interface ITimelineEventJoinedParabol {
  __typename: 'TimelineEventJoinedParabol';

  /**
   * shortid
   */
  id: string;

  /**
   * * The timestamp the event was created at
   */
  createdAt: any;

  /**
   * the number of times the user has interacted with (ie clicked) this event
   */
  interactionCount: number;

  /**
   * The orgId this event is associated with. Null if not traceable to one org
   */
  orgId: string | null;

  /**
   * The organization this event is associated with
   */
  organization: IOrganization | null;

  /**
   * the number of times the user has seen this event
   */
  seenCount: number;

  /**
   * The teamId this event is associated with. Null if not traceable to one team
   */
  teamId: string | null;

  /**
   * The team that can see this event
   */
  team: ITeam | null;

  /**
   * The specific type of event
   */
  type: TimelineEventEnum;

  /**
   * * The userId that can see this event
   */
  userId: string;

  /**
   * The user than can see this event
   */
  user: IUser;

  /**
   * true if the timeline event is active, false if arvhiced
   */
  isActive: boolean;
}

/**
 * An event triggered whenever a team is created
 */
export interface ITimelineEventTeamCreated {
  __typename: 'TimelineEventTeamCreated';

  /**
   * shortid
   */
  id: string;

  /**
   * * The timestamp the event was created at
   */
  createdAt: any;

  /**
   * the number of times the user has interacted with (ie clicked) this event
   */
  interactionCount: number;

  /**
   * The orgId this event is associated with
   */
  orgId: string;

  /**
   * The organization this event is associated with
   */
  organization: IOrganization | null;

  /**
   * the number of times the user has seen this event
   */
  seenCount: number;

  /**
   * The teamId this event is associated with. Null if not traceable to one team
   */
  teamId: string;

  /**
   * The team that can see this event
   */
  team: ITeam;

  /**
   * The specific type of event
   */
  type: TimelineEventEnum;

  /**
   * * The userId that can see this event
   */
  userId: string;

  /**
   * The user than can see this event
   */
  user: IUser;

  /**
   * true if the timeline event is active, false if arvhiced
   */
  isActive: boolean;
}

/**
 * The meeting phase where all team members give updates one-by-one
 */
export interface IUpdatesPhase {
  __typename: 'UpdatesPhase';

  /**
   * shortid
   */
  id: string;
  meetingId: string;

  /**
   * The type of phase
   */
  phaseType: NewMeetingPhaseTypeEnum;
  stages: Array<IUpdatesStage>;
}

/**
 * A stage that focuses on a single team member
 */
export interface IUpdatesStage {
  __typename: 'UpdatesStage';

  /**
   * stageId, shortid
   */
  id: string;

  /**
   * The datetime the stage was completed
   */
  endAt: any | null;

  /**
   * foreign key. try using meeting
   */
  meetingId: string;

  /**
   * The meeting this stage belongs to
   */
  meeting: NewMeeting | null;

  /**
   * true if the facilitator has completed this stage, else false. Should be boolean(endAt)
   */
  isComplete: boolean;

  /**
   * true if any meeting participant can navigate to this stage
   */
  isNavigable: boolean;

  /**
   * true if the facilitator can navigate to this stage
   */
  isNavigableByFacilitator: boolean;

  /**
   * The phase this stage belongs to
   */
  phase: NewMeetingPhase | null;

  /**
   * The type of the phase
   */
  phaseType: NewMeetingPhaseTypeEnum | null;

  /**
   * The datetime the stage was started
   */
  startAt: any | null;

  /**
   * Number of times the facilitator has visited this stage
   */
  viewCount: number | null;

  /**
   * true if a time limit is set, false if end time is set, null if neither is set
   */
  isAsync: boolean | null;

  /**
   * true if the viewer is ready to advance, else false
   */
  isViewerReady: boolean;

  /**
   * the number of meeting members ready to advance, excluding the facilitator
   */
  readyCount: number;

  /**
   * The datetime the phase is scheduled to be finished, null if no time limit or end time is set
   */
  scheduledEndTime: any | null;

  /**
   * The suggested ending datetime for a phase to be completed async, null if not enough data to make a suggestion
   */
  suggestedEndTime: any | null;

  /**
   * The suggested time limit for a phase to be completed together, null if not enough data to make a suggestion
   */
  suggestedTimeLimit: number | null;

  /**
   * The number of milliseconds left before the scheduled end time. Useful for
   * unsynced client clocks. null if scheduledEndTime is null
   */
  timeRemaining: number | null;

  /**
   * The meeting member that is the focus for this phase item
   */
  meetingMember: MeetingMember;

  /**
   * foreign key. use teamMember
   */
  teamMemberId: string;

  /**
   * The team member that is the focus for this phase item
   */
  teamMember: ITeamMember;
}

// tslint:enable
