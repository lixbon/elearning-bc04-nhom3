import Swal from "sweetalert2";
import { localServ } from "../../services/AdminServices/localService";
import { userServ } from "../../services/AdminServices/userService";
import {
  GET_USERLIST,
  USER_ADD,
  USER_DELETE,
  USER_EDIT,
  USER_LOGIN,
  USER_REGISTER,
  USER_SEARCHING,
  USER_UPDATE_ADMIN,
} from "../constants/constants";

//USER LOGIN HOMEPAGE
export const userLoginAction = (values) => {
  return async (dispatch) => {
    try {
      let res = await userServ.userLogin(values);
      console.log(res);
      if (res.status === 200) {
        await localServ.user.set(res.data);
        await dispatch({
          type: USER_LOGIN,
          user: res.data.content,
        });
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err);
      await Swal.fire({
        position: "center",
        icon: "error",
        title: err.response.data,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};
//USER REGISTER HOMEPAGE
export const userRegisterAction = (values) => {
  return async (dispatch) => {
    try {
      let res = await userServ.userRegister(values);
      if (res.status === 200) {
        await dispatch({
          type: USER_REGISTER,
          userRegister: values,
        });
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.href = "/login";
      }
    } catch (err) {
      console.log(err);
      await Swal.fire({
        position: "center",
        icon: "error",
        title: err.response.data.content,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};
//ADMIN
//-Use list
export const userListAdminAction = () => {
  return async (dispatch) => {
    try {
      let res = await userServ.userListAdmin();
      if (res.status === 200) {
        await dispatch({
          type: GET_USERLIST,
          userList: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const userEditAdminAction = (user) => {
  return {
    type: USER_EDIT,
    user,
  };
};
//-User Update
export const userUpdateAdminAction = (values) => {
  return async (dispatch) => {
    try {
      let res = await userServ.userUpdateAdmin(values);
      if (res.status === 200) {
        await dispatch({
          type: USER_UPDATE_ADMIN,
          user: values,
        });
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Update Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err);
      await Swal.fire({
        position: "center",
        icon: "error",
        title: err.response.data,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};
//-User Delete
export const userDeleteAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      let res = await userServ.userDeleteAdmin(taiKhoan);
      if (res.status === 200) {
        await dispatch({
          type: USER_DELETE,
          taiKhoan,
        });
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Delete Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err);
      await Swal.fire({
        position: "center",
        icon: "error",
        title: err.response.data,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};
//-User search
export const userSearchingAction = (id) => {
  return async (dispatch) => {
    try {
      let res = await userServ.userSearchingAdmin(id);
      if (res.status === 200) {
        await dispatch({
          type: USER_SEARCHING,
          userSearching: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
//-User add
export const userAddingAction = (user) => {
  return async (dispatch) => {
    try {
      let res = await userServ.userAdd(user);
      if (res.status === 200) {
        await dispatch({
          type: USER_ADD,
          user,
        });
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Add Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err);
      await Swal.fire({
        position: "center",
        icon: "error",
        title: err.response.data,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};
