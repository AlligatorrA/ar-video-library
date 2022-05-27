import React from 'react'

import './ironTop.css'
import { useType } from '../../contexts/type-context'

const IronTop = () => {

    const { typeState, typeDispatch } = useType()
    const { categories } = typeState
    return (
        <div>
            <header className='iron_header'>
                <nav className='just_btw_flex'>
                    <ul className='margin_5px align_flex overflow_x'>
                        {
                            categories && categories.map(type => (
                                <label key={type.id}>
                                    <li className='cur  just_flex align_flex margin10px asideAlink' style={{ backgroundColor: typeState.typefilter ? 'green' : '' }}>
                                        <input className='aria-hidden' type='checkbox'
                                            onChange={() => typeDispatch({ type: 'SORT_BY', payload: type.type })} />
                                        <span className='margin_5px bold_italic_txt'>
                                            {type.type}
                                        </span>
                                    </li>
                                </label>
                            )
                            )
                        }

                        {/* <label>
                            <li className='cur  just_flex align_flex margin10px asideAlink' style={{ backgroundColor: typeState.typefilter.all ? 'green' : '' }}>
                                <input className='aria-hidden' type='checkbox'
                                    checked={typeState.typefilter.all}
                                    onChange={(e) => typeDispatch({ type: 'ALL', payload: e.target.value })} />
                                <span className='margin_5px bold_italic_txt'>
                                    {`${languageLibrary[language]['All']}`}
                                </span>
                            </li>
                        </label> */}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default IronTop