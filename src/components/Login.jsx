import { useHistory, Link } from "react-router-dom";
import './Form.css'
function Login() {
	let history = useHistory()

	const handleLogin = () => {
		// TODO: ileride bu kısma Axios ile auth eklenecek.
		history.push("/who-is-watching");
	};

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit} className="flex column gap-s">
				<div className="input-group">
					<label htmlFor="emailormobile">Email or mobile number</label>
					<input type="text" id="emailormobile" placeholder="your user info" />
				</div>
				<div className="input-group">
					<label htmlFor="pass">Password</label>
					<input type="password" id="pass" placeholder="your password" />
				</div>
				<div className="input-group">
					<input type="checkbox" id="remember" name="rememberMe" />
					<label htmlFor="remember">Remember me</label>
				</div>
				<button className="primary-button" type="submit">Login</button>
				<button className="secondary-button" type="button">Use a Sign-In Code</button>
				<Link to="/reset-password">Forgot Password?</Link>
				<div>
					New to Witflix? <Link to="/register">Sign up now</Link>
				</div>
			</form>

		</>
	)
}

export default Login