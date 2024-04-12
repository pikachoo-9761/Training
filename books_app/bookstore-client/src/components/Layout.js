import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div>
            <nav style={{backgroundColor:'lightgray', paddingBottom:10}}>
                <h2>Book Store Web Client</h2>
                <Link to={'/'}>Home</Link>
                <Link to={'/About'}>About</Link>
                <Link to={'/Contact'}>Contact</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/addbook'}>Add Book</Link> 
            </nav>
            <Outlet/>
        </div>
    )
}