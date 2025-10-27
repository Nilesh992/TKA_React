function UserCard({ user }) {
  if (!user) {
    return <p>No user data</p>;
  }

  const { name, age } = user;
  const status = age > 18 ? "Adult" : "Minor";

  return (
    <div>
      <h3>User Card</h3>
      <p>Name: {name}</p>
      <p>Age: {age} ({status})</p>
    </div>
  );
}

export default UserCard;
