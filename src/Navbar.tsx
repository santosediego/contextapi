import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <nav className="main-nav">
            <Link to="/"> Home</Link>
            <Link to="/users"> Users</Link>
            <h4>{theme}</h4>
        </nav>
    );
}

export default Navbar;