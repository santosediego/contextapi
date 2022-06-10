import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Users = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Tela de usuários</h1>
            <h3>Valor da váriavel theme: {theme}</h3>
            <button onClick={() => setTheme('DARK')}>Dark Mode</button>
            <button onClick={() => setTheme('LIGHT')}>Lignt Mode</button>
        </div>
    );
}

export default Users;