module V2ETL
  module DataProcessors
    class ProcessMentorRequests
      include Mandate

      def call
        connection = ActiveRecord::Base.connection
        connection.execute(<<-SQL)
        INSERT INTO mentor_requests (
          uuid,
          solution_id,
          track_id, exercise_id, student_id,
          status,
          comment_markdown, comment_html,
          created_at, updated_at
        )
        SELECT
          UUID(),
          solutions.id,
          exercises.track_id, solutions.exercise_id, solutions.user_id,
          0,
          "", "",
          solutions.mentoring_requested_at, solutions.mentoring_requested_at
        FROM solutions
        INNER JOIN exercises on exercises.id = solutions.exercise_id
        WHERE mentoring_requested_at IS NOT NULL
        AND approved_by_id IS NULL
        AND completed_AT IS NULL
        SQL

        # Mark as fullfiled any requests where there's a discussion
        Mentor::Request.where(
          solution_id: Mentor::Discussion.select(:solution_id)
        ).update_all(status: :fulfilled)

        Mentor::Discussion.joins("INNER JOIN mentor_requests ON mentor_discussions.solution_id = mentor_requests.solution_id").
        update_all("request_id = mentor_requests.id")

        # TODO: Uncomment these
        # connection.remove_column :solutions, :approved_by_id
        # connection.remove_column :solutions, :completed_at
        # connection.remove_column :solutions, :mentoring_requested_at
     end
    end
  end
end

