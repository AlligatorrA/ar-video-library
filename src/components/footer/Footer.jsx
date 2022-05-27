import React from 'react'
import { useLocalize } from '../../contexts/localization-context'
import { useTheme } from '../../contexts/theme-context'
import './footer.css'

const Footer = () => {
    const { setLanguage } = useLocalize()
    const { theme, ThemeToogle } = useTheme()
    return (
        <div >
            <div className='footer_box' >
                <div className="top_nav footer_box">
                    <h3 className='padding_halfrem align_flex '>
                        <a className='margin10px' href="/">FAQ</a>
                        <a className='margin10px align_flex' href="/">    <div className="image_box top_nav cur border50 logo">
                            <h3> A </h3>
                        </div>  Account</a>

                    </h3>
                    <h3 className='  dis_flex '>

                        <label htmlFor="language">
                            <i className="fa-solid fa-globe margin10px"></i>
                        </label>
                        <select id="language" className='outline top_nav ' onChange={(e) => setLanguage(e.target.value)}>
                            <option value='english'  >english</option>
                            <option value='hindi' >हिन्दी </option>
                        </select>

                        <a className='margin10px' href="https://www.linkedin.com/in/anand-raj-b10599171/"><i className="fa-brands fa-linkedin"></i> Linkedin</a>

                    </h3>
                    <h3 className='padding_halfrem '>
                        <a className='margin10px' href="https://twitter.com/Aryakkhauj"><i className="fa-brands fa-twitter"></i> Twitter</a>
                        <a className='margin10px' href="https://github.com/AlligatorrA"> <i className="fa-brands fa-github"></i> Github</a>

                    </h3>
                </div>
                <h3 className='padding_halfrem spacer01 textCenter'>
                    <a className='margin10px' href='/'>no &#169; copyright claim</a>
                    made by Anand
                    <span className='cur margin10px' onClick={ThemeToogle}>
                        {
                            theme === 'light' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>
                        } Theme
                    </span>
                </h3>

            </div>
        </div >
    )
}

export default Footer