import React, { useState } from 'react'
import AsideNav from '../../components/navbar/AsideNav'
import { useTheme } from '../../contexts/theme-context'
import IronTop from '../../components/ironTop/IronTop'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/auth-context'
import { useType } from '../../contexts/type-context'
import { Share } from '../../pure-functions/Share'
import { clearAllHistory, removeFromHistory } from '../../services/HistoryServices'
import FooterNav from '../../components/navbar/FooterNav'
const History = () => {
    const { theme, toast, showToast, ShowToast } = useTheme()
    const [option, setOption] = useState(false)
    const navigate = useNavigate()
    const { token } = useAuth()
    const { typeState, typeDispatch } = useType()
    const { videos } = typeState

    const historyBox = videos.filter(video => video.historyCollection)

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
                            <li className='cur  just_flex  margin10px asideAlink' style={{
                                backgroundColor: typeState.typefilter ? 'red' : '',
                                width: '10rem'
                            }} onClick={() => {
                                ShowToast('removing all from history')
                                historyBox &&
                                    token ? clearAllHistory(token, typeDispatch) : navigate('/Login')
                            }}>
                                <span className='margin_5px bold_italic_txt'>
                                    clear All
                                </span>
                            </li>
                        </div>
                        {/* ******************************* */}
                        <div className="mappedProduct">
                            {
                                historyBox && historyBox.map(video => (
                                    <div className="card_box" key={video._id} >
                                        <Link to={`/SolePlayer/${video._id}`} className='bold_italic_txt'>
                                            <picture className="card_img_box">
                                                <img className='card_img' src={video.thumbnail} alt="" />
                                                <div className="play_icon">
                                                    <i className="fa-solid fa-play margin_5px"></i>
                                                    Play
                                                </div>
                                            </picture>
                                        </Link>
                                        <section className="card_content">
                                            <div>
                                                <div className='title_ellipsis'>
                                                    <h4 className='desc_text'>{video.title}</h4>

                                                    <i className="fa-solid fa-ellipsis-vertical cross_icon" onClick={() => { setOption(option => !option) }}
                                                    ></i>
                                                </div>
                                            </div>
                                            <p className='desc_text'>{video.creator}
                                            </p>

                                        </section>

                                        <div className="popUp_box" style={{ display: option ? "block" : "none" }}  >
                                            <li className=" margin_5px cur" onClick={() => Share(video.title, video._id)}>
                                                <i className="fa-solid fa-share margin10px"></i>
                                                <span >share
                                                </span>
                                            </li>

                                            <li className=" margin_5px cur" onClick={() => {
                                                ShowToast('removing all from history')
                                                token ? removeFromHistory(token, video._id, typeDispatch,) : navigate('/Login')
                                            }}>
                                                <i className="fa-solid fa-headphones margin10px"></i>
                                                <span > remove from history
                                                </span>
                                            </li>
                                        </div>
                                    </div>
                                ))
                            }

                            <div className="spacer01"></div>
                        </div>
                    </main>
                </div>

            </div> <div className="spacer01"></div>
            <div className="nav_footer_show">
                <FooterNav />
            </div>
        </div>
    )
}

export default History