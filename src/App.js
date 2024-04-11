import React, { useState, useContext } from 'react';
import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import '~/App.css';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { publicRoutes } from '~/routes/routes';
import LoadingSpinner from './layouts/components/LoadingSpinner/LoadingSpinner';
import ScrollToTop from './hooks/scrollToTop';

function App() {
    // Lay trang thai dang nhap hien tai
    // const { asPath } = useLocation();
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

    // const URL = `${origin}${asPath}`;
    const [reload, setReload] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        let FaShiUser = localStorage.getItem('FaShiUser') ? JSON.parse(localStorage.getItem('FaShiUser')) : null;
        if (FaShiUser) {
            setCurrentUser(FaShiUser);
        } else {
            setCurrentUser(null);
        }
    }, [URL]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        // return setIsLoading(false);
    }, [isLoading]);

    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                {/* {isLoading ? (
                    <LoadingSpinner />
                ) : ( */}
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                {/* )} */}
            </div>
        </Router>
    );
}

export default App;

export function useAppContext() {
    return useContext();
}
