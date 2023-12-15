import { UsersContainerPropsType } from "./UsersContainer";
import s from "./users.module.css";
import axios from "axios";
import user from "../../assets/images/user.png";

export const Users = (props: UsersContainerPropsType) => {
  let getUsers = () => {
    if (props.users.length !== 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsersAC(response.data.items);
        });
    }
  };

  return (
    <>
    <button onClick={getUsers}>Get users</button>
      {props.users.map((el) => (
        <div key={el.id} className={s.item}>
          <div className={s.ava}>
            <img src={el.photos?.small ? el.photos?.small : user} alt="" />
            {el.followed ? (
              <button onClick={() => props.onFollowClick(el.id)}>
                Unfollow
              </button>
            ) : (
              <button onClick={() => props.onUnfollowClick(el.id)}>
                Follow
              </button>
            )}
          </div>
          <div className={s.main}>
            <div className={s.main_item}>
              <span className={s.name}>{el.name}</span>
              <span className={s.status}>{el.status}</span>
            </div>
            <div className={s.main_item}>
              <span className={s.location}>{"el.location.city"}</span>
              <span>{"el.location.country"}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
