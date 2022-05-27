import React, { useState } from 'react'
import { useAuth } from '../../contexts/auth-context'
import { useTheme } from '../../contexts/theme-context'
import { useType } from '../../contexts/type-context'
import './createPlaylist.css'
import { createNewPlaylist, addVideoToPlaylist, removeVideoFromPlaylist } from '../../services/playlistService.jsx'
const CreatePlaylist = () => {
    const { token } = useAuth()
    const [input, setInput] = useState(false)
    const { typeState, typeDispatch } = useType()
    const { modal, setModal, modalData, ShowToast } = useTheme()
    const [playlistName, setPlaylistName] = useState('')


    const createPLaylist = () => {
        setInput(true);
        playlistName &&
            createNewPlaylist(token, typeDispatch, playlistName, setInput);
        setPlaylistName("");
    }
    return (
        <div>
            <div className="chat_box" style={{ display: modal ? 'flex' : 'none' }}>
                <div className='chatroom coln_flex'>
                    <div className="just_btw_flex align_flex cur">
                        <h2>Create playlist</h2>
                        <i
                            className="fa fa-times fa-lg"
                            aria-hidden="true"
                            onClick={() => setModal(!modal)}
                        />
                    </div>
                    {
                        typeState.playlistCollection &&
                        typeState.playlistCollection.map((item) => {
                            const isInPlaylist = item.videos?.some(
                                (item) => item._id === modalData._id
                            );
                            return (
                                <div className="just_btw_flex align_flex" key={item._id}>
                                    <label className="input-lable">
                                        <input
                                            type="checkbox"
                                            name="input"
                                            checked={isInPlaylist}
                                            onChange={(e) => {
                                                e.target.checked
                                                    ? addVideoToPlaylist(
                                                        token,
                                                        typeDispatch,
                                                        modalData,
                                                        item._id
                                                    )
                                                    : removeVideoFromPlaylist(
                                                        token,
                                                        modalData._id,
                                                        item._id,
                                                        typeDispatch
                                                    );
                                                ShowToast('added to playlist')
                                                setModal(!modal)
                                            }}
                                        />
                                        <span className="all_center"> {item.title}</span>
                                    </label>
                                </div>
                            );
                        })}

                    <label className={` ${input ? 'dis_flex' : 'aria-hidden'} align_flex`}>
                        <h3>playlist name</h3>
                        <input type="text" placeholder='Enter playlist name' className='chatroom_text'
                            autoComplete='off'
                            value={playlistName}
                            onChange={e => setPlaylistName(e.target.value)}
                        />
                    </label>
                    <button className='btn' onClick={() => createPLaylist()}>Create PLaylist</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePlaylist
//     < div className = "modal" >
//         <div className="modal-header">
//             <h3>Save to</h3>
//             <i
//                 className="fa fa-times"
//                 aria-hidden="true"
//                 onClick={() => setModal(!modal)}
//             />
//         </div>
// {
//     playlist.map((item) => {
//         const isInPlaylist = item.videos?.some(
//             (item) => item._id === modalData._id
//         );
//         return (
//             <div className="modal-header" key={item._id}>
//                 <label className="input-lable">
//                     <input
//                         type="checkbox"
//                         name="input"
//                         checked={isInPlaylist}
//                         onChange={(e) => {
//                             e.target.checked
//                                 ? postPlaylistVideoHandler(
//                                     token,
//                                     dataDispatch,
//                                     modalData,
//                                     item._id
//                                 )
//                                 : DeletePlaylistVideohandler(
//                                     token,
//                                     modalData._id,
//                                     item._id
//                                 );
//                         }}
//                     />
//                     <span className="input-lable-text"> {item.title}</span>
//                 </label>
//             </div>
//         );
//     })
// }