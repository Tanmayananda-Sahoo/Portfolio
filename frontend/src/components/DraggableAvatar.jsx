import React, { useRef, useState } from 'react';

// Adjust this import to point at your actual profile photo
import avatarImg from '../assets/me.jpg';

const MAX_DRAG = 55; // how far (px) the photo can be dragged from its resting spot
const INITIALS = 'T'; // shown on the fallback square underneath the photo

const clamp = (dx, dy) => {
  const dist = Math.hypot(dx, dy);
  if (dist <= MAX_DRAG) return { x: dx, y: dy };
  const ratio = MAX_DRAG / dist;
  return { x: dx * ratio, y: dy * ratio };
};

const DraggableAvatar = () => {
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const startRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    setDragging(true);
    startRef.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    setOffset(clamp(dx, dy));
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
    setDragging(false);
    setOffset({ x: 0, y: 0 }); // snaps back to resting position
  };

  return (
    // flex-col + real elements (instead of an absolutely-positioned hint)
    // so the "drag me" arrow always has its own reserved space and can't get clipped
    <div className="flex flex-col mb-10">
      <div className="flex items-start gap-0.5 mb-3 text-[13px] italic text-neutral-500 pointer-events-none select-none">
        <span className="mt-0.5">drag me</span>
        <svg
          width="22"
          height="30"
          viewBox="0 0 22 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-neutral-500 overflow-visible"
        >
          <path
            d="M1 5C6 0 15 2 12 7C9 12 3 9 6 6C10 2 19 5 17 14C16 19 14 23 16 29"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative w-[84px] h-[84px]">
        <div className="absolute inset-0 rounded-[28px] bg-white/5 flex items-center justify-center font-medium text-base text-neutral-500 select-none">
          <span>{INITIALS}</span>
        </div>
        <img
          src={avatarImg}
          alt="Tanmay's profile picture"
          className="absolute inset-0 w-full h-full object-cover touch-none select-none cursor-grab active:cursor-grabbing z-100"
          draggable={false}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            borderRadius: dragging ? '50%' : '28px',
            transition: dragging
              ? 'border-radius 0.25s ease'
              : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), border-radius 0.4s ease',
          }}
        />
      </div>
    </div>
  );
};

export default DraggableAvatar;