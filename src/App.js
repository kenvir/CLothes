import React, { useState, useContext, createContext } from 'react';
import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import '~/App.css';
import { publicRoutes } from '~/routes/routes';
import LoadingSpinner from './layouts/components/LoadingSpinner/LoadingSpinner';
import ScrollToTop from './hooks/scrollToTop';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './pages/Login/Login';
import DashBoard from './pages/DashBoard/DashBoard';
import Home from './pages/Home/Home';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

const AppContext = createContext();

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
            <ScrollToTop />
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
                        <>
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/dashboard"
                                element={
                                    <ProtectedRoute>
                                        <Dashboard />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="/" exact element={<Home />} />
                        </>
                    );
                })}
            </Routes>
        </Router>
    );
}

// const Home = () => <div>Home</div>;

const Dashboard = () => <div>Dashboard</div>;

export default App;

export function useAppContext() {
    return useContext(AppContext);
}
