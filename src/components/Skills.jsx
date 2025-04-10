import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Users,
  Brain,
  TerminalSquare,
  FileJson,
  Layers,
  Cpu,
  Layout,
  PaintBucket,
  MessageSquare,
  BookOpen,
  Sparkles,
} from "lucide-react";

// SVG Kustom untuk teknologi seperti React, Vue.js, dan lainnya
const ReactLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="175.7 78 490.6 436.9"
    className={className}
    fill="#61dafb"
  >
    <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
    <circle cx="420.9" cy="296.5" r="45.7" />
  </svg>
);

const VueLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 221"
    className={className}
  >
    <path
      d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"
      fill="#41B883"
    />
    <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill="#41B883" />
    <path
      d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"
      fill="#35495E"
    />
  </svg>
);

// Frontend SVGs
const HtmlLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
  >
    <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512" />
    <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37" />
    <path
      fill="#EBEBEB"
      d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"
    />
    <path
      fill="#FFF"
      d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"
    />
  </svg>
);

const CssLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
  >
    <path
      fill="#264DE4"
      d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"
    />
    <path fill="#2965F1" d="M405.388 431.408l35.148-393.73H256v435.146z" />
    <path
      fill="#EBEBEB"
      d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
    />
    <path
      fill="#fff"
      d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
    />
  </svg>
);

const JavaScriptLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 630 630"
    className={className}
  >
    <rect width="630" height="630" fill="#f7df1e" />
    <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
  </svg>
);

const TypeScriptLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={className}
  >
    <path fill="#007acc" d="M0 200V0h400v400H0" />
    <path
      fill="#fff"
      d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
    />
  </svg>
);

const JqueryLogo = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50px" height="50px" viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid meet">
    <metadata>
      Created by potrace 1.16, written by Peter Selinger 2001-2019
    </metadata>
    <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
      <path d="M2142 6112 c-17 -20 -47 -66 -65 -102 -29 -59 -32 -72 -32 -160 0 -91 2 -100 38 -172 60 -122 158 -195 297 -220 141 -27 316 37 391 143 l21 30 -47 -30 c-201 -127 -517 6 -589 248 -22 75 -20 154 8 234 12 37 20 67 17 67 -3 -1 -21 -18 -39 -38z"/>
      <path d="M4404 6085 c-276 -60 -491 -282 -568 -586 -53 -209 -55 -391 -5 -525 28 -74 105 -156 182 -194 112 -55 162 -60 590 -60 l387 0 11 28 c14 34 49 199 49 230 0 20 -4 22 -60 22 -33 0 -60 2 -60 5 0 3 29 87 65 185 80 221 97 290 96 405 -1 159 -38 253 -140 347 -141 131 -351 186 -547 143z m253 -291 c114 -55 148 -176 104 -374 -27 -119 -109 -402 -120 -413 -16 -16 -329 -14 -376 2 -88 30 -135 90 -150 191 -15 103 42 342 106 442 105 163 283 225 436 152z"/>
      <path d="M1730 6009 c-84 -107 -120 -210 -120 -347 0 -170 64 -317 195 -447 143 -143 292 -208 475 -209 150 0 260 38 374 131 52 42 135 144 136 166 0 4 -26 -13 -57 -38 -108 -88 -196 -119 -338 -119 -117 0 -184 17 -297 76 -151 78 -281 231 -335 391 -36 109 -38 275 -5 377 12 35 20 66 17 68 -2 2 -22 -20 -45 -49z"/>
      <path d="M1295 5858 c-68 -75 -120 -159 -147 -236 -20 -59 -23 -85 -22 -212 0 -127 4 -156 27 -233 107 -350 379 -609 712 -678 200 -41 387 -11 563 92 75 45 209 179 249 252 18 31 30 57 28 57 -2 0 -19 -14 -37 -31 -51 -47 -154 -105 -243 -136 -75 -26 -91 -28 -240 -28 -155 0 -163 1 -254 33 -311 108 -520 331 -607 647 -29 108 -27 344 4 444 13 40 21 75 19 77 -2 3 -26 -19 -52 -48z"/>
      <path d="M3471 5835 c-12 -48 -41 -195 -41 -207 0 -11 288 -10 294 0 5 9 56 229 56 243 0 5 -67 9 -149 9 l-149 0 -11 -45z"/>
      <path d="M8875 5813 c-25 -32 -122 -169 -216 -305 -94 -137 -175 -248 -180 -248 -9 0 -14 17 -38 130 l-16 75 -158 3 c-86 1 -157 1 -157 -1 0 -2 28 -96 62 -208 71 -236 75 -281 39 -428 -12 -51 -20 -99 -17 -106 4 -13 17 -13 252 -7 l61 2 17 93 c10 50 26 111 36 134 10 24 90 134 178 245 149 190 489 638 506 666 6 9 -29 12 -158 12 l-166 0 -45 -57z"/>
      <path d="M6815 5809 c-261 -23 -429 -178 -521 -484 -24 -79 -28 -108 -28 -231 -1 -137 0 -142 29 -199 37 -71 100 -120 202 -155 63 -22 87 -24 353 -28 233 -3 288 -2 297 9 8 11 63 222 63 243 0 1 -125 5 -278 8 -298 6 -333 12 -366 59 -9 13 -16 40 -16 60 0 74 -24 69 339 69 179 0 336 3 348 6 49 13 91 316 60 425 -46 156 -231 240 -482 218z m106 -250 c21 -7 48 -22 59 -34 23 -25 36 -81 26 -119 l-6 -26 -195 0 -195 0 0 26 c0 60 64 132 138 154 40 12 130 12 173 -1z"/>
      <path d="M5320 5768 c-11 -26 -102 -492 -120 -615 -18 -123 -10 -247 19 -307 26 -52 86 -99 152 -116 22 -6 166 -9 350 -8 l312 3 34 160 c60 291 170 758 209 888 5 16 -4 17 -138 15 l-143 -3 -42 -170 c-23 -93 -61 -264 -83 -380 -23 -115 -43 -220 -46 -232 -4 -22 -8 -23 -134 -23 -79 0 -139 5 -155 12 -31 14 -55 56 -55 97 0 16 29 177 65 359 36 181 65 332 65 336 0 3 -63 6 -140 6 -136 0 -141 -1 -150 -22z"/>
      <path d="M7554 5783 c-7 -5 -28 -82 -48 -173 -20 -91 -69 -318 -110 -505 -41 -187 -76 -351 -78 -365 l-3 -25 143 -3 c140 -3 142 -2 152 20 5 13 46 191 90 397 44 206 83 378 86 382 3 5 144 9 315 9 170 0 309 2 309 4 0 34 -34 166 -50 191 -42 68 -54 70 -445 73 -192 1 -355 -1 -361 -5z"/>
      <path d="M3475 5521 l-69 -6 -48 -192 c-26 -106 -65 -279 -87 -385 -52 -247 -57 -263 -91 -301 -25 -29 -35 -33 -96 -37 l-69 -5 -21 -90 c-39 -166 -39 -161 -3 -169 17 -3 78 -6 135 -6 131 0 192 21 258 88 55 55 95 133 129 252 36 124 178 768 180 815 l2 40 -75 1 c-41 0 -106 -2 -145 -5z"/>
    </g>
  </svg>
);


