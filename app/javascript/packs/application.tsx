// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@rails/ujs').start()
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('turbolinks').start()
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@rails/activestorage').start()
require('channels')

import 'focus-visible'

// TODO: Let's get all of these loading automatically
// without needing to be specified individually here.
import '../../css/application'
import '../../css/layout'
import '../../css/defaults'

import '../../css/ui-kit/buttons'
import '../../css/ui-kit/tracks'

import '../../css/components/contributions-summary'
import '../../css/components/progress'
import '../../css/components/site-update'
import '../../css/components/community-rank-tag'
import '../../css/components/track-breadcrumbs'
import '../../css/components/contributing/header'
import '../../css/components/header-with-bg'
import '../../css/components/makers-button'
import '../../css/components/avatar-selector'
import '../../css/components/badge'
import '../../css/components/bg-img'
import '../../css/components/code-pane'
import '../../css/components/concept'
import '../../css/components/concept-icon'
import '../../css/components/concept-progress-bar'
import '../../css/components/copy-text-to-clipboard'
import '../../css/components/details'
import '../../css/components/combo-button'
import '../../css/components/exercise-header'
import '../../css/components/flash'
import '../../css/components/icon'
import '../../css/components/iteration-summary'
import '../../css/components/accordion-section'
import '../../css/components/underline'
import '../../css/components/docs-main-nav'
import '../../css/components/docs-side-nav'
import '../../css/components/docs-tracks-list'
import '../../css/components/iterations-footer'
import '../../css/components/solution-iterations'

import '../../css/components/share-panel'
import '../../css/components/split-pane'
import '../../css/components/heading-with-count'
import '../../css/components/notification'
import '../../css/components/prominent-link'
import '../../css/components/reputation'
import '../../css/components/primary-reputation'
import '../../css/components/site-header'
import '../../css/components/tab'
import '../../css/components/tab-2'
import '../../css/components/textual-content'
import '../../css/components/tracks-list'
import '../../css/components/pagination'
import '../../css/components/modal'
import '../../css/components/radio'
import '../../css/components/checkbox'
import '../../css/components/select'
import '../../css/components/single-select'
import '../../css/components/multiple-select'
import '../../css/components/track-select'
import '../../css/tooltips/generic'
import '../../css/tooltips/base'
import '../../css/tooltips/concept'
import '../../css/tooltips/user'
import '../../css/tooltips/exercise'
import '../../css/tooltips/student'
import '../../css/components/user_activity'
import '../../css/components/search-bar'
import '../../css/components/community-solution'
import '../../css/components/iteration-processing-status'
import '../../css/components/notification-dot'

import '../../css/components/mentor/header'
import '../../css/components/mentor/solution-row'
import '../../css/components/mentor/discussion'

import '../../css/components/track/header'
import '../../css/components/track/concept-nav'
import '../../css/components/track/concept-map'
import '../../css/components/iteration-pane'
import '../../css/components/explainer'
import '../../css/components/markdown-editor'
import '../../css/components/mentor-discussion-summary'
import '../../css/components/mentor-track-selector'
import '../../css/components/tag'
import '../../css/components/difficulty-tag'
import '../../css/components/exercise-status-tag'
import '../../css/components/exercise-type-tag'
import '../../css/components/divider'
import '../../css/components/faces'
import '../../css/components/exercise-dot'
import '../../css/components/results-zone'
import '../../css/components/introducer'
import '../../css/components/profile-header'
import '../../css/components/track-filter'
import '../../css/components/mentor-discussion-widget'
import '../../css/components/completed-exercise-progress'

import '../../css/components/widgets/exercise'
import '../../css/components/mentor-discussion-post-editor'
import '../../css/components/test-run'
import '../../css/components/alert'
import '../../css/components/diff'
import '../../css/components/cli-walkthrough'
import '../../css/components/cli-walkthrough-button'

