import { useEffect, useState } from "react";
import axios from "axios";

export default function Home(/*{uname, emailId, friendlist}*/){

    // const[counter, setCounter] = useState(0);

    // useEffect(()=>{
    //     console.log("component is mounted");
    // },[]);

    // useEffect(()=>{
    //     console.log("component is updated");
    // },[counter]);

    const [books, setBooks] = useState([]);

    useEffect(() => {
        //load API data when component is mounted
        const options ={
            headers:{
                "Authorization": `Bearer ${localStorage.getItem('Token')}`
            }
        }
        axios.get('http://localhost:4000/api/books', options)
        .then(res => {
            console.log(res.data);
            setBooks(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    

    return (
        <div className="container">
        {/* <h1>Home Component</h1> */}
        {/* <p>Counter: {counter}</p>
        <button onClick={()=>setCounter(counter+1)}>Increment</button> */}
        {/* <p>Hello Mr.{uname}</p>
        <p>Email is {emailId}</p>
        <p>Friends are:</p>
        <ul>
            {
                friendlist.map((friend, index) => {
                    return <li key={index}>{friend}</li>
                })
            }
        </ul> */}
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <h2>Books List</h2>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Pages</th>
                            <th>ISBN</th>
                            <th>Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.pages}</td>
                                    <td>{item.isbn}</td>
                                    <td>{item.language}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
        </div>
        </div>
        </div>
    )
}

// import { Component } from "react";

// export default class Home extends Component {
//     constructor(){
//         super();
//         this.state = {
//             counter: 0
//         }
//         console.log("Home Constructor executed");
//     }

//     componentDidMount(){
//         console.log("Home ComponentDidMount executed");
//     }

//     render() {
//         console.log("Home Render executed");
//         return (<div>
//             <h2>Home Component</h2>
//             <p>I am from Home page</p>
//             <p>Counter: {this.state.counter}</p>
//             <button onClick={() => this.setState({ counter: this.state.counter+1 })}>Increment</button>
//         </div>)
//     }

//     componentDidUpdate(){
//         console.log("Home ComponentDidUpdate executed");
//     }

//     componentWillUnmount(){
//         console.log("Home ComponentWillUnmount executed");
//     }

// }