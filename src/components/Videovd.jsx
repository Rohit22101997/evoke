"use client";

import React, { useEffect, useRef } from "react";

// Next.js + Tailwind-ready React component that merges the provided HTML/CSS/JS + GLSL.
// Usage: place this component in a client-side page (e.g. app/page.jsx or a client component).
// Requirements: npm install regl

const PIXEL_DENSITY = 2; // should be power of two (0.25, 0.5, 1, 2)
const VIDEO_SOURCE = "https://vjs.zencdn.net/v/oceans.mp4";

// --- SHADERS (kept as template strings) ---
const vertexShader = `precision mediump float;
attribute vec2 position;
varying vec2 uv;
void main() {
  uv = position;
  gl_Position = vec4(2. * uv.x - 1., 1. - 2. * uv.y, 0., 1.);
}`;

const fragmentShader = `precision mediump float;
uniform vec2 resolution;
uniform float time;
uniform float timeDelta;
uniform vec2 mouseLoc;
uniform sampler2D txVideo;
uniform vec2 videoResolution;
uniform float videoProgress;

varying vec2 uv;

#define TAU 6.28318530718
#define VIDEO_GLOW_AMOUNT 1.5
#define VIDEO_GLOW_DIM 0.8

#define MOUSE_SIZE 0.042
#define MOUSE_WIDTH 0.8
#define MOUSE_EDGE 0.02
#define MOUSE_DISPLACEMENT_DIST 0.03
#define MOUSE_BASE_ALBEDO vec3(.4)
#define MOUSE_BASE_ALPHA 0.15
#define MOUSE_SPECULAR_INTENSITY 5.0

#define PROGRESS_BAR_L 0.1
#define PROGRESS_BAR_R 0.9
#define PROGRESS_BAR_Y 0.85
#define PROGRESS_BAR_THICKNESS 0.004

#define DEBUG 0

float blendOverlay(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}
vec3 blendOverlay(vec3 base, vec3 blend) {
	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}
vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

vec4 videoLookup(vec2 screenUV, float screenRatio) {
  float videoRatio = videoResolution.x / videoResolution.y;
  vec2 vidUV = vec2(
    0.5 + (screenUV.x - 0.5) * max(1.0, screenRatio / videoRatio),
    0.5 + (screenUV.y - 0.5) * max(1.0, videoRatio / screenRatio)
  );
  vec4 tx = texture2D(txVideo, vidUV);
  float glowAlpha = clamp(
    smoothstep(1.0 - VIDEO_GLOW_AMOUNT, 1.0,
    1.0 - max(0.0, abs(vidUV.x - 0.5) - 0.5)
    ) - VIDEO_GLOW_DIM * step(-abs(vidUV.x - 0.5), -0.5),
    0.0, 1.0
  ) * clamp(
    smoothstep(1.0 - VIDEO_GLOW_AMOUNT, 1.0,
      1.0 - max(0.0, abs(vidUV.y - 0.5) - 0.5)
    ) - VIDEO_GLOW_DIM * step(-abs(vidUV.y - 0.5), -0.5),
    0.0, 1.0
  );
  return mix(vec4(0.,0.,0.,1.), tx, glowAlpha);
}

vec2 ratioAdjust(vec2 uv, float ratio) {
  return vec2(uv.x * max(1.0, ratio), uv.y * max(1.0, 1.0 / ratio));
}

float sdCircle(vec2 p, vec2 a, float r) {
  return length(p - a) - r;
}
float sdSegment(in vec2 p, in vec2 a, in vec2 b) {
  vec2 pa = p-a, ba = b-a;
  float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
  return length( pa - ba*h );
}
vec4 sdgSegment(in vec2 p, in vec2 a, in vec2 b, in float r) {
  vec2 ba = b-a, pa = p-a;
  float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
  vec2  q = pa-h*ba;
  float d = length(q);
  return vec4(vec3(d-r,q/d), h);
}
vec3 rainbow_palette(in float t) {
  return vec3(0.5) + vec3(0.5)*cos(TAU*(vec3(t)+vec3(0.00,0.33,0.67)) );
}
float impulse(float k, float x){
  float h = k*x;
  return h*exp(1.0-h);
}
float expImpulse(float x, float k, float cut) {
  float h = k*(x + cut);
  if (x < 0.) return 0.0;
  return h*exp(1.0-h);
}

void main(void) {
  float ratio = resolution.x / resolution.y;
  vec2 p = ratioAdjust(uv, ratio);
  vec2 mouse = ratioAdjust(mouseLoc, ratio);

  vec4 mouse_sdgh = sdgSegment(p, mouse - vec2(0.5*MOUSE_WIDTH*MOUSE_SIZE,0.0), mouse + vec2(0.5*MOUSE_WIDTH*MOUSE_SIZE,0.0), MOUSE_SIZE);
  vec2 dist = mouse - p;
  vec2 displacement = normalize(dist) * expImpulse(-mouse_sdgh.x/MOUSE_EDGE, 4., 0.175);
  #if DEBUG
  vec4 mouse_color = vec4(
    0.5 + 0.5 * displacement.x,
    0.5 + 0.5 * displacement.y,
    0.5,
    1.0
  );
  #else
  vec4 mouse_color = vec4(MOUSE_BASE_ALBEDO, MOUSE_BASE_ALPHA);
  mouse_color = mix(
    mouse_color,
    vec4(vec3(MOUSE_SPECULAR_INTENSITY),1.),
    (smoothstep(-0.002, 0., mouse_sdgh.x) - smoothstep(0., 0.002, mouse_sdgh.x)) *
    abs(dot(mouse_sdgh.yz, normalize(vec2(0.5)-p)))
  );
  #endif
  vec2 distorted_uv = uv + displacement * MOUSE_DISPLACEMENT_DIST;
  vec2 distorted_point = ratioAdjust(distorted_uv, ratio);

  gl_FragColor = videoLookup(distorted_uv, ratio);

  vec2 pb_start = ratioAdjust(vec2(PROGRESS_BAR_L, PROGRESS_BAR_Y), ratio), pb_end = ratioAdjust(vec2(PROGRESS_BAR_R, PROGRESS_BAR_Y), ratio);
  float pb_back_sd = sdSegment(distorted_point, pb_start, pb_end);
  gl_FragColor = mix(gl_FragColor, vec4(.3,.3,.3,1.), 0.7 * smoothstep(0.002, 0.0, pb_back_sd - 0.7 * PROGRESS_BAR_THICKNESS));

  vec2 pb_fill_start = pb_start, pb_fill_end = mix(pb_start, pb_end, videoProgress);
  vec4 pb_fill_sdgh = sdgSegment(distorted_point, pb_fill_start, pb_fill_end, PROGRESS_BAR_THICKNESS);
  vec3 fillColor = rainbow_palette(0.2 - 0.04 * time - 0.18 * smoothstep(videoProgress - 0.12, videoProgress, pb_fill_sdgh.w * videoProgress));
  gl_FragColor = vec4(
    mix(
      gl_FragColor.rgb,
      fillColor + (smoothstep(0.000, 0.001, pb_fill_sdgh.x) - smoothstep(0.001, 0.002, pb_fill_sdgh.x)) * (max(0.0, -pb_fill_sdgh.y-pb_fill_sdgh.z)) * vec3(.4),
      step(pb_fill_sdgh.x,0.001) + 0.5 * smoothstep(0.009 + 0.005*sin(0.27*time) + 0.014*impulse(12.0, mod(0.8*time + 0.5*pb_fill_sdgh.w * videoProgress, 1.4)), 0.001, pb_fill_sdgh.x)
    ), gl_FragColor.a
  );

  gl_FragColor = vec4(
    mix(
      gl_FragColor.rgb,
      mouse_color.rgb,
      mouse_color.a * smoothstep(0.0, -0.002, mouse_sdgh.x)
    ), gl_FragColor.a
  );
}`;

