import React from "react";
import UserContext from "../utils/UserContext.js"
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 1,
    //   count2: 2,
    // };
    // console.log("call-Inside-Constructor")
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }

  //componentDidMount is the best place to make an API class in class based components.
  // This is called only once after initial render
  async componentDidMount() {
    // console.log("call-Inside-DidMount")
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    // this.Interval = setInterval(() => {
    //   console.log("Hello Lakshya!")
    // },1000)
  }

  // ComponentDidUpdate will be called every time when a class is called
  componentDidUpdate(prevProps, prevState) {
    // console.log("Component Did Update")
    // if(this.state.count != prevState.count){
    //   // this similar to useEffect second parameter
    // }
  }

  // componentWillUnmount will be count when we are unmounting such as we are going to another page
  componentWillUnmount() {
    // clearInterval(this.Interval);
    console.log("Component Will Unmount");
  }

  render() {
    // console.log("call-Inside-Render-But-Outside-Return")
    return (
      <>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold p-2 m-2">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        {/* {console.log("call-Inside-Return")} */}
        <h1>This is Profile Page From Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        {/* <h2>{this.props.name}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count2}</h2> */}
        <h2>{this.state.userInfo.name}</h2>
        <h2>{this.state.userInfo.location}</h2>
        {/* <button
          onClick={() => {
            // we do not mutate directly in class like functional components (this.setState() is wrong way )
            this.setState({
              count: 11,
              count2:22
            });
          }}
        >
          setState
        </button> */}
      </>
    );
  }
}

export default ProfileClass;
