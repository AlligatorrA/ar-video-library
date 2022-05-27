import React from 'react'
import AsideNav from '../../components/navbar/AsideNav'
import { useTheme } from '../../contexts/theme-context'
import IronTop from '../../components/ironTop/IronTop'
import FooterNav from '../../components/navbar/FooterNav'
import { useType } from '../../contexts/type-context'
import { Link } from 'react-router-dom'
import { removePlaylist } from '../../services/playlistService'
import { useAuth } from '../../contexts/auth-context'

const Playlist = () => {
    const { token } = useAuth()
    const { theme, showToast, toast } = useTheme()
    const { typeState, typeDispatch } = useType()

    return (
        <div>
            <div>
                <div className="asideAnd_main">
                    <AsideNav />
                    <main className="doc_main" style={{ backgroundColor: theme === 'light' ? 'white' : "rgb(25, 25, 25)" }}>
                        <IronTop />
                        <div className="marginAll padding01 overflow  ">
                            <span style={{ display: showToast ? "block" : "none" }} className=" toast-add">{toast}</span>
                            <div className="spacerhalf"></div>
                        </div>
                        {typeState.playlistCollection && typeState.playlistCollection.map(video => (


                            <div className="card_box" key={video._id}>
                                <Link to={`/Library/${video._id}`} className='bold_italic_txt'>
                                    <picture className="card_img_box">
                                        <img className='card_img' src={`https://i.ytimg.com/vi/${video.videos[0]._id}/0.jpg`} alt="" />
                                        <div className="play_icon f24px">
                                            <i className="fa-solid fa-play margin_5px"></i>
                                            {video.videos?.length}
                                        </div>
                                    </picture>
                                </Link>
                                <section className="card_content">
                                    <div>
                                        <div className='title_ellipsis'>
                                            <h4 className='desc_text'>{video.title} : playlist</h4>

                                            <i className="fa-solid fa-trash cross_icon" onClick={() => removePlaylist(token, video._id, typeDispatch)}
                                            ></i>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        ))
                        }
                    </main>

                </div>

            </div> <div className="spacer01"></div>
            <div className="nav_footer_show">
                <FooterNav />
            </div>
        </div>
    )
}

export default Playlist