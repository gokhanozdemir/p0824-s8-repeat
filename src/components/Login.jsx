import { useHistory } from "react-router-dom";

function Login() {
	let history = useHistory()

	const handleLogin = () => {
		// TODO: ileride bu kısma Axios ile auth eklenecek.
		history.push("/who-is-watching");
	};

	return (
		<>
			<div>Hayali Login Formu</div>
			<button className="primary-button" onClick={handleLogin}>Login</button>
		</>
	)
}

export default Login