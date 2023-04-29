const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Blogg by Saif</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" className="newBtn">New blog</a>
            </div>
        </nav>
    );
}

export default Navbar;