import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline;
  return (
    <li className={css.item}>
      <span className={status ? css.statusOn : css.statusOff}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
