import React, { useCallback } from 'react'
import { Modal, ModalProps } from './Modal'
import { useMutation } from 'react-query'
import { sendRequest } from '../../utils/send-request'
import { useIsMounted } from 'use-is-mounted'
import { FormButton } from '../common'
import { ErrorBoundary, ErrorMessage } from '../ErrorBoundary'
import { useConfirmation } from '../../hooks/use-confirmation'
import Turbolinks from 'turbolinks'

type APIResponse = {
  links: {
    home: string
  }
}

const DEFAULT_ERROR = new Error('Unable to delete account')

export const DeleteAccountModal = ({
  handle,
  endpoint,
  ...props
}: Omit<ModalProps, 'className'> & {
  handle: string
  endpoint: string
}): JSX.Element => {
  const isMountedRef = useIsMounted()
  const [mutation, { status, error }] = useMutation<APIResponse>(
    () => {
      return sendRequest({
        endpoint: endpoint,
        method: 'DELETE',
        body: JSON.stringify({ handle: handle }),
        isMountedRef: isMountedRef,
      })
    },
    {
      onSuccess: (response) => {
        Turbolinks.visit(response.links.home, { action: 'replace' })
      },
    }
  )

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      mutation()
    },
    [mutation]
  )

  const { attempt, setAttempt, isAttemptPass } = useConfirmation(handle)

  return (
    <Modal {...props} className="m-delete-account">
      <form onSubmit={handleSubmit}>
        <div className="info">
          <h2>You&apos;re about to delete your Exercism account</h2>
          <p>
            <strong>Please read this carefully before continuing.</strong>
          </p>
          <p>
            This is <em>irreversible</em> and will mean you’ll lose everything
            you’ve done on your account.
          </p>
          <hr />
          <p>
            <strong>By deleting your account, you will lose access to:</strong>
          </p>
          <ul>
            <li>All solutions you have submitted</li>
            <li>All mentoring you have received</li>
            <li>All mentoring you have given and any testimonials received.</li>
            <li>All your personal data, which will be deleted</li>
          </ul>
        </div>
        <hr />
        <label htmlFor="confirmation">
          To confirm, write your handle <pre>{handle}</pre> in the box below:
        </label>

        <input
          id="confirmation"
          type="text"
          value={attempt}
          onChange={(e) => setAttempt(e.target.value)}
          autoComplete="off"
        />
        <hr />
        <div className="btns">
          <button className="btn-default btn-m" disabled>
            Cancel
          </button>

          <FormButton
            type="submit"
            disabled={!isAttemptPass}
            status={status}
            className="btn-primary btn-m"
          >
            Delete account
          </FormButton>
        </div>
        <ErrorBoundary resetKeys={[status]}>
          <ErrorMessage error={error} defaultError={DEFAULT_ERROR} />
        </ErrorBoundary>
      </form>
    </Modal>
  )
}
