module ReactComponents
  module Dropdowns
    class TrackMenu < ReactComponent
      initialize_with :track

      def to_s
        super("dropdowns-track-menu", {
          track: {
            title: track.title
          },
          links: links
        })
      end

      private
      def links
        {
          repo: track.repo_url,
          documentation: Exercism::Routes.track_docs_url(track)
        }
      end
    end
  end
end
