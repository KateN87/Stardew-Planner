import { useLogin } from '../Hooks/useLogin.js';

const Login = () => {
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { userName, password } = e.target;
        await login(userName.value, password.value);
    };

    return (
        <div className='page-container row'>
            <div className='card card-container'>
                <div className='card-header'>Log In</div>
                <div className='card-body'>
                    <form className='signup' onSubmit={handleSubmit}>
                        <label htmlFor='userName'>User Name: </label>
                        <input type='text' id='userName' />

                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' />
                        <button disabled={isLoading}>Log In</button>
                        {error && <div className='error'>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
