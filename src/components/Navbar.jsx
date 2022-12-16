import './Navbar.css'

function Navbar() {
    return (
        <header>
            <nav>
                <div>
                    <img src="/favicon.svg" alt="Logo de la web" />
                </div>
                <ul>
                    <li><a href="/">INDEX</a></li>
                    <li><a href="/about">ABOUT</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar