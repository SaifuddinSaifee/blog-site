const Home = () => { 
    
    const handleClick = () => {
        console.log("Hello There");
    }

    const handleClick2 = (name) => {
        console.log("Hello", name)
    }

    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClick2("saif")}>Click me again</button>
        </div>
    );
}
 
export default Home;