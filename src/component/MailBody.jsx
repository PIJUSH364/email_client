import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useData } from "../customHook/useData";
import { addFavorites } from "../controller/emailSlice";
export default function MailBody() {
  const mailContent = useSelector((state) => state.emailSlice.mailBody);
  const dispatch = useDispatch();
  const { isLoading, resource } = useData(
    `https://flipkart-email-mock.vercel.app/?id=${mailContent?.id}`
  );
  const parser = new DOMParser();
  const favoriteData = useSelector((state) => state.emailSlice.favorites);
  const AddFavHandler = (data) => {
    const objectExists = favoriteData.some((item) => item.id === data.id);
    if (!objectExists) {
      dispatch(addFavorites(data));
    } else {
      alert("already you have added to favorite");
    }
  };
  useEffect(() => {
    if (!isLoading && resource !== null && mailContent !== null) {
      const parsedDocument = parser.parseFromString(resource.body, "text/html");

      const rootElement = parsedDocument.documentElement;

      const targetElement = document.getElementById("target-para");
      targetElement.innerHTML = "";
      targetElement.appendChild(rootElement);
    } else {
    }
  }, [isLoading]);

  return (
    <div className="flex-1 border-[1px] border-[#636363]-500 rounded-md bg-white py-2  px-5 flex gap-4">
      {mailContent !== null && resource !== null && (
        <>
          <div className="min-w-[3rem] min-h-fit rounded-full bg-[#e54065] text-white h-12 w-12 flex items-center justify-center text-[1.2rem]">
            p
          </div>
          <div>
            <div className="flex  items-center pt-4 w-full justify-between">
              <p>{mailContent.subject}</p>
              <button
                className="rounded-full bg-[#e54065] text-white py-2 px-4"
                onClick={() => AddFavHandler(mailContent)}
              >
                Mark as Favorite
              </button>
            </div>
            <p>{moment(mailContent.date).format("DD/MM/YYYY hh:mma")}</p>
            <p className="pt-5" id="target-para">
              {/* {!isLoading && resource !== null && <>{resource.body}</>} */}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
