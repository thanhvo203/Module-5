import { Link } from "react-router-dom";



function Navbar () {

    return(
        <div>
            <h1>Get Users</h1>
            <Link to={'/user'}>
                <button type="submit">Get User</button>
            </Link>
        </div>
    )
}
export default Navbar;