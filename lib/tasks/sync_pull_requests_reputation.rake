desc 'Sync pull requests reputation'
task sync_pull_requests_reputation: :environment do
  Github::PullRequest::SyncRepos.call
  User::ReputationToken::AwardForPullRequests.call
end
