import React from 'react'
import './Widgts.css'
import { FiberManualRecord, Info} from '@material-ui/icons'
function Widget() {
    const newsArticle = (heading, Subtitle) => (
        <div className='widgets__article'>

            <div className='widgets__articleleft'>
                <FiberManualRecord/>
            </div>

            <div className='widgets__articleright'>
                <h4>{heading}</h4>
                <p>{Subtitle}</p>
            </div>
        </div>

    )
    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle('PAPA react is back', "Top news")}
            {newsArticle('Free Api', "goodbye horses")}
            {newsArticle('Frontend jobs', "Facebook is hiring")}
        </div>

    )
}

export default Widget