const NextLogo = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50px" height="50px" viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M7203 7448 c-127 -161 -318 -403 -425 -538 -255 -322 -540 -692 -833 -1082 -131 -175 -240 -318 -244 -318 -3 1 -163 221 -355 490 l-350 490 -99 0 -99 0 21 -35 c11 -19 120 -171 242 -337 122 -167 293 -400 380 -518 87 -118 158 -219 159 -225 0 -5 -34 -57 -77 -115 -153 -210 -730 -1006 -747 -1032 l-18 -28 98 0 99 1 370 519 c204 286 372 519 375 519 3 0 178 -233 390 -519 l385 -519 50 0 c28 0 69 4 92 7 l41 7 -429 583 -430 583 164 227 c563 782 1173 1654 1363 1952 44 69 88 137 98 153 10 15 17 27 14 27 -2 0 -108 -132 -235 -292z"/>
<path d="M6730 6400 l0 -80 385 0 385 0 0 -1055 0 -1055 75 0 75 0 0 1055 0 1055 423 0 422 0 -3 80 -4 80 -879 0 -879 0 0 -80z"/>
<path d="M1000 6468 c0 -2 -1 -510 -3 -1131 l-2 -1127 78 0 77 0 0 1021 c0 995 0 1021 18 998 11 -13 109 -154 219 -314 1054 -1529 1140 -1653 1447 -2075 260 -358 626 -850 633 -850 15 0 -176 313 -499 819 l-226 356 54 3 54 3 0 1149 0 1150 -75 0 -75 0 -2 -1117 -3 -1116 -166 244 c-91 134 -419 622 -729 1084 -310 462 -574 855 -587 873 l-24 32 -95 0 c-51 0 -94 -1 -94 -2z"/>
<path d="M3160 5333 l0 -1136 122 6 c66 4 408 7 760 7 l638 0 0 70 0 70 -680 0 -680 0 0 480 0 480 638 2 637 3 3 78 3 77 -641 0 -640 0 0 425 0 425 678 0 677 0 -3 75 -4 75 -754 0 -754 0 0 -1137z"/>
<path d="M8953 4841 c-89 -23 -143 -84 -143 -165 0 -94 48 -141 174 -172 102 -24 126 -38 126 -74 0 -41 -32 -60 -101 -60 -46 0 -63 5 -86 24 l-29 24 -52 -30 c-29 -16 -52 -34 -52 -39 0 -18 96 -78 144 -90 64 -15 162 -7 213 19 61 31 87 73 91 149 7 105 -43 156 -184 188 -94 21 -114 33 -114 65 0 15 7 33 15 40 23 19 112 7 137 -18 l21 -20 48 36 49 36 -23 24 c-48 52 -159 82 -234 63z"/>
<path d="M8578 4626 c-3 -200 -3 -205 -27 -230 -35 -37 -83 -35 -124 5 -30 31 -31 31 -85 20 -31 -6 -57 -13 -60 -16 -11 -11 24 -68 59 -99 121 -104 318 -53 358 91 6 21 11 127 11 236 l0 197 -64 0 -65 0 -3 -204z"/>
</g>
</svg>
);

