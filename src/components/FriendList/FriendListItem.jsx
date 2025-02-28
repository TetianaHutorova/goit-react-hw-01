export default function FriendListItem({friend}) {
  const { avatar, name, isOnline } = friend;
  return (
    <li>
      <div>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <p>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </li>
  );
}
