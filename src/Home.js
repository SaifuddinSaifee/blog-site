import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => { 
    const [blogs, setBlogs] = useState([
        {title: 'First React app', body: 'lorem ipsum', author: 'Saif', author_link: "#", id: 1},
        {title: 'Intro To DevOps', body: 'lorem ipsum 2', author: 'Marco',author_link: "#", id: 2},
        {title: 'Integration with appwrite', body: 'lorem ipsum 3', author: 'Polo',author_link: "#", id: 3},
    ]);

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = {"All Blogs"}/>
        </div>
    );
}
 
export default Home;