const BlogList = ({ blogs, title, handleDelete }) => {
    // const blogs = props.blogs
    // const title = props.title

    // console.log(blogProps);
    // console.log(blogs);
    // console.log(title);

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p><em>written by{" "}<a style={{textDecoration: 'none'}} href={blog.author_link}><strong>{blog.author}</strong></a></em>❤️</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>

            ))}
        </div>
    );
};

export default BlogList;
