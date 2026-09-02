import React, { useEffect, useRef } from 'react';

interface PopTile {
  col: number;
  row: number;
  scale: number;
  targetScale: number;
  alpha: number;
  targetAlpha: number;
  color: string;
  crosshair: number;
}

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const gridSize = 36;
    let cols = Math.ceil(width / gridSize);
    let rows = Math.ceil(height / gridSize);

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isHovering: false,
      radius: 180,
    };

    const activeTiles = new Map<string, PopTile>();

    const colors = [
      '#00e5ff',
      '#00f0aa',
      '#38bdf8',
      '#22d3ee',
      '#818cf8',
    ];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cols = Math.ceil(width / gridSize);
      rows = Math.ceil(height / gridSize);
    };

    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovering = true;
    };

    const onMouseLeave = () => {
      mouse.isHovering = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.isHovering = true;
      }
    };

    const onTouchEnd = () => {
      mouse.isHovering = false;
    };

    const onClick = (e: MouseEvent) => {
      const clickCol = Math.floor(e.clientX / gridSize);
      const clickRow = Math.floor(e.clientY / gridSize);
      const shockRadius = 4;

      for (let r = -shockRadius; r <= shockRadius; r++) {
        for (let c = -shockRadius; c <= shockRadius; c++) {
          const dist = Math.sqrt(c * c + r * r);
          if (dist <= shockRadius) {
            const targetC = clickCol + c;
            const targetR = clickRow + r;
            if (targetC >= 0 && targetC < cols && targetR >= 0 && targetR < rows) {
              const key = `${targetC},${targetR}`;
              const delay = dist * 40;
              setTimeout(() => {
                const color = colors[Math.floor(Math.random() * colors.length)];
                activeTiles.set(key, {
                  col: targetC,
                  row: targetR,
                  scale: 0.8,
                  targetScale: 1.15 - dist * 0.05,
                  alpha: 0.9 - dist * 0.12,
                  targetAlpha: 0,
                  color,
                  crosshair: 1,
                });
              }, delay);
            }
          }
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('click', onClick);

    let lastIdlePop = Date.now();

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.2;
      mouse.y += (mouse.targetY - mouse.y) * 0.2;

      ctx.clearRect(0, 0, width, height);

      // Base Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Cursor Pop-Up Activation
      if (mouse.isHovering) {
        const mouseCol = Math.floor(mouse.x / gridSize);
        const mouseRow = Math.floor(mouse.y / gridSize);
        const effectRadius = 3;

        for (let r = -effectRadius; r <= effectRadius; r++) {
          for (let c = -effectRadius; c <= effectRadius; c++) {
            const curCol = mouseCol + c;
            const curRow = mouseRow + r;
            if (curCol >= 0 && curCol < cols && curRow >= 0 && curRow < rows) {
              const tileCenterX = curCol * gridSize + gridSize / 2;
              const tileCenterY = curRow * gridSize + gridSize / 2;
              const dx = mouse.x - tileCenterX;
              const dy = mouse.y - tileCenterY;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < mouse.radius) {
                const proximity = 1 - dist / mouse.radius;
                const key = `${curCol},${curRow}`;
                const existing = activeTiles.get(key);

                if (existing) {
                  existing.targetScale = 0.95 + proximity * 0.25;
                  existing.targetAlpha = 0.2 + proximity * 0.65;
                  existing.crosshair = Math.max(existing.crosshair, proximity);
                } else {
                  const color = colors[(curCol + curRow) % colors.length];
                  activeTiles.set(key, {
                    col: curCol,
                    row: curRow,
                    scale: 0.85,
                    targetScale: 0.95 + proximity * 0.25,
                    alpha: 0.1,
                    targetAlpha: 0.2 + proximity * 0.65,
                    color,
                    crosshair: proximity,
                  });
                }
              }
            }
          }
        }
      }

      // Idle Ambient Pulse
      if (!mouse.isHovering && Date.now() - lastIdlePop > 1200) {
        lastIdlePop = Date.now();
        const randCol = Math.floor(Math.random() * cols);
        const randRow = Math.floor(Math.random() * rows);
        const key = `${randCol},${randRow}`;
        const color = colors[Math.floor(Math.random() * colors.length)];
        activeTiles.set(key, {
          col: randCol,
          row: randRow,
          scale: 0.8,
          targetScale: 1.1,
          alpha: 0.6,
          targetAlpha: 0,
          color,
          crosshair: 0.8,
        });
      }

      // Render Pop-up Active Tiles
      activeTiles.forEach((tile, key) => {
        tile.scale += (tile.targetScale - tile.scale) * 0.15;
        tile.alpha += (tile.targetAlpha - tile.alpha) * 0.1;
        tile.crosshair *= 0.95;

        if (!mouse.isHovering) {
          tile.targetAlpha = 0;
        }

        if (tile.alpha > 0.01) {
          const x = tile.col * gridSize;
          const y = tile.row * gridSize;
          const w = gridSize;
          const h = gridSize;

          ctx.save();
          ctx.translate(x + w / 2, y + h / 2);
          ctx.scale(tile.scale, tile.scale);
          ctx.translate(-(x + w / 2), -(y + h / 2));

          // Tile Glow Box
          ctx.fillStyle = tile.color;
          ctx.globalAlpha = tile.alpha * 0.18;
          ctx.fillRect(x + 1, y + 1, w - 2, h - 2);

          // Tile Border Highlight
          ctx.strokeStyle = tile.color;
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = tile.alpha * 0.8;
          ctx.strokeRect(x + 1, y + 1, w - 2, h - 2);

          // Corner Reticles
          const cornerLen = 5;
          ctx.lineWidth = 2;
          ctx.globalAlpha = tile.alpha;
          // Top-Left
          ctx.beginPath();
          ctx.moveTo(x, y + cornerLen);
          ctx.lineTo(x, y);
          ctx.lineTo(x + cornerLen, y);
          ctx.stroke();
          // Top-Right
          ctx.beginPath();
          ctx.moveTo(x + w - cornerLen, y);
          ctx.lineTo(x + w, y);
          ctx.lineTo(x + w, y + cornerLen);
          ctx.stroke();
          // Bottom-Left
          ctx.beginPath();
          ctx.moveTo(x, y + h - cornerLen);
          ctx.lineTo(x, y + h);
          ctx.lineTo(x + cornerLen, y + h);
          ctx.stroke();
          // Bottom-Right
          ctx.beginPath();
          ctx.moveTo(x + w - cornerLen, y + h);
          ctx.lineTo(x + w, y + h);
          ctx.lineTo(x + w, y + h - cornerLen);
          ctx.stroke();

          // Crosshair '+' at intersection
          if (tile.crosshair > 0.1) {
            ctx.strokeStyle = tile.color;
            ctx.lineWidth = 1.5;
            ctx.globalAlpha = tile.crosshair * 0.9;
            const chSize = 4;
            ctx.beginPath();
            ctx.moveTo(x - chSize, y);
            ctx.lineTo(x + chSize, y);
            ctx.moveTo(x, y - chSize);
            ctx.lineTo(x, y + chSize);
            ctx.stroke();
          }

          ctx.restore();
        } else {
          activeTiles.delete(key);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      style={{ background: 'transparent' }}
    />
  );
};
