import react from "react"
import { ReactDOM } from "react"

export default  function Navbar() {
    return (
        <div>
        <header>
        <main>
            <nav className="nav">
            <img src="./reactlogo.png" className="nav-logo"/>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
        </main>
        </header>
        </div>
    )
}