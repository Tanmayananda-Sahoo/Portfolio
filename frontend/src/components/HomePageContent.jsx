import React from 'react'
import FooterSection from '../components/FooterSection.jsx'
import "slot-text/style.css";
import { SlotText } from "slot-text/react";
import { chromatic } from "slot-text";
import WorkSection from '../components/WorkSection.jsx'
import OffScreen from './OffScreen.jsx';
import { hoverAudio } from '../utils/SoundPlay.js';
import {Link} from 'react-router-dom';

const HomePageContent = () => {
  const [japanese, setJapanese] = React.useState(true);
  setTimeout(() => {
    if(japanese) setJapanese(false)
    else setJapanese(true)
  }, 3000)
  return (
    <div className='page-content'>
      <h4 className='home-page-header'>
        <SlotText
          text={japanese ? "タンマイ": "Tanmayy"}
          options={{direction: japanese ? "up" : "down", color: "white"}}
        />
      </h4>
      <div className="home-page-sub-header">
        <p className="home-page-subheader">Updated On 13 Jul 2026</p>
        <div className="nav-subheader-btn">
          <span class="live-dot"></span>
          <span>currently learning</span>
        </div>
      </div>
      <div className="home-page-header-pattern"></div>
      <div className="home-page-desc">
        <p>I'm a full-stack developer who enjoys building products that solve real problems. Most of my work revolves around React, Node.js, Express, and MongoDB, where I focus on creating clean, scalable applications with thoughtful user experiences. I believe the best way to learn is by shipping projects, so I'm constantly building, refining, and experimenting with new ideas. You can check my projects on <span><Link to="https://github.com/Tanmayananda-Sahoo" style={{"textDecoration": "none"}} target="_blank" >Github</Link></span></p>
        <p>Lately, I've been diving deeper into backend engineering and cybersecurity. Alongside developing full-stack applications, I'm learning network security, penetration testing, and web application security through hands-on labs and personal projects. I enjoy understanding not just how systems are built, but also how they can be secured.</p>
        <p>I've built projects ranging from full-stack web applications to productivity tools and network utilities, and I'm always exploring technologies that make software more reliable, secure, and enjoyable to use. My goal is to combine strong engineering practices with security-first thinking.</p>
        <p>Currently, I'm looking for internships and opportunities in Backend Engineering or Cybersecurity, where I can contribute, learn from experienced engineers, and continue building meaningful products. If you're working on something interesting—or just want to talk tech—feel free to reach out in <span><Link to="https://linkedin.com" target="_blank" style={{'textDecoration': 'none'}}>LinkedIn</Link></span>.</p>
      </div>
      <div className="home-page-tags-container">
        <div 
        className="home-page-tags"
        onMouseEnter={hoverAudio}
        ><span style={{ color: 'white', fontWeight: 'semibold' }}>22</span> repos</div>
        <span 
        className="home-page-tags"
        onMouseEnter={hoverAudio}><span style={{ color: 'white', fontWeight: 'semibold' }}>~1k</span> commits</span>
        <span 
        className="home-page-tags"
        onMouseEnter={hoverAudio}><span style={{ color: 'white', fontWeight: 'semibold' }}>5</span> languages</span>
        <span 
        className="home-page-tags"
        onMouseEnter={hoverAudio}>
          <span className='live-dot'></span>
          <span style={{ color: 'white', fontWeight: 'semibold' }}>live</span>
        </span>
      </div>
      <WorkSection />
      <OffScreen />
      <FooterSection />
    </div>
  )
}

export default HomePageContent
