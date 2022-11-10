import {
  GET_USERLIST,
  USER_ADD,
  USER_DELETE,
  USER_EDIT,
  USER_LOGIN,
  USER_SEARCHING,
  USER_UPDATE_ADMIN,
} from "./constants/constants";

export const initialState = {
  userLogin: {},
  //Admin
  userList: [],
  userAdmin: {},
  userSearching: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return { ...state, userLogin: action.user };
    }
    case GET_USERLIST: {
      return { ...state, userList: action.userList };
    }
    case USER_EDIT: {
      state.userAdmin = action.user;
      return { ...state };
    }
    case USER_UPDATE_ADMIN: {
      let cloneUserList = [...state.userList];
      let index1 = cloneUserList.findIndex((item) => {
        return item.taiKhoan === action.user.taiKhoan;
      });
      cloneUserList[index1] = action.user;

      let cloneUserSearching = [...state.userSearching];
      let index2 = cloneUserSearching.findIndex((item) => {
        return item.taiKhoan === action.user.taiKhoan;
      });
      cloneUserSearching[index2] = action.user;

      state.userSearching = cloneUserSearching;
      state.userList = cloneUserList;
      state.userAdmin = action.user;
      return { ...state };
    }
    case USER_DELETE: {
      let cloneUserList = state.userList.filter((item) => {
        return item.taiKhoan !== action.taiKhoan;
      });

      let cloneUserSearching = state.userSearching.filter((item) => {
        return item.taiKhoan !== action.taiKhoan;
      });

      state.userList = cloneUserList;
      state.userSearching = cloneUserSearching;
      return { ...state };
    }
    case USER_SEARCHING: {
      return { ...state, userSearching: action.userSearching };
    }
    case USER_ADD: {
      state.userList.push(action.user);
      return { ...state };
    }
    default:
      return { ...state };
  }
};
