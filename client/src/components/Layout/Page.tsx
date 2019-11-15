import React from 'react';

type PageProps = {
    title: string;
    children: React.ReactNode;
};

export default function Page({
    title,
    children,
}: PageProps): React.ReactElement {
    return (
        <div className="page px-3 py-2">
            <h1 className="display-4 mb-4 title">{title}</h1>
            {children}
        </div>
    );
}
