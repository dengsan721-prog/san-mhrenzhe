import {
  answerLevel,
  createGameState,
  getCurrentLevel,
  getDomainSummary,
  getElementSummary,
  getFinalHonor,
  getProgress,
  isComplete,
} from "./app-core.js";

const app = document.querySelector("#app");

const elementTheme = {
  fire: {
    accent: "#f06a3f",
    soft: "rgba(240, 106, 63, 0.14)",
    label: "火焰",
  },
  ice: {
    accent: "#2aa9d6",
    soft: "rgba(42, 169, 214, 0.14)",
    label: "冰晶",
  },
  lightning: {
    accent: "#8b5cf6",
    soft: "rgba(139, 92, 246, 0.14)",
    label: "雷电",
  },
  earth: {
    accent: "#9a6b35",
    soft: "rgba(154, 107, 53, 0.14)",
    label: "大地",
  },
  wind: {
    accent: "#2eaa73",
    soft: "rgba(46, 170, 115, 0.14)",
    label: "风暴",
  },
  shadow: {
    accent: "#334155",
    soft: "rgba(51, 65, 85, 0.14)",
    label: "光影",
  },
};

const domainLabels = {
  math: "数学",
  chinese: "语文",
  english: "英语",
  science: "科学",
  logic: "逻辑",
  spatial: "空间",
};

const heroBadges = {
  fire: "火",
  ice: "冰",
  lightning: "雷",
  earth: "土",
  wind: "风",
  shadow: "影",
};

const elementOrder = ["fire", "ice", "lightning", "earth", "wind", "shadow"];

const elementBeasts = {
  fire: { name: "火凤", className: "firebird", rune: "凤" },
  ice: { name: "冰麒麟", className: "icekirin", rune: "麟" },
  lightning: { name: "雷虎", className: "thundertiger", rune: "虎" },
  earth: { name: "岩龟", className: "rockturtle", rune: "龟" },
  wind: { name: "风龙", className: "winddragon", rune: "龙" },
  shadow: { name: "影鹿", className: "shadowdeer", rune: "鹿" },
};

let state = createGameState();

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setTheme(element) {
  const theme = elementTheme[element] || elementTheme.fire;
  app.style.setProperty("--accent", theme.accent);
  app.style.setProperty("--accent-soft", theme.soft);
}

function renderElementHero(element, badge = heroBadges[element] || "元", size = "normal") {
  return `
    <div class="hero-figure hero-${escapeHtml(element)} hero-${escapeHtml(size)}" aria-hidden="true">
      <span class="energy-orbit"></span>
      <span class="hero-head">
        <span class="hero-mask"><i></i><i></i></span>
      </span>
      <span class="hero-scarf"></span>
      <span class="hero-body">${escapeHtml(badge)}</span>
      <span class="hero-arm hero-arm-left"></span>
      <span class="hero-arm hero-arm-right"></span>
      <span class="hero-leg hero-leg-left"></span>
      <span class="hero-leg hero-leg-right"></span>
    </div>
  `;
}

function renderElementBeast(element, size = "normal") {
  const beast = elementBeasts[element] || elementBeasts.fire;

  return `
    <div class="beast-totem beast-${escapeHtml(beast.className)} beast-${escapeHtml(size)}" aria-hidden="true">
      <span class="beast-aura"></span>
      <span class="beast-tail"></span>
      <span class="beast-wing beast-wing-left"></span>
      <span class="beast-wing beast-wing-right"></span>
      <span class="beast-body"></span>
      <span class="beast-head">
        <i></i><i></i>
      </span>
      <span class="beast-horn"></span>
      <span class="beast-claw beast-claw-left"></span>
      <span class="beast-claw beast-claw-right"></span>
      <span class="beast-rune">${escapeHtml(beast.rune)}</span>
      <span class="beast-name">${escapeHtml(beast.name)}</span>
    </div>
  `;
}

function renderAcademyCrest() {
  return `
    <div class="academy-crest">
      <span class="crest-aurora"></span>
      <span class="crest-wing crest-wing-left"></span>
      <span class="crest-wing crest-wing-right"></span>
      <span class="crest-crown"><i></i><i></i><i></i></span>
      <div class="title-orbit-icon" aria-hidden="true">
        <span class="crest-gem"></span>
        <span class="icon-core">幻</span>
        <span class="icon-blade blade-fire"></span>
        <span class="icon-blade blade-ice"></span>
        <span class="icon-blade blade-lightning"></span>
        <span class="icon-blade blade-earth"></span>
        <span class="icon-blade blade-wind"></span>
        <span class="icon-blade blade-shadow"></span>
        <span class="crest-spark spark-one"></span>
        <span class="crest-spark spark-two"></span>
        <span class="crest-spark spark-three"></span>
      </div>
      <h1 class="academy-title">元素幻影学院</h1>
    </div>
  `;
}

