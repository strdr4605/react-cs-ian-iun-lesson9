export function CurrentUser(props) {
  const { user } = props;

  if (!user) {
    return <div>No user</div>;
  }

  return <div>Current user: {user.first_name}</div>;
}
