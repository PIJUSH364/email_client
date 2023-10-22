import React from "react";
import EmailContent from "./EmailContent";
import { useSelector, useDispatch } from "react-redux";
import MailBody from "./MailBody";

export default function Favorite() {
  const data = useSelector((state) => state.emailSlice.favorites);
  const mailContent = useSelector((state) => state.emailSlice.mailBody);
  return (
    <div className="flex gap-4">
      {" "}
      <div className="flex flex-col gap-4">
        {data.length > 0
          ? data.map((item, key) => (
              <EmailContent data={item} key={key} favFlag={false} />
            ))
          : "NO RECORDS FOUND!"}
      </div>
      {data?.length > 0 && mailContent !== null && <MailBody />}
    </div>
  );
}
