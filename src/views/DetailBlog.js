import { useHistory, useParams } from "react-router-dom";
import './Blog.scss';
import useFetch from "../customize/fetchApi";

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();
    const handleBackToBlogs = () => {
        history.push('/blogs');
    }
    const { data: dataBlogDetail }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)

    return (
        <>
            <button
                onClick={() => handleBackToBlogs()}
            >
                Back to Blogs
            </button>
            <p>Detail of Blog {id}</p>
            <div className="blog-detail">
                {dataBlogDetail && Object.keys(dataBlogDetail).length !== 0 &&
                    <>
                        <div className="title">
                            Blog ID: {id} -- Title: {dataBlogDetail.title}
                        </div>
                        <div className="content">
                            {dataBlogDetail.body}
                        </div>

                    </>
                }

            </div>
        </>
    )
}

export default DetailBlog;