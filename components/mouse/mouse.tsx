"use client";
import React, { useState, useEffect, useRef } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const targetRef = useRef<CursorPosition>({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const lagFactor = 0.07;

  useEffect(() => {
    setIsMounted(true);
    const updateTarget = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setDotPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateTarget);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    const animateCursor = () => {
      setPosition(prevPos => ({
        x: prevPos.x + (targetRef.current.x - prevPos.x) * lagFactor,
        y: prevPos.y + (targetRef.current.y - prevPos.y) * lagFactor
      }));
      requestAnimationFrame(animateCursor);
    };

    const animationFrame = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', updateTarget);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible]);

  if (!isMounted) {
    return null; // Prevent rendering on the server to avoid mismatch
  }

  return (
    <>
      <div
        className={`fixed pointer-events-none transition-opacity duration-500 ease-in-out ${
          isVisible ? 'opacity-50' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className="w-8 h-8 rounded-full transition-transform duration-500 ease-in-out border-2 border-blue-500"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>
      <div
        className={`fixed pointer-events-none transition-opacity duration-300 ${
          isVisible ? 'opacity-75' : 'opacity-0'
        }`}
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-2 h-2 bg-blue-500 rounded-full" />
      </div>
    </>
  );
};

export default CustomCursor;