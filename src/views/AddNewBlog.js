import './Blog.scss';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitBtn = () => {
        if (!title) {
            if (!title) {
                alert('empty title');
                return;
            }
            if (!content) {
                alert('empty content');
                return;
            }

            console.log('>>> check data before send >>> title:', title, ' content: ', content)
        }
    }
    let history = useHistory();
    const handleCancelBtn = () => {
        history.push('/blogs');
    }
    return (
        <div className="add-new-container">
            <div className="text-add-new">---Add new blogs ---</div>
            <div className="inputs-data">
                <label>Title: </label>
                <input type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="inputs-data">
                <label>Content: </label>
                <input type="text"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <button className="btn-add-new" onClick={handleSubmitBtn}>Submit</button>
            <button className="btn-add-new" onClick={handleCancelBtn}>Cancel</button>
        </div>
    )
}
export default AddNewBlog;