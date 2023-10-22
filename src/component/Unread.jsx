import React, { useEffect, useState } from "react";
import EmailContent from "./EmailContent";
import { useData } from "../customHook/useData";
import { useDispatch, useSelector } from "react-redux";
import MailBody from "./MailBody";
import { setAllMail } from "../controller/emailSlice";

export default function Unread() {
  const dispatch = useDispatch();
  const mailContent = useSelector((state) => state.emailSlice.mailBody);
  const allMail = useSelector((state) => state.emailSlice.allMail);
  const readMail = useSelector((state) => state.emailSlice.readMail);
  const [unReadMail, setUnReadMail] = useState([]);

  useEffect(() => {
    const filterMail = allMail
      .map((item) => {
        if (readMail.includes(item.id)) {
          return null;
        } else {
          return item;
        }
      })
      .filter((item) => item !== null);
    setUnReadMail(filterMail);
  }, [readMail]);
  return (
    <div className="flex gap-4">
      <div className="flex flex-1 flex-col gap-4">
        {unReadMail?.length > 0
          ? unReadMail.map((item, key) => (
              <EmailContent data={item} key={key} />
            ))
          : "NO RECORD FOUND!"}
      </div>{" "}
      {unReadMail?.length > 0 && mailContent !== null && <MailBody />}
    </div>
  );
}
