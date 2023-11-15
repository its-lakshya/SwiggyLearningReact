import { createContext } from "react";

const UserContext = createContext(

//     {
//     user : {
//     name:"Dummy Name",
//     email:"dummy@gmail.com",
// },}
)

export default UserContext;

// if i click the + button it despatches action which calls the reducer function and than...
// reducer function updates the slice in the store