export default function VideoShaderCanvas() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const reglRef = useRef(null);
  const textureRef = useRef(null);
  const animationStartedRef = useRef(false);
  const mouseLocation = useRef([-1, -1]);

  useEffect(() => {
    let mounted = true;
    let startupAttempt = 0;
    let startButton = null;

    // dynamic import of regl to avoid SSR issues
    const setup = async () => {
      const reglModule = await import('regl');
      const createREGL = reglModule.default || reglModule;

      if (!mounted) return;

      const canvas = canvasRef.current;
      const elVideo = videoRef.current;

      const setFullSize = (el) => {
        if (!el) return;
        el.width = window.innerWidth * PIXEL_DENSITY;
        el.height = window.innerHeight * PIXEL_DENSITY;
      };
      const keepFullSize = (el) => {
        window.addEventListener('resize', () => setFullSize(el));
        setFullSize(el);
      };

      keepFullSize(canvas);

      function lstep(a, b, t) {
        const n = (t - a) / (b - a);
        return Math.max(0, Math.min(1, n));
      }

      function clamp01(n) { return n < 0 ? 0 : n > 1 ? 1 : n; }
      function smoothstep(edgeA, edgeB, t) {
        t = clamp01((t - edgeA) / (edgeB - edgeA));
        return t * t * (3 - 2*t);
      }

      function initShader() {
        // create regl instance bound to the canvas
        const regl = createREGL({ canvas, attributes: { antialias: true } });
        reglRef.current = regl;

        textureRef.current = regl.texture(elVideo);

        const drawFrame = regl({
          vert: vertexShader,
          frag: fragmentShader,
          attributes: {
            position: [
              [-2, 0], [0, -2], [2, 2]
            ]
          },
          count: 3,
          uniforms: {
            resolution: ({ viewportWidth, viewportHeight }) => [viewportWidth, viewportHeight],
            time: regl.context('time'),
            timeDelta: regl.context('deltaTime'),
            mouseLoc: () => mouseLocation.current,
            txVideo: () => textureRef.current,
            videoResolution: [960, 400],
            videoProgress: () => (elVideo.duration ? (elVideo.currentTime / elVideo.duration) : 0.0),
          }
        });

        regl.frame(() => {
          regl.clear({ color: [0, 0, 0, 1] });
          try {
            textureRef.current.subimage(elVideo);
          } catch (e) {
            // ignore occasional WebGL texture/upload errors during startup
          }
          drawFrame();
        });

        document.body.classList.add('playing');
        animationStartedRef.current = true;
      }

      function tryStart() {
        if (elVideo.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
          // create texture + start shader
          elVideo.play().catch(()=>{});
          initShader();
        } else {
          startupAttempt += 1;
          if (startupAttempt < 50) {
            setTimeout(tryStart, 300);
          } else {
            // fallback button for manual start
            startButton = document.createElement('button');
            startButton.className = 'start fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-md shadow-lg z-50';
            startButton.innerText = 'Click here to start video';
            document.body.appendChild(startButton);
            startButton.addEventListener('click', () => {
              elVideo.play().catch(()=>{});
              if (!animationStartedRef.current) initShader();
              startButton.remove();
            });
          }
        }
      }

      // mouse + click handlers on canvas
      const onMouseMove = (evt) => {
        const bounds = canvas.getBoundingClientRect();
        mouseLocation.current[0] = (evt.clientX - bounds.left) / bounds.width;
        mouseLocation.current[1] = (evt.clientY - bounds.top) / bounds.height;
      };
      const onClick = (evt) => {
        const bounds = canvas.getBoundingClientRect();
        const relativeX = (evt.clientX - bounds.left) / bounds.width;
        const relativeY = (evt.clientY - bounds.top) / bounds.height;
        if (Math.abs(relativeY - 0.85) < 0.05 && elVideo.duration) {
          elVideo.currentTime = elVideo.duration * lstep(0.1, 0.9, relativeX);
        }
      };

      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('click', onClick);

      // try starting
      tryStart();

      // cleanup on unmount
      return () => {
        mounted = false;
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('click', onClick);
        if (reglRef.current) {
          try { reglRef.current.destroy(); } catch(e) {}
          reglRef.current = null;
        }
        if (startButton && document.body.contains(startButton)) startButton.remove();
        if (document.body.classList.contains('playing')) document.body.classList.remove('playing');
      };
    };

    const cleanupPromise = setup();

    return () => {
      mounted = false;
      // if setup returned a cleanup function, call it
      cleanupPromise.then(cleanup => { if (typeof cleanup === 'function') cleanup(); }).catch(()=>{});
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#121318] overflow-hidden">
      {/* hidden video element used as a texture source */}
      <video
        ref={videoRef}
        id="video"
        src={VIDEO_SOURCE}
        playsInline
        muted
        loop
        preload="auto"
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full opacity-0 -z-10"
      />

      {/* canvas will be appended and controlled by regl; use ref for regl to bind */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* fallback start button (styled with tailwind) - created in JS if required */}

      {/* small overlay controls (optional) */}
      <div className="absolute left-4 top-4 z-40 text-sm text-gray-300">
        
      </div>
    </div>
  );
}
