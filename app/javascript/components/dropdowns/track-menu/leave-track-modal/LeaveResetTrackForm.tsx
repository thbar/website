import React, { useCallback } from 'react'
import { useMutation } from 'react-query'
import { useIsMounted } from 'use-is-mounted'
import { sendRequest } from '../../../../utils/send-request'
import { typecheck } from '../../../../utils/typecheck'
import { FormButton } from '../../../common/FormButton'
import { ErrorBoundary, ErrorMessage } from '../../../ErrorBoundary'
import { Track } from '../../../types'
import { UserTrack } from '../LeaveTrackModal'
import { useConfirmation } from '../../../../hooks/use-confirmation'

const DEFAULT_ERROR = new Error('Unable to leave and reset track')

export const LeaveResetTrackForm = ({
  endpoint,
  track,
  onCancel,
}: {
  endpoint: string
  track: Track
  onCancel: () => void
}): JSX.Element => {
  const confirmation = `reset ${track.slug}`
  const isMountedRef = useIsMounted()
  const [mutation, { status, error }] = useMutation<UserTrack | undefined>(
    async () => {
      return sendRequest({
        endpoint: endpoint,
        method: 'PATCH',
        body: JSON.stringify({ reset: true }),
        isMountedRef: isMountedRef,
      }).then((json) => {
        if (!json) {
          return
        }

        return typecheck<UserTrack>(json, 'userTrack')
      })
    },
    {
      onSuccess: (track) => {
        if (!track) {
          return
        }

        window.location.replace(track.links.self)
      },
    }
  )
  const handleCancel = useCallback(() => {
    onCancel()
  }, [onCancel])
  const { attempt, setAttempt, isAttemptPass } = useConfirmation(confirmation)

  return (
    <form>
      <div className="info">
        <h2>You’re about to leave and reset the {track.title} track.</h2>
      </div>
      <hr />
      <label htmlFor="confirmation">
        To confirm, write <pre>{confirmation}</pre> in the box below:
      </label>

      <input
        id="confirmation"
        type="text"
        autoComplete="off"
        value={attempt}
        onChange={(e) => setAttempt(e.target.value)}
      />
      <hr />
      <div className="btns">
        <FormButton
          onClick={handleCancel}
          status={status}
          className="btn-default btn-m"
        >
          Cancel
        </FormButton>
        <FormButton
          onClick={() => mutation()}
          status={status}
          disabled={!isAttemptPass}
          className="btn-primary btn-m"
        >
          Leave + Reset
        </FormButton>
      </div>
      <ErrorBoundary>
        <ErrorMessage error={error} defaultError={DEFAULT_ERROR} />
      </ErrorBoundary>
    </form>
  )
}