const ReactNativeLogo = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={100}
    height={100}
  >
    <Path fill="#61DAFB" d="M256,472 L405,431 440,37 256,37" />
    <Path
      fill="#000000"
      d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"
    />
    <Path
      fill="#FFFFFF"
      d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"
    />
  </Svg>
);

// SVG Kustom untuk teknologi Node.js
const NodeJsLogo = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="50px" height="50px" viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M6565 7240 c-51 -20 -50 -3 -55 -619 l-5 -576 -25 3 c-14 2 -84 35 -156 73 -72 38 -140 69 -151 69 -10 0 -104 -50 -208 -110 -104 -61 -276 -161 -382 -221 -106 -61 -202 -122 -213 -136 -20 -26 -21 -35 -18 -484 3 -435 4 -458 22 -478 15 -17 645 -390 743 -440 12 -6 41 -11 65 -11 37 0 91 27 417 209 205 115 385 221 401 236 54 52 53 23 45 1177 -5 765 -11 1072 -19 1082 -10 13 -199 128 -341 208 -51 28 -84 33 -120 18z m-233 -1721 c68 -40 131 -81 141 -92 15 -17 17 -41 17 -179 0 -88 -4 -168 -10 -178 -15 -28 -259 -163 -295 -164 -37 0 -239 112 -277 154 l-28 30 0 164 c0 144 2 165 18 179 34 31 266 157 289 157 12 0 78 -32 145 -71z"/>
<path d="M8145 6148 c-38 -22 -171 -100 -295 -173 -124 -73 -263 -154 -309 -181 -135 -79 -124 -29 -122 -545 1 -247 6 -450 11 -460 8 -15 686 -409 782 -455 35 -16 40 -16 80 -1 70 27 453 261 453 277 0 8 -154 102 -380 232 -209 119 -388 227 -397 239 -15 18 -18 43 -18 176 0 85 5 163 10 173 15 28 240 160 273 160 26 0 219 -103 260 -138 14 -13 17 -33 17 -126 0 -128 5 -153 31 -161 22 -7 425 230 477 281 31 31 32 35 33 121 3 151 1 165 -18 184 -15 15 -282 168 -663 380 -57 33 -116 59 -130 59 -14 -1 -56 -19 -95 -42z"/>
<path d="M4045 6163 c-16 -8 -189 -110 -384 -226 -331 -197 -355 -213 -372 -251 -17 -38 -19 -74 -19 -446 0 -246 4 -419 10 -442 6 -20 23 -47 38 -60 15 -13 194 -115 396 -227 265 -148 377 -205 400 -205 30 1 74 25 620 333 98 56 178 108 190 124 21 28 21 37 21 482 0 438 -1 454 -20 480 -29 40 -779 455 -819 455 -17 -1 -44 -8 -61 -17z m179 -639 c64 -36 129 -76 144 -89 l27 -23 0 -166 c0 -196 12 -175 -154 -270 -83 -48 -125 -66 -150 -66 -27 0 -70 21 -166 78 l-130 78 -3 175 c-2 157 -1 177 15 191 35 32 258 157 280 158 12 0 74 -30 137 -66z"/>
<path d="M1655 5969 c-208 -112 -382 -213 -397 -230 l-28 -29 0 -594 c0 -576 1 -593 20 -611 12 -11 27 -15 42 -11 35 9 420 234 448 262 l25 24 5 309 c5 294 6 311 26 338 28 38 230 152 270 153 34 0 214 -101 252 -142 22 -25 23 -27 25 -340 2 -300 3 -317 22 -338 11 -12 79 -57 150 -99 273 -162 295 -171 335 -131 20 20 20 33 20 595 0 414 -3 581 -12 600 -6 14 -32 38 -57 54 -43 27 -608 339 -678 375 -64 32 -78 27 -468 -185z"/>
<path d="M8160 5429 c-35 -21 -70 -49 -77 -61 -13 -24 -18 -134 -7 -162 3 -9 40 -35 82 -58 l76 -41 64 34 c83 44 102 73 102 160 0 50 -4 69 -17 81 -23 20 -142 88 -151 87 -4 0 -36 -18 -72 -40z"/>
<path d="M5017 4312 c-152 -79 -581 -338 -613 -371 -52 -52 -56 -90 -52 -496 l3 -360 25 -45 c27 -49 67 -79 179 -137 70 -36 78 -38 170 -38 62 0 105 5 121 14 46 25 80 64 87 100 3 20 7 210 7 423 l1 388 -57 0 -58 0 0 -383 c0 -453 9 -421 -117 -418 -68 2 -86 6 -143 37 -119 64 -110 29 -110 449 0 363 0 364 23 390 12 14 157 104 322 201 286 167 302 175 345 171 36 -3 96 -33 300 -152 140 -81 282 -164 315 -184 l60 -36 3 -381 2 -380 -27 -26 c-33 -30 -618 -364 -654 -373 -17 -4 -43 3 -84 25 -53 28 -65 31 -139 28 -62 -2 -81 -6 -81 -17 0 -24 201 -134 266 -145 23 -4 54 -1 82 9 46 16 618 340 674 382 18 14 41 44 52 67 20 40 21 59 21 422 0 424 -2 434 -72 487 -36 28 -447 269 -584 343 -109 59 -161 60 -267 6z"/>
<path d="M5211 3825 c-81 -23 -134 -55 -154 -95 -24 -47 -19 -148 9 -187 29 -40 98 -71 184 -82 41 -6 114 -16 162 -22 109 -14 138 -33 138 -90 0 -54 -12 -74 -57 -92 -86 -34 -214 -30 -306 10 -41 18 -53 44 -43 95 l6 31 -42 -7 c-54 -9 -58 -14 -69 -71 -18 -94 27 -140 172 -176 185 -47 372 -2 439 106 28 45 31 145 7 192 -33 62 -123 98 -300 118 -150 18 -169 24 -193 60 -22 33 -8 67 38 92 49 26 209 25 263 -2 38 -19 40 -23 43 -68 3 -41 6 -48 20 -42 9 3 29 9 44 12 52 10 65 104 21 153 -59 65 -260 99 -382 65z"/>
</g>
</svg>
);

