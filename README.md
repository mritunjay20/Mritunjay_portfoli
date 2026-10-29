# Mritunjay Saini — Interactive 3D WebGL Portfolio

A cinematic, ultra-dark, futuristic 3D developer portfolio and personal engineering laboratory built with **Vite**, **Three.js**, **GSAP**, and modern **HTML5/CSS3**.

Designed specifically for **Mritunjay Saini** — Class 10 student, creative developer, and robotics/IoT enthusiast.

---

## 🌟 Core Interactive Features

1. **Procedural 3D Voxel Avatar (Hero Screen)**:
   - Custom Minecraft-style character modeled from Mritunjay's portrait and voxel character sheet.
   - Sculpted wavy dark hair, expressive eyes, formal suit & cyber hoodie modes.
   - Natural real-time cursor tracking (head and gaze follow pointer).
   - **Raycast Hotspots**:
     - **Head**: Opens Education and qualifications summary.
     - **Eyes**: Launches the secure Ocular Camera Interface (local feed only).
     - **Mouth**: Voice greeting (*"Hi, I am Mritunjay."*) using SpeechSynthesis with subtitle fallback.
     - **Right Hand**: Smooth animated waving gesture.
     - **Chest**: Opens Contact & Socials transmission console.
   - **Dual Outfit Switcher**: Toggle between **Formal Suit** (black suit, white shirt, violet tie) and **Cyber Hoodie** (black hoodie with neon green 'M' emblem and matching sneakers).

2. **Interactive Neural Core Brain Visualizer (About Section)**:
   - Canvas-driven neural network with 56 synaptic nodes, dynamic axon fibers, traveling action potential pulses, and cursor attraction.
   - Accompanied by Class 10 education details.

3. **3D Celestial Skills Constellation (Skills Section)**:
   - 16 floating Three.js physical orbs representing languages, frameworks, embedded platforms, and tools.
   - Planetary rings, cursor attraction/repulsion physics, hover HUD tooltip, and click-to-inspect detail drawer.

4. **8 Dedicated Interactive Engineering Builds (Projects Section)**:
   - **01. Smart Radar System**: 180° sweeping sonar radar HUD, range rings (10-40cm), target blips, day/night mode, and angle telemetry.
   - **02. Smart Agriculture System**: 3D crop rows, soil moisture gauge, rain particle simulation, submersible water pump, and automated servo canopy cover.
   - **03. LPG Gas Safety System**: 3D metallic LPG cylinder, MQ-2 gas sensor pod, concentration PPM slider, tri-state alert lighting (Safe/Warning/Hazard), and rotating exhaust fan.
   - **04. Voice Interaction Interface**: Dynamic FFT audio frequency visualizer, microphone permission integration, speech recognition transcript, and voice command triggers.
   - **05. Smart Helmet Safety Concept**: 3D motorcycle scene with YOLOv8 bounding box classifier and vehicle ignition interlock relay simulation.
   - **06. 3D Face & Landmark Tracker**: Rotating 3D wireframe head mesh with 468 landmark points and real-time pitch/yaw pose telemetry.
   - **07. NFC Smart Card System**: 3D holographic credit card with realistic tilt physics, tap-to-scan electromagnetic flux rings, and decoded UID payload.
   - **08. Fingerprint Biometric Concept**: High-resolution friction ridge pattern, sweeping cyan laser line, minutiae feature points, and match verification HUD.

5. **Miniature 3D World & Expedition Roadmap (Journey Section)**:
   - 3D voxel globe with landmarks: **Taj Mahal**, **Egyptian Pyramids**, **Eiffel Tower**, **Statue of Liberty**, and **Great Wall**.
   - Interactive milestone stations along a glowing expedition track.
   - Drag to rotate, scroll/wheel to zoom, reset view button, and accessible milestone quest list.

6. **GitHub Live Sync**:
   - Live repository fetching from public profile `mritunjay20` via GitHub REST API with graceful fallback.
   - Authentic commit activity matrix heatmap.

7. **Contact Transmission & Socials**:
   - Form validation, loading state, and direct `mailto:` fallback.
   - Beating interactive connection heart graphic with pulse telemetry.
   - Confirmed GitHub link (`https://github.com/mritunjay20`) and editable social cards.

8. **Signature & Footer**:
   - Displays Mritunjay's handwritten signature image reference with printed typography and copyright info.

---

## 🛠️ Technology Stack

- **Build Engine**: Vite (ES Modules)
- **3D Graphics & WebGL**: Three.js
- **Animations & Timelines**: GSAP & ScrollTrigger
- **Styling**: Modern CSS3 (CSS Grid, Flexbox, Glassmorphism, CSS Custom Properties)
- **Typography**: *Syne*, *Plus Jakarta Sans*, and *DM Mono* via Google Fonts

---

## 🚀 Quick Start Guide (Windows PowerShell)

### Prerequisites

