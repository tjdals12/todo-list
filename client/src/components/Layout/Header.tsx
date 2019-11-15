import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Badge } from 'reactstrap';
import { FaArchive } from 'react-icons/fa';
import SearchForm from './SearchForm';

export default function Header(): React.ReactElement {
    return (
        <Navbar className="cr-header bg-white">
            <NavbarBrand className="pl-4">
                <h1 className="display-5 m-0">TODO LIST</h1>
            </NavbarBrand>
            <Nav navbar className="cr-header__nav-right mr-5">
                <NavItem className="position-relative">
                    <FaArchive size={30} className="can-click" />
                    <Badge
                        color="primary"
                        className="border rounded-circle position-absolute"
                        style={{
                            bottom: '-5px',
                            right: '-10px',
                        }}
                    >
                        +
                    </Badge>
                </NavItem>
            </Nav>

            <Nav>
                <SearchForm />
            </Nav>
        </Navbar>
    );
}
