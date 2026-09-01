import React, { useEffect, useRef } from 'react';

interface GridPopupCell {
  gridX: number;
  gridY: number;
  alpha: number;
  maxAlpha: number;
  color: string;
  glowColor: string;
  size: number;
  duration: number;
  life: number;
  scale: number;
  targetScale: number;
}

interface RippleWave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    lastGridX: number;
    lastGridY: number;
    active: boolean;
  }>({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    lastGridX: -1,
    lastGridY: -1,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const CELL_SIZE = 48; // Grid cell size in px
    const popups: GridPopupCell[] = [];
    const ripples: RippleWave[] = [];

    const palette = [
      { fill: 'rgba(0, 229, 255,', stroke: 'rgba(0, 229, 255,', glow: 'rgba(0, 229, 255, 0.9)' },     // Electric Cyan
      { fill: 'rgba(0, 245, 155,', stroke: 'rgba(0, 245, 155,', glow: 'rgba(0, 245, 155, 0.9)' },     // Electric Emerald
      { fill: 'rgba(168, 85, 247,', stroke: 'rgba(168, 85, 247,', glow: 'rgba(168, 85, 247, 0.9)' },  // Radiant Purple
      { fill: 'rgba(56, 189, 248,', stroke: 'rgba(56, 189, 248,', glow: 'rgba(56, 189, 248, 0.9)' },  // Sky Blue
      { fill: 'rgba(245, 158, 11,', stroke: 'rgba(245, 158, 11,', glow: 'rgba(245, 158, 11, 0.9)' },  // Amber Gold
    ];

    // Helper to spawn a pop-up tile
    const spawnPopupCell = (gx: number, gy: number, intensity: number = 0.8, colorIndex?: number) => {
      // Check if this cell already has an active popup
      const existing = popups.find(p => p.gridX === gx && p.gridY === gy && p.life < p.duration * 0.6);
      if (existing) {
        // Boost existing
        existing.life = 0;
        existing.alpha = intensity;
        existing.scale = 1.15;
        return;
      }

      const col = colorIndex !== undefined 
        ? palette[colorIndex % palette.length]
        : palette[Math.floor(Math.random() * palette.length)];

      popups.push({
        gridX: gx,
        gridY: gy,
        alpha: 0,
        maxAlpha: intensity,
        color: col.fill,
        glowColor: col.glow,
        size: CELL_SIZE,
        duration: Math.floor(Math.random() * 30 + 55),
        life: 0,
        scale: 0.85,
        targetScale: 1.12,
      });

      // Limit max concurrent popups for peak performance
      if (popups.length > 50) {
        popups.shift();
      }
    };

    // Spawn an autonomous ambient pop-up cell
    const spawnAmbientPopup = () => {
      const cols = Math.floor(width / CELL_SIZE);
      const rows = Math.floor(height / CELL_SIZE);
      const gx = Math.floor(Math.random() * cols) * CELL_SIZE;
      const gy = Math.floor(Math.random() * rows) * CELL_SIZE;
      spawnPopupCell(gx, gy, Math.random() * 0.45 + 0.3);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;

      const snapX = Math.floor(e.clientX / CELL_SIZE) * CELL_SIZE;
      const snapY = Math.floor(e.clientY / CELL_SIZE) * CELL_SIZE;

      // Trigger pop-up on the current hovered grid cell
      if (snapX !== mouseRef.current.lastGridX || snapY !== mouseRef.current.lastGridY) {
        mouseRef.current.lastGridX = snapX;
        mouseRef.current.lastGridY = snapY;

        // Primary hovered cell pops with highest intensity
        spawnPopupCell(snapX, snapY, 0.85, 0);

        // Randomly trigger 1 adjacent neighbor with subtle delay
        const neighbors = [
          [1, 0], [-1, 0], [0, 1], [0, -1]
        ];
        const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)];
        if (Math.random() > 0.45) {
          spawnPopupCell(
            snapX + randomNeighbor[0] * CELL_SIZE,
            snapY + randomNeighbor[1] * CELL_SIZE,
            0.5,
            1
          );
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Spawn expanding shockwave ripple
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 12,
        maxRadius: 360,
        alpha: 0.9,
        color: 'rgba(0, 229, 255,',
      });

      // Concentric burst of pop-up grid cells around click point
      const centerX = Math.floor(e.clientX / CELL_SIZE) * CELL_SIZE;
      const centerY = Math.floor(e.clientY / CELL_SIZE) * CELL_SIZE;

      const offsets = [
        [0, 0], [1, 0], [-1, 0], [0, 1], [0, -1],
        [1, 1], [-1, -1], [1, -1], [-1, 1],
        [2, 0], [-2, 0], [0, 2], [0, -2]
      ];

      offsets.forEach(([ox, oy], i) => {
        setTimeout(() => {
          spawnPopupCell(
            centerX + ox * CELL_SIZE,
            centerY + oy * CELL_SIZE,
            0.85 - (Math.abs(ox) + Math.abs(oy)) * 0.15,
            i % palette.length
          );
        }, i * 20);
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick);

    // Initial center position
    mouseRef.current.x = width / 2;
    mouseRef.current.y = height / 3;
    mouseRef.current.targetX = width / 2;
    mouseRef.current.targetY = height / 3;

    let frameCount = 0;

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse movement interpolation
      const dx = mouseRef.current.targetX - mouseRef.current.x;
      const dy = mouseRef.current.targetY - mouseRef.current.y;
      mouseRef.current.x += dx * 0.1;
      mouseRef.current.y += dy * 0.1;

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // Spawn periodic ambient grid pops when idle
      if (frameCount % 30 === 0 && popups.length < 15) {
        spawnAmbientPopup();
      }

      const cols = Math.ceil(width / CELL_SIZE) + 1;
      const rows = Math.ceil(height / CELL_SIZE) + 1;

      // 1. Draw Base Cyber Grid with Dynamic Cursor Glow Proximity
      ctx.lineWidth = 1;
      for (let c = 0; c < cols; c++) {
        const x = c * CELL_SIZE;
        const distToMouse = Math.abs(mouseX - x);
        const intensity = distToMouse < 280 ? (1 - distToMouse / 280) : 0;
        
        ctx.strokeStyle = intensity > 0 
          ? `rgba(0, 229, 255, ${0.03 + intensity * 0.22})`
          : 'rgba(255, 255, 255, 0.025)';
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let r = 0; r < rows; r++) {
        const y = r * CELL_SIZE;
        const distToMouse = Math.abs(mouseY - y);
        const intensity = distToMouse < 280 ? (1 - distToMouse / 280) : 0;
        
        ctx.strokeStyle = intensity > 0 
          ? `rgba(0, 229, 255, ${0.03 + intensity * 0.22})`
          : 'rgba(255, 255, 255, 0.025)';

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Interactive Grid Intersection Crosshairs `+`
      const crossSize = 3;
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const px = c * CELL_SIZE;
          const py = r * CELL_SIZE;
          const dist = Math.hypot(mouseX - px, mouseY - py);

          if (dist < 220) {
            const factor = 1 - dist / 220;
            const popScale = 1 + factor * 2.2; // Pops up larger near mouse
            const crossAlpha = factor * 0.6 + 0.1;

            ctx.strokeStyle = `rgba(0, 229, 255, ${crossAlpha})`;
            ctx.lineWidth = factor > 0.5 ? 1.5 : 1;

            ctx.beginPath();
            // Horizontal bar
            ctx.moveTo(px - crossSize * popScale, py);
            ctx.lineTo(px + crossSize * popScale, py);
            // Vertical bar
            ctx.moveTo(px, py - crossSize * popScale);
            ctx.lineTo(px, py + crossSize * popScale);
            ctx.stroke();
          }
        }
      }

      // 3. Render Pop-Up Grid Cells Animation (Elevated Glowing Tiles)
      for (let i = popups.length - 1; i >= 0; i--) {
        const p = popups[i];
        p.life++;

        const progress = p.life / p.duration;

        // Pop-up curve: Quick spring pop in, smooth linger, and fade out
        if (progress < 0.18) {
          p.alpha = (progress / 0.18) * p.maxAlpha;
          p.scale = 0.85 + (progress / 0.18) * (p.targetScale - 0.85); // Scaling up on pop
        } else if (progress < 0.45) {
          p.alpha = p.maxAlpha;
          p.scale = p.targetScale - ((progress - 0.18) / 0.27) * (p.targetScale - 1.0); // Settle to 1.0
        } else {
          p.alpha = (1 - (progress - 0.45) / 0.55) * p.maxAlpha; // Fade out
          p.scale = 1.0;
        }

        const currentSize = p.size * p.scale;
        const offsetX = (p.size - currentSize) / 2;
        const offsetY = (p.size - currentSize) / 2;

        const renderX = p.gridX + offsetX;
        const renderY = p.gridY + offsetY;

        // A. Tile Glowing Background Fill
        const cellGrad = ctx.createLinearGradient(renderX, renderY, renderX + currentSize, renderY + currentSize);
        cellGrad.addColorStop(0, `${p.color} ${p.alpha * 0.45})`);
        cellGrad.addColorStop(1, `${p.color} ${p.alpha * 0.12})`);
        ctx.fillStyle = cellGrad;
        ctx.fillRect(renderX, renderY, currentSize, currentSize);

        // B. Elevated Highlight Border with Neon Glow
        ctx.strokeStyle = `${p.color} ${p.alpha * 0.95})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = p.glowColor;
        ctx.shadowBlur = 12;
        ctx.strokeRect(renderX, renderY, currentSize, currentSize);
        ctx.shadowBlur = 0;

        // C. Futuristic Corner Reticles on Popped Tile
        const cornerLen = 6;
        ctx.strokeStyle = `${p.color} ${Math.min(1, p.alpha * 1.2)})`;
        ctx.lineWidth = 2;

        // Top-left corner tick
        ctx.beginPath();
        ctx.moveTo(renderX, renderY + cornerLen);
        ctx.lineTo(renderX, renderY);
        ctx.lineTo(renderX + cornerLen, renderY);
        ctx.stroke();

        // Bottom-right corner tick
        ctx.beginPath();
        ctx.moveTo(renderX + currentSize, renderY + currentSize - cornerLen);
        ctx.lineTo(renderX + currentSize, renderY + currentSize);
        ctx.lineTo(renderX + currentSize - cornerLen, renderY + currentSize);
        ctx.stroke();

        // D. Inner Tech Dot Indicator
        if (p.alpha > 0.4) {
          ctx.fillStyle = `${p.color} ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(renderX + currentSize / 2, renderY + currentSize / 2, 2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Remove expired popups
        if (p.life >= p.duration) {
          popups.splice(i, 1);
        }
      }

      // 4. Render Ripple Shockwaves
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 6.5;
        r.alpha *= 0.93;

        ctx.strokeStyle = `rgba(0, 229, 255, ${r.alpha * 0.7})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(0, 229, 255, 0.8)';
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;

        if (r.radius >= r.maxRadius || r.alpha < 0.02) {
          ripples.splice(i, 1);
        }
      }

      // 5. Cursor Tracking Radial Spotlight
      if (mouseX > -500 && mouseY > -500) {
        const spotlightGradient = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          420
        );
        spotlightGradient.addColorStop(0, 'rgba(0, 229, 255, 0.14)');
        spotlightGradient.addColorStop(0.35, 'rgba(0, 245, 155, 0.06)');
        spotlightGradient.addColorStop(0.7, 'rgba(168, 85, 247, 0.02)');
        spotlightGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = spotlightGradient;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block opacity-95"
      />
    </div>
  );
};
