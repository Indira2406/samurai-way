import { UsersPropsType } from "../redux/store";
import { AppStateType } from "../redux/redux-store";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Users } from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../redux/usersReducer";

type UsersMapStatePropsType = {
  users: UsersPropsType[];
};

type UsersMapDispatchPropsType = {
  onFollowClick: (id: number) => void;
  onUnfollowClick: (id: number) => void;
  setUsersAC: (users: UsersPropsType[]) => void;
};

export type UsersContainerPropsType = UsersMapStatePropsType &
  UsersMapDispatchPropsType;

let mapStateToProps = (state: AppStateType): UsersMapStatePropsType => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch: Dispatch): UsersMapDispatchPropsType => {
  return {
    onFollowClick: (id: number) => {
      dispatch(followAC(id));
    },

    onUnfollowClick: (id: number) => {
      dispatch(unfollowAC(id));
    },
    setUsersAC: (users: UsersPropsType[]) => {
      dispatch(setUsersAC(users));
    },
  };
};
export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
