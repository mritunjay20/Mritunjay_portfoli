export const projects = [
  {
    id: 'radar-system',
    number: '01',
    title: 'Smart Radar System',
    type: 'Robotics / Detection',
    shortDesc: 'Ultrasonic distance scanning prototype with 180° servo sweep, target coordinate plotting, and dark-green radar HUD.',
    tags: ['Arduino / ESP8266', 'HC-SR04 Ultrasonic', 'SG90 Servo', 'Processing IDE', 'C++'],
    status: 'Working Prototype',
    symbol: '◉',
    accentColor: '#10b981',
    overview: 'An interactive scanning sonar/radar system built by mounting an HC-SR04 ultrasonic sensor onto a micro servo motor that sweeps continuously across a 180-degree field of view. The system emits high-frequency sound pulses (40 kHz) and measures the round-trip travel time to calculate object distance with millimeter accuracy.',
    workingPrinciple: 'The Arduino triggers a 10µs pulse to the sensor Trigger pin. The sensor transmits eight 40kHz ultrasound bursts. When sound bounces back, the Echo pin outputs a high signal proportional to elapsed time. Distance = (Echo Time in µs × 0.0343 cm/µs) / 2. Every angular step (1° resolution) transmits polar coordinates (angle, distance) via Serial to render the live radar display.',
    components: [
      { name: 'Microcontroller', spec: 'Arduino Uno R3 / ESP8266 NodeMCU' },
      { name: 'Ranging Sensor', spec: 'HC-SR04 Ultrasonic (2cm - 400cm range, ±3mm accuracy)' },
      { name: 'Actuator', spec: 'SG90 9g Micro Servo (180° rotation range)' },
      { name: 'Display Software', spec: 'Processing 4 / Custom Three.js Canvas HUD' },
      { name: 'Power & Support', spec: '5V Breadboard Supply, Custom 3D-printed Mount' }
    ],
    architecture: [
      'Servo sweeps left-to-right (0° to 180°) in 1-degree steps.',
      'HC-SR04 triggers ping at each step and measures echo travel time.',
      'Distance and angle data are packed into serial string packets: "angle,distance.".',
      'Web HUD converts polar coordinates (r, θ) into Cartesian (x, y) coordinates.',
      'Target blips are illuminated with decay trails and range-ring references.'
    ],
    applications: [
      'Robotic obstacle detection & autonomous navigation',
      'Blind spot monitoring in narrow corridors',
      'Classroom demonstration of echolocation and radar physics',
      'Perimeter security intruder alert'
    ],
    disclaimer: 'Demonstrates sonar principles using acoustic waves. It is an educational prototype and does not use radio microwave radar.'
  },
  {
    id: 'smart-agriculture',
    number: '02',
    title: 'Smart Agriculture System',
    type: 'IoT / Automation',
    shortDesc: 'Automated microclimate farm with soil moisture tracking, rain protection canopy, and automated irrigation pump simulation.',
    tags: ['Arduino', 'Soil Moisture', 'Rain Sensor', '5V Relay', 'Submersible Pump', 'IoT'],
    status: 'In Progress Prototype',
    symbol: '🌱',
    accentColor: '#22c55e',
    overview: 'An intelligent agricultural automation prototype created to conserve water, reduce labor, and protect sensitive crops from unexpected rainfall. The system monitors soil moisture and atmospheric precipitation, automatically activating irrigation only when the soil is dry and closing a protective canopy when raindrops are detected.',
    workingPrinciple: 'Two conductive probes measure soil resistance—higher moisture reduces soil electrical resistance, yielding an analog voltage reading. If moisture drops below 35%, a 5V relay switches on the DC water pump. If the rain sensor detects water drops, a servo deploys the protective roof cover over the seedbed.',
    components: [
      { name: 'Controller', spec: 'Arduino Uno / Nano' },
      { name: 'Soil Sensor', spec: 'Capacitive / Resistive Soil Moisture Probe' },
      { name: 'Rain Detection', spec: 'Nickel-coated Raindrop Sensor Board (LM393 Comparator)' },
      { name: 'Water Pumping', spec: '5V Mini Submersible Water Pump with Vinyl Tubing' },
      { name: 'Actuation', spec: 'TowerPro MG90S Metal Gear Servo (Canopy Mechanism)' },
      { name: 'Switching', spec: 'Single-channel Optocoupler 5V Relay Module' }
    ],
    architecture: [
      'Continuous sensor polling every 2 seconds with analog averaging.',
      'Moisture comparator triggers relay when moisture is < threshold.',
      'Interrupt-driven rain detector signals servo motor to pivot canopy.',
      'LCD 16x2 / Web dashboard displays real-time telemetry (Soil %, Rain: YES/NO, Pump: ON/OFF).'
    ],
    applications: [
      'Automated drip irrigation for greenhouse nurseries',
      'Water conservation in arid farming regions',
      'Protection of delicate floral crops and seedbeds from sudden rainfall damage'
    ],
    disclaimer: 'The web dashboard simulates sensor telemetry and motor responses for demonstrations without physical high-voltage pumps.'
  },
  {
    id: 'lpg-safety',
    number: '03',
    title: 'LPG Gas Safety System',
    type: 'Safety / Embedded Systems',
    shortDesc: 'Flammable gas leakage detector with automated exhaust ventilation, sound buzzer, and simulated emergency shutoff valve.',
    tags: ['MQ-2 Gas Sensor', 'Arduino Nano', 'Active Buzzer', '12V DC Fan', 'Relay Module'],
    status: 'Working Concept',
    symbol: '♨',
    accentColor: '#f97316',
    overview: 'A life-safety concept designed to mitigate liquefied petroleum gas (LPG) explosions in domestic kitchens and school labs. The system monitors combustible hydrocarbon vapors (propane and butane) in real time and executes an automated safety containment sequence upon threshold breach.',
    workingPrinciple: 'The MQ-2 sensor utilizes a SnO2 (tin dioxide) semiconductor layer with low conductivity in clean air. In the presence of combustible gases, adsorbed oxygen is consumed, drastically increasing sensor conductivity. An analog voltage comparator detects hazardous concentrations (> 400 PPM) and trips safety relays.',
    components: [
      { name: 'Gas Sensor', spec: 'MQ-2 Semiconductor Gas Sensor (LPG, Propane, Smoke)' },
      { name: 'Controller', spec: 'Arduino Nano ATmega328P' },
      { name: 'Audible Alarm', spec: '85dB Piezo Buzzer with Red Flashing Strobe LED' },
      { name: 'Ventilation', spec: 'Brushless 12V DC Exhaust Fan with Transistor Driver' },
      { name: 'Gas Cut-off', spec: 'Simulated 12V Solenoid Shut-off Valve' }
    ],
    architecture: [
      'Pre-heating phase (20s) to stabilize the sensor internal coil.',
      'PPM level continuously measured and categorized into Safe, Caution, and Hazard.',
      'Upon Hazard: buzzer pulses urgently, solenoid valve cuts gas supply, exhaust fan activates to disperse dense gas from floor level.',
      'Automatic reset only once PPM returns to atmospheric baseline.'
    ],
    applications: [
      'Kitchen gas cylinder leak detection',
      'Chemistry laboratory safety automation',
      'Industrial storage tank monitoring'
    ],
    disclaimer: 'This is an educational prototype and visual demonstration. It is not an industrial ATEX-certified safety device.'
  },
  {
    id: 'voice-assistant',
    number: '04',
    title: 'Voice Interaction Interface',
    type: 'AI / Speech Interaction',
    shortDesc: 'Hands-free voice recognition interface with live audio waveform visualization and browser speech synthesis responses.',
    tags: ['Web Speech API', 'AudioContext API', 'Speech Synthesis', 'JavaScript', 'HTML5 Audio'],
    status: 'Interactive Prototype',
    symbol: '〰',
    accentColor: '#a855f7',
    overview: 'An interactive voice recognition and audio visualization interface that lets users command the portfolio using natural speech. It demonstrates hands-free accessibility, real-time frequency analysis with the Web Audio API, and voice responses via the Web Speech Synthesis API.',
    workingPrinciple: 'With explicit user microphone permission, the Web Audio API connects a MediaStreamSource to an AnalyserNode. The Fast Fourier Transform (FFT) analyzes audio spectrum bins to animate the glowing frequency waveform. Concurrently, the Web Speech Recognition engine transcribes spoken words into intent commands.',
    components: [
      { name: 'Speech Recognition', spec: 'Browser SpeechRecognition / webkitSpeechRecognition' },
      { name: 'Audio Analyzer', spec: 'Web Audio API AnalyserNode (FFT Size 128)' },
      { name: 'Voice Synthesis', spec: 'SpeechSynthesisUtterance with custom pitch and rate' },
      { name: 'Rendering Canvas', spec: 'HTML5 2D Canvas with Neon Glow Gradient Filters' }
    ],
    architecture: [
      'User grants microphone access via browser permission prompt.',
      'Continuous audio stream fed into frequency visualizer.',
      'Speech engine matches spoken phrases: "Go to projects", "Who is Mritunjay", "Say hello".',
      'Assistant confirms action with speech synthesis and UI scrolling.'
    ],
    applications: [
      'Accessible portfolio navigation for users with motor impairments',
      'Voice-operated smart room controls and IoT dashboards',
      'Interactive kiosk greeting systems'
    ],
    disclaimer: 'Audio processing runs entirely inside the local browser. No audio recordings are stored, saved, or uploaded to any server.'
  },
  {
    id: 'helmet-detection',
    number: '05',
    title: 'Smart Helmet Safety Concept',
    type: 'Computer Vision / Road Safety',
    shortDesc: 'Two-wheeler road safety concept verifying rider helmet compliance before authorizing vehicle ignition switch.',
    tags: ['Computer Vision', 'YOLO Object Detection Concept', 'Python / OpenCV', 'Ignition Interlock'],
    status: 'Research & Concept',
    symbol: '🏍',
    accentColor: '#38bdf8',
    overview: 'A vision-based safety system conceptualized to combat motorcycle fatalities caused by lack of helmet use. The system features a forward camera module that inspects the rider’s headgear using an object detection model and controls an ignition relay to prevent riding without protective equipment.',
    workingPrinciple: 'A lightweight neural network (e.g. YOLOv8-nano / MobileNet) processes video frames from a handlebar-mounted camera. It localizes head regions and classifies them into "Helmet" or "No Helmet". If helmet confidence exceeds 90%, the ignition circuit closes; otherwise, an audible warning plays.',
    components: [
      { name: 'Processing Unit', spec: 'Raspberry Pi 4 / ESP32-CAM (Concept Model)' },
      { name: 'Camera Module', spec: 'Wide-angle 5MP OV5647 Camera' },
      { name: 'Ignition Control', spec: '12V 30A Automotive Ignition Interlock Relay' },
      { name: 'Visual Indicator', spec: 'Dual RGB High-brightness Safety LED' }
    ],
    architecture: [
      'Rider turns ignition key to "ACC" (accessory mode).',
      'Camera captures head frame and runs inference.',
      'Model detects helmet bounding box with confidence percentage.',
      'Interlock relay activates starter motor if helmet verified.'
    ],
    applications: [
      'Commercial delivery bike fleet enforcement',
      'Rental motorcycle safety compliance',
      'Traffic checkpoint automated violation logging'
    ],
    disclaimer: 'Simulated computer-vision demonstration. Does not interface with a real motorcycle engine without certified vehicular testing.'
  },
  {
    id: 'face-recognition',
    number: '06',
    title: '3D Face & Landmark Tracker',
    type: 'Computer Vision / 3D Graphics',
    shortDesc: 'Procedural 3D wireframe head mesh with animated facial landmark nodes, depth triangulation, and coordinate telemetry.',
    tags: ['Three.js', 'WebGL', 'MediaPipe Concept', '3D Landmark Mesh', 'Python / OpenCV'],
    status: 'Interactive 3D Demo',
    symbol: '◈',
    accentColor: '#c084fc',
    overview: 'An interactive exploration of 3D facial landmark estimation, point cloud tracking, and computer vision geometry. Users can rotate and inspect a 3D wireframe human head displaying key landmark points for eyes, nose bridge, jawline contour, and lips.',
    workingPrinciple: 'Modern face trackers map 468 3D landmark coordinates (x, y, z) from a monocular 2D image by inferring depth through deep regression networks. This scene demonstrates the resulting polygonal tessellation using Three.js Wireframe and Point Cloud shaders.',
    components: [
      { name: '3D Engine', spec: 'Three.js WebGL Renderer with Custom Shaders' },
      { name: 'Mesh Structure', spec: 'Procedural 3D Sphere/Head Topology with 320 Vertices' },
      { name: 'Tracker HUD', spec: 'Real-time Landmark Coordinate Telemetry (X, Y, Z, Pitch, Yaw)' },
      { name: 'Controls', spec: 'Interactive Orbit Controls with Cursor Follow' }
    ],
    architecture: [
      'Vertex buffer initialized with anatomical facial proportions.',
      'Dynamic keypoint markers attached to ocular, nasal, and mandibular anchors.',
      'Cursor movement smoothly drives head rotation and focal parallax.',
      'HUD reflects simulated landmark coordinate streams in real time.'
    ],
    applications: [
      'Driver fatigue & drowsiness detection',
      'Facial gesture control for assistive computing',
      'Augmented reality avatar face tracking'
    ],
    disclaimer: 'Runs procedurally in WebGL. No biometric facial recognition or storage is performed.'
  },
  {
    id: 'nfc-card',
    number: '07',
    title: 'NFC Smart Card System',
    type: 'Embedded Systems / RFID',
    shortDesc: 'Contactless 13.56MHz smart card reader concept with 3D holographic card physics, magnetic flux animation, and UID readout.',
    tags: ['RC522 RFID / NFC', 'Arduino / ESP32', '13.56MHz Mifare', 'Contactless UID', 'Access Control'],
    status: 'Working Prototype Concept',
    symbol: '▣',
    accentColor: '#34d399',
    overview: 'A high-frequency radio frequency identification (RFID) and near-field communication (NFC) prototype for student access control and cashless canteen attendance. Includes an interactive 3D metallic card with holographic shimmer that users can tap against an NFC reader pad.',
    workingPrinciple: 'The reader generates a 13.56MHz alternating electromagnetic field via its planar antenna coil. When a passive NFC card enters the field within 4cm, inductive coupling powers the card’s internal microchip, which modulates the field to transmit its 4-byte or 7-byte Unique Identifier (UID).',
    components: [
      { name: 'Reader Module', spec: 'RC522 13.56MHz RFID/NFC Module (SPI Interface)' },
      { name: 'Smart Cards', spec: 'Mifare Classic 1K Contactless Smart Cards' },
      { name: 'Controller', spec: 'Arduino Uno / ESP32 (Wi-Fi Attendance Logger)' },
      { name: 'Feedback', spec: 'Buzzer + Green/Red Verification LEDs' }
    ],
    architecture: [
      'Reader emits constant RF carrier wave.',
      'Card coil harvest energy via Faraday induction.',
      'Card sends anti-collision protocol and responds with UID.',
      'Arduino matches UID against authorized database array and signals access.'
    ],
    applications: [
      'School campus smart attendance logging',
      'Laboratory door lock authorization',
      'Library book borrowing automation'
    ],
    disclaimer: 'This web demo simulates NFC data exchanges and induction physics for educational demonstration.'
  },
  {
    id: 'fingerprint-system',
    number: '08',
    title: 'Fingerprint Biometric Concept',
    type: 'Biometrics / Embedded Systems',
    shortDesc: 'Biometric fingerprint scanner visual with animated laser sweep, minutiae ridge-ending detection, and match verification HUD.',
    tags: ['R307 Optical Sensor', 'Arduino', 'Minutiae Matching', 'Biometric Security', 'Local Cryptography'],
    status: 'Interactive Concept',
    symbol: '◎',
    accentColor: '#fb923c',
    overview: 'An interactive exploration of biometric fingerprint authentication and pattern analysis. The demo displays a detailed friction-ridge fingerprint visual, sweeps a cyan laser scanning line across it, detects minutiae points (ridge bifurcations and endings), and visualizes the match verification state.',
    workingPrinciple: 'An optical prism illuminates the finger surface with a blue LED. Ridges touching the glass cause total internal reflection to disperse, creating dark lines, while valleys remain bright. The processor extracts minutiae coordinates and compares them against pre-enrolled template hashes.',
    components: [
      { name: 'Optical Sensor', spec: 'R307 / AS608 Optical Fingerprint Module (500 DPI)' },
      { name: 'Microcontroller', spec: 'Arduino Nano via SoftwareSerial (Pins 2 & 3)' },
      { name: 'Template Storage', spec: 'Onboard 1000-fingerprint Flash Memory' },
      { name: 'Display Interface', spec: 'OLED 0.96" 128x64 I2C Display' }
    ],
    architecture: [
      'Finger placed on prism activates touch detection.',
      'Image captured and converted into 512-byte normalized minutiae feature vector.',
      'Search algorithm queries stored database with False Acceptance Rate < 0.001%.',
      'System displays verified User ID and match confidence score.'
    ],
    applications: [
      'Classroom attendance verification',
      'Electronic locker secure keypad bypass',
      'Equipment access authorization'
    ],
    disclaimer: 'This interactive canvas demo illustrates biometric minutiae extraction concepts without collecting or storing real fingerprints.'
  }
];
