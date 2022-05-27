import './cards.css'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/auth-context'
import { useType } from '../../contexts/type-context'
import { LikedService } from '../../services/LikedService'
import { Watchlater } from '../../services/WatchlaterServices'
import { HistoryServices } from "../../services/HistoryServices";
import { Share } from '../../pure-functions/Share'
import { useTheme } from '../../contexts/theme-context'


const Cards = ({ video }) => {

    const [option, setOption] = useState(false)
    const { ShowToast, setModal, setmodalData } = useTheme()
    const navigate = useNavigate()
    const location = useLocation()
    const { token } = useAuth()
    const { typeState, typeDispatch } = useType()
    const { historyCollection } = typeState

    const addToPlaylist = () => {
        if (token) {
            setModal(true);
            setmodalData(video);
        } else {
            navigate("/login", {
                replace: true,
                state: { from: location.pathname },
            });
        }
    };
    return (
        <div>
            <div className="card_box" >
                <Link to={`/SolePlayer/${video._id}`} className='bold_italic_txt'>
                    <picture className="card_img_box"
                        onClick={() => {

                            token ? HistoryServices(token, video, typeDispatch, historyCollection) : navigate('/Login')
                        }}
                    >
                        <img className='card_img' src={video.thumbnail} alt="" />
                        <div className="play_icon">
                            <i className="fa-solid fa-play margin_5px"></i>
                            Play
                        </div>
                    </picture>
                </Link>
                <section className="card_content">
                    <div>
                        <div className='title_ellipsis' >
                            <h4 className='desc_text'>{video.title}</h4>

                            <i className="fa-solid fa-ellipsis-vertical cross_icon" onClick={() => { setOption(option => !option) }}
                            ></i>
                        </div>
                    </div>
                    <p className='desc_text'>{video.creator}</p>

                </section>

                <div className="popUp_box" style={{ display: option ? "block" : "none" }}  >
                    <li className=" margin_5px cur" onClick={() => Share(video.title, video._id)}>
                        <i className="fa-solid fa-share margin10px"></i>
                        <span >share
                        </span>
                    </li>
                    <li className=" margin_5px cur" onClick={() => {
                        ShowToast('Adding to Like')
                        token ? LikedService(token, video, typeDispatch,
                            video.islikedCollection) : navigate('/Login')
                    }}>
                        <i className="fa-solid fa-heart margin10px"></i>
                        <span >Like
                        </span>
                    </li>
                    <li className=" margin_5px cur" onClick={() => addToPlaylist()}>
                        <i className="fa-solid fa-music margin10px"></i>
                        <span >Add to playlist
                        </span>
                    </li>
                    <li className=" margin_5px cur" onClick={() => {
                        ShowToast('Adding to watchlater')
                        token ? Watchlater(token, video, typeDispatch,
                            video.watchLaterCollection) : navigate('/Login')
                    }}>
                        <i className="fa-solid fa-headphones margin10px"></i>
                        <span > Add to watch later
                        </span>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Cards