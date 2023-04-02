import { useSignup } from '../Hooks/useSignup.js';

const Signup = () => {
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { userName, password } = e.target;
        await signup(userName.value, password.value);
    };

    return (
        <div className='page-container row'>
            <div className='card card-container'>
                <div className='card-header'>Sign Up</div>
                <div className='card-body'>
                    <form className='signup' onSubmit={handleSubmit}>
                        <label htmlFor='userName'>User Name: </label>
                        <input type='text' id='userName' />

                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' />
                        <button disabled={isLoading}>Sign up</button>
                        {error && <div className='error'>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
