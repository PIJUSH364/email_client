import React, { useState } from "react";
import SelectedComponent from "./component/SelectedComponent";
import moment from "moment";
import MailBody from "./component/MailBody";

export default function LayOut() {
  const [userAction, setUserAction] = useState(emailStatus[0]);

  return (
    <div className="text-[#636363] p-2 pl-8 bg-[#f4f5f9]">
      <div className="flex gap-5  items-center pt-8">
        <p className=" py-2">Filter By : </p>
        <div className="flex gap-2 items-center justify-center">
          {emailStatus.map((item, key) => (
            <p
              key={key}
              className={`${
                userAction === item ? "rounded-full bg-[#f2f2f2]  " : ""
              } cursor-pointer px-6 py-2`}
              onClick={() => setUserAction(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <SelectedComponent title={userAction} />
    </div>
  );
}
const emailStatus = ["Read", "unRead", "Favorites"];
