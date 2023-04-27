import React, { useEffect, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from "axios";

function FileUpload() {

  const [file, setFile] = useState(null);

  const [data, setData] = useState(null);

  const [imageurl,setImgUrl] = useState('');


  const handleFileUpload = (e) => {

    e.preventDefault();

    const formData = new FormData();


		formData.append('File', file);

    
    axios.post('http://localhost:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }).then((res) => {
      setData(res.data);
    })
    .catch(err=>console.log(err));

	};

  useEffect(()=>{
    if(data!=null) {setImgUrl(data.url)}
  },[imageurl,data])

  return (
    <div className=" py-[5rem] capitalize  flex flex-col justify-center items-center p-4 ">
      
      <form onSubmit={handleFileUpload}>
        <p className="text-3xl pb-2">upload an Image : *</p>
        <input type="file" name={file} onChange={e=>setFile(e.target.files[0])} required/>
        <input type="submit" value="SUBMIT" />
      </form>

      <p>{imageurl === '' ? 'No Image is Found to be Uploaded': 'Preview Uploaded Image : '}</p>
      <br/>
      {
            (imageurl != '') && (
              <img
                style={{height:"320px", width: '280px'}} 
                src={imageurl} />
            )
        }
    </div>
  );
}

export default FileUpload;
