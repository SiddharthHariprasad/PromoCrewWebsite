import React, { useState, useEffect } from 'react';
import { Button, Dropdown, Icon, Navbar, NavItem } from 'react-materialize';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

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
                    brand={<a href="/" className="brand-logo white-text"><img src=""></img> PromoCrew</a>}
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
                    <NavItem href="/Services" className="waves-effect waves-light">Services</NavItem>
                    <NavItem href="/OurWorks" className="waves-effect waves-light">Our Works</NavItem>
                    <NavItem href="/ContactUs" className="waves-effect waves-light">Contact Us</NavItem>
                    <NavItem href="/AboutUs" className="waves-effect waves-light">About Us</NavItem>
                </Navbar>
            </div>
        </header>
    );
}

export default Header;