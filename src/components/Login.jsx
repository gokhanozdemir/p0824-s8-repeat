import { useHistory, Link } from "react-router-dom";
import './Form.css'
import { useState } from "react";
function Login() {
	const initialForm = {
		userInfo: 'gokhan',
		passField: '123',
		rememberMe: true,
	};
	let history = useHistory()
	const [formData, setFormData] = useState(initialForm)
	const handleLogin = () => {
		// TODO: ileride bu kısma Axios ile auth eklenecek.
		history.push("/who-is-watching");
	};

	function handleSubmit(e) {
		e.preventDefault();
	}

	const handleChange = (e) => {
		const { type, name, value, checked } = e.target;
		console.log("type", type, "name", name, "value", value, "checked", checked);
		const newFormData = { ...formData };

		const valueNew = type === "checkbox" ? checked : value;
		newFormData[name] = valueNew;
		setFormData(newFormData);
	}

	return (
		<>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit} className="flex column gap-s">
				<div className="input-group">
					<label htmlFor="emailormobile">Email or mobile number</label>
					<input onChange={handleChange} name="userInfo" value={formData.userInfo} type="text" id="emailormobile" placeholder="your user info" />
				</div>
				<div className="input-group">
					<label htmlFor="pass">Password</label>
					<input onChange={handleChange} name="passField" value={formData.passField} type="password" id="pass" placeholder="your password" />
				</div>
				<div className="input-group">
					<input onChange={handleChange} name="rememberMe" checked={formData.rememberMe} type="checkbox" id="remember" />
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