import React from 'react'
import './banner.css'
import { useLocalize } from '../../contexts/localization-context'
import { languageLibrary } from "../../contexts/library/languageLibrary";
import Footer from '../../components/footer/Footer';
import { useAuth } from '../../contexts/auth-context';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../../components/auth-form/Login';

const Banner = () => {
    const navigate = useNavigate()
    const { language } = useLocalize()
    const { loginValue, token } = useAuth()

    return (
        <div>
            <div className='banner_box'>
                <div className="banner_image top_nav">
                    <div className="banner_text  ">
                        <h1 className='f4em'>
                            {`${languageLibrary[language]['desiredtv']}`}
                        </h1>
                        <h2 className='f2em'>{`${languageLibrary[language]['singleClickAnywhere']}`} </h2>
                        <div className="spacerhalf"></div>
                        <h2 className='f2em'>{`${languageLibrary[language]['subscribeNow']}`} !</h2>
                        <label className="dis_flex" htmlFor='email'>
                            <input className='LoginEmailInp' type="email" value={loginValue.email} placeholder='Sign Up form below login there...'
                                onChange={() => token ? navigate('/Video') : navigate('/Login')}
                            // readOnly
                            />
                            <button className='LoginEmailbtn cur '
                                onClick={() => token ? navigate('/Video') : navigate('/Login')}
                            >Go</button></label>
                        <Link to='/Video' className='btn font1en margin20pxhzt asideAlink  bdr'>
                            <span className='banner_text'>  Watch </span>
                        </Link>
                    </div>
                </div>
                <hr className='spacerhalf greyColor outline' />
                <div className="banner_bottom top_nav ">
                    <img className='min_hide' height='400px' width='40%' src="https://media.istockphoto.com/vectors/little-boy-staring-at-tv-at-night-vector-id819590732?k=20&m=819590732&s=612x612&w=0&h=DSjfF0XmDYBgBVaezaMOGKmVYu7SASYwNjyh79pWGYU="
                        alt="" />
                    <div className='f2em width400'>
                        <h2>
                            {`${languageLibrary[language]['EnjoyMorning']}`}!
                        </h2>
                        Start  Your Morning With beautiful Romatic movie and web Series !</div>
                </div>
                <hr className='spacerhalf greyColor outline' />
                <div className="banner_bottom top_nav">
                    <div className='f2em width400'>
                        <h2>
                            {`${languageLibrary[language]['DownloadChill']} !`}
                        </h2>
                        Download Movies and web Series and enjoy anytime !</div>

                </div>
                <hr className='spacerhalf greyColor outline' />
                <div className="banner_bottom top_nav">


                    <div className='f2em width400'>
                        <h2>
                            {`${languageLibrary[language]['Children']}`}!
                        </h2>
                        For childrens the best cartoons available...  !</div>
                </div>
                <hr className='spacerhalf greyColor outline' />
                <div className="banner_bottom top_nav">
                    <div className='f2em width400'>
                        <h2>
                            {`${languageLibrary[language]['Warrior']}`}!
                        </h2>
                        For Warrior thought people watch series and motivate youself..!</div>
                </div>

                <hr className='spacerhalf greyColor outline' />

                <div className="banner_bottom top_nav">
                    <Login />
                    <div className='f2em width400 min_hide'>
                        <h2>
                            Sign -up now
                        </h2>
                        Enjoy Categories of video, music and poems , and make your day more joyful...!</div>
                </div>
                <div className="spacerhalf"></div>

                <hr className='spacerhalf greyColor outline' />
                <Footer />
                <div className="spacerhalf"></div>
            </div>

        </div >
    )
}

export default Banner