function renderBeastHall() {
  return `
    <div class="beast-hall" aria-hidden="true">
      <span class="hall-skyline"></span>
      <div class="hall-core">元素集结</div>
      <div class="flame-anim hall-flame"><span></span><span></span><span></span></div>
      <div class="wave-anim hall-wave"><span></span><span></span></div>
      <div class="beast-grid">
        ${elementOrder.map((element) => renderElementBeast(element, "mini")).join("")}
      </div>
    </div>
  `;
}

function renderEnergyForge() {
  return `
    <div class="energy-forge" aria-hidden="true">
      <span class="forge-ring ring-outer"></span>
      <span class="forge-ring ring-middle"></span>
      <span class="forge-ring ring-inner"></span>
      <span class="forge-crystal crystal-fire"></span>
      <span class="forge-crystal crystal-ice"></span>
      <span class="forge-crystal crystal-lightning"></span>
      <span class="forge-crystal crystal-earth"></span>
      <span class="forge-crystal crystal-wind"></span>
      <span class="forge-crystal crystal-shadow"></span>
      <div class="portal-gate">
        <span class="portal-star"></span>
        <span class="portal-mist"></span>
      </div>
      <div class="flame-anim forge-flame"><span></span><span></span><span></span></div>
      <div class="wave-anim forge-wave"><span></span><span></span></div>
    </div>
  `;
}

function renderHeroTeam() {
  return `
    <div class="element-team" aria-hidden="true">
      ${elementOrder.map((element) => renderElementHero(element, heroBadges[element], "small")).join("")}
    </div>
  `;
}

function renderStart() {
  app.removeAttribute("style");
  app.innerHTML = `
    <section class="screen start-screen premium-start">
      ${renderAcademyCrest()}
      <p class="mystery-copy">六道元素之门在云海中醒来，只有真正的观察力、勇气和智慧，才能让隐藏徽章现形。</p>
      ${renderBeastHall()}
      ${renderEnergyForge()}
      <button class="primary-button" type="button" data-action="start">开始训练冒险</button>
    </section>
  `;
}

function renderLevel(feedback = null) {
  const level = getCurrentLevel(state);

  if (!level) {
    renderResult();
    return;
  }

  setTheme(level.element);
  const progress = getProgress(state);
  const theme = elementTheme[level.element] || elementTheme.fire;

  app.innerHTML = `
    <section class="screen">
      <header class="topbar">
        <div class="chapter-row">
          <span class="chapter-name">${escapeHtml(theme.label)} · ${escapeHtml(level.chapter)}</span>
          <span class="level-count">${progress.current + 1}/${progress.total}</span>
        </div>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="--progress: ${progress.percent}%"></div>
        </div>
      </header>

      <section class="level-stage">
        <div class="badge-line">
          <div class="element-badge" aria-hidden="true">${escapeHtml(level.badge)}</div>
          <div class="level-title">
            <span>${escapeHtml(domainLabels[level.domain] || "任务")} · ${escapeHtml(level.mission)}</span>
            <h2>${escapeHtml(level.title)}</h2>
          </div>
        </div>

        <div class="mission-scene mission-${escapeHtml(level.element)}">
          <div class="scene-effects" aria-hidden="true">
            <div class="flame-anim scene-flame"><span></span><span></span><span></span></div>
            <div class="wave-anim scene-wave"><span></span><span></span></div>
            <span class="energy-scratch scratch-a"></span>
            <span class="energy-scratch scratch-b"></span>
          </div>
          <div class="stage-beast-wrap">
            ${renderElementBeast(level.element, "stage")}
          </div>
          <div class="visual-tile" aria-hidden="true">
            <span class="scene-label">${escapeHtml(level.mission)}</span>
            <strong>${escapeHtml(level.visual)}</strong>
            <em>${escapeHtml(elementBeasts[level.element]?.name || "元素神兽")}守护</em>
          </div>
        </div>
        <p class="prompt">${escapeHtml(level.prompt)}</p>

        <div class="options">
          ${level.options.map((option, index) => `
            <button class="option-button" type="button" data-option="${escapeHtml(option.id)}">
              <span class="option-dot">${index + 1}</span>
              <span class="option-text">${escapeHtml(option.text)}</span>
              <span class="option-spark" aria-hidden="true"></span>
            </button>
          `).join("")}
        </div>

        ${feedback ? `
          <div class="feedback" role="status">
            <strong>师父提示</strong>
            <span>${escapeHtml(feedback.hint)}</span>
          </div>
        ` : ""}
      </section>
    </section>
  `;
}

