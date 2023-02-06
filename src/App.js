import Navbar from "./Navbar";
import Home from "./Home";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <div className="content">
                <h1>Root</h1>
            </div>
        </div>
    );
}

export default App;
