import { Component } from "react";
import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }
render(){
return(
<div>
    <h1>Welcome to About page</h1>
    <div>
        loggedIn User
        <UserContext.Consumer>
            {(data) =>console.log(data)}
        </UserContext.Consumer>
    </div>
    <UserClass name={"Palak(class)"} location={"Pune"}/>
    </div>
    
);
}
};

export default About;