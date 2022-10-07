import { Link } from "react-router-dom";
import stylesAppHeader from "./AppHeader.module.css";
export const AppHeader = () => {
  return (
    <header className={stylesAppHeader.header}>
      <h1 className={stylesAppHeader.logo}>
        <Link to="/">white - blog</Link>
      </h1>
      <div className={stylesAppHeader.flex}>
        <Link className={stylesAppHeader.link} to="/login">
          Войти
        </Link>
      </div>
    </header>
  );
};