function renderSuccess(result) {
  setTheme(result.level.element);

  app.innerHTML = `
    <section class="screen success-screen">
      <div class="success-card">
        <div class="success-stage-art" aria-hidden="true">
          ${renderElementBeast(result.level.element, "reward")}
          <div class="success-symbol">${escapeHtml(result.level.badge)}</div>
        </div>
        <h2>${escapeHtml(result.level.title)}完成</h2>
        <p>${escapeHtml(result.hint)}</p>
        <div class="reward-chip">${escapeHtml(result.level.reward)}</div>
        <button class="primary-button" type="button" data-action="continue">下一关</button>
      </div>
    </section>
  `;
}

function renderMilestone(result) {
  const milestone = result.milestone;
  setTheme(milestone.element);

  app.innerHTML = `
    <section class="screen milestone-screen">
      <div class="particle-field" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <section class="milestone-card">
        <div class="milestone-hero">
          <div class="flame-anim milestone-flame"><span></span><span></span><span></span></div>
          <div class="wave-anim milestone-wave"><span></span><span></span></div>
          ${renderElementBeast(milestone.element, "large")}
          <div class="burst-badge">${escapeHtml(milestone.badge)}</div>
        </div>
        <div class="status-pill">第 ${milestone.progress} 关达成</div>
        <h2>${escapeHtml(milestone.title)}</h2>
        <p>${escapeHtml(milestone.message)}</p>
        <button class="primary-button" type="button" data-action="${milestone.final ? "show-honor" : "milestone-continue"}">
          ${milestone.final ? "领取荣耀徽章" : "继续冒险"}
        </button>
      </section>
    </section>
  `;
}

function renderHonor() {
  const honor = getFinalHonor(state);
  const summary = getDomainSummary(state);
  const totalCorrect = summary.reduce((sum, item) => sum + item.correct, 0);

  app.style.setProperty("--accent", "#f5b301");
  app.style.setProperty("--accent-soft", "rgba(245, 179, 1, 0.2)");

  app.innerHTML = `
    <section class="screen honor-screen">
      <div class="particle-field honor-particles" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <section class="honor-panel">
        <div class="status-pill">最终授章</div>
        <div class="final-sky">
          <span class="honor-light-pillar"></span>
          <div class="flame-anim crown-flame"><span></span><span></span><span></span></div>
          <div class="wave-anim tidal-wave"><span></span><span></span></div>
          <div class="floating-honor">
            <span class="honor-wing honor-wing-left"></span>
            <span class="honor-wing honor-wing-right"></span>
            <span class="honor-crown"><i></i><i></i><i></i></span>
            <div class="beast-orbit-ring">
              ${elementOrder.map((element) => `
                <div class="honor-beast honor-${escapeHtml(element)}">
                  ${renderElementBeast(element, "orbit")}
                </div>
              `).join("")}
            </div>
            <div class="honor-badge golden-badge" aria-label="${escapeHtml(honor.name)} ${escapeHtml(honor.title)}">
              <span class="badge-sunburst"></span>
              <span class="honor-gem"></span>
              <div class="honor-ring"></div>
              <div class="name-glyph">邓易安</div>
            </div>
          </div>
        </div>
        <h2>${escapeHtml(honor.title)}</h2>
        <p>${escapeHtml(honor.name)}完成 ${honor.total} 个全科元素任务，答对 ${totalCorrect} 个，六元素荣耀徽章已经归位。</p>
        <div class="honor-runes" aria-hidden="true">
          <span>火</span><span>冰</span><span>雷</span><span>土</span><span>风</span><span>影</span>
        </div>
        <button class="primary-button" type="button" data-action="restart">再挑战一次</button>
      </section>
    </section>
  `;
}

