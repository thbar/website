import React, { useCallback } from 'react'
import { useIsMounted } from 'use-is-mounted'
import { useMutation } from 'react-query'
import { sendRequest } from '../../../../utils/send-request'
import { FormButton } from '../../../common'
import { FetchingBoundary } from '../../../FetchingBoundary'
import { MentorDiscussion } from '../../../types'

const DEFAULT_ERROR = new Error('Unable to submit mentor rating')

export const SatisfiedStep = ({
  discussion,
  onRequeued,
  onNotRequeued,
  onBack,
}: {
  discussion: MentorDiscussion
  onRequeued: () => void
  onNotRequeued: () => void
  onBack: () => void
}): JSX.Element => {
  const isMountedRef = useIsMounted()
  const [finish, { status, error }] = useMutation(
    (requeue: boolean) => {
      return sendRequest({
        endpoint: discussion.links.finish,
        method: 'PATCH',
        body: JSON.stringify({ rating: 3, requeue: requeue }),
        isMountedRef: isMountedRef,
      })
    },
    {
      onSuccess: (data, requeue) => {
        requeue ? onRequeued() : onNotRequeued()
      },
    }
  )
  const handleBack = useCallback(() => {
    onBack()
  }, [onBack])

  return (
    <section className="acceptable-decision-step">
      <h2>Sorry that this mentoring wasn't great.</h2>
      <p className="explanation">
        Would you like to put this exercise back in the queue for another mentor
        to look at?
      </p>

      <div className="form-buttons">
        <FormButton
          type="button"
          onClick={handleBack}
          status={status}
          className="btn-default btn-m"
        >
          Back
        </FormButton>
        <FormButton
          type="button"
          onClick={() => finish(false)}
          status={status}
          className="btn-enhanced btn-m"
        >
          No thanks
        </FormButton>
        <FormButton
          type="button"
          onClick={() => finish(true)}
          status={status}
          className="btn-enhanced btn-m"
        >
          Yes please
        </FormButton>
        <FetchingBoundary
          status={status}
          error={error}
          defaultError={DEFAULT_ERROR}
        />
      </div>
    </section>
  )
}
