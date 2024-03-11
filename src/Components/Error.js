import { useRouteError } from "react-router-dom";
const Error = () =>{

    const errormsg = useRouteError();
    return (
        <div>
            <h1>Oopsss!! went wrong</h1>
            <h3>{errormsg.status}</h3>
        </div>
    )
}

export default Error;