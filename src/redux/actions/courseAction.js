import Swal from "sweetalert2";
import { courseServ } from "../../services/courseService";
import {
  ADD_NEW_COURSE,
  CANCEL_REGISTER_COURSE,
  DELETE_COURSE,
  EDITING_COURSE,
  GET_COURSELIST,
  GET_COURSE_CATAGORY,
  GET_COURSE_INFO,
  GET_COURSE_STUDENT_LIST,
  GET_SEARCHING_LIST,
  UPDATE_COURSE_ADMIN,
} from "../constants/constants";

//ADMIN
//-List
export const getCourseListAction = () => {
  return async (dispatch) => {
    try {
      let res = await courseServ.courseList();
      if (res.status === 200) {
        await dispatch({
          type: GET_COURSELIST,
          courseList: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
//Delete
export const deleteCourseAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      let res = await courseServ.deleteCourse(maKhoaHoc);
      if (res.status === 200) {
        await dispatch({
          type: DELETE_COURSE,
          maKhoaHoc,
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
//Edit-openModal
export const courseEditingAction = (courseEditing) => {
  return {
    type: EDITING_COURSE,
    courseEditing,
  };
};
//Update
export const updateCourseAdminAction = (formData) => {
  return async (dispatch) => {
    try {
      let res1 = await courseServ.updateCourseAdmin(formData);
      if (res1.status === 200) {
        let res2 = await courseServ.courseList();
        if (res2.status === 200) {
          await dispatch({
            type: UPDATE_COURSE_ADMIN,
            courseList: res2.data,
          });
          await Swal.fire({
            position: "center",
            icon: "success",
            title: "Update Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
//Add new
export const addNewCourseAction = (formData) => {
  return async (dispatch) => {
    try {
      let res1 = await courseServ.addNewCourseAdmin(formData);
      if (res1.status === 200) {
        let res2 = await courseServ.courseList();
        if (res2.status === 200) {
          await dispatch({
            type: ADD_NEW_COURSE,
            courseList: res2.data,
          });
          await Swal.fire({
            position: "center",
            icon: "success",
            title: "Add Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
//-Get course catagory
export const getCourseCatagoryAction = () => {
  return async (dispatch) => {
    try {
      let res = await courseServ.getCourseCatagory();
      if (res.status === 200) {
        await dispatch({
          type: GET_COURSE_CATAGORY,
          courseCata: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
//-Get searching list
export const getSearchingListAction = (id) => {
  return async (dispatch) => {
    try {
      let res = await courseServ.getSearchingList(id);
      console.log("res: ", res);
      if (res.status === 200) {
        await dispatch({
          type: GET_SEARCHING_LIST,
          searchingList: res.data,
        });
      }
    } catch (err) {
      console.log("err", err);
      await dispatch({
        type: GET_SEARCHING_LIST,
        searchingList: [],
      });
    }
  };
};
//-Get Course-Student List
export const getCourseStudentListAction = (id) => {
  return async (dispatch) => {
    try {
      let res = await courseServ.getCourseStudentList(id);
      if (res.status === 200) {
        await dispatch({
          type: GET_COURSE_STUDENT_LIST,
          courseStudentList: res.data.lstHocVien,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const getCourseInfoAction = (id) => {
  return async (dispatch) => {
    try {
      let res = await courseServ.getCourseInfo(id);
      if (res.status === 200) {
        await dispatch({
          type: GET_COURSE_INFO,
          courseInfo: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const cancelRegisterCourseAction = (dataCancelCourse) => {
  return async (dispatch) => {
    try {
      let res = await courseServ.cancelRegisterCourse(dataCancelCourse);
      if (res.status === 200) {
        await dispatch({
          type: CANCEL_REGISTER_COURSE,
          dataCancelCourse,
        });
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Cancel Successful",
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
