import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* ------------------- */
/* Custom properties   */
/* ------------------- */

:root {
  /* custom colors */
  /* --clr-dark: 287 20.5% 13.3%;
  --clr-light: 365 68.9% 90%;
  --clr-white: 0 0% 100%; */

  /* original colors */
  --clr-dark: 230 35% 7%;
  --clr-light: 231 77% 90%;
  --clr-white: 0 0% 100%;

  /* pastel sunset pallet */
  /* --clr-purple: 287 16.5% 27.3%;
  --clr-magenta: 327 28.0% 36.5%;
  --clr-crimson: 345 38.9% 50.6%;
  --clr-gold: 27 69.6% 69.0%; */

  /* font-sizes */
  --fs-900: 9.375rem;
  --fs-800: 6.25rem;
  --fs-700: 3.5rem;
  --fs-600: 2rem;
  --fs-500: 1.75rem;
  --fs-400: 1.125rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;

  /* font-families */
  --ff-serif: "Bellefair", serif;
  --ff-sans-cond: "Barlow Condensed", sans-serif;
  --ff-sans-normal: "Barlow", sans-serif;
}

/* ------------------- */
/* Reset               */
/* ------------------- */

/* https://piccalil.li/blog/a-modern-css-reset/ */

/* Box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Reset margins */
body,
h1,
h2,
h3,
h4,
h5,
p,
figure,
picture {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: 400;
}

/* set up the body */
body {
  font-family: var(--ff-sans-normal);
  font-size: var(--fs-400);
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-dark));
  line-height: 1.5;
  min-height: 50vh;
}

/* make images easier to work with */
img,
picutre {
  max-width: 100%;
  display: block;
}

/* make form elements easier to work with */
input,
button,
textarea,
select {
  font: inherit;
}

/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ------------------- */
/* Utility classes     */
/* ------------------- */

/* general */

.flex {
  display: flex;
  gap: var(--gap, 1rem);
}

.grid {
  display: grid;
  gap: var(--gap, 1rem);
}

/* .flow > * + * {  same as below without adding the extra especificity needed*/
.flow > *:where(:not(:first-child)) {
  margin-top: var(--flow-space, 3rem); /* normally setted up to 1px */
  /* outline: 1px solid red; */
}
/* The difference between :is and :where = :is gonna take the higher on specificity and apply it to the rule */
/* :where in the other hand dosent add any specificity */

.container {
  padding-inline: 2em;
  margin-inline: auto;
  max-width: 80rem;
}

.center-item {
  display: flex;
  justify-content: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; /* added line */
  border: 0;
}

/* colors */

.bg-dark {
  background-color: hsl(var(--clr-dark));
}
.bg-accent {
  background-color: hsl(var(--clr-light));
}
.bg-white {
  background-color: hsl(var(--clr-white));
}

.text-dark {
  color: hsl(var(--clr-dark));
}
.text-accent {
  color: hsl(var(--clr-light));
}
.text-white {
  color: hsl(var(--clr-white));
}

/* typography */

.ff-serif {
  font-family: var(--ff-serif);
}
.ff-sans-cond {
  font-family: var(--ff-sans-cond);
}
.ff-sans-normal {
  font-family: var(--ff-sans-normal);
}

.letter-spacing-1 {
  letter-spacing: 4.75px;
}
.letter-spacing-2 {
  letter-spacing: 2.7px;
}
.letter-spacing-3 {
  letter-spacing: 2.35px;
}

.uppercase {
  text-transform: uppercase;
}

.fs-900 {
  font-size: var(--fs-900);
}
.fs-800 {
  font-size: var(--fs-800);
}
.fs-700 {
  font-size: var(--fs-700);
}
.fs-600 {
  font-size: var(--fs-600);
}
.fs-500 {
  font-size: var(--fs-500);
}
.fs-400 {
  font-size: var(--fs-400);
}
.fs-300 {
  font-size: var(--fs-300);
}
.fs-200 {
  font-size: var(--fs-200);
}

.fs-900,
.fs-800,
.fs-700,
.fs-600 {
  line-height: 1.1;
}

.numbered-title {
  font-family: var(--ff-sans-cond);
  font-size: var(--fs-500);
  text-transform: uppercase;
  letter-spacing: 4.72px;
}

.numbered-title span {
  margin-right: 0.5em;
  font-weight: 700;
  color: hsl(var(--clr-white) / 0.25);
}

/* - - - - - - - */
/* Components    */
/* - - - - - - - */

.large-button {
  position: relative;
  display: inline-grid;
  z-index: 1;
  place-items: center; /* shorthand for justify and align items */
  padding: 0 2em;
  border-radius: 50%;
  aspect-ratio: 1;
  text-decoration: none;
}

.large-button::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%; /* optional approach to aspect-ratio */
  height: 100%;
  background: hsl(var(--clr-white) / 0.15);
  border-radius: inherit; /* instead of rewriting 50% */
  opacity: 0;
  transition: opacity 500ms linear, transform 750ms ease-in-out;
}

.large-button:hover::after,
.large-button:focus::after {
  opacity: 1;
  transform: scale(1.5);
}

.primary-navigation {
  --gap: 8rem;
  --underline-gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  
}

.primary-navigation a {
  text-decoration: none;
}

.primary-navigation a > span {
  font-weight: 700;
  margin-right: 0.5em;
}

.underline-indicators > * {
  padding: var(--underline-gap, 1rem) 0;
  border: 0;
  cursor: pointer;
  border-bottom: 0.2rem solid hsl(var(--clr-light) / 0);
}

.underline-indicators > *:hover,
.underline-indicators > *:focus {
  border-color: hsl(var(--clr-white) / 0.5);
}

.underline-indicators > .active,
.underline-indicators > [aria-selected="true"] {
  color: hsl(var(--clr-white) / 1);
  border-color: hsl(var(--clr-white) / 1);
}

.tab-list {
  gap: 2rem;
}

.dot-indicators > * {
  cursor: pointer;
  border: 0;
  padding: 0.5em;
  border-radius: 50%;
  background-color: hsl(var(--clr-white) / 0.25);
}

.dot-indicators > *:hover,
.dot-indicators > *:focus {
  background-color: hsl(var(--clr-white) / 0.5);
}

.dot-indicators > .active,
.dot-indicators > [aria-selected="true"] {
  background-color: hsl(var(--clr-white) / 1);
}

.number-buttons {
  display: grid;
  padding: 0;
}

.number-buttons > * {
  font-family: var(--ff-serif);
  font-size: var(--fs-600);
  color: var(--clr-white);
  border: 1px solid hsl(var(--clr-white) / .25);
  position: relative;
  display: grid;
  place-items: center; /* shorthand for justify and align items */
  width: 5rem;
  border-radius: 50%;
  aspect-ratio: 1;
  text-decoration: none;
  z-index: 1;
}

.number-buttons > *:hover,
.number-buttons > *:focus {
  border: 1px solid hsl(var(--clr-white));
}

.number-buttons > .active,
.number-buttons > [aria-selected="true"] {
  color: hsl(var(--clr-dark));
  background-color: hsl(var(--clr-white) / 1);
  border: none;
}
`