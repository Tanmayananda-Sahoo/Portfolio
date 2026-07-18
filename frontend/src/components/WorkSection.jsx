import React from 'react'
import {clickAudio, hoverAudio} from '../utils/SoundPlay.js';

const WorkSection = () => {
    const works = [
        {
            "year": 2026,
            "title": "Portfolio",
            "status": "tanmayy.com"
        },
        {
            "year": 2026,
            "title": "Portfolio",
            "status": "dateflyx.vercel.app/"
        },
        {
            "year": 2026,
            "title": "Portfolio",
            "status": "tanmayy.com"
        }
    ]
    return (
        <div className='work-section'>
            <div className="work-section-top">
                <div className="work-section-header">
                    <p>Works</p>
                </div>
                <div className="work-section-sub-header">
                    <p className="work-section-subheader">some projects to showcase.</p>
                </div>
            </div>
            <div className="work-section-table">
                {
                    works.map((elem, idx) => {
                        return (
                            <div className="work-section-column">
                                <div className="year">
                                    <p>{elem.year}</p>
                                </div>
                                <div className="project-name">
                                    {elem.title}
                                </div>
                                <div className="status" onMouseEnter={hoverAudio} onClick={clickAudio}>
                                    <p>{elem.status}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WorkSection
