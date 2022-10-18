import { courseServ } from "../../services/courseService";

export const courseRegisterAction = (data, onSuccess, onFail) => {
  return () => {
    courseServ
      .postCourseRegister(data)
      .then((res) => {
        onSuccess(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        onFail(err.response.data);
      });
  };
};
