import React from 'react'
import { useAuth } from '../../../contexts/auth-context'
import { languageLibrary } from '../../../contexts/library/languageLibrary'
import { useLocalize } from '../../../contexts/localization-context'
import FooterNav from '../../navbar/FooterNav'
import './users.css'
const Users = () => {
    const { language } = useLocalize()
    const { LogoutFunc, users } = useAuth()
    return (
        <div>
            <div className="users align_flex coln_flex">
                <div className="boot_back">
                    <img className='boot_back_img' src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" alt="" />
                    <div className="circle_avtar">
                        <img className='circle_avtar_img' src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" alt="" />
                    </div>
                </div>
                <div className="user_desc">
                    {
                        users.map(user => (
                            <div key={user._id}>
                                <h2>{`${user.firstName}  ${user.lastName}`}</h2>
                                <h4>e-mail: {user.email}</h4>
                            </div>
                        )

                        )
                    }
                    <ul>
                        < li className="font1en margin_5px asideAlink cur" onClick={LogoutFunc} style={{
                            backgroundColor: 'red',
                            width: '10rem'
                        }} >
                            <i className="fa-solid fa-right-from-bracket margin10px"></i>
                            <span className='margin_left20px'>
                                {`${languageLibrary[language]['Logout']}`}</span>

                        </li>
                    </ul>
                </div>
            </div> <div className="spacer01"></div>
            <FooterNav />
        </div>
    )
}

export default Users