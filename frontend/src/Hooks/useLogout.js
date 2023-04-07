import { useDispatch } from 'react-redux';

export const useLogout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT', payload: null });
        dispatch({ type: 'DELETE_ALL_RESOURCE', payload: [] });
    };

    return { logout };
};
