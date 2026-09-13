(function () {
  const grid = document.getElementById("problem-grid");
  const searchInput = document.getElementById("problem-search");
  const themeSelect = document.getElementById("problem-theme-filter");
  const deptSelect = document.getElementById("problem-dept-filter");
  const resultsCount = document.getElementById("problem-results-count");

  if (!grid || !window.problemStatements) return;

  const data = window.problemStatements;

  // Populate theme filter
  const themes = Array.from(new Set(data.map((p) => p.theme))).sort();
  themes.forEach((theme) => {
    const opt = document.createElement("option");
    opt.value = theme;
    opt.textContent = theme;
    themeSelect.appendChild(opt);
  });

  // Populate department filter
  const departments = Array.from(new Set(data.map((p) => p.department))).sort();
  departments.forEach((dept) => {
    const opt = document.createElement("option");
    opt.value = dept;
    opt.textContent = dept;
    deptSelect.appendChild(opt);
  });

  function chevronSvg() {
    return `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  function renderCard(p) {
    const card = document.createElement("article");
    card.className = "problem-card";
    card.dataset.expanded = "false";

    const detailsId = `problem-details-${p.id}`;

    card.innerHTML = `
      <div class="problem-card__top">
        <span class="problem-card__id">${p.id}</span>
        <span class="problem-card__theme">${p.theme}</span>
      </div>
      <h3>${p.title}</h3>
      <p class="problem-card__dept">${p.department}</p>
      <p class="problem-card__summary">${p.summary}</p>
      <div class="problem-card__details" id="${detailsId}">
        <p>${p.details}</p>
      </div>
      <button class="problem-card__toggle" type="button" aria-expanded="false" aria-controls="${detailsId}">
        <span class="toggle-label">View Problem</span>
        ${chevronSvg()}
      </button>
    `;

    const toggle = card.querySelector(".problem-card__toggle");
    const label = card.querySelector(".toggle-label");
    toggle.addEventListener("click", () => {
      const isExpanded = card.dataset.expanded === "true";
      card.dataset.expanded = isExpanded ? "false" : "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      label.textContent = isExpanded ? "View Problem" : "Hide Details";
    });

    return card;
  }

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const theme = themeSelect.value;
    const dept = deptSelect.value;

    const filtered = data.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.id.toLowerCase().includes(query) ||
        p.department.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query);
      const matchesTheme = theme === "all" || p.theme === theme;
      const matchesDept = dept === "all" || p.department === dept;
      return matchesQuery && matchesTheme && matchesDept;
    });

    grid.innerHTML = "";

    if (filtered.length === 0) {
      const empty = document.createElement("p");
      empty.className = "problem-empty";
      empty.textContent = "No problem statements match your filters.";
      grid.appendChild(empty);
    } else {
      filtered.forEach((p) => grid.appendChild(renderCard(p)));
    }

    resultsCount.textContent = `Showing ${filtered.length} of ${data.length} sample problem statements`;
  }

  [searchInput, themeSelect, deptSelect].forEach((el) => {
    el.addEventListener("input", applyFilters);
    el.addEventListener("change", applyFilters);
  });

  applyFilters();
})();