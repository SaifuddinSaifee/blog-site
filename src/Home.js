import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => { 
    const [blogs, setBlogs] = useState([
        {title: 'First React app', body: 'lorem ipsum', author: 'Saif', author_link: "Saif-blogs", id: 1},
        {title: 'Intro To DevOps', body: 'lorem ipsum 2', author: 'Marco',author_link: "Marcos-blogs", id: 2},
        {title: 'Integration with appwrite', body: 'lorem ipsum 3', author: 'Polo',author_link: "Polos-blogs", id: 3},
        {title: 'Integration with Cuvette', body: 'lorem ipsum 4', author: 'Marco',author_link: "Marcos-blogs", id: 4}, {title: 'The Art of Storytelling', body: 'lorem ipsum 5', author: 'Nina', author_link: "Ninas-blogs", id: 5},
        {title: 'Exploring the Great Outdoors', body: 'lorem ipsum 6', author: 'Liam', author_link: "Liams-blogs", id: 6},
        {title: 'Mastering Machine Learning', body: 'lorem ipsum 7', author: 'Kiera', author_link: "Kieras-blogs", id: 7},
        {title: 'The Power of Positive Thinking', body: 'lorem ipsum 8', author: 'David', author_link: "Davids-blogs", id: 8}
    ]);

    const [name, setName] = useState("marco");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("useEffect in action");
    }, [name])

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = {"All Blogs"} handleDelete = {handleDelete}/>
            <BlogList blogs = {blogs.filter((blog) => blog.author === "Marco")} title = {"Marco's blogs"} handleDelete = {handleDelete}/>
            <button onClick={() => setName("luigi")}>Change the name</button>
            <p>{name}</p>
        </div>
    );
}
 
export default Home;