import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessageOff } from "../../redux/slice/messageSlice";

export default function Message() {
  let { isMessageOn, message } = useSelector((state) => {
    return state.messageSlice;
  });
  let dispatch = useDispatch();
  const handleCloseMessage = () => {
    dispatch(setMessageOff());
  };
  setTimeout(() => {
    dispatch(setMessageOff());
  }, 2000);
  return isMessageOn ? (
    <div
      style={{ marginTop: 0 }}
      className="h-screen w-screen fixed left-0 top-0 bg-[#ffffffd9] dark:bg-[#000000e6] flex justify-center items-center z-50"
    >
      <div className="border-blue-500 bg-gradient-to-r from-slate-600 to-blue-900 border py-20 px-4 rounded-3xl flex flex-col items-center space-y-4">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-white">
          {message}
        </h3>
        <button
          onClick={handleCloseMessage}
          className="px-6 lg:px-10 py-4 border border-blue-700 bg-gradient-to-r from-orange-500 to-red-400 text-white text-xl lg:text-3xl font-bold rounded-lg hover:text-blue-500 hover:scale-110 duration-200"
        >
          OK
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
}
