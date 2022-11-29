import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { user } from "./App";


const UpdateUser = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()
    const _id = useParams()
    console.log('idddddddddddd', _id)
  // const [userList, setUserList] = useState(user);

  // hendel Submit  ---------->>>
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(data);

    navigate("/");
  };

  const handleUpdate = (i)=>{
    // console.log(i)
    console.log(user[i]);
    // setName()
  }

  return (
    <>
      <h2>Update list</h2>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        // value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* <button style={{ fontWeight: "bold" }} onClick={ handleUpdate }>
        Update
      </button> */}
    </>
  );
};

export default UpdateUser;
