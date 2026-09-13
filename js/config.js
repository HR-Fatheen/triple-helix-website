/**
 * Central configuration for the Triple Helix prototype.
 * Replace placeholder values here once official information is confirmed —
 * every part of the UI reads from this file rather than hardcoding content.
 */

// Single source of truth for the registration link.
// Every "REGISTER NOW" button reads this value. Update once the official
// Google Form is available; do not hardcode the URL anywhere else.
const REGISTRATION_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdIYm8ak8Ht2lQEGbREuIBj4FikF34NKd3_X2bxjpVGJIJ_XQ/viewform";

const siteConfig = {
  brandName: "Triple Helix",
  brandSubline: "District Innovation Initiative",
  district: "Chengalpattu District, Tamil Nadu",
  statusNote: "Prototype — Demonstration Content",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Triple Helix", href: "#model" },
    { label: "Problem Statements", href: "#problem-statements" },
    { label: "Guidelines", href: "#guidelines" },
    { label: "Process", href: "#process" },
    { label: "Evaluation", href: "#evaluation" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

const eventConfig = {
  eventName: "Triple Helix — District Innovation Hackathon",
  tagline: "Government × Academia × Industry",
  lede:
    "A proposed district-level initiative bringing together government departments, academic institutions and industry partners to work on real-world problem statements.",
  panel: {
    heading: "At a glance",
    rows: [
      { label: "Organising district", value: "Chengalpattu, Tamil Nadu" },
      { label: "Registration opens", value: "To Be Announced" },
      { label: "Registration deadline", value: "To Be Announced" },
      { label: "Event dates", value: "To Be Announced" },
      { label: "Team size", value: "To Be Announced" },
      { label: "Mode", value: "To Be Announced" },
    ],
  },
};

// Exposed for use by other script files (nav.js, problems.js, main.js)
window.siteConfig = siteConfig;
window.eventConfig = eventConfig;
window.REGISTRATION_URL = REGISTRATION_URL;