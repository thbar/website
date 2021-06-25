module Github
  class OrganizationMember
    class SyncMembers
      include Mandate

      def call
        organization_member_usernames.each do |username|
          ::Github::OrganizationMember.create_or_find_by!(username: username)
        end

        ::Github::OrganizationMember.where.not(username: organization_member_usernames).update_all(alumnus: true)

        ::Github::OrganizationMember.where.not(username: organization.team_member_usernames).find_each do |member|
          organization.remove_membership(member.username)
        end
      end

      private
      memoize
      def organization_member_usernames
        organization.member_usernames
      end

      memoize
      def organization
        Github::Organization.new
      end
    end
  end
end
