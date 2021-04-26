module V2ETL
  module DataProcessors
    class ProcessTracks
      include Mandate

      def call
        Track.find_each do |track|
          Git::SyncTrack.(track)
        rescue StandardError
        end
      end
    end
  end
end
