import React, { useState, useEffect } from 'react';
import { Button, Dropdown, Icon, Navbar, NavItem } from 'react-materialize';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import person from './images/person.png'

const Header = () => {
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return(
        <header>
            <div className="black" style={{'padding': '0% 5%'}}>
                {/* Nav to hold the navbar */}
                <Navbar 
                    className="black" 
                    alignLinks="right" 
                    brand={<a href="/" className="brand-logo white-text">PromoCrew</a>}
                    id="mobile-nav"
                    menuIcon={<Icon className="teal-text">menu</Icon>}
                    options={{ 
                        draggable: true, 
                        edge: 'left', 
                        inDuration: 250, 
                        outDuration: 200, 
                        preventScrolling: true,
                    }}
                >
                    <NavItem href="/Packages" className="waves-effect waves-light">Services</NavItem>
                    <NavItem href="/Tickets" className="waves-effect waves-light">Contact Us</NavItem>
                    <NavItem href="/AboutUs" className="waves-effect waves-light">About Us</NavItem>
                    <NavItem href="/Cart" className="waves-effect waves-light"><Icon>shopping_cart</Icon></NavItem>
                    { user ? (
                        <Dropdown 
                            id="dropDownSettings" 
                            className="black"
                            options={{
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: false,
                                constrainWidth: false,
                                container: null,
                                coverTrigger: false,
                                hover: false,
                                inDuration: 150,
                                outDuration: 250
                            }}
                            trigger={
                                <img 
                                    src={user?.result?.imageUrl || person} 
                                    alt={user?.result?.name.charAt(0)} 
                                    className="circle" 
                                    height="50px" 
                                    width="50px" 
                                    style={{ 
                                        borderStyle: 'solid', 
                                        borderColor: 'teal',
                                        verticalAlign: 'middle', 
                                        marginLeft: '1em' 
                                    }}
                                />
                            }
                            >
                                <span className="teal-text text-lighten-4">{user?.result?.name}</span>
                                { user?.result?.serviceProvider ? 
                                    <><a href="/FormCab" className="teal-text text-lighten-4">Add Cab</a>
                                    <a href="/FormGuide" className="teal-text text-lighten-4">Add Guide</a>
                                    <a href="/FormHotel" className="teal-text text-lighten-4">Add Hotel</a>
                                    <a href="/FormPack" className="teal-text text-lighten-4">Add Pack</a>
                                    <a href="/FormTicket" className="teal-text text-lighten-4">Add Ticket</a>
                                    <a href="/EditForm" className="teal-text text-lighten-4">Edit Items</a>
                                    <a href="/DeleteForm" className="teal-text text-lighten-4">Delete Item</a></>
                                    : null
                                }
                                <Button node="button" waves="teal" onClick={logout}>Logout<Icon right>logout</Icon></Button>
                        </Dropdown>
                            ) : (
                                <Button href="/Auth" node="a" waves="teal">Sign In</Button>
                            )
                    }
                </Navbar>
            </div>
        </header>
    );
}

export default Header;