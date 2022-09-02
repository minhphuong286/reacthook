import { Link, useHistory } from "react-router-dom";
import useFetch from "../customize/fetchApi";
import './Blog.scss';

const Blog = () => {
    const { data: dataBlogs }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 9)
    }
    let history = useHistory();
    const handleAddNew = () => {
        history.push('/add-new-blog')
    }
    return (
        <>
            <div><button className="btn-add-new" onClick={handleAddNew}>+ Add new blog</button></div>
            <div className="blogs-container">
                {newData && newData.length > 0 &&
                    newData.map((item, index) => {
                        return (
                            <div className="single-blog" key={index}>
                                <div className="title">{item.title}</div>
                                <div className="content">{item.body}</div>
                                <button>
                                    <Link to={`/blogs/${item.id}`}>View detail</Link>
                                </button>
                            </div>
                        )
                    })}
            </div>
        </>

    )
}

export default Blog;