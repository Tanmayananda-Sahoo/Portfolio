import React from 'react'
import FooterSection from '../components/FooterSection.jsx'
import "slot-text/style.css";
import { SlotText } from "slot-text/react";
import { chromatic } from "slot-text";
import WorkSection from '../components/WorkSection.jsx'
import OffScreen from './OffScreen.jsx';
import { hoverAudio } from '../utils/SoundPlay.js';
import { Link } from 'react-router-dom';

const HomePageContent = () => {
  const [japanese, setJapanese] = React.useState(true);
  setTimeout(() => {
    if (japanese) setJapanese(false)
    else setJapanese(true)
  }, 3000)
  return (
    <div className='page-content'>
      <h4 className='home-page-header'>
        <SlotText
          text={japanese ? "タンマイ" : "Tanmayy"}
          options={{ direction: japanese ? "up" : "down", color: "white" }}
        />
      </h4>
      <div className="home-page-sub-header">
        <p className="home-page-subheader">Updated On 13 Jul 2026</p>
        <div className="nav-subheader-btn">
          <span class="live-dot"></span>
          <span>currently learning</span>
        </div>
      </div>
      <div className="home-page-desc">
        <p>I'm a cybersecurity enthusiast focused on understanding how systems break — and how to secure them before they do. Most of my work revolves around application security, network security, and Linux systems, where I focus on finding real vulnerabilities and building tools that help detect and fix them. I believe the best way to learn security is hands-on: attacking deliberately vulnerable systems, auditing real configurations, and building my own tooling from scratch. You can check my projects on <span><Link to="https://github.com/Tanmayananda-Sahoo" style={{ "textDecoration": "none" }} target="_blank" >Github</Link></span></p>
        <p>I've spent time going deep into the OWASP API Security Top 10 — JWT attacks, BOLA/IDOR, BFLA, mass assignment, injection flaws, business logic abuse, GraphQL abuse, and SSRF — practicing exploitation and mitigation against a vulnerable API I built myself. I've also worked through PortSwigger's Web Security Academy and rooms on TryHackMe and Hack The Box, alongside coursework in web security fundamentals.</p>
        <p>I've built projects ranging from an explainable AI system that helps SOC analysts triage intrusion alerts, to a Linux security audit scanner for catching misconfigurations, to a Python-based network vulnerability scanner for host and service discovery. I'm always exploring tools like Burp Suite, Wireshark, and Nmap, and I care about understanding not just how attacks work, but how to reason about risk and communicate findings clearly.</p>
        <p>Currently, I'm looking for internships and opportunities in Cybersecurity — application security, SOC/analyst work, or offensive security — where I can contribute, learn from experienced practitioners, and keep building meaningful, hands-on projects. If you're working on something interesting — or just want to talk security — feel free to reach out on <span><Link to="https://linkedin.com" target="_blank" style={{ 'textDecoration': 'none' }}>LinkedIn</Link></span>.</p>
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
