import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        console.log('props: ', props);
    }


    render(){
        return (
            <div className="about-card">
                <div>Name : pooja</div>
                <div>Kundapur</div>
                <div>{this.props?.name}</div>
            </div>
        )
    }
}

export default UserClass