function renderResult() {
  app.style.setProperty("--accent", "#2eaa73");
  app.style.setProperty("--accent-soft", "rgba(46, 170, 115, 0.14)");

  const summary = getDomainSummary(state);
  const elementSummary = getElementSummary(state);
  const totalCorrect = summary.reduce((sum, item) => sum + item.correct, 0);

  app.innerHTML = `
    <section class="screen">
      <section class="result-stage">
        <div class="result-heading">
          <div class="status-pill">终章完成</div>
          <h2>六枚元素徽章归位</h2>
          <p>共完成 36 个任务，答对 ${totalCorrect} 个。下面是元素能量和全科表现。</p>
        </div>

        <div class="element-results">
          ${elementSummary.map((item) => renderElementBadge(item)).join("")}
        </div>

        <div class="summary-list">
          ${summary.map((item) => renderSummaryRow(item)).join("")}
        </div>

        <button class="primary-button" type="button" data-action="restart">再玩一次</button>
      </section>
    </section>
  `;
}

function renderElementBadge(item) {
  return `
    <div class="mini-badge ${item.charged ? "is-charged" : ""}">
      <span>${escapeHtml(item.badge)}</span>
      <strong>${item.correct}/${item.total}</strong>
    </div>
  `;
}

function renderSummaryRow(item) {
  const stars = Array.from({ length: 3 }, (_, index) => {
    const on = index < item.stars ? " is-on" : "";
    return `<span class="star${on}">★</span>`;
  }).join("");

  return `
    <div class="summary-row">
      <div class="summary-top">
        <span>${escapeHtml(item.label)}</span>
        <span>${item.correct}/${item.total}</span>
      </div>
      <div class="star-row" aria-label="${escapeHtml(item.label)} ${item.stars} 星">${stars}</div>
    </div>
  `;
}

function handleOption(optionId) {
  const result = answerLevel(state, optionId);

  if (result.correct) {
    if (result.milestone) {
      renderMilestone(result);
      return;
    }

    renderSuccess(result);
    return;
  }

  renderLevel(result);
}

app.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  const optionButton = event.target.closest("[data-option]");

  if (actionButton) {
    const action = actionButton.dataset.action;

    if (action === "start") {
      state = createGameState();
      renderLevel();
    }

    if (action === "continue") {
      if (isComplete(state)) {
        renderResult();
      } else {
        renderLevel();
      }
    }

    if (action === "milestone-continue") {
      renderLevel();
    }

    if (action === "show-honor") {
      renderHonor();
    }

    if (action === "restart") {
      state = createGameState();
      renderStart();
    }
  }

  if (optionButton) {
    handleOption(optionButton.dataset.option);
  }
});

renderStart();
import {
  answerLevel,
  createGameState,
  getCurrentLevel,
  getDomainSummary,
  getElementSummary,
  getFinalHonor,
  getProgress,
  isComplete,
} from "./app-core.js";

const app = document.querySelector("#app");

const elementTheme = {
  fire: {
    accent: "#f06a3f",
    soft: "rgba(240, 106, 63, 0.14)",
    label: "火焰",
  },
  ice: {
    accent: "#2aa9d6",
    soft: "rgba(42, 169, 214, 0.14)",
    label: "冰晶",
  },
  lightning: {
    accent: "#8b5cf6",
    soft: "rgba(139, 92, 246, 0.14)",
    label: "雷电",
  },
  earth: {
    accent: "#9a6b35",
    soft: "rgba(154, 107, 53, 0.14)",
    label: "大地",
  },
  wind: {
    accent: "#2eaa73",
    soft: "rgba(46, 170, 115, 0.14)",
    label: "风暴",
  },
  shadow: {
    accent: "#334155",
    soft: "rgba(51, 65, 85, 0.14)",
    label: "光影",
  },
};

const domainLabels = {
  math: "数学",
  chinese: "语文",
  english: "英语",
  science: "科学",
  logic: "逻辑",
  spatial: "空间",
};

const heroBadges = {
  fire: "火",
  ice: "冰",
  lightning: "雷",
  earth: "土",
  wind: "风",
  shadow: "影",
};

const elementOrder = ["fire", "ice", "lightning", "earth", "wind", "shadow"];

const elementBeasts = {
  fire: { name: "火凤", className: "firebird", rune: "凤" },
  ice: { name: "冰麒麟", className: "icekirin", rune: "麟" },
  lightning: { name: "雷虎", className: "thundertiger", rune: "虎" },
  earth: { name: "岩龟", className: "rockturtle", rune: "龟" },
  wind: { name: "风龙", className: "winddragon", rune: "龙" },
  shadow: { name: "影鹿", className: "shadowdeer", rune: "鹿" },
};

