module V2ETL
  module DataProcessors
    class ProcessMentoringReputation
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
        FROM mentor_discussions
        INNER JOIN exercises on exercises.id = solutions.exercise_id
        WHERE mentoring_requested_at IS NOT NULL
        AND approved_by_id IS NULL
        AND completed_AT IS NULL
        SQL
        # MentorDiscussion.where(status: finished).
        #   where.not(rating: [1,2]).
        #   each do |discussion|
        #   end
      end
    end
  end
end


