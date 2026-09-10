
import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {

    const user = useContext(UserContext);       //another component can access the value using: useContext()
    return <h1>Hello {user}</h1>;
}

export default Profile;