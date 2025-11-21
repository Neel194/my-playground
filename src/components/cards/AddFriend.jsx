const AddFriend = () => {
  const profile = {
    name: "Neel Patel",
    level: "Beginner",
    rank: 250,
    points: 100000,
    profileCompleted: 80,
  };
  return (
    <div className="flex w-64 flex-col rounded-2xl bg-neutral-200 bg-linear-to-b from-[#26D0CE] via-transparent to-transparent p-6 shadow-md transition hover:shadow-lg">
      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
          className="h-24 w-24 rounded-full object-cover"
        />
      </div>
      <div className="text-md mt-4 tracking-tight text-neutral-900">
        <p>
          <span className="text-neutral-600">Name:</span> {profile.name}
        </p>
        <p>
          <span className="text-neutral-600">Level:</span> {profile.level}
        </p>
        <p>
          <span className="text-neutral-600">Rank:</span> {profile.rank}
        </p>
        <p>
          <span className="text-neutral-600">Points:</span> {profile.points}
        </p>
        <p>
          <span className="text-neutral-600">Profile Completed:</span>{" "}
          {profile.profileCompleted}%
        </p>
      </div>
      <button className="mt-6 w-32 rounded-lg px-4 py-2 text-yellow-400 hover:text-neutral-900">
        Add Friend
      </button>
    </div>
  );
};
export default AddFriend;
