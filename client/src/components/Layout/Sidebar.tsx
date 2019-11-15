import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink as BSNavLink,
    NavbarBrand,
} from 'reactstrap';
import { FaDropbox, FaHome, FaHeart, FaStar, FaTags } from 'react-icons/fa';

const menus = [
    { to: '/', exact: true, icon: FaHome },
    { to: '/favorite', exact: true, icon: FaHeart },
    { to: '/important', exact: true, icon: FaStar },
    { to: '/tags', exact: true, icon: FaTags },
];

export default function Sidebar(): React.ReactElement {
    return (
        <div className="cr-sidebar bg-white">
            <Navbar className="d-flex align-items-center justify-content-center mt-3 mb-5">
                <NavbarBrand className="m-0">
                    <FaDropbox size={35} className="text-primary" />
                </NavbarBrand>
            </Navbar>
            <Nav vertical>
                {menus.map(({ to, exact, icon: Icon }, index) => (
                    <NavItem key={index} className="cr-sidebar__nav-item">
                        <BSNavLink
                            id={`navItem-${index}`}
                            className="d-flex align-items-center justify-content-center"
                            activeClassName="active"
                            to={to}
                            exact={exact}
                            tag={NavLink}
                        >
                            <Icon
                                size={25}
                                className="cr-sidebar__nav-item-icon"
                            />
                        </BSNavLink>
                    </NavItem>
                ))}
            </Nav>
        </div>
    );
}
