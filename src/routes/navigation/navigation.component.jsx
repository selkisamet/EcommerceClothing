import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import CardIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";
import styled from "styled-components";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    console.log(currentUser);


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo className="logo" />
                </LogoContainer>

                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink> : <NavLink to="/auth">SIGN IN</NavLink>}
                    <CardIcon />
                    {currentUser &&
                        <NameStyle>Samet SELKİ</NameStyle>
                    }
                </NavLinks>
                {
                    isCartOpen && <CartDropdown />
                }

            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;

const NameStyle = styled.div`
    background-color: gold;
    padding: 0.5rem;
    border-radius: 0.5rem;
`;