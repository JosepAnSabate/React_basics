
// export default per exportar una sola funció/component
export default  function Header() {
    return (
        <div>
        <header>
            <nav className="nav">
            <img src="./reactlogo.png" className="nav-logo"/>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
        </header>
        </div>
    )
}