- **Node.js**: v18.0.0 or later (v20+ recommended). Download from [nodejs.org](https://nodejs.org/).

### 1. Installation

Open **PowerShell** or **Command Prompt**, navigate to the project directory, and install dependencies:

```powershell
npm.cmd install
```

*(Note: On Windows PowerShell, use `npm.cmd` rather than `npm` if PowerShell script execution policies restrict `.ps1` wrappers).*

### 2. Development Server

Start the local Vite dev server with live hot-module replacement (HMR):

```powershell
npm.cmd run dev
```

Vite will output a local server address:
```
  VITE v5.4.21  ready in 320 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open `http://localhost:5173/` in Google Chrome, Microsoft Edge, or Mozilla Firefox.

### 3. Production Build

To compile and bundle optimized minified production assets into the `dist/` folder:

```powershell
npm.cmd run build
```

To preview the production build locally:

```powershell
npm.cmd run preview
```

---

## 📁 Project Directory Structure

```
mritunjay-portfolio/
├── index.html                   # Semantic HTML5 single-page application structure
├── package.json                 # Project configuration, scripts & dependencies
├── README.md                    # Setup, architecture & documentation guide
├── public/
│   └── assets/
│       ├── portrait.jpg         # Uploaded portrait photo in formal suit
│       ├── banner.png           # Uploaded portfolio banner
│       ├── character-sheet.png  # Uploaded Minecraft voxel character sheet
│       ├── about-photo.png      # Profile picture fallback
│       ├── signature.png        # Authentic signature asset
│       └── signature-reference.jpg
├── src/
│   ├── main.js                  # Application entry point, event wiring & animations
│   ├── style.css                # Cinematic ultra-dark design system & responsive rules
│   ├── data/
│   │   ├── projects.js          # Detailed telemetry, components & specs for 8 builds
│   │   ├── skills.js            # 16 skills metadata, categories, and practical uses
│   │   ├── milestones.js        # Journey milestones and 3D world landmark coords
│   │   ├── capabilities.js      # What I Can Do cards data
│   │   └── socials.js           # Confirmed GitHub & configurable social handles
│   ├── components/
│   │   ├── AvatarScene.js       # 3D Voxel Character, raycast hotspots, outfit toggle
│   │   ├── BrainVisual.js       # Interactive neural core canvas with synaptic pulses
│   │   ├── SkillsScene.js       # 3D Celestial orbiting skills constellation
│   │   ├── JourneyWorld.js      # 3D Miniature Globe with world landmarks & roadmaps
│   │   ├── ProjectModal.js      # Modal host for project simulations & specs
│   │   ├── GitHubSection.js     # Live GitHub API fetch and commit matrix
│   │   ├── ContactForm.js       # Form validation, mailto fallback & animated heart
│   │   └── Navigation.js        # Sticky navbar, section spy & mobile drawer
│   ├── scenes/
│   │   ├── RadarScene.js        # Smart Radar interactive 2D HUD simulation
│   │   ├── AgricultureScene.js  # Smart Agriculture 3D farm & canopy simulation
│   │   ├── LPGScene.js          # 3D LPG cylinder & safety alarm simulation
│   │   ├── VoiceScene.js        # Voice recognition & audio frequency visualizer
│   │   ├── HelmetScene.js       # 3D Helmet detection & ignition interlock scene
│   │   ├── FaceMeshScene.js     # 3D Wireframe head landmark tracker scene
│   │   ├── NFCScene.js          # 3D NFC holographic card & inductive scan scene
│   │   └── FingerprintScene.js  # Biometric friction ridge laser sweep scene
│   └── utils/
│       ├── speech.js            # Web Speech Synthesis API utility & fallback
│       └── camera.js            # Ocular camera permission modal & video stream
└── dist/                        # Production build output
```

---

## ⚙️ Customization & Personalization

1. **Social URLs**:
   Open `src/data/socials.js` to update usernames and links for LinkedIn, Instagram, YouTube, X, and Pinterest.
2. **Contact Email**:
   Open `src/components/ContactForm.js` to update the recipient email address in the `mailto:` fallback (currently `mritunjaysaini20@gmail.com`).
3. **Hardware Connectivity**:
   When connecting real Arduino serial streams or WebSerial/WebSockets, replace the simulated coordinate streams in `src/scenes/RadarScene.js` and `src/scenes/AgricultureScene.js` with your active WebSocket endpoints.

---

## 🔒 Privacy & Local Processing Assurance

- **Camera Feed**: Operates 100% locally in browser memory via `navigator.mediaDevices.getUserMedia`. Frames are never captured, recorded, or sent to any server. Closing the modal terminates all media tracks immediately.
- **Voice Recognition**: Runs client-side using the browser's built-in Web Speech API. Audio is never transmitted to third parties.

---

## 📜 License

Created with pride for **Mritunjay Saini**. All rights reserved.


## Updated portfolio build (October 2026)

The updated source includes the supplied Minecraft avatar reference, the requested #222831 / #393E46 / #948979 / #DFD0B8 palette, glowing background stars, social profile links, contact phone link, a pointer-reactive 3D heart, a spherical Earth with landmark placement based on geographic coordinates, and a GitHub contribution cityscape that requests public contribution data at runtime.

To run the updated source locally:
1. Install Node.js LTS.
2. Open this project folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL printed by Vite.

The live contribution city requires an internet connection and the public contributions endpoint. GitHub's repository list also uses the public GitHub API.
