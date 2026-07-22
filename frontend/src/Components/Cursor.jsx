import { useEffect, useRef } from "react";

const Cursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  const frameRef = useRef(0);
  const idleTimeoutRef = useRef(null);
  const particlesRef = useRef([]);

  const pointerRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    targetX: window.innerWidth / 2,
    targetY: window.innerHeight / 2,
    moving: false,
    visible: true,
  });

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    const trail = trailRef.current;

    if (!ring || !dot || !trail) {
      return undefined;
    }

    const createParticle = (x, y) => {
      const particle = document.createElement("span");
      particle.className = "cursor-particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      const driftX = (Math.random() - 0.5) * 42;
      const driftY = -Math.random() * 54 - 8;

      particle.style.setProperty("--drift-x", `${driftX}px`);
      particle.style.setProperty("--drift-y", `${driftY}px`);

      trail.appendChild(particle);
      particlesRef.current.push({
        element: particle,
        life: 0,
        maxLife: 24,
      });

      if (trail.children.length > 18) {
        trail.removeChild(trail.firstChild);
      }
    };

    const handleMouseMove = (event) => {
      pointerRef.current.targetX = event.clientX;
      pointerRef.current.targetY = event.clientY;
      pointerRef.current.moving = true;
      pointerRef.current.visible = true;

      if (idleTimeoutRef.current) {
        window.clearTimeout(idleTimeoutRef.current);
      }

      idleTimeoutRef.current = window.setTimeout(() => {
        pointerRef.current.moving = false;
      }, 90);

      createParticle(event.clientX, event.clientY);
    };

    const handleMouseEnter = () => {
      pointerRef.current.visible = true;
    };

    const handleMouseLeave = () => {
      pointerRef.current.visible = false;
      pointerRef.current.moving = false;
    };

    const animate = () => {
      const pointer = pointerRef.current;
      pointer.x += (pointer.targetX - pointer.x) * 0.18;
      pointer.y += (pointer.targetY - pointer.y) * 0.18;

      ring.style.transform = `translate(${pointer.x}px, ${pointer.y}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${pointer.x}px, ${pointer.y}px) translate(-50%, -50%)`;
      ring.style.opacity = pointer.visible ? (pointer.moving ? "1" : "0.8") : "0";
      dot.style.opacity = pointer.visible ? (pointer.moving ? "1" : "0.95") : "0";
      trail.style.opacity = pointer.visible && pointer.moving ? "1" : "0";

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life += 1;
        const progress = particle.life / particle.maxLife;
        const driftX = Number.parseFloat(particle.element.style.getPropertyValue("--drift-x")) || 0;
        const driftY = Number.parseFloat(particle.element.style.getPropertyValue("--drift-y")) || 0;

        particle.element.style.transform = `translate(${driftX * progress}px, ${driftY * progress}px) scale(${1 - progress})`;
        particle.element.style.opacity = `${1 - progress}`;

        if (particle.life >= particle.maxLife) {
          particle.element.remove();
          return false;
        }

        return true;
      });

      frameRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);

      window.cancelAnimationFrame(frameRef.current);
      if (idleTimeoutRef.current) {
        window.clearTimeout(idleTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="cursor-trail" ref={trailRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
};

export default Cursor;