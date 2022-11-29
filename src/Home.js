import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, useNavigate, useParams } from "react-router-dom";
import { user } from "./App";
// import UpdateUser from "./UpdateUser";

const AddUser = () => {
  const [name, setName] = useState(""); //
  const [userList, setUserList] = useState(user);
  const [show, setShow] = useState(false);
  const [getId, setGetId] = useState();     //storing Id here for update data
//   console.log('id =====>', getId)

  //on Submit /add handler ---------->>>
  const onSubmit = (e) => {
    e.preventDefault();
    if( name !== ''){
        // let gId = Math.floor(Math.random() * 100 + 1);      //generate id
        let gId = userList.length + 1 ;
        // let a = name;
        // console.log('iiiii=>>',gId )
        // user.push({ id: gId, name: a });
        setUserList([...userList, { id: gId, name }]);
        setName('')
    }
    // navigate("/");
  };

  const handleDelete = (id) => {
    if (userList && userList.length > 0) {

    let restData = userList.filter( e => e.id !== id )
    setUserList(restData)
    //second method --------->>>
    //   var index = userList.map((e) => e.id).indexOf(id);
    //   userList.splice(index, 1);
    //   navigate("/"); //page refresh ke liye
    setShow(!true)
    setName('')
    }

};

  // console.log("hiiiiii", userList);      //UPDATE Method --------->>>>>>> //
//   const handleEdit = (index) => {
//     console.log(userList[index])
//     // const editTodo = userList.find((elm) => elm.id === id);
//     console.log(userList[index].name);
//     setName(userList[index].name );
//     console.log(name)

//     setShow(!false);
//     setEditIndex(index);
//     navigate("/");

//   };
//   console.log('editIndex',editIndex)
const handleEdit = (id) => {
    const res = userList.find((el) => el.id === id);
    setName(res.name);
    setShow(!false);
    // console.log(id)
    setGetId(id)
  };

  const handleUpdate = (getId) => {
    // console.log('hhhiiiii',getId)
    if(name !== ''){
        setUserList(userList.map((val)=> {
            return val.id == getId ? { id: val.id , name} : val
        } ));
    }
    setName('')
    setShow( false);
    // let res = userList.slice(editIndex, 1);
    // console.log(res)
    // const editTodo = user.find((i) => i.id === id);
    // setUserList(editTodo.name);
  };
//   console.log(userList)

  return (
    <div className="container">
      <h2>CRUD APP</h2>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      {!show ? (
        <button style={{ fontWeight: "bold" }} onClick={(e) => onSubmit(e)}>
          Add
        </button>
      ) : (
        <button
          style={{ fontWeight: "bold" }}
          onClick={()=>handleUpdate(getId)}
          id="update"
        >
          Update
        </button> 
       )}

      <Table>
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList && userList.length > 0 ? (
            userList.map((item, i) => {
              return (
                <tr key={i}>
                  {/* <td>{item.id}</td> */}
                  <td>{item.name}</td>
                  <td>
                    {/* <Link to={ "/edit/" + (item.id) }> */}
                      <Button onClick={() => handleEdit(item.id)} id="edit">
                        Edit
                      </Button>
                    &nbsp;
                    <Button onClick={() => handleDelete(item.id)} id="delete">
                      Delete
                    </Button>
                    
                  </td>
                </tr>
              );
            })
          ) : (
            <h4 id="noDataFound" style={{ color: "red" }}> No data found !</h4>
          )}
        </tbody>
      </Table>
      
    </div>
  );
};
export default AddUser;

//onChange handler ---------->>>
//   const changeHandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

{/* <input type="text" placeholder="Enter name here" value={name.name} onChange={(e)=>setName(e.target.value)} /> */}
