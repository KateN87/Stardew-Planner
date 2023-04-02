import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogout } from '../Hooks/useLogout';

const Header = () => {
    const user = useSelector((state) => state.userReducer);
    const { logout } = useLogout();

    const handleClick = () => {
        logout();
    };

    return (
        <>
            <nav className='navbar'>
                {user && (
                    <div className='divLog'>
                        <span>{user.userName}</span>
                        <button className='btnNav' onClick={handleClick}>
                            Log out
                        </button>
                        <Link to='/'>
                            <button className='btnNav'>Home</button>
                        </Link>
                    </div>
                )}
                {!user && (
                    <div className='divLog'>
                        <Link to='/login'>
                            <button className='btnNav'>Login</button>
                        </Link>
                        <Link to='/signup'>
                            <button className='btnNav'>Signup</button>
                        </Link>
                        <Link to='/'>
                            <button className='btnNav'>Home</button>
                        </Link>
                    </div>
                )}
            </nav>
            <div className='div-img'>
                <img className='nav-img' src='./images/header.png' alt='' />
            </div>
        </>
    );
};

export default Header;