// SVG Kustom untuk teknologi Python
const PythonLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#306998"
  >
    <path d="M510.5 52.4c-121.9 0-220.7 98.9-220.7 220.7 0 80.6 42.1 150.9 104.7 189.3-13.1 10.7-26.6 21.9-40.6 33.1-4.8 3.6-10.1 7-15.5 10.3-18.1 11.8-34.3 25.7-48.2 40.3-11.9 12.5-23 25.6-33.7 39.6-35.3 49.6-54.3 111.3-53.1 175.1 1.2 87.7 73.1 158.4 160.8 158.4 53.6 0 102.1-26.6 130.8-67.7 28.5 38.2 74.8 63.7 128.2 63.7 94.3 0 170.8-76.6 170.8-170.8-0.1-94.1-76.7-170.8-170.8-170.8zM510.5 838.3c-60.5 0-112.7-51.2-112.7-112.7 0-20.1 5.4-38.6 14.9-54.3-5.3-4.2-10.6-8.4-16.1-12.7-6.7-5.6-12.6-11.3-19-16.7-4.9 13.2-12.5 25-22.2 34.6-16.5 15.6-38.1 24.7-61.1 24.7-33.2 0-64.5-17.3-84.5-46.2-9.2-13-16.3-26.8-22.2-40.8-8.3-17.7-14.6-35.6-20.8-53.4 13.9-10.9 29.5-19.5 47-28.1 0.1 0.1 0.2 0.2 0.3 0.3 3.9 4.1 7.8 8.2 11.8 12.3 21.6 20.4 51.7 32.9 83.8 32.9 50.9 0 94.1-32.8 113.1-79.8 11.3-30.9 16.6-64.4 14.5-98.8 5.5 3.9 11.2 7.8 16.9 11.7 48.7 34.4 79.4 89.4 79.4 149.6 0 60.4-48.9 109.2-109.2 109.2z" />
    <path d="M513.6 221.7c2.7-10.1 4.3-20.7 4.3-31.5 0-16.2-6.3-31.5-17.5-42.7-11.2-11.2-26.5-17.5-42.7-17.5s-31.5 6.3-42.7 17.5c-11.2 11.2-17.5 26.5-17.5 42.7 0 16.2 6.3 31.5 17.5 42.7 11.2 11.2 26.5 17.5 42.7 17.5 10.7 0 21.2-1.7 30.9-4.8 9.5-3.1 17.8-8.1 24.7-14.6 6.5-5.8 12-12.7 16.4-19.8 4.1-6.8 7.3-14.4 9.4-22.3z" />
  </svg>
);

// SVG Kustom untuk teknologi Java
const JavaLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#F80000"
  >
    <path d="M521.9 217.7c-4.4 0-8.9 1.2-12.5 3.5-3.8 2.4-7.3 5.6-10.3 9.2-10.2 12.3-13.7 27.8-12.7 42.7 2.4 24.5 12.4 47.5 28.6 65.4 6.1 7.5 13.6 14.1 22 19.3 7.4 5.2 16.1 9.1 24.7 11.8 25.5 6.5 52.7 3.8 73.4-8.1 18.2-8.7 30.9-26.3 33.9-47.2 3.4-16.7-1.4-33.3-12.7-46.3-6.6-7.3-14.3-13.2-22.7-17.8-12.7-6.4-26.6-10.7-40.4-13.4z" />
  </svg>
);

// SVG Kustom untuk teknologi PHP
const PhpLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#8993be"
  >
    <path d="M743.9 145.1c-64.6 0-121.9 23.4-165.1 66.1-43.3 42.6-66.4 99.9-66.4 160.2 0 60.5 23.1 117.8 66.4 160.2 43.3 42.7 100.5 66.1 165.1 66.1s121.9-23.4 165.1-66.1c43.3-42.6 66.4-99.9 66.4-160.2 0-60.3-23.1-117.6-66.4-160.2-43.2-42.7-100.5-66.1-165.1-66.1zM343.1 145.1c-64.6 0-121.9 23.4-165.1 66.1-43.3 42.6-66.4 99.9-66.4 160.2 0 60.5 23.1 117.8 66.4 160.2 43.3 42.7 100.5 66.1 165.1 66.1s121.9-23.4 165.1-66.1c43.3-42.6 66.4-99.9 66.4-160.2 0-60.3-23.1-117.6-66.4-160.2-43.2-42.7-100.5-66.1-165.1-66.1z" />
  </svg>
);


