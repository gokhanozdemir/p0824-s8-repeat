import { Link } from "react-router-dom"

function Header() {
	return (
		<header className="container">
			<Link className="logo-container" to="/">
				<img src="./Netflix_2015_logo.svg" alt="netflixlogo" />
			</Link>

			<nav>
				<ul>
					<li>
						<Link to="/who-is-watching">Kim izliyor?</Link>
					</li>

				</ul>
			</nav>
		</header>

	)
}

export default Header