import React, { useState,useRef } from "react";

export default function Input(props) {
  const [data, setData] = useState("");
  const dataref=useRef('');
  async function changeHandle(e) {
    const value = await dataref.current.value;
    setData((value)=>{
      return value;
    });
    console.log(value)
    const user = { type: props.title, inputValue: value };
    props.handleData(user);
  }
  return (
    <div>
      <input
      ref={dataref}
        className="reg-inp"
        type="text"
        
        placeholder={props.title}
        onChange={changeHandle}
      />
    </div>
  );
}
