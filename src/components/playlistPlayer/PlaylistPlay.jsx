import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../../contexts/auth-context'
import { useTheme } from '../../contexts/theme-context'
import { useType } from '../../contexts/type-context'
import { removeVideoFromPlaylist } from '../../services/playlistService'
import AsideNav from '../navbar/AsideNav'
import FooterNav from '../navbar/FooterNav'

const PlaylistPlay = () => {
    const { token } = useAuth()
    const { theme, toast, showToast } = useTheme()
    const { playlistId } = useParams()
    const { typeState, typeDispatch } = useType()
    const { playlistCollection } = typeState

    const playlistVideos = playlistCollection.find((item) => item._id === playlistId);
    const { videos } = playlistVideos
    return (
        <div>
            <div className="asideAnd_main ">
                <AsideNav />
                <main className="doc_main" style={{ backgroundColor: theme === 'light' ? 'white' : "rgb(25, 25, 25)" }}>
                    <div className="marginAll padding01 overflow  ">
                        <span style={{ display: showToast ? "block" : "none" }} className=" toast-add">{toast}</span>
                        <div className="spacerhalf"></div>
                    </div>
                    <div className="mappedProduct">
                        {
                            videos && videos.map(video => (
                                <div className="card_box" key={video._id}>
                                    <Link to={`/Library/${video._id}`} className='bold_italic_txt'>
                                        <picture className="card_img_box">
                                            <img className='card_img' src={`https://i.ytimg.com/vi/${video._id}/0.jpg`} alt="" />
                                            <div className="play_icon f24px">
                                                <i className="fa-solid fa-play margin_5px"></i>
                                                Play
                                            </div>
                                        </picture>
                                    </Link>
                                    <section className="card_content">
                                        <div>
                                            <div className='title_ellipsis'>
                                                <h4 className='desc_text'>{video.title}</h4>

                                                <i className="fa-solid fa-trash cross_icon" onClick={() => removeVideoFromPlaylist(token,
                                                    videos._id,
                                                    video._id,
                                                    typeDispatch)}
                                                ></i>
                                            </div>
                                        </div>
                                        <p className='desc_text'>{video.creator}
                                        </p>

                                    </section>
                                </div>
                            )
                            )
                        }
                    </div>
                </main>
            </div> <div className="spacer01"></div>
            <div className="nav_footer_show">
                <FooterNav />
            </div>
        </div>
    )
}

export default PlaylistPlay