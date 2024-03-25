
// class based component 
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../utils/userContext"


class About extends React.Component {
    //geting props

    constructor(props){
        super(props)
    }

    componentDidMount(){
        //api call
    }
 

    render(){
        return (
            <div>
                <h2>about us class comp</h2>
                <div>-function based</div>
                <User name={"poojaaaaa"} />
                <div>--------------------------------------------------------</div>
                <div>class based</div>
                <userContext.Consumer>
                    {
                        (data)=><h1>{data.loggedInUser}</h1>
                    }
                </userContext.Consumer>
                <UserClass name={"passing props pooja from class based component"} />
                <UserClass name={"second passing props pooja from class based component"} />
            </div>
        )
    }
}


//function based

// const About = () => {
//     return (
//         <div>
//             <h2>about us</h2>
//             <div>-function based</div>
//             <User name={"poojaaaaa"} />
//             <div>--------------------------------------------------------</div>
//             <div>class based</div>
//             <UserClass name = {"passing props pooja from class based component"}/>
//         </div>
//     )
// }

export default About;