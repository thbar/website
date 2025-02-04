import React, { useCallback, useState } from 'react'

import { CloseButton } from '../mentoring/session/CloseButton'
import { IterationView } from '../mentoring/session/IterationView'
import { useIterationScrolling } from '../mentoring/session/useIterationScrolling'
import { SessionInfo } from './mentoring-session/SessionInfo'
import { DiscussionInfo } from './mentoring-session/DiscussionInfo'
import { DiscussionActions } from './mentoring-session/DiscussionActions'

import {
  Iteration,
  MentorDiscussion,
  MentorSessionRequest as Request,
  MentorSessionTrack as Track,
  MentorSessionExercise as Exercise,
} from '../types'
import { MentoringRequest } from './mentoring-session/MentoringRequest'

export type Links = {
  exercise: string
  learnMoreAboutPrivateMentoring: string
  privateMentoring: string
  mentoringGuide: string
  createMentorRequest: string
}

export type Video = {
  url: string
  title: string
  date: string
}

export type Mentor = {
  id: number
  avatarUrl: string
  name: string
  bio: string
  handle: string
  reputation: number
  numDiscussions: number
}

export const MentoringSession = ({
  userHandle,
  discussion,
  mentor,
  iterations,
  exercise,
  trackObjectives,
  videos,
  track,
  request: initialRequest,
  links,
}: {
  userHandle: string
  discussion?: MentorDiscussion
  mentor?: Mentor
  iterations: readonly Iteration[]
  exercise: Exercise
  trackObjectives: string
  videos: Video[]
  track: Track
  request?: Request
  links: Links
}): JSX.Element => {
  const [mentorRequest, setMentorRequest] = useState(initialRequest)

  const handleCreateMentorRequest = useCallback((mentorRequest) => {
    setMentorRequest(mentorRequest)
  }, [])
  const [settings, setSettings] = useState({ scroll: false, click: false })
  const {
    currentIteration,
    handleIterationClick,
    handleIterationScroll,
  } = useIterationScrolling({
    iterations: iterations,
    isScrollOn: settings.scroll,
    isClickOn: settings.click,
  })

  return (
    <div className="c-mentor-discussion">
      <div className="lhs">
        <header className="discussion-header">
          <CloseButton url={links.exercise} />
          <SessionInfo track={track} exercise={exercise} mentor={mentor} />
          {discussion ? (
            <DiscussionActions
              discussion={discussion}
              links={{ exercise: exercise.links.self }}
            />
          ) : null}
        </header>
        <IterationView
          iterations={iterations}
          currentIteration={currentIteration}
          onClick={handleIterationClick}
          language={track.highlightjsLanguage}
          indentSize={track.indentSize}
          isOutOfDate={false} /* TODO: Set this correctly */
          settings={settings}
          setSettings={setSettings}
        />
      </div>
      <div className="rhs">
        {discussion && mentor ? (
          <DiscussionInfo
            discussion={discussion}
            mentor={mentor}
            userHandle={userHandle}
            iterations={iterations}
            onIterationScroll={handleIterationScroll}
            links={{ exercise: exercise.links.self }}
          />
        ) : (
          <MentoringRequest
            trackObjectives={trackObjectives}
            track={track}
            exercise={exercise}
            request={mentorRequest}
            latestIteration={iterations[iterations.length - 1]}
            videos={videos}
            links={links}
            onCreate={handleCreateMentorRequest}
          />
        )}
      </div>
    </div>
  )
}
