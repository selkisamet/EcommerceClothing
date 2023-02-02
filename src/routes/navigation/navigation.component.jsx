import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./navigation.styles.scss";

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link to="/" className="logo-container">
                    <Logo className="logo" />
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    <Link className="nav-link" to="/auth">SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;