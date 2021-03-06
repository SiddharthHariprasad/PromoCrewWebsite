import React from 'react';
import { Icon, Navbar, NavItem } from 'react-materialize';
import logo from './images/logo-pc.png';
const Header = () => {
    return(
        <header>
            <div className="">
                {/* Nav to hold the navbar */}
                <Navbar 
                    className="navbar"
                    style={{'padding': '0% 5%'}} 
                    alignLinks="right" 
                    brand={<a href="/" className="brand-logo"><img src={logo} alt="logo" height="30px" /></a>}
                    id="mobile-nav"
                    menuIcon={<Icon className="">menu</Icon>}
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
                    {/* <NavItem href="/Media" className="waves-effect waves-light">Media</NavItem> */}
                    <NavItem href="/AboutUs" className="waves-effect waves-light">About Us</NavItem>
                </Navbar>
            </div>
        </header>
    );
}

export default Header;