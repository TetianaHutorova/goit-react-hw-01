import FriendListItem from "./FriendListItem";
export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
