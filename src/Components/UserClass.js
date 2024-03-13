import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userinfo: {
                login: "deflt name",
                location: "default loc"
            }
        }

        console.log("constructor called")

    }

    async componentDidMount() {
        console.log('componentDidMount: called');
        const data = await fetch("https://api.github.com/users/pooja-2001")
        const jsondata = await data.json();

        this.setState({
            userinfo: jsondata
        })

    }
    componentDidUpdate() {
        console.log("didupdate called")

    }
    componentWillUnmount() {
        console.log('componentWillUnmount: ');

    }

    render() {
        console.log("render called")
        const { login, avatar_url } = this.state.userinfo
        return (
            <div className="about-card">
                <div>{login}</div>
            </div>
        )
    }
}

export default UserClass