import '../../css/modals/destructive'
import '../../css/modals/badge'
import '../../css/modals/update-exercise'
import '../../css/modals/makers'
import '../../css/modals/test-run'
import '../../css/modals/activate-track-mode'
import '../../css/modals/crop-avatar'
import '../../css/modals/editor-hints'
import '../../css/modals/profile-first-time'
import '../../css/modals/completed-tutorial-exercise'
import '../../css/modals/completed-exercise'
import '../../css/modals/publish-exercise'
import '../../css/modals/mentoring-sessions'
import '../../css/modals/finish-mentor-discussion'
import '../../css/modals/confirm-finish-student-mentor-discussion'
import '../../css/modals/finish-student-mentor-discussion'
import '../../css/modals/welcome-to-v3'
import '../../css/modals/become-mentor'
import '../../css/modals/change-mentor-tracks'
import '../../css/modals/select-exercise-for-mentoring'
import '../../css/modals/testimonial'
import '../../css/modals/change-published-iteration'
import '../../css/modals/unpublish-solution'
import '../../css/modals/cli-walkthrough'

import '../../css/dropdowns/generic-menu'
import '../../css/dropdowns/share-solution'
import '../../css/dropdowns/notifications'
import '../../css/dropdowns/reputation'
import '../../css/dropdowns/request-mentoring'
import '../../css/dropdowns/open-editor-button'

import '../../css/pages/settings'
import '../../css/pages/contributing-dashboard'
import '../../css/pages/contributing-contributors'
import '../../css/pages/contributing-tasks'
import '../../css/pages/auth'
import '../../css/pages/dashboard'
import '../../css/pages/docs-show'
import '../../css/pages/docs-index'
import '../../css/pages/docs-tracks'
import '../../css/pages/editor'
import '../../css/pages/onboarding'
import '../../css/pages/profile-intro'
import '../../css/pages/profile-new'
import '../../css/pages/profile'
import '../../css/pages/profile-badges'
import '../../css/pages/profile-solutions'
import '../../css/pages/profile-contributions'
import '../../css/pages/profile-testimonials'
import '../../css/pages/staging' // TODO: Remove for launch
import '../../css/pages/track-shared-index'
import '../../css/pages/concepts-index'
import '../../css/pages/concept-show'
import '../../css/pages/exercise-show'
import '../../css/pages/exercise-mentoring'
import '../../css/pages/exercises-index'
import '../../css/pages/iterations-index'
import '../../css/pages/community-solutions-index'
import '../../css/pages/community-solution-show'
import '../../css/pages/track-index'
import '../../css/pages/track-show-joined'
import '../../css/pages/track-show-unjoined'
import '../../css/pages/mentoring/external'
import '../../css/pages/mentoring/inbox'
import '../../css/pages/mentoring/queue'
import '../../css/pages/mentoring/testimonials'
import '../../css/pages/maintaining/dashboard'
import '../../css/pages/maintaining/track'
import '../../css/pages/journey'
import '../../css/pages/journey/overview'
import '../../css/pages/journey/solutions'
import '../../css/pages/journey/reputation'
import '../../css/pages/journey/badges'

import 'tippy.js/animations/shift-away-subtle.css'
import 'tippy.js/dist/svg-arrow.css'
import 'easymde/dist/easymde.min.css'
import '../../css/highlighters/highlightjs-light'
import '../../css/highlighters/highlightjs-dark'

import React from 'react'
import { initReact } from '../utils/react-bootloader.jsx'
import * as Common from '../components/common'
import * as Maintaining from '../components/maintaining'
import * as Mentoring from '../components/mentoring'
import { Links as TryMentoringButtonLinks } from '../components/mentoring/TryMentoringButton'
import * as Student from '../components/student'
import {
  SolutionSummaryLinks,
  Track as SolutionSummaryTrack,
  SolutionSummaryRequest,
} from '../components/student/SolutionSummary'
import {
  Links as NudgeLinks,
  Track as NudgeTrack,
} from '../components/student/Nudge'
import { Links as MentoringQueueLinks } from '../components/mentoring/Queue'
import * as TrackComponents from '../components/track'
import * as JourneyComponents from '../components/journey'
import { Editor, EditorConfig } from '../components/Editor'
import { ConceptMap } from '../components/concept-map/ConceptMap'
import { IConceptMap } from '../components/concept-map/concept-map-types'
import { camelizeKeys } from 'humps'
import {
  Iteration,
  Track,
  Exercise,
  MentorSessionRequest,
  MentorSessionTrack,
  MentorSessionExercise,
  MentorDiscussion,
  MentoredTrack,
  SolutionForStudent,
  CommunitySolution,
  Testimonial,
  MentoredTrackExercise,
  User,
  SiteUpdate,
  CommunicationPreferences,
  TrackContribution,
} from '../components/types'

