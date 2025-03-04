import css from "./Profile.module.css";

export default function Profile({ userData }) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = userData;
  return (
    <div className={css.container}>
      <div>
        <img src={avatar} alt={username} className={css.img} />
        <p className={css.textname}>{username}</p>
        <div className={css.description}>
          <p className={css.textdata}>@{tag}</p>
          <p className={css.textdata}>{location}</p>
        </div>
      </div>
      <ul className={css.list}>
        <li>
          <span className={css.spanDescription}>Followers</span>
          <span className={css.spanValue}>{followers}</span>
        </li>
        <li>
          <span className={css.spanDescription}>Views</span>
          <span className={css.spanValue}>{views}</span>
        </li>
        <li>
          <span className={css.spanDescription}>Likes</span>
          <span className={css.spanValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
