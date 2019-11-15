import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Header from './Header';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <div className="cr-app bg-light">
            <Sidebar />
            <Content fluid className="cr-content">
                <Header />
                {children}
                <footer>Footer</footer>
            </Content>
        </div>
    );
}
