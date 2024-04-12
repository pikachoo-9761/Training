import {Component} from "react";

export default class HomeClass extends Component{
    render(){
        return (<div>
            <h1>Home Component</h1>
            <p>Hello Mr.{this.props.uname}</p>
            <p>Email is {this.props.emailId}</p>
            <p>Friends are:</p>
            <ul>
                {
                    this.props.friendlist.map((friend, index) => {
                        return <li key={index}>{friend}</li>
                    })
                }
            </ul>
        </div>)
    }
}