import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);
  useEffect(() => {
    console.log("functionalCallinUseEffect");
    
    // const timer = setInterval(() => {
    //   console.log("apple")
    // },1000)

    // return () => {
    //   clearInterval(timer);
    //   console.log("return function insde useEffect")
    // }
  })
  console.log("functionCallOutsideReturn")
  return (
    <>
    {console.log("functionCallInReturn")}
      <h1> This is Profile Page from functional component</h1>
      <h2>{props.name}</h2>
      <h2>{count}</h2>
      <h2>{count2}</h2>
      <button
        onClick={() => {  
          setCount(11);
          setCount2(22)
        }}
      >
        setCount
      </button>
      {/* <h2>{count2}</h2> */}
    </>
  );
};


export default Profile;
