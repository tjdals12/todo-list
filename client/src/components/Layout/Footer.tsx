import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';

export default function Footer(): React.ReactElement {
    return (
        <Navbar className="cr-footer mt-auto">
            <Nav navbar>
                <NavItem>2019. 11 Minz-logger</NavItem>
            </Nav>
        </Navbar>
    );
}
