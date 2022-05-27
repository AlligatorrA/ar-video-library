import React, { useState } from 'react'
import { useAuth } from '../../contexts/auth-context'
import './comments.css'
const Comments = () => {
    const [input, setInput] = useState('')
    const [comentPost, setComentPost] = useState([])
    const { users } = useAuth()

    const commentHandle = () => {
        if (input === '') {
            return false
        }
        const postData = { data: input, id: new Date().toString() }
        setComentPost(oldPost => (
            [...oldPost, postData]
        ))
        setInput('')
    }
    const commentHandlePost = e => e.keyCode === 13 ? commentHandle() : '';
    return (
        <div>
            <div className="desc f24px margin20pxhzt">
                <h2>Add Comments</h2>
                <input className='comment_input' type="text" placeholder='Enter your comments'
                    name='input'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={commentHandlePost}
                />
            </div>
            <hr />
            <div className=" desc  f24px ">
                <h2>Comments</h2>
                {
                    users.map(user => (
                        <h4 key={user._id}>{`${user.firstName}  ${user.lastName}`}:</h4>
                    ))
                }
                {
                    comentPost.map(comments => (
                        <p key={comments.id}>{comments.data}</p>
                    ))
                }
            </div>
        </div>
    )
}
export default Comments