function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getLinkAttributes(href, label) {
  const normalizedHref = String(href || "").trim();
  const isHashLink = normalizedHref.startsWith("#");
  const isProtocolLink = /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(normalizedHref);
  const isHttpLink = /^https?:/i.test(normalizedHref);
  const safeHref = escapeHtml(normalizedHref || "#");
  const safeLabel = escapeHtml(label || "Link");

  if (!isProtocolLink || isHashLink || /^mailto:/i.test(normalizedHref) || /^tel:/i.test(normalizedHref)) {
    return `href="${safeHref}" aria-label="${safeLabel}"`;
  }

  if (isHttpLink) {
    return `href="${safeHref}" target="_blank" rel="noreferrer noopener" aria-label="${safeLabel}"`;
  }

  return `href="${safeHref}" aria-label="${safeLabel}"`;
}

function renderTag(tag, alt = false) {
  return `<span class="tag${alt ? " alt" : ""}">${escapeHtml(tag)}</span>`;
}

function renderIconGlyph(icon) {
  const normalizedIcon = String(icon || "").trim();

  if (normalizedIcon.includes(":")) {
    return `<iconify-icon icon="${escapeHtml(normalizedIcon)}" class="ui-icon"></iconify-icon>`;
  }

  return `<i class="${escapeHtml(normalizedIcon || "fa-solid fa-circle")} ui-icon"></i>`;
}

function renderIcon(iconClass, label) {
  return `<span class="icon-shell" aria-hidden="true">${renderIconGlyph(iconClass)}</span><span>${escapeHtml(label)}</span>`;
}

function renderCardIcon(iconClass) {
  return `<span class="card-icon" aria-hidden="true">${renderIconGlyph(iconClass)}</span>`;
}

function renderStackItem(entry) {
  if (typeof entry === "string") {
    return `<li>${escapeHtml(entry)}</li>`;
  }

  return `<li class="stack-item with-icon"><span class="icon-shell" aria-hidden="true">${renderIconGlyph(entry.icon)}</span><span>${escapeHtml(entry.label)}</span></li>`;
}

export function renderNav(items) {
  return items
    .map((item, index) => `<li><a href="${escapeHtml(item.href)}"${index === 0 ? ' aria-current="true"' : ""}>${escapeHtml(item.label)}</a></li>`)
    .join("");
}

export function renderButtons(items) {
  return items
    .map(
      (item) => `
        <a class="button ${escapeHtml(item.className || "")}" ${getLinkAttributes(item.href, item.label)}${item.download ? " download" : ""}>
          ${renderIcon(item.icon, item.label)}
        </a>`
    )
    .join("");
}

export function renderSocialLinks(items) {
  return items
    .map(
      (item) => `
        <a class="link-chip" ${getLinkAttributes(item.href, item.label)}>
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
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
        </article>`
    )
    .join("");
}

export function renderPrinciples(items) {
  return items
    .map(
      (item) => `
        <article class="principle-card" data-reveal>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.copy)}</p>
        </article>`
    )
    .join("");
}

export function renderExperience(items) {
  return items
    .map(
      (item) => `
        <article class="project-card experience-card" data-reveal>
          <div class="card-kicker">
            ${renderCardIcon(item.icon)}
            <div class="card-kicker-copy">
              <span class="card-kicker-label">${escapeHtml(item.company)}</span>
              <span class="card-kicker-meta">${escapeHtml(item.location)}</span>
            </div>
          </div>
          <div class="project-top">
            <div>
              <h3>${escapeHtml(item.role)}</h3>
              <p class="project-meta">${escapeHtml(item.company)} · ${escapeHtml(item.location)}</p>
            </div>
            <span class="project-state">${escapeHtml(item.period)}</span>
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
        <article class="project-card education-card" data-reveal>
          <div class="card-kicker">
            ${renderCardIcon(item.icon)}
            <div class="card-kicker-copy">
              <span class="card-kicker-label">${escapeHtml(item.school)}</span>
              <span class="card-kicker-meta">${escapeHtml(item.location)}</span>
            </div>
          </div>
          <div class="project-top">
            <div>
              <h3>${escapeHtml(item.degree)}</h3>
              <p class="project-meta">${escapeHtml(item.school)} · ${escapeHtml(item.location)}</p>
            </div>
            <span class="project-state">${escapeHtml(item.period)}</span>
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
              <span class="card-kicker-label">${escapeHtml(item.name)}</span>
              <span class="card-kicker-meta">${escapeHtml(item.tech.slice(0, 2).join(" · "))}</span>
            </div>
          </div>
          <div class="project-top">
            <div>
              <h3>${escapeHtml(item.name)}</h3>
              <p class="project-meta">${escapeHtml(item.description)}</p>
            </div>
            <span class="project-state">${escapeHtml(item.state)}</span>
          </div>
          <div class="tag-list">
            ${item.tech.map((tag) => renderTag(tag)).join("")}
            ${item.tags.map((tag) => renderTag(tag, true)).join("")}
          </div>
          <div class="project-links">
            ${item.url ? `<a ${getLinkAttributes(item.url, copy.livePreview || "Live preview")}>${escapeHtml(copy.livePreview || "Live preview")}</a>` : ""}
            ${item.repo ? `<a ${getLinkAttributes(item.repo, copy.repository || "Repository")}>${escapeHtml(copy.repository || "Repository")}</a>` : ""}
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
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.copy)}</p>
          <ul class="stack-list">
            ${item.items.map((entry) => renderStackItem(entry)).join("")}
          </ul>
        </article>`
    )
    .join("");
}

export function renderBulletList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

export function renderAvailability(items) {
  return items
    .map(
      (item) => `
        <article class="availability-item">
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.detail)}</p>
        </article>`
    )
    .join("");
}

export function renderTicker(items) {
  const duplicated = [...items, ...items];
  return duplicated
    .map((item) => {
      if (typeof item === "string") {
        return `<span class="ticker-pill">${escapeHtml(item)}</span>`;
      }

      return `<span class="ticker-pill with-icon"><span class="icon-shell" aria-hidden="true">${renderIconGlyph(item.icon)}</span><span>${escapeHtml(item.label)}</span></span>`;
    })
    .join("");
}

export function renderContactPills(items) {
  return items
    .map(
      (item) => `
        <a class="contact-pill" ${getLinkAttributes(item.href, item.label)}>
          ${renderIcon(item.icon, item.label)}
        </a>`
    )
    .join("");
}