// SVG Kustom untuk teknologi Flask
const FlaskLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#000000"
  >
    <path d="M512 242.7c124.3 0 225.2 101 225.2 225.2s-101 225.2-225.2 225.2-225.2-101-225.2-225.2 101-225.2 225.2-225.2zM477.8 771.1c0-16.5 13.4-29.9 29.9-29.9h88.8c16.5 0 29.9 13.4 29.9 29.9s-13.4 29.9-29.9 29.9h-88.8c-16.5 0-29.9-13.4-29.9-29.9z" />
  </svg>
);

// SVG Kustom untuk teknologi Spring Boot
const SpringBootLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#6DB33F"
  >
    <path d="M541.4 245.6c0-71.2-58.3-129.5-129.5-129.5s-129.5 58.3-129.5 129.5 58.3 129.5 129.5 129.5 129.5-58.3 129.5-129.5zM482.1 640.9c0 68.1-55.2 123.3-123.3 123.3s-123.3-55.2-123.3-123.3c0-68.1 55.2-123.3 123.3-123.3s123.3 55.2 123.3 123.3z" />
  </svg>
);

// SVG Kustom untuk teknologi Laravel
const LaravelLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#FF2D20"
  >
    <path d="M755.3 68.2c-31.4 0-60.4 16.7-76.5 42.7-16.1 26.1-19.6 58.5-10.1 88.1 19.3 60.6 53.4 116.2 99.2 164.3 10.6 12.6 18.6 26.2 23.7 41.4 5.3 15.4 8.7 31.5 9.5 47.8 0.8 16.2 0.2 32.3-1.5 48.4-1.8 16-5.6 31.7-11.1 47-9.6 21.8-22.1 42.5-37.4 61.4-11.4 12.7-24.6 24.3-39.3 34-6.5 5.3-13.4 10.4-20.8 14.9-4.4 2.5-9.1 4.8-13.8 7.1-30.5 16.2-63.8 28.5-98.7 36.9-15.5 3.9-31.6 5.9-47.7 6.6-16.4-0.6-32.8-0.4-48.9 1.3-15.8 2.5-31.3 7.2-46.6 14.2-8.2 3.5-16.2 7.7-24 12.2 16.3-1.7 31.6-5.6 45.9-11.7 42.5-13.9 80.8-35.5 115.4-63.8 37.7-30.7 66.8-68.2 82.4-109.2 23.1-41.7 33.9-87.3 31.7-133.7-2.6-48.4-18.7-94.4-47.4-132.2-30.5-40.4-74.9-73.9-123.8-93.6z" />
  </svg>
);

// SVG Kustom untuk teknologi API
const ApiLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#00A1E1"
  >
    <path d="M512 93.3c-137.2 0-249.8 112.6-249.8 249.8s112.6 249.8 249.8 249.8 249.8-112.6 249.8-249.8-112.6-249.8-249.8-249.8zM493.1 540.8c-11.3 0-22.3 4.4-30.7 12.8-8.3 8.3-12.8 19.4-12.8 30.7s4.4 22.3 12.8 30.7c8.3 8.3 19.4 12.8 30.7 12.8s22.3-4.4 30.7-12.8c8.3-8.3 12.8-19.4 12.8-30.7s-4.4-22.3-12.8-30.7c-8.3-8.3-19.4-12.8-30.7-12.8z" />
  </svg>
);

// SVG Kustom untuk teknologi Golang
const GolangLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#00ADD8"
  >
    <path d="M513.5 81.5c-71.6 0-130.7 58.9-130.7 130.7s58.9 130.7 130.7 130.7 130.7-58.9 130.7-130.7-58.9-130.7-130.7-130.7zM493.7 637.2c-40.5 0-73.3 32.8-73.3 73.3s32.8 73.3 73.3 73.3 73.3-32.8 73.3-73.3-32.8-73.3-73.3-73.3z" />
  </svg>
);

// SVG Kustom untuk soft skill Problem Solving
const ProblemSolvingLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#FFCC00"
  >
    <path d="M512 37.8c-261.7 0-474.2 212.5-474.2 474.2S250.3 986.2 512 986.2c261.7 0 474.2-212.5 474.2-474.2S773.7 37.8 512 37.8zm0 819.6c-190.9 0-345.4-154.5-345.4-345.4S321.1 166.6 512 166.6c190.9 0 345.4 154.5 345.4 345.4S702.9 857.4 512 857.4z" />
    <path d="M473.3 302.6c0 14.8 12 26.8 26.8 26.8 13.3 0 24.2-10.4 25.7-23.7 8.9-5.9 16.3-13.5 21.6-21.6 7.7-11.7 6.7-28.2-2.4-39.3-10.7-14.8-27.8-20.4-44.7-14.9-16.9 5.5-26.9 21.5-26.9 38.8zm26.8 72.2c0 11.1-9 20.1-20.1 20.1-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1z" />
  </svg>
);

