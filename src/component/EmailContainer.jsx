import React, { useEffect, useState } from "react";
import EmailContent from "./EmailContent";
import { useData } from "../customHook/useData";
import { useDispatch, useSelector } from "react-redux";
import MailBody from "./MailBody";
import { setAllMail } from "../controller/emailSlice";
export default function EmailContainer() {
  const { resource, isLoading } = useData(
    "https://flipkart-email-mock.vercel.app/"
  );
  const dispatch = useDispatch();
  const mailContent = useSelector((state) => state.emailSlice.mailBody);
  const allMail = useSelector((state) => state.emailSlice.allMail);

  useEffect(() => {
    if (
      isLoading === false &&
      resource !== null &&
      resource?.list?.length > 0
    ) {
      dispatch(setAllMail(resource?.list));
    }
  }, [isLoading]);

  return (
    <div className="flex gap-4">
      <div className="flex flex-1 flex-col gap-4">
        {allMail?.length > 0 &&
          allMail.map((item, key) => <EmailContent data={item} key={key} />)}
      </div>{" "}
      {mailContent !== null && <MailBody />}
    </div>
  );
}
