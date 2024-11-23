import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import './Form.css'
import { useEffect, useState } from "react";
function Login() {
	const initialForm = {
		userInfo: 'emilys',
		passField: 'emilyspass',
		rememberMe: false,
	};
	let history = useHistory()
	const [formData, setFormData] = useState(initialForm);
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		const { userInfo, passField } = formData;
		const isValid = userInfo.length > 0 && passField.length > 0;
		setIsFormValid(isValid);
	}, [formData]);

	const handleLogin = (loginData) => {
		// TODO: ileride bu kısma Axios ile auth eklenecek.

		axios.post('https://dummyjson.com/auth/login', loginData)
			.then(function (response) {
				console.log(response);
				history.push("/who-is-watching");
			})
			.catch(function (error) {
				console.log(error);
				alert(error.response.data.message);
			});

	};

	function handleSubmit(e) {
		e.preventDefault();

		const loginData = {
			"username": formData.userInfo,
			"password": formData.passField,
			"expiresInMins": 10
		}

		handleLogin(loginData);
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
		<div className="container-small">
			<div className="login-page-container">
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
					<div className="input-group flex gap-s">
						<input onChange={handleChange} name="rememberMe" checked={formData.rememberMe} type="checkbox" id="remember" />
						<label htmlFor="remember"> Remember me</label>
					</div>
					<button disabled={!isFormValid} className="primary-button" type="submit">Login</button>
					<button className="secondary-button" type="button">Use a Sign-In Code</button>
					<Link to="/reset-password">Forgot Password?</Link>
					<div>
						New to Witflix? <Link to="/register">Sign up now</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login