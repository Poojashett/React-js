
// class based component 
import User from "./User";
import UserClass from "./UserClass";


const About = () => {
    return (
        <div>
            <h2>about us</h2>
            <User name={"poojaaaaa"} />
            <UserClass name = {"passing props pooja from class based component"}/>
        </div>
    )
}

export default About;