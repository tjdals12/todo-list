import React from 'react';
import { Form, Input } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

export default function SearchForm(): React.ReactElement {
    return (
        <Form className="cr-search">
            <FaSearch className="cr-search__icon" />
            <Input className="cr-search__input" placeholder="Search.." />
        </Form>
    );
}
