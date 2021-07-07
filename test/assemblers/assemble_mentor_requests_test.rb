require "test_helper"

class AssembleMentorRequestsTest < ActiveSupport::TestCase
  test "proxies correctly" do
    user = create :user
    page = 15
    track_slug = "ruby"
    exercise_slug = "bob"

    ::Mentor::Request::Retrieve.expects(:call).with(
      mentor: user,
      page: page,
      track_slug: track_slug,
      exercise_slug: exercise_slug,
      sorted: false,
      paginated: false
    ).returns(mock(count: 200))

    Mentor::Request::Retrieve.expects(:call).with(
      mentor: user,
      page: page,
      criteria: "Ruby",
      order: "recent",
      track_slug: track_slug,
      exercise_slug: exercise_slug
    ).returns(Mentor::Request.page(1).per(1))

    params = {
      page: page,
      criteria: "Ruby",
      order: "recent",
      track_slug: track_slug,
      exercise_slug: exercise_slug
    }

    AssembleMentorRequests.(params, user)
  end

  test "retrieves requests" do
    user = create :user

    mentored_track = create :track
    create :user_track_mentorship, user: user, track: mentored_track
    solution = create :concept_solution, track: mentored_track
    30.times { create :mentor_request, solution: solution }

    assert_equal SerializePaginatedCollection.(
      Mentor::Request.page(1).per(25),
      serializer: SerializeMentorRequests,
      serializer_args: user,
      meta: {
        unscoped_total: 30
      }
    ), AssembleMentorRequests.({}, user)
  end
end
