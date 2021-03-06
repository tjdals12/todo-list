import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Badge } from 'reactstrap';
import { FaArchive } from 'react-icons/fa';
import { useModalOpen } from 'hooks/modals';
import SearchForm from './SearchForm';

export default function Header(): React.ReactElement {
    const onOpen = useModalOpen();

    return (
        <Navbar className="cr-header bg-white" expand>
            <NavbarBrand className="pl-4 hidden-sm hidden-xs">
                <h1 className="display-5 m-0">TODO LIST</h1>
            </NavbarBrand>
            <Nav navbar className="cr-header__nav-right mr-5">
                <NavItem
                    className="position-relative can-click"
                    onClick={() => onOpen('archiveCreateModal')}
                >
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
