import './App.css';
import Header from './Components/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Home from './Pages/Home';
import ResourceList from './Pages/ResourceList';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer);

    useEffect(() => {
        const checkUser = JSON.parse(localStorage.getItem('user'));
        if (user) {
            dispatch({ type: 'LOGIN', payload: checkUser });
        }
    }, []);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={user ? <Home /> : <Navigate to='/login' />}
                />
                <Route
                    path='/findResource'
                    element={user ? <ResourceList /> : <Navigate to='/login' />}
                />
                <Route
                    path='/login'
                    element={!user ? <Login /> : <Navigate to='/' />}
                />
                <Route
                    path='/signup'
                    element={!user ? <Signup /> : <Navigate to='/' />}
                />
            </Routes>
        </div>
    );
}

export default App;
