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


    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/pooja-2001")
        const jsondata = await data.json();

        this.setState({
            userinfo: jsondata
        })

    }
    componentDidUpdate() {

    }
    componentWillUnmount() {

    }

    render() {
        const { login, avatar_url } = this.state.userinfo
        return (
            <div className="about-card">
                <div>{login}</div>
            </div>
        )
    }
}

export default UserClass