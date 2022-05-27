import React from 'react'
import "./navbar.css";

import { useLocalize } from '../../contexts/localization-context'
import { useTheme } from '../../contexts/theme-context'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

const HeaderNav = () => {
    const { theme, ThemeToogle, NavStyle } = useTheme()
    const { setLanguage } = useLocalize()
    const { token } = useAuth()

    return (
        <div>
            <header className='doc_header'>
                <nav className='just_btw_flex'>
                    <div className="top_nav">
                        <ul className='margin_5px align_flex '>
                            <div className="image_box logo padding_halfrem cur border50">
                                <NavLink to='/'
                                    style={NavStyle}
                                >
                                    <h1>A/R</h1>
                                </NavLink>
                            </div>
                            <li className="font1en margin10px asideAlink min_hide">
                                <NavLink to='/Video'
                                    style={NavStyle}
                                >
                                    Explore
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="top_nav">
                        <ul className='margin_5px padding_halfrem'>
                            <li className='cur margin10px'>
                                <div className=" dis_flex">
                                    <label htmlFor="language ">
                                        <i className="fa-solid fa-globe margin_5px"></i>
                                    </label>
                                    <select id="language" className='outline top_nav ' onChange={(e) => setLanguage(e.target.value)}>
                                        <option value='english'  >english</option>
                                        <option value='hindi' >हिन्दी </option>
                                    </select>
                                </div>
                            </li>
                            <div className="image_box logo padding_halfrem cur border50">
                                <NavLink to={token ? '/Users' : '/Login'}
                                    style={NavStyle}
                                >
                                    <h3 className='just_flex'>A</h3>
                                </NavLink>
                            </div>
                            <li className='cur  just_flex align_flex margin10px' onClick={ThemeToogle}>
                                {
                                    theme === 'light' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>
                                }

                            </li>
                            <div className="spacerhalf"></div>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderNav