import React from 'react';
import { LayoutRoute, MainLayout } from 'components/Layout';
import { MainPage, FavoritePage, ImportantPage, TagsPage } from 'pages';
import { BrowserRouter, Switch } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <LayoutRoute
                    path="/"
                    exact={true}
                    layout={MainLayout}
                    component={MainPage}
                />

                <LayoutRoute
                    path="/favorite"
                    exact={true}
                    layout={MainLayout}
                    component={FavoritePage}
                />

                <LayoutRoute
                    path="/important"
                    exact={true}
                    layout={MainLayout}
                    component={ImportantPage}
                />

                <LayoutRoute
                    path="/tags"
                    exact={true}
                    layout={MainLayout}
                    component={TagsPage}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