let state = createGameState();

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setTheme(element) {
  const theme = elementTheme[element] || elementTheme.fire;
  app.style.setProperty("--accent", theme.accent);
  app.style.setProperty("--accent-soft", theme.soft);
}

function renderElementHero(element, badge = heroBadges[element] || "元", size = "normal") {
  return `
    <div class="hero-figure hero-${escapeHtml(element)} hero-${escapeHtml(size)}" aria-hidden="true">
      <span class="energy-orbit"></span>
      <span class="hero-head">
        <span class="hero-mask"><i></i><i></i></span>
      </span>
      <span class="hero-scarf"></span>
      <span class="hero-body">${escapeHtml(badge)}</span>
      <span class="hero-arm hero-arm-left"></span>
      <span class="hero-arm hero-arm-right"></span>
      <span class="hero-leg hero-leg-left"></span>
      <span class="hero-leg hero-leg-right"></span>
    </div>
  `;
}

function renderElementBeast(element, size = "normal") {
  const beast = elementBeasts[element] || elementBeasts.fire;

  return `
    <div class="beast-totem beast-${escapeHtml(beast.className)} beast-${escapeHtml(size)}" aria-hidden="true">
      <span class="beast-aura"></span>
      <span class="beast-tail"></span>
      <span class="beast-wing beast-wing-left"></span>
      <span class="beast-wing beast-wing-right"></span>
      <span class="beast-body"></span>
      <span class="beast-head">
        <i></i><i></i>
      </span>
      <span class="beast-horn"></span>
      <span class="beast-claw beast-claw-left"></span>
      <span class="beast-claw beast-claw-right"></span>
      <span class="beast-rune">${escapeHtml(beast.rune)}</span>
      <span class="beast-name">${escapeHtml(beast.name)}</span>
    </div>
  `;
}

function renderAcademyCrest() {
  return `
    <div class="academy-crest">
      <div class="title-orbit-icon" aria-hidden="true">
        <span class="icon-core">幻</span>
        <span class="icon-blade blade-fire"></span>
        <span class="icon-blade blade-ice"></span>
        <span class="icon-blade blade-lightning"></span>
        <span class="icon-blade blade-earth"></span>
        <span class="icon-blade blade-wind"></span>
        <span class="icon-blade blade-shadow"></span>
      </div>
      <h1 class="academy-title">元素幻影学院</h1>
    </div>
  `;
}

function renderBeastHall() {
  return `
    <div class="beast-hall" aria-hidden="true">
      <span class="hall-skyline"></span>
      <div class="hall-core">元素集结</div>
      <div class="flame-anim hall-flame"><span></span><span></span><span></span></div>
      <div class="wave-anim hall-wave"><span></span><span></span></div>
      <div class="beast-grid">
        ${elementOrder.map((element) => renderElementBeast(element, "mini")).join("")}
      </div>
    </div>
  `;
}

function renderEnergyForge() {
  return `
    <div class="energy-forge" aria-hidden="true">
      <span class="forge-ring ring-outer"></span>
      <span class="forge-ring ring-middle"></span>
      <span class="forge-ring ring-inner"></span>
      <span class="forge-crystal crystal-fire"></span>
      <span class="forge-crystal crystal-ice"></span>
      <span class="forge-crystal crystal-lightning"></span>
      <span class="forge-crystal crystal-earth"></span>
      <span class="forge-crystal crystal-wind"></span>
      <span class="forge-crystal crystal-shadow"></span>
      <div class="portal-gate">
        <span class="portal-star"></span>
        <span class="portal-mist"></span>
      </div>
      <div class="flame-anim forge-flame"><span></span><span></span><span></span></div>
      <div class="wave-anim forge-wave"><span></span><span></span></div>
    </div>
  `;
}

function renderHeroTeam() {
  return `
    <div class="element-team" aria-hidden="true">
      ${elementOrder.map((element) => renderElementHero(element, heroBadges[element], "small")).join("")}
    </div>
  `;
}

function renderStart() {
  app.removeAttribute("style");
  app.innerHTML = `
    <section class="screen start-screen premium-start">
      ${renderAcademyCrest()}
      <p class="mystery-copy">六道元素之门在云海中醒来，只有真正的观察力、勇气和智慧，才能让隐藏徽章现形。</p>
      ${renderBeastHall()}
      ${renderEnergyForge()}
      <button class="primary-button" type="button" data-action="start">开始训练冒险</button>
    </section>
  `;
}

