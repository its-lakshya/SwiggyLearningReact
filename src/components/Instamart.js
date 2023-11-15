import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  //   const [isVisible, setIsVisible] = useState(false);
//   const [show, setShow] = useState("Show");
  return (
    <div className="border border-black m-2 p-2 rounded-md">
      <h2 className="font-bold">{title}</h2>
      {/* <button
        className="border border-blue-700 rounded-md bg-blue-800 text-white"
        onClick={() => {
          {
            isVisible == false ? setIsVisible(true) : setIsVisible(false);
          }
          {
            isVisible == false ? setShow("Hide") : setShow("Show");
          }
        }}
      >
        {show}
      </button> */}
      {isVisible ? (
        <>
        <button
          onClick={() => {
            // setIsVisible(false)
          }}
        >                                       
          Hide
        </button>
        <p>{description}</p>

        </>
      ) : (
        <>
        <button
          onClick={() => {
            setIsVisible();
          }}
        >
          Show
        </button>
        </>
      )}

      {/* {isVisible && <p>{description}</p>} */}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState(false);
  return (
    <div>
      <h1 className="text-3xl m-2 p-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection==="About"}
        setIsVisible={() =>  setVisibleSection("About")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do smod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection==="Team"}
        setIsVisible={() => setVisibleSection("Team")}
      />
      <Section
        title={"Careers Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do smod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection==="Careers"}
        setIsVisible={() => setVisibleSection("Careers")}
      />
    </div>
  );
};

export default Instamart;
