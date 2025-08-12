import React from "react";

type Tilt3DProps = {
  className?: string;
  maxTiltDeg?: number; // maximum rotation on each axis
  scale?: number; // scale on hover
  children: React.ReactNode;
};

export default function Tilt3D({
  className,
  maxTiltDeg = 12,
  scale = 1.01,
  children,
}: Tilt3DProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [transform, setTransform] = React.useState<string>(
    `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)`
  );

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    // map to -0.5..0.5
    const dx = x - 0.5;
    const dy = y - 0.5;
    const rotateY = -(dx * 2) * maxTiltDeg; // left/right
    const rotateX = (dy * 2) * maxTiltDeg; // up/down
    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    );
    // expose spotlight CSS variables for the background utility
    if (ref.current) {
      (ref.current.parentElement as HTMLElement)?.style.setProperty(
        "--mx",
        `${x * 100}%`
      );
      (ref.current.parentElement as HTMLElement)?.style.setProperty(
        "--my",
        `${y * 100}%`
      );
    }
  };

  const handleLeave = () => {
    setTransform(`perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)`);
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ 
        transform, 
        transformStyle: "preserve-3d", 
        willChange: "transform",
        transition: "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      {/* subtle specular highlight */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: -8,
          borderRadius: 24,
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), hsla(28,96%,52%,0.18), transparent 60%)",
          filter: "blur(12px)",
          pointerEvents: "none",
        }}
      />
      {children}
    </div>
  );
}


