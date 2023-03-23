import React, { useState } from "react";
import { UploadDocuments } from "../components/UploadDocuments";

const Modal = () => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <div>
      <UploadDocuments />
    </div>
  );
};

export default Modal;
