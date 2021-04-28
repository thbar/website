module V2ETL
  module DataProcessors
    class ProcessMentoringReputation
      include Mandate

      def call
        connection = ActiveRecord::Base.connection
        connection.execute(<<-SQL)
        INSERT INTO user_reputation_tokens (
          uuid, type,
          user_id,
          params,
          uniqueness_key,
          version, rendering_data_cache, value, reason, category,
          created_at, updated_at
        )
        SELECT
        UUID(), "User::ReputationTokens::MentoredToken",
        mentor_id,
        CONCAT('{"discussion": "gid://website/Mentor::Discussion/', mentor_discussions.id, '"}'),
        CONCAT(mentor_id, "|mentored|Discussion#", mentor_discussions.id),
        1, "{}", 5, "mentored", "mentoring",
        NOW(), NOW()
        FROM mentor_discussions
        WHERE status = 4 AND (
          rating IS NULL 
          OR rating = 3
          OR rating = 4
          OR rating = 5
        )
        SQL
      end
    end
  end
end


