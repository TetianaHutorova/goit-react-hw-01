import clsx from "clsx";
import css from "../FriendList/FriendList.module.css";
export default function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <div>
      <img className={css.img} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.green : css.red)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
