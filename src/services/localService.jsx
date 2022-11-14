const ELEARNINGUSER = "ELEARNINGUSER";

export const localServ = {
  user: {
    set: (dataLogin) => {
      let jsonData = JSON.stringify(dataLogin);
      localStorage.setItem(ELEARNINGUSER, jsonData);
    },
    get: () => {
      let jsonData = localStorage.getItem(ELEARNINGUSER);
      if (jsonData) {
        return JSON.parse(jsonData);
      } else {
        return null;
      }
    },
    remove: () => {
      localStorage.removeItem(ELEARNINGUSER);
    },
  },
};
