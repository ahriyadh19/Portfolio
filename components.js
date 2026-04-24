function renderTag(tag, alt = false) {
  return `<span class="tag${alt ? " alt" : ""}">${tag}</span>`;
}

function renderIcon(iconClass, label) {
  return `<span class="icon-shell" aria-hidden="true"><i class="${iconClass || "fa-solid fa-circle"} ui-icon"></i></span><span>${label}</span>`;
}

function renderCardIcon(iconClass) {
  return `<span class="card-icon" aria-hidden="true"><i class="${iconClass || "fa-solid fa-circle"} ui-icon"></i></span>`;
}

function renderStackItem(entry) {
  if (typeof entry === "string") {
    return `<li>${entry}</li>`;
  }

  return `<li class="stack-item with-icon"><span class="icon-shell" aria-hidden="true"><i class="${entry.icon || "fa-solid fa-circle"} ui-icon"></i></span><span>${entry.label}</span></li>`;
}

export function renderNav(items) {
  return items
    .map((item, index) => `<li><a href="${item.href}"${index === 0 ? ' aria-current="true"' : ""}>${item.label}</a></li>`)
    .join("");
}

export function renderButtons(items) {
  return items
    .map(
      (item) => `
        <a class="button ${item.className}" href="${item.href}"${item.download ? " download" : ""}>
          ${renderIcon(item.icon, item.label)}
        </a>`
    )
    .join("");
}

export function renderSocialLinks(items) {
  return items
    .map(
      (item) => `
        <a class="link-chip" href="${item.href}" target="_blank" rel="noreferrer noopener" aria-label="${item.label}">
          ${renderIcon(item.icon, item.label)}
        </a>`
    )
    .join("");
}

export function renderStats(items) {
  return items
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>`
    )
    .join("");
}

export function renderPrinciples(items) {
  return items
    .map(
      (item) => `
        <article class="principle-card" data-reveal>
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
        </article>`
    )
    .join("");
}

export function renderExperience(items) {
  return items
    .map(
      (item) => `
        <article class="experience-card" data-reveal>
          <div class="card-kicker">
            ${renderCardIcon(item.icon)}
            <div class="card-kicker-copy">
              <span class="card-kicker-label">${item.company}</span>
              <span class="card-kicker-meta">${item.location}</span>
            </div>
          </div>
          <div class="project-top">
            <div>
              <h3>${item.role}</h3>
              <p class="project-meta">${item.company} · ${item.location}</p>
            </div>
            <span class="project-state">${item.period}</span>
          </div>
          <div class="tag-list card-tag-list">
            ${(item.tags || []).map((tag) => renderTag(tag, true)).join("")}
          </div>
          <ul class="bullet-list experience-list">
            ${renderBulletList(item.highlights)}
          </ul>
        </article>`
    )
    .join("");
}

export function renderEducation(items) {
  return items
    .map(
      (item) => `
        <article class="education-card" data-reveal>
          <div class="card-kicker">
            ${renderCardIcon(item.icon)}
            <div class="card-kicker-copy">
              <span class="card-kicker-label">${item.school}</span>
              <span class="card-kicker-meta">${item.location}</span>
            </div>
          </div>
          <div class="project-top">
            <div>
              <h3>${item.degree}</h3>
              <p class="project-meta">${item.school} · ${item.location}</p>
            </div>
            <span class="project-state">${item.period}</span>
          </div>
          <div class="tag-list card-tag-list">
            ${(item.tags || []).map((tag) => renderTag(tag, true)).join("")}
          </div>
          <ul class="bullet-list experience-list">
            ${renderBulletList(item.details)}
          </ul>
        </article>`
    )
    .join("");
}

export function renderProjects(items, copy = {}) {
  return items
    .map(
      (item) => `
        <article class="project-card" data-reveal>
          <div class="card-kicker">
            ${renderCardIcon(item.icon)}
            <div class="card-kicker-copy">
              <span class="card-kicker-label">${item.name}</span>
              <span class="card-kicker-meta">${item.tech.slice(0, 2).join(" · ")}</span>
            </div>
          </div>
          <div class="project-top">
            <div>
              <h3>${item.name}</h3>
              <p class="project-meta">${item.description}</p>
            </div>
            <span class="project-state">${item.state}</span>
          </div>
          <div class="tag-list">
            ${item.tech.map((tag) => renderTag(tag)).join("")}
            ${item.tags.map((tag) => renderTag(tag, true)).join("")}
          </div>
          <div class="project-links">
            ${item.url ? `<a href="${item.url}" target="_blank" rel="noreferrer noopener">${copy.livePreview || "Live preview"}</a>` : ""}
            ${item.repo ? `<a href="${item.repo}" target="_blank" rel="noreferrer noopener">${copy.repository || "Repository"}</a>` : ""}
          </div>
        </article>`
    )
    .join("");
}

export function renderStackGroups(items) {
  return items
    .map(
      (item) => `
        <article class="stack-card" data-reveal>
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
          <ul class="stack-list">
            ${item.items.map((entry) => renderStackItem(entry)).join("")}
          </ul>
        </article>`
    )
    .join("");
}

export function renderBulletList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

export function renderAvailability(items) {
  return items
    .map(
      (item) => `
        <article class="availability-item">
          <strong>${item.title}</strong>
          <p>${item.detail}</p>
        </article>`
    )
    .join("");
}

export function renderTicker(items) {
  const duplicated = [...items, ...items];
  return duplicated.map((item) => `<span class="ticker-pill">${item}</span>`).join("");
}

export function renderContactPills(items) {
  return items
    .map(
      (item) => `
        <a class="contact-pill" href="${item.href}" target="_blank" rel="noreferrer noopener">
          ${renderIcon(item.icon, item.label)}
        </a>`
    )
    .join("");
}