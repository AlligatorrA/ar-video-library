import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../../contexts/theme-context'

const FooterNav = () => {
    const { theme, NavStyle } = useTheme()

    return (
        <div>
            <footer className="nav_footer" style={{ color: theme === 'light' ? 'black' : 'white', backgroundColor: theme === 'light' ? 'white' : "#232529" }}>
                <div className="just_flex">
                    <ul className="marginL2em ">
                        <div className="spacerhalf"></div>
                        <li className="font1en margin10px asideAlink">
                            <NavLink to='/Video'
                                style={NavStyle}
                            >
                                <i className="fa-solid fa-house-user margin_5px"></i>
                            </NavLink>
                        </li>
                        <li className="font1en margin10px asideAlink">
                            <NavLink to='/Library'
                                style={NavStyle}
                            >
                                <i className="fa-solid fa-music margin_5px"></i>
                            </NavLink>
                        </li>
                        <li className="font1en margin10px asideAlink">
                            <NavLink to='/History'
                                style={NavStyle}
                            >
                                <i className="fa-solid fa-clock-rotate-left margin_5px"></i>
                            </NavLink>
                        </li>
                        <li className="font1en margin10px asideAlink">
                            <NavLink to='/WatchLater'
                                style={NavStyle}
                            >
                                <i className="fa-solid fa-clock margin_5px"></i>
                            </NavLink>
                        </li>
                        <li className="font1en margin10px asideAlink">
                            <NavLink to='/Liked'
                                style={NavStyle}
                            >
                                <i className="fa-solid fa-thumbs-up margin_5px"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default FooterNav