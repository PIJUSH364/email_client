import moment from "moment/moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorite,
  setAllMail,
  setMailContent,
  setReadMailID,
} from "../controller/emailSlice";
export default function EmailContent({ data, favFlag = true }) {
  const dispatch = useDispatch();
  const favoriteData = useSelector((state) => state.emailSlice.favorites);
  const readMail = useSelector((state) => state.emailSlice.readMail);

  const AddFavHandler = (data) => {
    const objectExists = favoriteData.some((item) => item.id === data.id);
    if (!objectExists) {
      dispatch(addFavorites(data));
    } else {
      alert("already you have added to favorite");
    }
  };

  return (
    <div
      onClick={() => {
        dispatch(setMailContent(data));
        dispatch(setReadMailID(data.id));
      }}
      className={`cursor-pointer min-w-[38rem] border-[1px] border-[#636363]-500 rounded-md  py-2  px-5 flex gap-4 bg-white ${
        readMail.includes(data.id) ? "bg-white " : "bg-slate-100 "
      }`}
    >
      <div className="rounded-full bg-[#e54065] text-white h-12 w-12 flex items-center justify-center text-[1.2rem]">
        p
      </div>
      <div>
        <p>
          Form : <span>{data?.from?.email}</span>
        </p>
        <p>
          Subject : <span>{data?.subject}</span>
        </p>
        <p>{data?.short_description}</p>
        <div className="flex gap-4 cursor-pointer">
          <p>{moment(data?.date).format("DD/MM/YYYY hh:mma")}</p>
          {favFlag ? (
            <p className="text-[#e54065]" onClick={() => AddFavHandler(data)}>
              Favorite
            </p>
          ) : (
            <p
              className="text-[#e54065]"
              onClick={() =>
                dispatch(
                  removeFavorite(
                    favoriteData.filter((item) => item.id !== data.id)
                  )
                )
              }
            >
              unFavorite
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
