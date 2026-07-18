import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import './CardScatter.css'
import {clickAudio, hoverAudio} from '../utils/SoundPlay.js';

export default function CardScatter({ cards }) {
  const slotRefs = useRef([]);
  const cardRefs = useRef([]);
  const tagRefs = useRef([]);
  // stable per-card rest rotation, generated once
  const rotations = useRef(cards.map(() => randomRotation()));
 
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, {
          rotate: rotations.current[i],
          y: i % 2 === 0 ? 6 : -4,
          zIndex: i + 1,
        });
      });
    });
    return () => ctx.revert();
  }, [cards.length]);
 
  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;
 
  function bringToFront(i) {
    const card = cardRefs.current[i];
    const tag = tagRefs.current[i];
    if (!card) return;
 
    gsap.set(card, { zIndex: 50 }); // jump above neighbors instantly
    gsap.to(card, {
      rotate: 0,
      y: -22,
      scale: 1.12,
      boxShadow: "0 26px 40px -16px rgba(0,0,0,0.75)",
      duration: 0.45,
      ease: "power3.out",
    });
    if (tag) {
      gsap.to(tag, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
        delay: 0.05,
      });
    }
  }
 
  function sendToRest(i) {
    const card = cardRefs.current[i];
    const tag = tagRefs.current[i];
    if (!card) return;
 
    if (tag) {
      gsap.to(tag, { opacity: 0, y: 6, duration: 0.25, ease: "power2.in" });
    }
    gsap.to(card, {
      rotate: rotations.current[i],
      y: i % 2 === 0 ? 6 : -4,
      scale: 1,
      boxShadow: "0 10px 24px -10px rgba(0,0,0,0.6)",
      duration: 0.45,
      ease: "power3.inOut",
      onComplete: () => gsap.set(card, { zIndex: i + 1 }),
    });
  }
 
  return (
    <div className="card-scatter">
      {cards.map((c, i) => (
        <div
          key={c.id}
          ref={(el) => (slotRefs.current[i] = el)}
          className="card-scatter__slot"
          onMouseEnter={!isTouch ? () => bringToFront(i) : undefined}
          onMouseLeave={!isTouch ? () => sendToRest(i) : undefined}
          onClick={isTouch ? () => bringToFront(i) : undefined}
          onFocus={() => bringToFront(i)}
          onBlur={() => sendToRest(i)}
          tabIndex={0}
        >
          <div 
          ref={(el) => (cardRefs.current[i] = el)} 
          className="card-scatter__card"
          onMouseEnter={hoverAudio}
          onClick={clickAudio}>
            <img src={c.src} alt="image"/>
          </div>
        </div>
      ))}
    </div>
  );
}
 
function randomRotation() {
  const magnitude = 4 + Math.random() * 5; // 4–9deg
  return Math.random() > 0.5 ? magnitude : -magnitude;
}