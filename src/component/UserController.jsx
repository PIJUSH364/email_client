import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMailContent } from "../controller/emailSlice";
export default function UserController() {
  const [userAction, setUserAction] = useState(emailStatus[0]);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-5  items-center pt-8">
      <p className=" py-2">Filter By : </p>
      <div className="flex gap-2 items-center justify-center">
        {emailStatus.map((item, key) => (
          <p
            key={key}
            className={`${
              userAction === item ? "rounded-full bg-[#f2f2f2]  " : ""
            } cursor-pointer px-6 py-2`}
            onClick={() => {
              setUserAction(item);
              dispatch(setMailContent(null));
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
const emailStatus = ["Read", "unRead", "Favorites"];
