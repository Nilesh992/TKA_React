import UserCard from "./UserCard";

function UserCardMain() {
  const userData = { name: "Bob", age: 25 };

  return (
    <div>
      <h2>User Information</h2>
      <UserCard user={userData} />
    </div>
  );
}

export default UserCardMain;
