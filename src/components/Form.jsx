import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = (/*{users, setUsers}*/) => {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const navigate = useNavigate()
    // const input = {
    //     firstName: "",
    //     lastName: "hamdi"
    // }
    // const [inputState, setInputState] = useState(input)
    // const changeInput = (e) => {
    //     console.log(e)
    //     setInputState(prev => ({
    //         ...prev,
    //         [e.target.name]: e.target.value
    //     }))
    // }
    // console.log(inputState);
    const submitInput = () => {
        console.log(firstNameRef.current.value);
        console.log(lastNameRef.current.value);
        // setUsers(prev => [...prev, {firstName: firstNameRef.current.value, lastName: lastNameRef.current.value}])
        navigate("/")
    }
  return (
    <div>
      <div>
        <input type="text" placeholder="first-name" name="firstName" ref={firstNameRef} /*onChange={changeInput}*/ />
      </div>
      <div>
        <input type="text" placeholder="last-name" name="lastName" ref={lastNameRef} /*onChange={changeInput}*//>
      </div>
      <button onClick={submitInput}>Submit</button>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Form;