// SVG Kustom untuk soft skill Good Communication
const GoodCommunicationLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#3F8C5C"
  >
    <path d="M512 82.4c-237.6 0-430.9 193.3-430.9 430.9s193.3 430.9 430.9 430.9c237.6 0 430.9-193.3 430.9-430.9s-193.3-430.9-430.9-430.9zm0 788.3c-197.9 0-358.4-160.5-358.4-358.4 0-197.9 160.5-358.4 358.4-358.4 197.9 0 358.4 160.5 358.4 358.4 0 197.9-160.5 358.4-358.4 358.4z" />
    <path d="M493.6 370.2c-19.3 0-37.1 7.6-50.3 20.8-13.1 13.1-20.8 31-20.8 50.3s7.6 37.1 20.8 50.3c13.1 13.1 31 20.8 50.3 20.8s37.1-7.6 50.3-20.8c13.1-13.1 20.8-31 20.8-50.3s-7.6-37.1-20.8-50.3c-13.1-13.1-31-20.8-50.3-20.8zm0 119.4c-49.3 0-89.2-39.8-89.2-89.2s39.8-89.2 89.2-89.2 89.2 39.8 89.2 89.2-39.8 89.2-89.2 89.2z" />
  </svg>
);

// SVG Kustom untuk soft skill Able to Learn New Things
const LearnNewThingsLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#FF6347"
  >
    <path d="M512 95.7c-230.2 0-417.5 187.3-417.5 417.5S281.8 930.7 512 930.7c230.2 0 417.5-187.3 417.5-417.5S742.2 95.7 512 95.7zM512 845.4c-184.3 0-333.4-149.1-333.4-333.4 0-184.3 149.1-333.4 333.4-333.4 184.3 0 333.4 149.1 333.4 333.4 0 184.3-149.1 333.4-333.4 333.4z" />
    <path d="M655.2 380.3c-22.1 0-41.4 17.9-41.4 39.9v151.5c0 22 19.3 39.9 41.4 39.9s41.4-17.9 41.4-39.9V420.2c0-22-19.3-39.9-41.4-39.9zM607.8 491.8v108.7h47.3V491.8h-47.3z" />
  </svg>
);

// SVG Kustom untuk soft skill Mastering the Framework
const MasteringFrameworkLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#800080"
  >
    <path d="M512 82.8c-237.6 0-430.9 193.3-430.9 430.9 0 237.6 193.3 430.9 430.9 430.9 237.6 0 430.9-193.3 430.9-430.9 0-237.6-193.3-430.9-430.9-430.9zm0 788.3c-197.9 0-358.4-160.5-358.4-358.4 0-197.9 160.5-358.4 358.4-358.4 197.9 0 358.4 160.5 358.4 358.4 0 197.9-160.5 358.4-358.4 358.4z" />
    <path d="M512 387.4c-40.5 0-73.3 32.8-73.3 73.3 0 40.5 32.8 73.3 73.3 73.3s73.3-32.8 73.3-73.3c0-40.5-32.8-73.3-73.3-73.3z" />
  </svg>
);

// SVG Kustom untuk soft skill Adaptability
const AdaptabilityLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    className={className}
    fill="#FF5733"
  >
    <path d="M512 82.8c-237.6 0-430.9 193.3-430.9 430.9 0 237.6 193.3 430.9 430.9 430.9 237.6 0 430.9-193.3 430.9-430.9 0-237.6-193.3-430.9-430.9-430.9zm0 788.3c-197.9 0-358.4-160.5-358.4-358.4 0-197.9 160.5-358.4 358.4-358.4 197.9 0 358.4 160.5 358.4 358.4 0 197.9-160.5 358.4-358.4 358.4z" />
    <path d="M512 413.7c-63.6 0-115.6 52.0-115.6 115.6s52.0 115.6 115.6 115.6 115.6-52.0 115.6-115.6-52.0-115.6-115.6-115.6z" />
  </svg>
);