import { Assignment, Submission } from '../components/editor/types'
import { Student as MentoringSessionStudent } from '../components/types'
import {
  Links as MentoringSessionLinks,
  Scratchpad as MentoringSessionScratchpad,
} from '../components/mentoring/Session'
import {
  Mentor as StudentMentoringSessionMentor,
  Video as StudentMentoringSessionVideo,
  Links as StudentMentoringSessionLinks,
} from '../components/student/MentoringSession'
import { Links as RequestMentoringButtonLinks } from '../components/student/RequestMentoringButton'
import {
  Track as IterationPageTrack,
  Exercise as IterationPageExercise,
  Links as IterationPageLinks,
  IterationPageRequest,
} from '../components/student/IterationPage'
import { Links as PublishedSolutionLinks } from '../components/student/PublishedSolution'
import { Track as MentoringTestimonialsListTrack } from '../components/mentoring/TestimonialsList'
import * as Tooltips from '../components/tooltips'
import * as Dropdowns from '../components/dropdowns'
import { Links as TrackMenuLinks } from '../components/dropdowns/TrackMenu'
import * as Profile from '../components/profile'
import * as CommunitySolutions from '../components/community-solutions'
import * as Contributing from '../components/contributing'
import { Request as ContributingTasksRequest } from '../components/contributing/TasksList'
import * as Settings from '../components/settings'
import { TrackData as ProfileCommunitySolutionsListTrackData } from '../components/profile/CommunitySolutionsList'
import { Category as ProfileContributionsListCategory } from '../components/profile/ContributionsList'
import { Category as JourneyPageCategory } from '../components/journey/JourneyPage'
import { Links as SolutionViewLinks } from '../components/common/SolutionView'

function camelizeKeysAs<T>(object: any): T {
  return (camelizeKeys(object) as unknown) as T
}

