class SerializeMentorSessionRequest
  include Mandate

  initialize_with :request

  def call
    return if request.blank?

    {
      uuid: request.uuid,
      comment: request.comment_html,
      updated_at: request.updated_at.iso8601,
      is_locked: request.locked?,
      student: {
        handle: request.student_handle,
        avatar_url: request.student_avatar_url
      },
      track: {
        title: request.track.title
      },
      links: {
        lock: Exercism::Routes.lock_api_mentoring_request_path(request),
        discussion: Exercism::Routes.api_mentoring_discussions_path
      }
    }
  end
end
