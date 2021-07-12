import React from 'react'
import { Modal, ModalProps } from './Modal'
import { useIsMounted } from 'use-is-mounted'
import { useMutation } from 'react-query'
import { sendRequest } from '../../utils/send-request'
import { typecheck } from '../../utils/typecheck'
import { SolutionForStudent } from '../types'
import { FormButton } from '../common'
import { ErrorBoundary, ErrorMessage } from '../ErrorBoundary'
import Turbolinks from 'turbolinks'

const DEFAULT_ERROR = new Error('Unable to unpublish solution')

export const UnpublishSolutionModal = ({
  endpoint,
  ...props
}: ModalProps & { endpoint: string }): JSX.Element => {
  const isMountedRef = useIsMounted()
  const [mutation, { status, error }] = useMutation<SolutionForStudent>(
    () => {
      return sendRequest({
        endpoint: endpoint,
        method: 'PATCH',
        body: null,
        isMountedRef: isMountedRef,
      }).then((json) => {
        return typecheck<SolutionForStudent>(json, 'solution')
      })
    },
    {
      onSuccess: (solution) => {
        Turbolinks.visit(solution.privateUrl, { action: 'replace' })
      },
    }
  )

  return (
    <Modal {...props} className="m-unpublish-solution">
      <h3>Do you want to unpublish your solution?</h3>
      <p>
        Unpublishing your solution will mean it no longer appears on your
        profile and can longer be viewed under Community Solutions. All stars
        and comments will be lost, and any associated reputation will be
        removed.
      </p>

      <div className="btns">
        <FormButton
          type="button"
          onClick={() => mutation()}
          status={status}
          className="btn-primary btn-m"
        >
          Unpublish solution
        </FormButton>
        <FormButton
          type="button"
          onClick={props.onClose}
          status={status}
          className="btn-default btn-m"
        >
          Cancel
        </FormButton>
      </div>
      <ErrorBoundary>
        <ErrorMessage error={error} defaultError={DEFAULT_ERROR} />
      </ErrorBoundary>
    </Modal>
  )
}
