import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState();
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const fileSelectedHandler = (e) => {
        console.log(e.target.files[0]);
       
    } 
    const handleSubmit = (e) => {
        setIsPending(true);
        e.preventDefault();
        const blog = { title, body, author };
        console.log(image);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
    }
    //const uploadImage = () => {
    //    const newImageUrl = '';
    //}

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body.</label>
                <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} />
                <label>Category.</label>
                <select
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option></option>
                    <option value="Mario">Mario</option>
                    <option value="Francis">Francis</option>
                    <option value="Michael">Michael</option>
                    <option value="Tiano">Tiano</option>
                </select>
                <label>Image</label>
                <input type="file"
                    required
                    value={image}
                    onChange={(fileSelectedHandler)} />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog ...</button>}
            </form>
        </div>
    );
}

export default Create;