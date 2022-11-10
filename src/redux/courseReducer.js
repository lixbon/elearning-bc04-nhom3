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
} from "./constants/constants";

export const initialState = {
  courseList: [],
  courseEditing: {},
  searchingList: [],
  courseInfo: {},

  courseCata: [],
  courseStudentList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    //Admin
    case GET_COURSELIST: {
      return { ...state, courseList: action.courseList };
    }
    case DELETE_COURSE: {
      let cloneCourseList = state.courseList.filter((item) => {
        return item.maKhoaHoc !== action.maKhoaHoc;
      });
      return { ...state, courseList: cloneCourseList };
    }
    case EDITING_COURSE: {
      return { ...state, courseEditing: action.courseEditing };
    }
    case UPDATE_COURSE_ADMIN: {
      return { ...state, courseList: action.courseList };
    }
    case ADD_NEW_COURSE: {
      return { ...state, courseList: action.courseList };
    }

    case GET_COURSE_CATAGORY: {
      return { ...state, courseCata: action.courseCata };
    }
    case GET_SEARCHING_LIST: {
      return { ...state, searchingList: action.searchingList };
    }
    case GET_COURSE_STUDENT_LIST: {
      return { ...state, courseStudentList: action.courseStudentList };
    }
    case GET_COURSE_INFO: {
      return { ...state, courseInfo: action.courseInfo };
    }
    case CANCEL_REGISTER_COURSE: {
      let cloneCourseStudentList = [...state.courseStudentList];
      let index = cloneCourseStudentList.findIndex((item) => {
        return item.taiKhoan === action.dataCancelCourse.taiKhoan;
      });
      cloneCourseStudentList.splice(index, 1);
      return { ...state, courseStudentList: cloneCourseStudentList };
    }
    default:
      return { ...state };
  }
};
