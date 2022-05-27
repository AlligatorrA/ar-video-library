import React from 'react'
import './listingpage.css'

import Cards from '../../components/Cards/Cards'
import AsideNav from '../../components/navbar/AsideNav'
import { useTheme } from '../../contexts/theme-context'
import IronTop from '../../components/ironTop/IronTop'
import { useType } from '../../contexts/type-context'
import { TypeFilterFunc } from '../../pure-functions/TypeFilterFunc'
import CreatePlaylist from '../../components/create-playlist/CreatePlaylist'
import FooterNav from '../../components/navbar/FooterNav'

const VideolistingPage = () => {
    const { theme, toast, showToast } = useTheme();
    const { typeState } = useType()
    const { videos, typefilter } = typeState
    const FilteredType = TypeFilterFunc(videos, typefilter)

    return (
        <div>
            <div className="asideAnd_main">

                <CreatePlaylist />
                <AsideNav />
                <main className="doc_main" style={{ backgroundColor: theme === 'light' ? 'white' : "rgb(25, 25, 25)" }}>
                    <IronTop />
                    <div className="marginAll padding01 overflow  ">
                        <span style={{ display: showToast ? "block" : "none" }} className=" toast-add">{toast}</span>
                        <div className="spacerhalf"></div>

                        <div className="mappedProduct">

                            {

                                FilteredType &&
                                FilteredType.map(video => <Cards key={video._id} video={video} />)

                            }

                        </div>
                        <div className="spacer01"></div>
                    </div>
                </main>
            </div>

            <div className="spacer01"></div>
            <div className="nav_footer_show">
                <FooterNav />
            </div>
        </div>
    )
}

export default VideolistingPage