function renderLevel(feedback = null) {
  const level = getCurrentLevel(state);

  if (!level) {
    renderResult();
    return;
  }

  setTheme(level.element);
  const progress = getProgress(state);
  const theme = elementTheme[level.element] || elementTheme.fire;

  app.innerHTML = `
    <section class="screen">
      <header class="topbar">
        <div class="chapter-row">
          <span class="chapter-name">${escapeHtml(theme.label)} · ${escapeHtml(level.chapter)}</span>
          <span class="level-count">${progress.current + 1}/${progress.total}</span>
        </div>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="--progress: ${progress.percent}%"></div>
        </div>
      </header>

      <section class="level-stage">
        <div class="badge-line">
          <div class="element-badge" aria-hidden="true">${escapeHtml(level.badge)}</div>
          <div class="level-title">
            <span>${escapeHtml(domainLabels[level.domain] || "任务")} · ${escapeHtml(level.mission)}</span>
            <h2>${escapeHtml(level.title)}</h2>
          </div>
        </div>

        <div class="mission-scene mission-${escapeHtml(level.element)}">
          <div class="scene-effects" aria-hidden="true">
            <div class="flame-anim scene-flame"><span></span><span></span><span></span></div>
            <div class="wave-anim scene-wave"><span></span><span></span></div>
            <span class="energy-scratch scratch-a"></span>
            <span class="energy-scratch scratch-b"></span>
          </div>
          <div class="stage-beast-wrap">
            ${renderElementBeast(level.element, "stage")}
          </div>
          <div class="visual-tile" aria-hidden="true">
            <span class="scene-label">${escapeHtml(level.mission)}</span>
            <strong>${escapeHtml(level.visual)}</strong>
            <em>${escapeHtml(elementBeasts[level.element]?.name || "元素神兽")}守护</em>
          </div>
        </div>
        <p class="prompt">${escapeHtml(level.prompt)}</p>

        <div class="options">
          ${level.options.map((option, index) => `
            <button class="option-button" type="button" data-option="${escapeHtml(option.id)}">
              <span class="option-dot">${index + 1}</span>
              <span class="option-text">${escapeHtml(option.text)}</span>
              <span class="option-spark" aria-hidden="true"></span>
            </button>
          `).join("")}
        </div>

        ${feedback ? `
          <div class="feedback" role="status">
            <strong>师父提示</strong>
            <span>${escapeHtml(feedback.hint)}</span>
          </div>
        ` : ""}
      </section>
    </section>
  `;
}

function renderSuccess(result) {
  setTheme(result.level.element);

  app.innerHTML = `
    <section class="screen success-screen">
      <div class="success-card">
        <div class="success-stage-art" aria-hidden="true">
          ${renderElementBeast(result.level.element, "reward")}
          <div class="success-symbol">${escapeHtml(result.level.badge)}</div>
        </div>
        <h2>${escapeHtml(result.level.title)}完成</h2>
        <p>${escapeHtml(result.hint)}</p>
        <div class="reward-chip">${escapeHtml(result.level.reward)}</div>
        <button class="primary-button" type="button" data-action="continue">下一关</button>
      </div>
    </section>
  `;
}

function renderMilestone(result) {
  const milestone = result.milestone;
  setTheme(milestone.element);

  app.innerHTML = `
    <section class="screen milestone-screen">
      <div class="particle-field" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <section class="milestone-card">
        <div class="milestone-hero">
          <div class="flame-anim milestone-flame"><span></span><span></span><span></span></div>
          <div class="wave-anim milestone-wave"><span></span><span></span></div>
          ${renderElementBeast(milestone.element, "large")}
          <div class="burst-badge">${escapeHtml(milestone.badge)}</div>
        </div>
        <div class="status-pill">第 ${milestone.progress} 关达成</div>
        <h2>${escapeHtml(milestone.title)}</h2>
        <p>${escapeHtml(milestone.message)}</p>
        <button class="primary-button" type="button" data-action="${milestone.final ? "show-honor" : "milestone-continue"}">
          ${milestone.final ? "领取荣耀徽章" : "继续冒险"}
        </button>
      </section>
    </section>
  `;
}

