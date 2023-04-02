import { useDispatch } from 'react-redux';

export const useLogout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT', payload: null });
    };

    return { logout };
};