// Custom function to determine the correct logo based on the tech name
const getLogoForTech = (techName) => {
  switch (techName) {
    case "React.js":
      return <ReactLogo className="w-12 h-12" />;
    case "Vue.js":
      return <VueLogo className="w-12 h-12" />;
    case "Tailwind CSS":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1499"
          viewBox=".15 .13 799.7 479.69"
          width="2500"
          className="w-12 h-12"
        >
          <path
            d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"
            fill="#06b6d4"
          />
        </svg>
      );
    case "Bootstrap":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1992"
          viewBox="0 0 512 407.864"
          width="2500"
          className="w-12 h-12"
        >
          <path
            d="m106.344 0c-29.214 0-50.831 25.57-49.863 53.3.929 26.641-.278 61.145-8.964 89.283-8.717 28.217-23.449 46.098-47.517 48.393v25.912c24.068 2.3 38.8 20.172 47.516 48.393 8.687 28.138 9.893 62.642 8.964 89.283-.968 27.726 20.649 53.3 49.868 53.3h299.347c29.214 0 50.827-25.57 49.859-53.3-.929-26.641.278-61.145 8.964-89.283 8.717-28.221 23.413-46.1 47.482-48.393v-25.912c-24.068-2.3-38.764-20.172-47.482-48.393-8.687-28.134-9.893-62.642-8.964-89.283.968-27.726-20.645-53.3-49.859-53.3h-299.355zm240.775 251.067c0 38.183-28.481 61.34-75.746 61.34h-80.458a8.678 8.678 0 0 1 -8.678-8.678v-199.593a8.678 8.678 0 0 1 8.678-8.678h80c39.411 0 65.276 21.348 65.276 54.124 0 23.005-17.4 43.6-39.567 47.208v1.2c30.176 3.31 50.495 24.21 50.495 53.077zm-84.519-128.1h-45.876v64.8h38.639c29.87 0 46.34-12.028 46.34-33.527-.003-20.148-14.163-31.273-39.103-31.273zm-45.876 90.511v71.411h47.564c31.1 0 47.573-12.479 47.573-35.931s-16.935-35.484-49.573-35.484h-45.564z"
            fill="#7952b3"
            fill-rule="evenodd"
          />
        </svg>
      );
    case "Node.js":
      return <NodeJsLogo className="w-12 h-12" />;
    case "Python":
      return <PythonLogo className="w-12 h-12" />;

    case "SQL":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          preserveAspectRatio="xMidYMid"
          viewBox="-3.576 -8.996 259.406 260.1"
          width="50"
          className="w-12 h-12"
        >
          <g fill="#fff">
            <path d="m235.648 194.212c-13.918-.347-24.705 1.045-33.752 4.872-2.61 1.043-6.786 1.044-7.134 4.35 1.392 1.392 1.566 3.654 2.784 5.567 2.09 3.479 5.741 8.177 9.047 10.614 3.653 2.783 7.308 5.566 11.134 8.002 6.786 4.176 14.442 6.611 21.053 10.787 3.829 2.434 7.654 5.568 11.482 8.177 1.914 1.39 3.131 3.654 5.568 4.523v-.521c-1.219-1.567-1.567-3.828-2.784-5.568-1.738-1.74-3.48-3.306-5.22-5.046-5.045-6.784-11.308-12.7-18.093-17.571-5.567-3.828-17.747-9.047-20.008-15.485 0 0-.175-.173-.348-.347 3.827-.348 8.35-1.74 12.005-2.784 5.915-1.567 11.308-1.218 17.398-2.784 2.783-.696 5.567-1.566 8.35-2.436v-1.565c-3.13-3.132-5.392-7.307-8.698-10.265-8.873-7.657-18.617-15.137-28.707-21.4-5.394-3.48-12.354-5.742-18.095-8.699-2.086-1.045-5.567-1.566-6.784-3.306-3.133-3.827-4.873-8.872-7.134-13.396-5.044-9.57-9.917-20.182-14.267-30.272-3.13-6.786-5.044-13.572-8.872-19.834-17.92-29.577-37.406-47.497-67.33-65.07-6.438-3.653-14.093-5.219-22.27-7.132-4.348-.175-8.699-.522-13.048-.697-2.784-1.218-5.568-4.523-8.004-6.089-9.915-6.264-35.492-19.833-42.799-1.913-4.698 11.308 6.96 22.442 10.96 28.185 2.96 4.001 6.786 8.524 8.874 13.048 1.218 2.956 1.565 6.09 2.783 9.221 2.785 7.653 5.393 16.18 9.048 23.314 1.914 3.653 4.001 7.48 6.437 10.786 1.392 1.913 3.827 2.784 4.35 5.915-2.435 3.48-2.61 8.7-4.003 13.049-6.263 19.66-3.826 44.017 5.046 58.457 2.783 4.348 9.395 13.92 18.268 10.265 7.83-3.131 6.09-13.048 8.35-21.747.524-2.09.176-3.48 1.219-4.872v.349c2.436 4.87 4.871 9.569 7.133 14.44 5.394 8.524 14.788 17.398 22.617 23.314 4.177 3.13 7.482 8.524 12.702 10.438v-.523h-.349c-1.044-1.566-2.61-2.261-4.001-3.48-3.131-3.13-6.612-6.958-9.047-10.438-7.306-9.744-13.745-20.53-19.486-31.665-2.783-5.392-5.22-11.308-7.481-16.701-1.045-2.09-1.045-5.22-2.784-6.263-2.61 3.827-6.437 7.133-8.351 11.83-3.304 7.481-3.653 16.702-4.871 26.27-.696.176-.349 0-.697.35-5.566-1.394-7.48-7.134-9.569-12.006-5.22-12.352-6.09-32.186-1.565-46.452 1.218-3.654 6.438-15.136 4.35-18.616-1.044-3.306-4.525-5.22-6.438-7.829-2.261-3.306-4.698-7.48-6.263-11.135-4.176-9.743-6.264-20.53-10.787-30.273-2.088-4.524-5.74-9.22-8.699-13.396-3.305-4.697-6.959-8.004-9.569-13.571-.869-1.913-2.088-5.045-.696-7.133.348-1.392 1.043-1.913 2.436-2.261 2.262-1.915 8.7.521 10.96 1.565 6.438 2.608 11.831 5.046 17.225 8.699 2.435 1.74 5.045 5.046 8.176 5.916h3.654c5.568 1.217 11.83.348 17.05 1.913 9.222 2.957 17.572 7.307 25.054 12.005 22.792 14.44 41.58 34.97 54.282 59.501 2.088 4 2.957 7.656 4.871 11.83 3.655 8.526 8.178 17.225 11.83 25.576 3.654 8.176 7.133 16.528 12.353 23.314 2.61 3.652 13.048 5.567 17.746 7.481 3.48 1.565 8.874 2.958 12.005 4.871 5.915 3.652 11.83 7.83 17.398 11.83 2.784 2.088 11.482 6.438 12.005 9.917z" />
            <path d="m58.186 43.022c-2.957 0-5.044.35-7.132.871v.348h.348c1.393 2.784 3.827 4.698 5.566 7.133 1.393 2.783 2.61 5.568 4.003 8.352.173-.175.347-.348.347-.348 2.437-1.741 3.654-4.524 3.654-8.7-1.044-1.217-1.218-2.435-2.088-3.653-1.043-1.741-3.306-2.61-4.698-4.003z" />
          </g>
        </svg>
      );

    case "HTML":
      return <HtmlLogo className="w-12 h-12" />;
    case "CSS":
      return <CssLogo className="w-12 h-12" />;
    case "JavaScript":
      return <JavaScriptLogo className="w-12 h-12" />;
    case "TypeScript":
      return <TypeScriptLogo className="w-12 h-12" />;
    case "jQuery":
      return <JqueryLogo className="w-12 h-12" />;
    case "Next.js":
      return <NextLogo className="w-12 h-12" />;
    case "React Native":
      return <ReactLogo className="w-12 h-12" />;
    case "Java":
      return <JavaLogo className="w-12 h-12" />;
    case "PHP":
      return <PhpLogo className="w-12 h-12" />;
    case "Spring Boot":
      return <SpringBootLogo className="w-12 h-12" />;
    case "Laravel":
      return <LaravelLogo className="w-12 h-12" />;
    case "API":
      return <ApiLogo className="w-12 h-12" />;
    case "Golang":
      return <GolangLogo className="w-12 h-12" />;
    case "Problem Solving":
      return <ProblemSolvingLogo className="w-12 h-12" />;
    case "Good Communication":
      return <GoodCommunicationLogo className="w-12 h-12" />;
    case "Able to learn new Things":
      return <LearnNewThingsLogo className="w-12 h-12" />;
    case "Mastering the Framework":
      return <MasteringFrameworkLogo className="w-12 h-12" />;
    case "Adaptability":
      return <AdaptabilityLogo className="w-12 h-12" />;
    default:
      return null;
  }
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <ReactLogo className="w-6 h-6 text-white " />,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-400",
      techs: [
        { name: "React.js" },
        { name: "Vue.js" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "jQuery" },
        { name: "Next.js" },
        { name: "React Native" },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Database className="w-6 h-6 text-white" />,
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-500/20",
      textColor: "text-emerald-400",
      techs: [
        { name: "Node.js" },
        { name: "Python" },
        { name: "SQL" },
        { name: "Java" },
        { name: "PHP" },
        { name: "Flask" },
        { name: "Spring Boot" },
        { name: "Laravel" },
        { name: "API" },
        { name: "Golang" },
      ],
    },
    {
      id: "soft",
      name: "Soft Skills",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-500/20",
      textColor: "text-purple-400",
      techs: [
        { name: "Problem Solving" },
        { name: "Good Communication" },
        { name: "Able to learn new Things" },
        { name: "Mastering the Framework" },
        { name: "Adaptability" },
      ],
    },
  ];

  const activeCategory =
    skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 px-4 bg-gray-900/50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Technical Skills
          </span>
        </motion.h2>

        {/* Tabs for skill categories */}
        <div className="flex justify-center mb-16 skills-tabs-container">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`skill-tab-button mx-4 px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                activeTab === category.id
                  ? category.bgColor + " " + category.textColor
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              <div
                className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
              >
                {category.icon}
              </div>
              <span className="font-medium ">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills with progress bars */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-8">
            {/* Skills category container */}
            <div
              className={`p-6 rounded-xl border border-opacity-20 ${activeCategory.textColor} bg-gray-800/50 backdrop-blur-sm`}
            >
              {/* Centered category title */}
              <h3
                className={`text-xl font-bold mb-6 ${activeCategory.textColor} text-center`}
              >
                {activeCategory.name}
              </h3>

              {/* Skills items in rows of 5 */}
              <div className="flex flex-wrap">
                {activeCategory.techs.map((tech, techIndex) => (
                  <motion.div
                    key={`${activeCategory.id}-${tech.name}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: techIndex * 0.1 }}
                    className="flex flex-col items-center w-1/5 mb-6"
                  >
                    {/* Icon and name section */}
                    <div
                      className={`p-2 rounded-lg border ${activeCategory.textColor} border-1 mb-2`}
                    >
                      {getLogoForTech(tech.name)}
                    </div>
                    <span className="text-white font-medium text-center text-sm">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
