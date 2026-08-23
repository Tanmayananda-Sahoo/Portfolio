import React from 'react'
import {clickAudio, hoverAudio} from '../utils/SoundPlay.js';
import {Link} from 'react-router-dom';

const WorkSection = () => {
    const works = [
        {
            "year": 2026,
            "title": "Portfolio (Current one)",
            "status": "tanmayy-beta.vercel.app",
            "href":"tanmayy-beta.vercel.app"
        },
        {
            "year": 2026,
            "title": "DateFlyx (Website for a cafe)",
            "status": "dateflyx.vercel.app",
            "href":"dateflyx.vercel.app"
        },
        {
            "year": 2024,
            "title": "Network vulnerability scanner",
            "status": "NetVulnSc",
            "href":"github.com/Tanmayananda-Sahoo/NetVulnSc"
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
                                    <Link to={`https://${elem.href}`} target='_blank' className='status-links'>{elem.status}</Link>
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