function renderHonor() {
  const honor = getFinalHonor(state);
  const summary = getDomainSummary(state);
  const totalCorrect = summary.reduce((sum, item) => sum + item.correct, 0);

  app.style.setProperty("--accent", "#f5b301");
  app.style.setProperty("--accent-soft", "rgba(245, 179, 1, 0.2)");

  app.innerHTML = `
    <section class="screen honor-screen">
      <div class="particle-field honor-particles" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <section class="honor-panel">
        <div class="status-pill">最终授章</div>
        <div class="final-sky">
          <div class="flame-anim crown-flame"><span></span><span></span><span></span></div>
          <div class="wave-anim tidal-wave"><span></span><span></span></div>
          <div class="floating-honor">
            <div class="beast-orbit-ring">
              ${elementOrder.map((element) => `
                <div class="honor-beast honor-${escapeHtml(element)}">
                  ${renderElementBeast(element, "orbit")}
                </div>
              `).join("")}
            </div>
            <div class="honor-badge golden-badge" aria-label="${escapeHtml(honor.name)} ${escapeHtml(honor.title)}">
              <span class="badge-sunburst"></span>
              <div class="honor-ring"></div>
              <div class="name-glyph">邓易安</div>
            </div>
          </div>
        </div>
        <h2>${escapeHtml(honor.title)}</h2>
        <p>${escapeHtml(honor.name)}完成 ${honor.total} 个全科元素任务，答对 ${totalCorrect} 个，六元素荣耀徽章已经归位。</p>
        <div class="honor-runes" aria-hidden="true">
          <span>火</span><span>冰</span><span>雷</span><span>土</span><span>风</span><span>影</span>
        </div>
        <button class="primary-button" type="button" data-action="restart">再挑战一次</button>
      </section>
    </section>
  `;
}

function renderResult() {
  app.style.setProperty("--accent", "#2eaa73");
  app.style.setProperty("--accent-soft", "rgba(46, 170, 115, 0.14)");

  const summary = getDomainSummary(state);
  const elementSummary = getElementSummary(state);
  const totalCorrect = summary.reduce((sum, item) => sum + item.correct, 0);

  app.innerHTML = `
    <section class="screen">
      <section class="result-stage">
        <div class="result-heading">
          <div class="status-pill">终章完成</div>
          <h2>六枚元素徽章归位</h2>
          <p>共完成 36 个任务，答对 ${totalCorrect} 个。下面是元素能量和全科表现。</p>
        </div>

        <div class="element-results">
          ${elementSummary.map((item) => renderElementBadge(item)).join("")}
        </div>

        <div class="summary-list">
          ${summary.map((item) => renderSummaryRow(item)).join("")}
        </div>

        <button class="primary-button" type="button" data-action="restart">再玩一次</button>
      </section>
    </section>
  `;
}

function renderElementBadge(item) {
  return `
    <div class="mini-badge ${item.charged ? "is-charged" : ""}">
      <span>${escapeHtml(item.badge)}</span>
      <strong>${item.correct}/${item.total}</strong>
    </div>
  `;
}

function renderSummaryRow(item) {
  const stars = Array.from({ length: 3 }, (_, index) => {
    const on = index < item.stars ? " is-on" : "";
    return `<span class="star${on}">★</span>`;
  }).join("");

  return `
    <div class="summary-row">
      <div class="summary-top">
        <span>${escapeHtml(item.label)}</span>
        <span>${item.correct}/${item.total}</span>
      </div>
      <div class="star-row" aria-label="${escapeHtml(item.label)} ${item.stars} 星">${stars}</div>
    </div>
  `;
}

function handleOption(optionId) {
  const result = answerLevel(state, optionId);

  if (result.correct) {
    if (result.milestone) {
      renderMilestone(result);
      return;
    }

    renderSuccess(result);
    return;
  }

  renderLevel(result);
}

app.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  const optionButton = event.target.closest("[data-option]");

  if (actionButton) {
    const action = actionButton.dataset.action;

    if (action === "start") {
      state = createGameState();
      renderLevel();
    }

    if (action === "continue") {
      if (isComplete(state)) {
        renderResult();
      } else {
        renderLevel();
      }
    }

    if (action === "milestone-continue") {
      renderLevel();
    }

    if (action === "show-honor") {
      renderHonor();
    }

    if (action === "restart") {
      state = createGameState();
      renderStart();
    }
  }

  if (optionButton) {
    handleOption(optionButton.dataset.option);
  }
});

renderStart();
