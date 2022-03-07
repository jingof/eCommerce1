import { Link } from 'react-router-dom';
const BlogList = (props) => {
    const blogs = props.blogs;
    let title = props.title;
    return (
        <div className="blog">
            <h2>{title}</h2>
            <br />
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} style={{textDecoration:'none'}}>
                        {/*<a href="#" style={{textDecoration:'none'}}>*/}
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        {/*</a>*/}
                    </Link>
                    {/*<button onClick={() => props.handleBlogDelete(blog.id)}>Delete</button>*/}
                </div>


            ))}
            {/*<button onClick={() => props.handleAllBlogsDelete()}>Delete</button>*/}
        </div>
    );
}

export default BlogList;