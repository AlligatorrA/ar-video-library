import './soleplayer.css'
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../contexts/auth-context';
import { useType } from '../../contexts/type-context';
import { LikedService } from "../../services/LikedService";
import { Watchlater } from '../../services/WatchlaterServices';
import { Share } from '../../pure-functions/Share'
import { useTheme } from '../../contexts/theme-context';
import FooterNav from '../../components/navbar/FooterNav';
import Comments from '../../components/user-comments/Comments';
import CreatePlaylist from '../../components/create-playlist/CreatePlaylist';

const SolePlayer = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { theme, toast, showToast, ShowToast, setModal, setmodalData } = useTheme()
    const { videoId } = useParams()
    const { token } = useAuth()
    const { typeState, typeDispatch } = useType()
    const { videos } = typeState

    const videodetail = videos.length !== 0 && videos?.find((video) => video._id === videoId);

    const addToPlaylist = () => {
        if (token) {
            setModal(true);
            setmodalData(videodetail);
        } else {
            navigate("/login", {
                replace: true,
                state: { from: location.pathname },
            });
        }
    };

    return (
        <div style={{ color: theme === 'light' ? 'black' : 'white', backgroundColor: theme === 'light' ? 'white' : "#232529" }}>
            <CreatePlaylist />
            {videodetail &&
                <>
                    <div className=' coln_flex sole_play '>
                        <span style={{ display: showToast ? "block" : "none" }} className=" toast-add">{toast}</span>
                        <div className="player" >
                            <iframe className='video_player' src={`https://www.youtube.com/embed/${videodetail._id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                        </div>
                        <div className="spacerhalf"></div>
                    </div>

                    <div className=' margin20pxhzt '>
                        <h2>{videodetail?.title}</h2>
                        <div className="desc just_btw_flex">
                            <h3 className='margin_5px'>3222views</h3>
                            <div className="dis_flex margin_5px">
                                <span className={`margin_5px cur ${videodetail.islikedCollection ? 'isTrue' : ''}`} onClick={() => {
                                    ShowToast('liked')
                                    token ? LikedService(token, videodetail, typeDispatch, videodetail.islikedCollection) : navigate('/Login')
                                }}>
                                    <i className="fa-solid fa-heart margin_5px"></i>Like
                                </span>

                                <span className={`margin_5px cur ${videodetail.watchLaterCollection ? 'isTrue' : ''}`} onClick={() => {
                                    ShowToast('adding to watch later')
                                    token ? Watchlater(token, videodetail, typeDispatch, videodetail.watchLaterCollection) : navigate('/Login')
                                }}>
                                    <i className="fa-brands fa-playstation margin_5px"></i>watchLater
                                </span>
                                <span className={`margin_5px cur ${videodetail.playlistCollection ? 'isTrue' : ''}`} onClick={() => {
                                    ShowToast('adding to playlist')
                                    token ?
                                        addToPlaylist()
                                        : navigate('/Login')
                                }}>
                                    <i className="fa-solid fa-cloud-arrow-down margin_5px"></i> Save
                                </span>
                                <span className='margin_5px cur' onClick={() => Share(videodetail?.title, videodetail?._id)}>
                                    <i className="fa-solid fa-share margin_5px"></i> share
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" margin20pxhzt">
                        <h2>by:-{videodetail?.creator}</h2>

                        <div className="desc f24px margin20pxhzt">
                            <h2>About</h2>
                            Description:- {videodetail?.description}
                        </div>
                        <Comments />
                        <div className=" desc f24px ">
                            {videodetail?.Comment?.map(comment => (
                                <div key={comment.id} >
                                    <div className="spacerhalf"></div>
                                    <h4>{comment.user}:</h4>
                                    <p>{comment.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </>
            }
            <div className="spacer01"></div>
            <FooterNav />
        </div>
    )
}

export default SolePlayer