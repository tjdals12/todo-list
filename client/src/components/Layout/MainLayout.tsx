import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

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
                <Footer />
            </Content>
        </div>
    );
}
