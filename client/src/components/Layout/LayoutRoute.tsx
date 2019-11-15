import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

type LayoutRouteProps = {
    path: string;
    exact: boolean;
    layout: React.FunctionComponent<{ children: React.ReactNode }>;
    component: React.FunctionComponent<RouteComponentProps>;
};

export default function LayoutRoute({
    path,
    exact,
    layout: Layout,
    component: Component,
}: LayoutRouteProps): React.ReactElement {
    return (
        <Route
            path={path}
            exact={exact}
            render={(props: RouteComponentProps): React.ReactElement => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}
