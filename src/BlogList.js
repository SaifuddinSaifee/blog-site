const BlogList = ({blogs, title}) => {
    
    // const blogs = props.blogs
    // const title = props.title

    // console.log(blogProps);
    console.log(blogs);
    console.log(title);

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>
                        Written by{" "}
                        <a href={blog.author_link}>
                            <strong>{blog.author}</strong>
                        </a>
                        ❤️
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
