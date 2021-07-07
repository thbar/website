import React from 'react'
import { DiscussionPost } from '../discussion/DiscussionPost'
import { MentorSessionRequest as Request, Iteration } from '../../types'
import { IterationMarker } from '../session/IterationMarker'

export const RequestDetails = ({
  iteration,
  request,
}: {
  iteration: Iteration
  request: Request
}): JSX.Element => {
  return (
    /* TODO: This wrapper is needed to make the styling correct. Maybe unscope the iteration marker? */
    <div className="discussion">
      <IterationMarker iteration={iteration} userIsStudent={false} />
      <DiscussionPost
        uuid="iteration-marker"
        iterationIdx={iteration.idx}
        authorHandle={request.student.handle}
        authorAvatarUrl={request.student.avatarUrl}
        byStudent
        contentMarkdown={request.comment}
        contentHtml={request.comment}
        updatedAt={request.updatedAt}
        links={{}}
      />
    </div>
  )
}
