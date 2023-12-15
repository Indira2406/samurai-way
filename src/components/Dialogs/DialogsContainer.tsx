import { sendMessageAC, updateNewMessageBodyAC } from "../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { DialogsPropsType, MessagesPropsType } from "../redux/store";
import { AppStateType } from "../redux/redux-store";
import { Dispatch } from "redux";
import { connect } from "react-redux";

type DialogsMapStatePropsType = {
  messages: MessagesPropsType[];
  dialogs: DialogsPropsType[];
  newMessageBody: string;
};

type DialogsMapDispatchPropsType = {
  onSendMessageClick: () => void;
  onNewMessageChange: (text: string) => void;
};

export type DialogsContainerPropsType = DialogsMapStatePropsType &
  DialogsMapDispatchPropsType;

let mapStateToProps = (state: AppStateType): DialogsMapStatePropsType => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessageBody: state.dialogsPage.newMessageBody,
  };
};
let mapDispatchToProps = (dispatch: Dispatch): DialogsMapDispatchPropsType => {
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageAC());
    },

    onNewMessageChange: (text: string) => {
      dispatch(updateNewMessageBodyAC(text));
    },
  };
};
export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
