import fs from "fs";
import { execSync } from "child_process";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&amp;display=swap');
      .title-text {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-size: 26px;
        font-weight: 700;
        letter-spacing: 0.28em;
        fill: #9CA8F8;
      }
      .sub-text {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-size: 22px;
        font-weight: 500;
        letter-spacing: 0.08em;
        fill: #9CA8F8;
      }
      .num-two {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-size: 155px;
        font-weight: 500;
        fill: #34D399;
      }
    </style>
  </defs>

  <g transform="translate(0, 0)">
    <!-- Top Row: Icon + "2" -->
    <!-- Squircle Icon Background -->
    <rect x="200" y="80" width="144" height="144" rx="38" ry="38" fill="#ECEBFD" />

    <!-- Network Branches / Nodes inside Squircle -->
    <!-- Top-left to center branch -->
    <line x1="248" y1="124" x2="272" y2="152" stroke="#1E1E4B" stroke-width="12" stroke-linecap="round" />
    <!-- Top-right to center branch -->
    <line x1="296" y1="124" x2="272" y2="152" stroke="#1E1E4B" stroke-width="12" stroke-linecap="round" />
    <!-- Center to bottom-right branch -->
    <line x1="272" y1="152" x2="296" y2="180" stroke="#10B981" stroke-width="12" stroke-linecap="round" />

    <!-- Nodes -->
    <!-- Top-left node -->
    <circle cx="248" cy="124" r="10" fill="#1E1E4B" />
    <!-- Top-right node -->
    <circle cx="296" cy="124" r="10" fill="#1E1E4B" />
    <!-- Center node (white center with navy rim) -->
    <circle cx="272" cy="152" r="11" fill="#FFFFFF" stroke="#1E1E4B" stroke-width="5" />
    <!-- Bottom-right node -->
    <circle cx="296" cy="180" r="10" fill="#10B981" />

    <!-- Bottom-left accents -->
    <!-- Small ring circle -->
    <circle cx="242" cy="180" r="9" fill="none" stroke="#34D399" stroke-width="4.5" />
    <circle cx="242" cy="180" r="2.5" fill="#34D399" />
    <!-- Floating tiny dot -->
    <circle cx="258" cy="164" r="4" fill="#6EE7B7" />

    <!-- Number "2" -->
    <text x="400" y="202" class="num-two">2</text>

    <!-- Bottom Text & Line -->
    <!-- DIGITAL GROWTH AGENCY -->
    <text x="400" y="320" text-anchor="middle" class="title-text">DIGITAL GROWTH AGENCY</text>

    <!-- Emerald Separator Line -->
    <line x1="270" y1="350" x2="530" y2="350" stroke="#34D399" stroke-width="3.5" stroke-linecap="round" />

    <!-- Web · App · Social · Marketing · SEO -->
    <text x="400" y="405" text-anchor="middle" class="sub-text">Web · App · Social · Marketing · SEO</text>
  </g>
</svg>`;

// Also a compact square icon version for avatars, navbars, and small footprints
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700&amp;display=swap');
      .num-two-small {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-size: 80px;
        font-weight: 600;
        fill: #34D399;
      }
    </style>
  </defs>

  <!-- Squircle Icon Background -->
  <rect x="15" y="40" width="120" height="120" rx="32" ry="32" fill="#ECEBFD" />

  <!-- Branches -->
  <line x1="55" y1="76" x2="75" y2="100" stroke="#1E1E4B" stroke-width="10" stroke-linecap="round" />
  <line x1="95" y1="76" x2="75" y2="100" stroke="#1E1E4B" stroke-width="10" stroke-linecap="round" />
  <line x1="75" y1="100" x2="95" y2="124" stroke="#10B981" stroke-width="10" stroke-linecap="round" />

  <!-- Nodes -->
  <circle cx="55" cy="76" r="8.5" fill="#1E1E4B" />
  <circle cx="95" cy="76" r="8.5" fill="#1E1E4B" />
  <circle cx="75" cy="100" r="9.5" fill="#FFFFFF" stroke="#1E1E4B" stroke-width="4.5" />
  <circle cx="95" cy="124" r="8.5" fill="#10B981" />

  <!-- Accents -->
  <circle cx="50" cy="124" r="7.5" fill="none" stroke="#34D399" stroke-width="3.5" />
  <circle cx="50" cy="124" r="2" fill="#34D399" />
  <circle cx="63" cy="110" r="3" fill="#6EE7B7" />

  <!-- Numeral 2 -->
  <text x="145" y="128" class="num-two-small">2</text>
</svg>`;

fs.writeFileSync("public/images/cl2.svg", svg);
fs.writeFileSync("public/images/cl2-icon.svg", iconSvg);

// Convert SVGs to high-resolution PNGs
try {
  execSync("convert -background transparent -density 300 public/images/cl2.svg public/images/cl2.png");
  execSync("convert -background transparent -density 300 public/images/cl2.svg public/images/C1.png");
  execSync("convert -background transparent -density 300 public/images/cl2-icon.svg public/images/cl2-icon.png");
  console.log("PNG generation succeeded!");
} catch (e) {
  console.error("Convert error:", e.message);
}
