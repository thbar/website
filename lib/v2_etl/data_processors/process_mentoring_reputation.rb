module V2ETL
  module DataProcessors
    class ProcessMentoringReputation
      include Mandate

      def call
        # MentorDiscussion.where(status: finished).
        #   where.not(rating: [1,2]).
        #   each do |discussion|
        #   end
      end
    end
  end
end


