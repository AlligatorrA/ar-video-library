import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocalize } from '../../contexts/localization-context'
import { languageLibrary } from '../../contexts/library/languageLibrary'
import { useTheme } from '../../contexts/theme-context'
import { useAuth } from '../../contexts/auth-context'

const AsideNav = () => {

    const { language } = useLocalize()
    const { NavStyle } = useTheme()
    const { token, LogoutFunc } = useAuth()

    return (
        <div>
            <aside className="doc_aside  coln_flex just_btw_flex overflow">
                <ul className="marginL2em coln_flex">
                    <div className="spacerhalf"></div>
                    <li className="font1en margin_5px asideAlink">
                        <NavLink to='/Video'
                            style={NavStyle}
                        >
                            <i className="fa-solid fa-house-user margin10px"></i>
                            <span className='margin_left20px'>
                                {`${languageLibrary[language]['Home']}`}
                            </span>

                        </NavLink>

                    </li>
                    <li className="font1en margin_5px asideAlink">
                        <NavLink to='/Library'
                            style={NavStyle}
                        >
                            <i className="fa-solid fa-music margin10px"></i>
                            <span className='margin_left20px'>
                                {`${languageLibrary[language]['Playlist']}`}
                            </span>
                        </NavLink>
                    </li>
                    <li className="font1en margin_5px asideAlink">
                        <NavLink to='/History'
                            style={NavStyle}
                        >
                            <i className="fa-solid fa-clock-rotate-left margin10px"></i>
                            <span className='margin_left20px'>
                                {`${languageLibrary[language]['History']}`}
                            </span>
                        </NavLink>
                    </li>
                    <li className="font1en margin_5px asideAlink">
                        <NavLink to='/WatchLater'
                            style={NavStyle}
                        >
                            <i className="fa-solid fa-clock margin10px"></i>
                            <span className='margin_left20px'>
                                {`${languageLibrary[language]['Watchlater']}`}
                            </span>
                        </NavLink>
                    </li>

                    <li className="font1en margin_5px asideAlink">
                        <NavLink to='/Liked'
                            style={NavStyle}
                        >
                            <i className="fa-solid fa-thumbs-up margin10px"></i>
                            <span className='margin_left20px'>
                                {`${languageLibrary[language]['LikedVideo']}`}</span>
                        </NavLink>
                    </li>

                    {
                        token ?
                            < li className="font1en margin_5px asideAlink cur" onClick={LogoutFunc} >
                                <i className="fa-solid fa-right-from-bracket margin10px"></i>
                                <span className='margin_left20px'>
                                    {`${languageLibrary[language]['Logout']}`}</span>

                            </li> :
                            <li className="font1en margin_5px asideAlink">
                                <NavLink to='/Login'
                                    style={NavStyle}
                                >
                                    <i className="fa-solid fa-thumbs-up margin10px"></i>
                                    <span className='margin_left20px'>
                                        {`${languageLibrary[language]['LogIn']}`}</span>
                                </NavLink>
                            </li>}
                </ul>
                <div className=" margin10px font1en acc-coln">
                    <p>
                        <span className='margin_left20px'>
                            {`${languageLibrary[language]['connectwithme']}`}
                        </span>
                    </p>
                    <a
                        className=" pTectColor margin_5px "
                        href="https://twitter.com/Aryakkhauj"
                    > <i className="fab fa-twitter"></i>{" "}
                    </a>
                    <a
                        className=" pTectColor margin_5px"
                        href="https://github.com/AlligatorrA"
                    >        <i className="fab fa-github "></i>  </a>
                    <a
                        className=" pTectColor margin_5px"
                        href="https://www.linkedin.com/in/anand-raj-b10599171/"
                    >     <i className="fa-brands fa-linkedin-in"></i></a>
                </div>

            </aside>
        </div >
    )
}

export default AsideNav