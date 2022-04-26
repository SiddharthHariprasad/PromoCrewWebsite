import React from 'react';
import { Icon, Navbar, NavItem } from 'react-materialize';
const Header = () => {
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