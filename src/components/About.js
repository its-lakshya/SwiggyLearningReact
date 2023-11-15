import {Outlet} from "react-router-dom";
import Profile from "./Profile";
import profileClass from "./ProfileClass";
import React from "react"

// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>This is Namaste React Course</p>
//       <Outlet/>
//       <Profile name={"Lakshya"}/>
//       <ProfileClass name={"Lakshya"}/>
//     </div>
//   );
// };


class About extends React.Component{

  render() {
    return(
      <div>
      <h1>About Us Page</h1>
      <p>This is Namaste React Course</p>
      <Outlet/>
      {/* <Profile name={"Lakshya"}/> */}
      {/* <ProfileClass name={"Lakshya"}/> */}
    </div>
    )
  }
}
export default About;
