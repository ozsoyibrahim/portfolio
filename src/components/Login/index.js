import { signInWithGoogle } from '../../firebase';

const Login = () => {
    const handleSignInWithGoogle = async () => {
        const user = await signInWithGoogle();
        console.log(user);
    }

    return (
        <div className="dashboard">
            <button onClick={handleSignInWithGoogle}>
                Sign in with google
            </button>
        </div>
    )
}

export default Login;