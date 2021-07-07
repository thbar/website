module API
  class BadgesController < BaseController
    def index
      badges = User::AcquiredBadge::Search.(
        current_user,
        criteria: params[:criteria],
        category: params[:category],
        order: params[:order],
        per: params[:per_page],
        page: params[:page]
      )

      render json: SerializePaginatedCollection.(
        badges,
        serializer: SerializeUserAcquiredBadges
      )
    end

    # TODO: Add test coverage etc to this.
    def reveal
      badge = current_user.acquired_badges.find_by!(uuid: params[:uuid])
      badge.update!(revealed: true)

      render json: { badge: SerializeUserAcquiredBadge.(badge) }
    end
  end
end