// Add all react components here.
// Each should map 1-1 to a component in app/helpers/components
initReact({
  'maintaining-submissions-summary-table': (data: any) => (
    <Maintaining.SubmissionsSummaryTable
      submissions={data.submissions.map((s: any) => {
        return camelizeKeys(s)
      })}
    />
  ),
  'journey-journey-page': (data: any) => (
    <JourneyComponents.JourneyPage
      categories={camelizeKeysAs<readonly JourneyPageCategory[]>(
        data.categories
      )}
      defaultCategory={data.default_category}
    />
  ),
  'common-markdown-editor': (data: any) => (
    <Common.MarkdownEditor contextId={data.context_id} />
  ),
  'common-concept-widget': (data: any) => (
    <Common.ConceptWidget concept={data.concept} />
  ),
  'common-modal': (data: any) => <Common.Modal html={data.html} />,
  'common-solution-view': (data: any) => (
    <Common.SolutionView
      iterations={camelizeKeysAs<readonly Iteration[]>(data.iterations)}
      language={data.language}
      indentSize={data.indent_size}
      publishedIterationIdx={data.published_iteration_idx}
      outOfDate={data.out_of_date}
      links={camelizeKeysAs<SolutionViewLinks>(data.links)}
    />
  ),
  'common-expander': (data: any) => (
    <Common.Expander
      content={data.content}
      buttonTextCompressed={data.button_text_compressed}
      buttonTextExpanded={data.button_text_expanded}
      className={data.class_name}
    />
  ),
  'common-community-solution': (data: any) => (
    <Common.CommunitySolution
      solution={camelizeKeysAs<CommunitySolution>(data.solution)}
      context={data.context}
    />
  ),
  'common-introducer': (data: any) => (
    <Common.Introducer
      icon={data.icon}
      content={data.content}
      endpoint={data.endpoint}
      hidden={data.hidden}
    />
  ),
  'common-cli-walkthrough': (data: any) => (
    <Common.CLIWalkthrough html={data.html} />
  ),
  'common-cli-walkthrough-button': (data: any) => (
    <Common.CLIWalkthroughButton html={data.html} />
  ),
  'track-exercise-community-solutions-list': (data: any) => (
    <TrackComponents.ExerciseCommunitySolutionsList
      request={camelizeKeysAs<Request>(data.request)}
    />
  ),
  'track-exercise-makers-button': (data: any) => (
    <TrackComponents.ExerciseMakersButton
      avatarUrls={camelizeKeysAs<readonly string[]>(data.avatar_urls)}
      numAuthors={data.num_authors}
      numContributors={data.num_contributors}
      links={data.links}
    />
  ),
  'track-concept-makers-button': (data: any) => (
    <TrackComponents.ConceptMakersButton
      avatarUrls={camelizeKeysAs<readonly string[]>(data.avatar_urls)}
      numAuthors={data.num_authors}
      numContributors={data.num_contributors}
      links={data.links}
    />
  ),
  'common-exercise-widget': (data: any) => (
    <Common.ExerciseWidget
      exercise={camelizeKeysAs<Exercise>(data.exercise)}
      track={camelizeKeysAs<Track>(data.track)}
      solution={camelizeKeysAs<SolutionForStudent>(data.solution)}
      links={data.links}
      renderAsLink={data.render_as_link}
      renderBlurb={data.render_blurb}
      isSkinny={data.skinny}
    />
  ),
  'common-share-solution-button': (data: any) => (
    <Common.ShareSolutionButton title={data.title} links={data.links} />
  ),
  'common-site-updates-list': (data: any) => (
    <Common.SiteUpdatesList
      updates={camelizeKeysAs<readonly SiteUpdate[]>(data.updates)}
      context={data.context}
    />
  ),
  'contributing-contributors-list': (data: any) => (
    <Contributing.ContributorsList
      request={camelizeKeysAs<Request>(data.request)}
      tracks={camelizeKeysAs<readonly Track[]>(data.tracks)}
    />
  ),
  'contributing-tasks-list': (data: any) => (
    <Contributing.TasksList
      request={camelizeKeysAs<ContributingTasksRequest>(data.request)}
      tracks={camelizeKeysAs<readonly Track[]>(data.tracks)}
    />
  ),
  'mentoring-inbox': (data: any) => (
    <Mentoring.Inbox
      discussionsRequest={data.discussions_request}
      tracksRequest={data.tracks_request}
      sortOptions={data.sort_options}
    />
  ),
  'mentoring-queue': (data: any) => (
    <Mentoring.Queue
      queueRequest={camelizeKeysAs<Request>(data.queue_request)}
      tracksRequest={camelizeKeysAs<Request>(data.tracks_request)}
      defaultTrack={camelizeKeysAs<MentoredTrack>(data.default_track)}
      defaultExercise={camelizeKeysAs<MentoredTrackExercise>(
        data.default_exercise
      )}
      links={camelizeKeysAs<MentoringQueueLinks>(data.links)}
      sortOptions={data.sort_options}
    />
  ),
  'mentoring-session': (data: any) => (
    <Mentoring.Session
      userId={data.user_id}
      discussion={camelizeKeysAs<MentorDiscussion>(data.discussion)}
      mentorSolution={camelizeKeysAs<CommunitySolution>(data.mentor_solution)}
      student={camelizeKeysAs<MentoringSessionStudent>(data.student)}
      track={camelizeKeysAs<MentorSessionTrack>(data.track)}
      exercise={camelizeKeysAs<MentorSessionExercise>(data.exercise)}
      iterations={camelizeKeysAs<Iteration[]>(data.iterations)}
      links={camelizeKeysAs<MentoringSessionLinks>(data.links)}
      request={camelizeKeysAs<MentorSessionRequest>(data.request)}
      scratchpad={camelizeKeysAs<MentoringSessionScratchpad>(data.scratchpad)}
      notes={data.notes}
      outOfDate={data.out_of_date}
    />
  ),
  'mentoring-try-mentoring-button': (data: any) => (
    <Mentoring.TryMentoringButton
      links={camelizeKeysAs<TryMentoringButtonLinks>(data.links)}
    />
  ),
  'mentoring-testimonials-list': (data: any) => (
    <Mentoring.TestimonialsList
      request={camelizeKeysAs<Request>(data.request)}
      tracks={camelizeKeysAs<readonly MentoringTestimonialsListTrack[]>(
        data.tracks
      )}
    />
  ),
  'student-tracks-list': (data: any) => (
    <Student.TracksList request={data.request} tagOptions={data.tag_options} />
  ),
  'student-exercise-list': (data: any) => (
    <Student.ExerciseList
      request={camelizeKeysAs<Request>(data.request)}
      track={camelizeKeysAs<Track>(data.track)}
    />
  ),
  'student-exercise-status-chart': (data: any) => (
    <Student.ExerciseStatusChart
      exercisesData={data.exercises_data}
      links={data.links}
    />
  ),
  'student-exercise-status-dot': (data: any) => (
    <Student.ExerciseStatusDot
      slug={data.slug}
      exerciseStatus={data.exercise_status}
      type={data.type}
      links={data.links}
    />
  ),
  'student-open-editor-button': (data: any) => (
    <Student.OpenEditorButton
      status={data.status}
      links={data.links}
      command={data.command}
    />
  ),
  'student-complete-exercise-button': (data: any) => (
    <Student.CompleteExerciseButton
      endpoint={data.endpoint}
      iterations={camelizeKeysAs<readonly Iteration[]>(data.iterations)}
    />
  ),
  'student-solution-summary': (data: any) => (
    <Student.SolutionSummary
      discussions={camelizeKeysAs<MentorDiscussion[]>(data.discussions)}
      solution={camelizeKeysAs<SolutionForStudent>(data.solution)}
      request={camelizeKeysAs<SolutionSummaryRequest>(data.request)}
      links={camelizeKeysAs<SolutionSummaryLinks>(data.links)}
      track={camelizeKeysAs<SolutionSummaryTrack>(data.track)}
      exerciseType={data.exercise_type}
    />
  ),
  'student-nudge': (data: any) => (
    <Student.Nudge
      solution={camelizeKeysAs<SolutionForStudent>(data.solution)}
      track={camelizeKeysAs<NudgeTrack>(data.track)}
      discussions={camelizeKeysAs<readonly MentorDiscussion[]>(
        data.discussions
      )}
      request={camelizeKeysAs<SolutionSummaryRequest>(data.request)}
      iterations={camelizeKeysAs<readonly Iteration[]>(data.iterations)}
      exerciseType={data.exercise_type}
      links={camelizeKeysAs<NudgeLinks>(data.links)}
    />
  ),
  'student-iteration-page': (data: any) => (
    <Student.IterationPage
      solutionId={data.solution_id}
      request={camelizeKeysAs<IterationPageRequest>(data.request)}
      exercise={camelizeKeysAs<IterationPageExercise>(data.exercise)}
      track={camelizeKeysAs<IterationPageTrack>(data.track)}
      links={camelizeKeysAs<IterationPageLinks>(data.links)}
    />
  ),
  'student-mentoring-session': (data: any) => (
    <Student.MentoringSession
      userId={data.user_id}
      discussion={camelizeKeysAs<MentorDiscussion>(data.discussion)}
      iterations={camelizeKeysAs<Iteration[]>(data.iterations)}
      mentor={camelizeKeysAs<StudentMentoringSessionMentor>(data.mentor)}
      track={camelizeKeysAs<MentorSessionTrack>(data.track)}
      exercise={camelizeKeysAs<MentorSessionExercise>(data.exercise)}
      trackObjectives={data.track_objectives}
      videos={camelizeKeysAs<StudentMentoringSessionVideo[]>(data.videos)}
      request={camelizeKeysAs<MentorSessionRequest>(data.request)}
      links={camelizeKeysAs<StudentMentoringSessionLinks>(data.links)}
    />
  ),
  'student-request-mentoring-button': (data: any) => (
    <Student.RequestMentoringButton
      request={data.request}
      links={camelizeKeysAs<RequestMentoringButtonLinks>(data.links)}
    />
  ),
  'student-publish-solution-button': (data: any) => (
    <Student.PublishSolutionButton
      endpoint={data.endpoint}
      iterations={camelizeKeysAs<readonly Iteration[]>(data.iterations)}
    />
  ),
  'student-published-solution': (data: any) => (
    <Student.PublishedSolution
      solution={camelizeKeysAs<CommunitySolution>(data.solution)}
      publishedIterationIdx={data.published_iteration_idx}
      iterations={camelizeKeysAs<readonly Iteration[]>(data.iterations)}
      links={camelizeKeysAs<PublishedSolutionLinks>(data.links)}
    />
  ),
  'student-update-exercise-notice': (data: any) => (
    <Student.UpdateExerciseNotice links={data.links} />
  ),
  'concept-map': (data: any) => {
    const mapData: IConceptMap = camelizeKeysAs<IConceptMap>(data.graph)

    return <ConceptMap {...mapData} />
  },
  'track-iteration-summary': (data: any) => (
    <TrackComponents.IterationSummaryWithWebsockets
      iteration={camelizeKeysAs<Iteration>(data.iteration)}
      className={data.class_name}
      isLatest={false}
      showSubmissionMethod={true}
      showTestsStatusAsButton={!!data.show_tests_status_as_button}
      showFeedbackIndicator={!!data.show_feedback_indicator}
    />
  ),
  editor: (data: any) => (
    <Editor
      endpoint={data.endpoint}
      initialSubmission={camelizeKeysAs<Submission>(data.submission)}
      files={data.files}
      tests={data.tests}
      highlightJSLanguage={data.highlightjs_language}
      averageTestDuration={data.average_test_duration}
      exercisePath={data.exercise_path}
      trackTitle={data.track_title}
      trackSlug={data.track_slug}
      exerciseTitle={data.exercise_title}
      introduction={data.introduction}
      assignment={camelizeKeysAs<Assignment>(data.assignment)}
      exampleFiles={data.example_files}
      storageKey={data.storage_key}
      debuggingInstructions={data.debugging_instructions}
      config={camelizeKeysAs<EditorConfig>(data.config)}
    />
  ),
  'mentored-student-tooltip': (data: any) => (
    <Tooltips.StudentTooltip
      requestId={data.endpoint}
      endpoint={data.endpoint}
    />
  ),
  'user-tooltip': (data: any, elem: HTMLElement) => (
    <Tooltips.UserTooltip
      contentEndpoint={data.endpoint}
      referenceElement={elem}
      referenceUserHandle={data.handle}
      placement={data.placement}
      hoverRequestToShow={true}
      focusRequestToShow={true}
    />
  ),
  'exercise-tooltip': (data: any, elem: HTMLElement) => (
    <Tooltips.UserTooltip
      contentEndpoint={data.endpoint}
      referenceElement={elem}
      referenceUserHandle={data.handle}
      placement={data.placement}
      hoverRequestToShow={true}
      focusRequestToShow={true}
    />
  ),
  'dropdowns-dropdown': (data: any) => (
    <Dropdowns.Dropdown
      menuButton={data.menu_button}
      menuItems={data.menu_items}
    />
  ),
  'dropdowns-notifications': (data: any) => (
    <Dropdowns.Notifications endpoint={data.endpoint} />
  ),
  'dropdowns-reputation': (data: any) => (
    <Dropdowns.Reputation
      endpoint={data.endpoint}
      defaultIsSeen={data.is_seen}
      defaultReputation={data.reputation}
    />
  ),
  'dropdowns-track-menu': (data: any) => (
    <Dropdowns.TrackMenu
      track={data.track}
      links={camelizeKeysAs<TrackMenuLinks>(data.links)}
    />
  ),
  'common-copy-to-clipboard-button': (data: any) => (
    <Common.CopyToClipboardButton textToCopy={data.text_to_copy} />
  ),
  'common-icon': (data: any) => <Common.Icon icon={data.icon} alt={data.alt} />,
  'common-graphical-icon': (data: any) => (
    <Common.GraphicalIcon icon={data.icon} />
  ),
  'profile-testimonials-summary': (data: any) => (
    <Profile.TestimonialsSummary
      handle={data.handle}
      numTestimonials={data.num_testimonials}
      numSolutionsMentored={data.num_solutions_mentored}
      numStudentsHelped={data.num_students_helped}
      numTestimonialsReceived={data.num_testimonials_received}
      testimonials={camelizeKeysAs<Testimonial[]>(data.testimonials)}
      links={data.links}
    />
  ),
  'profile-community-solutions-list': (data: any) => (
    <Profile.CommunitySolutionsList
      request={camelizeKeysAs<Request>(data.request)}
      tracks={camelizeKeysAs<ProfileCommunitySolutionsListTrackData[]>(
        data.tracks
      )}
    />
  ),
  'profile-contributions-list': (data: any) => (
    <Profile.ContributionsList
      categories={camelizeKeysAs<readonly ProfileContributionsListCategory[]>(
        data.categories
      )}
    />
  ),
  'profile-contributions-summary': (data: any) => {
    const tracks = data.tracks.map(
      (track: any) =>
        new TrackContribution(camelizeKeysAs<TrackContribution>(track))
    )

    return (
      <Profile.ContributionsSummary
        tracks={tracks}
        handle={data.handle}
        links={data.links}
      />
    )
  },
  'profile-first-time-modal': (data: any) => (
    <Profile.FirstTimeModal links={data.links} />
  ),
  'community-solutions-star-button': (data: any) => (
    <CommunitySolutions.StarButton
      defaultNumStars={data.num_stars}
      defaultIsStarred={data.is_starred}
      links={data.links}
    />
  ),
  'profile-avatar-selector': (data: any) => (
    <Profile.AvatarSelector
      user={camelizeKeysAs<User>(data.user)}
      links={data.links}
    />
  ),
  'common-progress-graph': (data: {
    values: Array<number>
    width: number
    height: number
  }) => (
    <Common.ProgressGraph
      data={data.values}
      height={data.height}
      width={data.width}
      smooth
    />
  ),
  'settings-profile-form': (data: any) => (
    <Settings.ProfileForm defaultUser={data.user} links={data.links} />
  ),
  'settings-pronouns-form': (data: any) => (
    <Settings.PronounsForm
      handle={data.handle}
      defaultPronounParts={data.pronoun_parts}
      links={data.links}
    />
  ),
  'settings-handle-form': (data: any) => (
    <Settings.HandleForm defaultHandle={data.handle} links={data.links} />
  ),
  'settings-email-form': (data: any) => (
    <Settings.EmailForm defaultEmail={data.email} links={data.links} />
  ),
  'settings-password-form': (data: any) => (
    <Settings.PasswordForm links={data.links} />
  ),
  'settings-token-form': (data: any) => (
    <Settings.TokenForm defaultToken={data.token} links={data.links} />
  ),
  'settings-communication-preferences-form': (data: any) => (
    <Settings.CommunicationPreferencesForm
      defaultPreferences={camelizeKeysAs<CommunicationPreferences>(
        data.preferences
      )}
      links={data.links}
    />
  ),
  'settings-delete-account-button': (data: any) => (
    <Settings.DeleteAccountButton handle={data.handle} links={data.links} />
  ),
  'settings-reset-account-button': (data: any) => (
    <Settings.ResetAccountButton handle={data.handle} links={data.links} />
  ),
})

import { highlightAll } from '../utils/highlight'
import { Request } from '../hooks/request-query'

document.addEventListener('turbolinks:load', () => {
  highlightAll()
})

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.

const images = require.context('../images', true)
const imagePath = (name: any) => images(name)
