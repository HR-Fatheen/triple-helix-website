/**
 * Sample content for the prototype.
 * Everything here is placeholder / demonstration data — replace with
 * officially approved problem statements, themes and timeline once
 * confirmed. Nothing in this file should be treated as final.
 */

const problemThemes = [
  "Smart Governance",
  "Education",
  "Healthcare",
  "Agriculture",
  "Environment",
  "Mobility",
  "Public Safety",
  "Tourism",
  "FinTech",
  "Clean Technology",
  "Rural Development",
  "Digital Services",
];

// SAMPLE PROBLEM STATEMENTS — FOR DEMONSTRATION ONLY.
// Departments, IDs and descriptions below are illustrative and do not
// represent confirmed official problem statements.
const problemStatements = [
  {
    id: "CHG-001",
    title: "Smart Waste Management for Urban Wards",
    department: "Sample Department — Urban Governance",
    theme: "Clean Technology",
    summary:
      "Design a system to track municipal waste collection routes and flag missed or overflowing collection points.",
    details:
      "Participants may explore route optimisation, citizen reporting, or sensor-based fill-level monitoring. A working prototype should demonstrate at least one end-to-end flow, such as a citizen reporting a missed pickup and a collection team receiving and resolving it.",
  },
  {
    id: "CHG-002",
    title: "Farmer Advisory Access in Local Language",
    department: "Sample Department — Agriculture",
    theme: "Agriculture",
    summary:
      "Help small and marginal farmers access crop advisories, weather alerts and market prices in Tamil.",
    details:
      "Consider low-bandwidth or offline-friendly delivery methods (SMS, voice, or a lightweight app) given variable rural connectivity. Solutions should be usable by farmers with limited digital literacy.",
  },
  {
    id: "CHG-003",
    title: "Digital Attendance and Learning Tracker for Government Schools",
    department: "Sample Department — School Education",
    theme: "Education",
    summary:
      "Build a simple tool for teachers to record attendance and basic learning progress without requiring constant internet access.",
    details:
      "The tool should sync data when connectivity is available and work offline otherwise. Consider how the data could help identify students who need additional support.",
  },
  {
    id: "CHG-004",
    title: "Queue and Token Management for Public Health Centres",
    department: "Sample Department — Public Health",
    theme: "Healthcare",
    summary:
      "Reduce wait times and crowding at primary health centres with a simple token or appointment system.",
    details:
      "Solutions should account for walk-in patients who may not have smartphones, and should integrate with how health centre staff currently manage patient flow.",
  },
  {
    id: "CHG-005",
    title: "Pothole and Road Damage Reporting",
    department: "Sample Department — Public Works",
    theme: "Mobility",
    summary:
      "Create a way for residents to report road damage with location and photo evidence, routed to the right maintenance team.",
    details:
      "Consider how reports are verified, prioritised and tracked through to resolution, and how residents are informed of the status of their report.",
  },
  {
    id: "CHG-006",
    title: "Heritage Site Information for Visitors",
    department: "Sample Department — Tourism",
    theme: "Tourism",
    summary:
      "Improve how visitors to district heritage sites access historical information, routes and local services.",
    details:
      "Solutions might include multilingual content, offline maps, or integration with local guides and transport options.",
  },
];

window.problemThemes = problemThemes;
window.problemStatements = problemStatements;