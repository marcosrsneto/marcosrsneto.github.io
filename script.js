/* ============================
   Config / Dados do site
   ============================ */

const PROFILE = {
  name: "Engenheiro Marcos Neto",
  email: "marcosrsneto@gmail.com",
  phoneDigitsBR: "32999518800", // só números
  city: "Juiz de Fora e região",
};

const WHATSAPP_LINK = `https://wa.me/55${PROFILE.phoneDigitsBR}`;

// Serviços (curto e limpo)
const SERVICES = [
  {
    title: "Projeto estrutural",
    meta: "Concreto • Metálicas • Fundações",
    desc: "Concepção, dimensionamento e detalhamento com pranchas limpas e otimizadas para obra.",
    url: "/servicos/projeto-estrutural/"
  },
  {
    title: "Laudos e vistorias",
    meta: "Inspeções • Patologias • Avaliação técnica",
    desc: "Relatórios técnicos com evidências e recomendações objetivas.",
    url: "/servicos/laudos-e-vistorias/"
  },
  {
    title: "Acompanhamento de obras",
    meta: "Suporte • Revisões • Orientação em campo",
    desc: "Acompanhamento para reduzir erros, retrabalho e decisões improvisadas na execução.",
    url: "/servicos/acompanhamento-de-obras/"
  },
  {
    title: "Aprovação na prefeitura e regularização",
    meta: "Documentação • Adequações • Aprovação",
    desc: "Geração de pranchas e projetos de aprovação na prefeitura, habite-se e regularização de imóveis ou obras.",
    url: "/servicos/aprovacao-e-regularizacao/"
  },
  {
    title: "Usucapião",
    meta: "Levantamento técnico • Memorial descritivo • ART",
    desc: "Projeto e documentação técnica para processos judiciais e extrajudiciais.",
    url: "/servicos/usucapiao/"
  },
  {
    title: "As built",
    meta: "Levantamento • Atualização de projeto • Planejamento",
    desc: "Atualização da obra executada, garantindo segurança documental e planejamento futuro.",
    url: "/servicos/as-built/"
  },
];

/**
 * Portfólio
 * - thumb: imagem do card
 * - images: imagens do carrossel
 *
 * MULTI-CATEGORIA:
 * - use `categories: ["Estrutural", "As built"]`
 * - mantenha `category: "Estrutural"` como categoria principal (opcional)
 */
const PROJECTS = [
  {
    id: "obra-01",
    title: "As built de galpão metálico - Academia Smart Fit",
    category: "Estrutural",
    categories: ["Metálicas", "As built"],
    meta: "Rio de Janeiro/RJ • 2026 • As built",
    desc:
      "Modelagem as built de estrutura metálica existente, com consolidação das informações executadas em campo e organização dos arquivos técnicos.",
    tags: ["As built", "Modelagem 3D", "Estrutura metálica"],
    highlights: [
      "Modelagem no Cype3D",
      "Conferência geométrica e ajustes dimensionais",
      "Organização e padronização de documentação técnica",
    ],
    deliverables: [
      "PDF com pranchas contendo vistas do galpão e detalhes das ligações",
      "Detalhamento técnico das ligações estruturais",
      "Arquivos DWG organizados por prancha",
      "Modelo estrutural 3D em CYPE 3D",
      "Modelo interativo publicado no Sketchfab",
    ],
    thumb: "/img/obra1-2.png",
    images: ["/img/obra1-2.png", "/img/obra1-1.png", "/img/obra1-3.png", "/img/obra1-4.png"],
    captions: ["Imagem 1", "Imagem 2"],
    externalLink: "https://sketchfab.com/3d-models/as-built-galpao-65859f943633483caa1fbd645fedad04",
    externalLabel: "Ver modelo 3D interativo",
  },
  {
    id: "obra-02",
    title: "Projeto estrutural — Residência unifamiliar (211 m²)",
    category: "Estrutural",
    categories: ["Concreto armado"],
    meta: "Arraial do Cabo/RJ • 2026 • Estrutural",
    desc:
      "Projeto estrutural completo de residência unifamiliar de dois pavimentos (211 m²), localizada no Condomínio Blue Lake, em Arraial do Cabo/RJ. Imóvel composto por 5 quartos, sendo 4 suítes, desenvolvido desde a concepção estrutural até o detalhamento executivo. Devido à presença de água superficial, adotou-se solução com estacas para as fundações.",
    tags: ["Concreto armado", "Residencial", "Eberick", "Alto padrão"],
    highlights: [
      "Concepção estrutural otimizada para maior desempenho e minimização de custos",
      "Modelagem, análise e dimensionamento no Eberick",
      "Compatibilização com projeto arquitetônico",
      "Pranchas executivas limpas e altamente organizadas"
    ],
    deliverables: [
      "Memorial de cálculo estrutural",
      "Pranchas completas de formas e armações",
      "Modelo 3D interativo publicado no Sketchfab",
      "Detalhamento executivo de vigas, pilares, lajes e estacas",
      "Quantitativo de aço e concreto"
    ],
    thumb: "/img/obra2-1.png",
    images: [
      "/img/obra2-1.png",
      "/img/obra2-2.png",
      "/img/obra2-3.png",
      "/img/obra2-4.png",
    ],
    captions: [
      "Modelo estrutural no Eberick",
      "Planta de formas do pavimento",
      "Detalhamento estrutural"],
    externalLink: "https://sketchfab.com/3d-models/casa-condominio-blue-lake-residence-club-1fedb35c891c44d1b16b9015dbc4858f",
    externalLabel: "Ver modelo 3D interativo",
  },

  {
    id: "obra-03",
    title: "Laudo estrutural para instalação de sistema fotovoltaico",
    categories: ["Metálicas", "Laudos"],
    meta: "Navegantes/SC • 2025 • Laudo",
    desc:
      "Elaboração de laudo técnico para verificação da capacidade resistente de cobertura metálica existente quanto à sobrecarga proveniente da instalação de módulos fotovoltaicos.",
    tags: ["Laudo estrutural", "Energia solar", "Cobertura metálica", "CYPE 3D"],
    highlights: [
    "Modelagem estrutural no CYPE 3D",
    "Verificação de esforços e deslocamentos",
    "Análise de combinações de ações",
    "Avaliação de ações de vento"],    
    deliverables: [
    "Laudo técnico estrutural",
    "Memorial de cálculo",
    "Modelo estrutural 3D do CYPE 3D"],
    thumb: "/img/obra3-1.png",
    images: ["/img/obra3-1.png", "/img/obra3-3.png", "/img/obra3-2.png"],
  },
  {
    id: "obra-04",
    title: "Inspeção de obra — Academia Bluefit",
    categories: ["Inspeções", "Laudos"],
    meta: "Juiz de Fora/MG • 05/09/2025 • Inspeção",
    desc:
      "Vistoria técnica realizada após paralisação da obra por aproximadamente dois anos, com levantamento detalhado das condições atuais dos materiais estocados e executados. Avaliação de quantitativos e viabilidade técnica para retomada dos serviços.",
    tags: ["Vistoria", "Relatório", "Diagnóstico"],
    highlights: ["Levantamento físico e quantitativo de materiais", "Análise das condições de conservação", "Avaliação de perdas e reaproveitamento"],
    deliverables: ["Relatório técnico detalhado", "Relatório fotográfico com 85 imagens"],
    thumb: "/img/obra4-1.png",
    images: ["/img/obra4-1.png", "/img/obra4-2.png", "/img/obra4-3.png"],
    captions: ["Registro 1", "Registro 2", "Registro 3"],
  },
];

/* ============================
   Helpers
   ============================ */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Normaliza categorias: aceita `categories` (array) OU `category` (string)
function getProjectCategories(p) {
  if (Array.isArray(p.categories) && p.categories.length) return p.categories.filter(Boolean).map((x) => String(x).trim()).filter(Boolean);
  if (typeof p.category === "string" && p.category.trim()) return [p.category.trim()];
  return [];
}

function getProjectCategoriesText(p) {
  const cats = getProjectCategories(p);
  return cats.length ? cats.join(" • ") : "CASE";
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      document.body.removeChild(ta);
      return false;
    }
  }
}

function clampIndex(i, len) {
  if (len <= 0) return 0;
  return (i % len + len) % len;
}

/* ============================
   Init
   ============================ */

document.addEventListener("DOMContentLoaded", () => {
  hydrateProfile();
  renderServices();
  renderFiltersAndPortfolio();
  initModal();
  initCopyEmail();
  initContactFormMailto();
  initTopbarAndToTop();
  initReveal();
  initSmoothAnchors();
  initPortfolioEmbeds();
  initThemeEasterEgg();
});


/* ============================
   Profile bindings
   ============================ */

function hydrateProfile() {
  const brandName = $("#brandName");
  const footName = $("#footName");
  if (brandName) brandName.textContent = PROFILE.name;
  if (footName) footName.textContent = PROFILE.name;

  const heroEmail = $("#heroEmail");
  const heroPhone = $("#heroPhone");
  const emailDisplay = $("#emailDisplay");
  const phoneDisplay = $("#phoneDisplay");

  if (heroEmail) heroEmail.textContent = PROFILE.email;
  if (emailDisplay) emailDisplay.textContent = PROFILE.email;

  const formattedPhone = `+55 32 99951-8800`;
  if (heroPhone) heroPhone.textContent = formattedPhone;
  if (phoneDisplay) phoneDisplay.textContent = formattedPhone;

  const ctaWhatsapp = $("#ctaWhatsapp");
  const whatsCard = $("#whatsCard");
  if (ctaWhatsapp) ctaWhatsapp.href = WHATSAPP_LINK;
  if (whatsCard) whatsCard.href = WHATSAPP_LINK;

  const copy = $("#copyright");
  if (copy) copy.textContent = `© ${new Date().getFullYear()} ${PROFILE.name}.`;
}

/* ============================
   Services
   ============================ */





function renderServices() {
  const grid = $("#servicesGrid");
  if (!grid) return;

  grid.innerHTML = SERVICES.map((s) => {
    const url = s.url ? String(s.url) : "";
    const clickable = !!url;

    // se tiver URL: vira <a class="card ..."> (mantém visual)
    // se não tiver: vira <article class="card ..."> (normal)
    const tagOpen = clickable
      ? `<a class="card reveal serviceCard" href="${escapeHtml(url)}" aria-label="${escapeHtml(s.title)}">`
      : `<article class="card reveal">`;

    const tagClose = clickable ? `</a>` : `</article>`;

    return `
      ${tagOpen}
        <div class="card__head">
          <div>
            <div class="card__title">${escapeHtml(s.title)}</div>
            <div class="card__sub">${escapeHtml(s.meta)}</div>
          </div>
        </div>

        <p style="margin:12px 0 0; color: var(--muted); line-height: 1.7">
          ${escapeHtml(s.desc)}
        </p>
      ${tagClose}
    `;
  }).join("");

  // opcional: deixa o cursor de "clicável" só nos que são link
  // (se você quiser, dá pra fazer só via CSS também)
}


/* ============================
   Portfolio + Filters
   ============================ */

function getCategories() {
  const cats = new Set();
  PROJECTS.forEach((p) => {
    getProjectCategories(p).forEach((c) => cats.add(c));
  });
  return ["Todos", ...Array.from(cats)];
}

let activeCategory = "Todos";

function renderFiltersAndPortfolio() {
  renderFilters();
  renderPortfolio();
}

function renderFilters() {
  const wrap = $("#filters");
  if (!wrap) return;

  const cats = getCategories();
  wrap.innerHTML = cats
    .map((c) => {
      const cls = c === activeCategory ? "filter isActive" : "filter";
      return `<button class="${cls}" data-cat="${escapeHtml(c)}" type="button">${escapeHtml(c)}</button>`;
    })
    .join("");

  $$(".filter", wrap).forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat || "Todos";
      renderFilters();
      renderPortfolio();
    });
  });
}

function renderPortfolio(scrollIntoView = false) {
  const grid = $("#portfolioGrid");
  if (!grid) return;

  const list =
    activeCategory === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => getProjectCategories(p).includes(activeCategory));

  grid.innerHTML = list
    .map((p) => {
      const thumb = p.thumb || (p.images && p.images[0]) || "";
      const catsText = getProjectCategoriesText(p);

      return `
        <article class="portfolio-card reveal" tabindex="0" role="button" aria-label="Abrir ${escapeHtml(
          p.title
        )}" data-id="${escapeHtml(p.id)}">
          <img class="portfolio-thumb" src="${escapeHtml(thumb)}" alt="${escapeHtml(p.title)}" loading="lazy" />
          <div class="portfolio-body">
            <h3 class="portfolio-title">${escapeHtml(p.title)}</h3>
            <div class="portfolio-cat"><span class="dot"></span>${escapeHtml(catsText)}</div>
            <div class="portfolio-meta">${escapeHtml(p.meta || "")}</div>
          </div>
        </article>
      `;
    })
    .join("");

  $$(".portfolio-card", grid).forEach((card) => {
    card.addEventListener("click", () => openProject(card.dataset.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProject(card.dataset.id);
      }
    });
  });

  if (scrollIntoView) {
    const top = grid.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: "smooth" });
  }

  refreshRevealObserver();
}

/* ============================
   Modal + Carousel
   ============================ */

let modalBack, modal, closeBtn, prevBtn, nextBtn;
let modalImage, modalTitle, modalDesc, modalCategory, modalMeta, modalCaption;
let modalTags, modalHighlights, modalDeliverables, modalCTA;

// ✅ NOVO: container do botão externo (Sketchfab)
let modalExternal;

let currentProject = null;
let currentIndex = 0;
let startX = null;

function initModal() {
  modalBack = $("#modalBack");
  modal = $("#portfolioModal");
  closeBtn = $("#modalClose");
  prevBtn = $("#prevBtn");
  nextBtn = $("#nextBtn");

  modalImage = $("#modalImage");
  modalTitle = $("#modalTitle");
  modalDesc = $("#modalDesc");
  modalCategory = $("#modalCategory");
  modalMeta = $("#modalMeta");
  modalCaption = $("#modalCaption");
  modalTags = $("#modalTags");
  modalHighlights = $("#modalHighlights");
  modalDeliverables = $("#modalDeliverables");
  modalCTA = $("#modalCTA");

  // ✅ NOVO: pega o container
  modalExternal = $("#modalExternal");

  if (!modal || !modalBack) return;

  modalBack.addEventListener("click", closeModal);
  closeBtn?.addEventListener("click", closeModal);

  prevBtn?.addEventListener("click", () => stepImage(-1));
  nextBtn?.addEventListener("click", () => stepImage(1));

  document.addEventListener("keydown", (e) => {
    if (!isModalOpen()) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") stepImage(-1);
    if (e.key === "ArrowRight") stepImage(1);
  });

  modalImage?.addEventListener("pointerdown", (e) => {
    startX = e.clientX;
  });
  modalImage?.addEventListener("pointerup", (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) stepImage(dx > 0 ? -1 : 1);
  });

  modalCTA?.addEventListener("click", () => {
    closeModal();
  });
}

function isModalOpen() {
  return modal && modal.style.display === "flex";
}

function openProject(id) {
  ensureProjectModalExists();
  const proj = PROJECTS.find((p) => p.id === id);
  if (!proj) return;

  currentProject = proj;
  currentIndex = 0;

  const catsText = getProjectCategoriesText(proj);

  if (modalCategory) modalCategory.textContent = catsText.toUpperCase();
  if (modalTitle) modalTitle.textContent = proj.title || "—";
  if (modalMeta) modalMeta.textContent = proj.meta || "";
  if (modalDesc) modalDesc.textContent = proj.desc || "";

  if (modalTags) {
    modalTags.innerHTML = (proj.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
  }

  if (modalHighlights) {
    modalHighlights.innerHTML = (proj.highlights || []).map((h) => `<li>${escapeHtml(h)}</li>`).join("");
  }
  if (modalDeliverables) {
    modalDeliverables.innerHTML = (proj.deliverables || []).map((d) => `<li>${escapeHtml(d)}</li>`).join("");
  }

  // ✅ NOVO: Botão Sketchfab (só aparece se tiver externalLink)
  if (modalExternal) {
    const link = (proj.externalLink || "").trim();
    if (link) {
      const label = (proj.externalLabel || "Abrir link externo").trim();
      modalExternal.innerHTML = `
        <div class="modal__cta" style="margin-top:12px">
          <div class="modal__ctaT">${escapeHtml(label)}</div>
          <a class="btn btn--outline"
             href="${escapeHtml(link)}"
             target="_blank"
             rel="noopener noreferrer">
             Abrir
          </a>
        </div>
      `;
    } else {
      modalExternal.innerHTML = ""; // limpa para não sobrar do case anterior
    }
  }

  renderModalImage();

  modalBack.style.display = "block";
  modal.style.display = "flex";
  modalBack.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

function renderModalImage() {
  if (!currentProject) return;

  const imgs = currentProject.images || [];
  const caps = currentProject.captions || [];
  const len = imgs.length || 0;

  currentIndex = clampIndex(currentIndex, len);

  const src = absolutizeAssetPath(imgs[currentIndex] || "");
  if (modalImage) {
    modalImage.src = src;
    modalImage.alt = currentProject.title
      ? `${currentProject.title} — foto ${currentIndex + 1}`
      : `Foto ${currentIndex + 1}`;
  }

  if (modalCaption) {
    const cap = caps[currentIndex]
      ? `(${currentIndex + 1}/${len}) ${caps[currentIndex]}`
      : `(${currentIndex + 1}/${len})`;
    modalCaption.textContent = cap;
  }

  const showNav = len > 1;
  if (prevBtn) prevBtn.style.display = showNav ? "grid" : "none";
  if (nextBtn) nextBtn.style.display = showNav ? "grid" : "none";
}

function stepImage(dir) {
  if (!currentProject) return;
  const len = (currentProject.images || []).length;
  if (len <= 1) return;
  currentIndex = clampIndex(currentIndex + dir, len);
  renderModalImage();
}

function closeModal() {
  if (!modal || !modalBack) return;
  modal.style.display = "none";
  modalBack.style.display = "none";
  modalBack.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  // ✅ NOVO: limpa botão externo ao fechar
  if (modalExternal) modalExternal.innerHTML = "";

  currentProject = null;
}

/* ============================
   Copy email
   ============================ */

function initCopyEmail() {
  const btnTop = $("#copyEmailTop");
  const btnTopText = $("#copyEmailTopText");
  const emailCard = $("#emailCard");
  const copyBadge = $("#copyBadge");

  async function doCopy() {
    const ok = await copyToClipboard(PROFILE.email);

    if (btnTopText) btnTopText.textContent = ok ? "Copiado" : "Falhou";
    if (copyBadge) copyBadge.textContent = ok ? "COPIADO" : "FALHOU";

    setTimeout(() => {
      if (btnTopText) btnTopText.textContent = "Copiar e-mail";
      if (copyBadge) copyBadge.textContent = "COPIAR";
    }, 1400);
  }

  btnTop?.addEventListener("click", doCopy);
  emailCard?.addEventListener("click", doCopy);
}

/* ============================
   Contact form -> mailto
   ============================ */

function initContactFormMailto() {
  const sendBtn = $("#sendEmailBtn");
  const sentHint = $("#sentHint");

  const fName = $("#fName");
  const fEmail = $("#fEmail");
  const fPhone = $("#fPhone");
  const fMsg = $("#fMsg");

  function buildMailto() {
    const name = (fName?.value || "").trim() || "(sem nome)";
    const email = (fEmail?.value || "").trim() || "(não informado)";
    const phone = (fPhone?.value || "").trim() || "(não informado)";
    const msg = (fMsg?.value || "").trim() || "(sem mensagem)";

    const subject = encodeURIComponent(`Orçamento | ${name}`);
    const body = encodeURIComponent(
      `Olá, Marcos!\n\nMeu nome: ${name}\nE-mail: ${email}\nTelefone/WhatsApp: ${phone}\n\nEscopo resumido:\n${msg}\n\n(Enviado pelo site)`
    );
    return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  }

  function refreshLink() {
    if (!sendBtn) return;
    sendBtn.href = buildMailto();
  }

  [fName, fEmail, fPhone, fMsg].forEach((el) => {
    el?.addEventListener("input", refreshLink);
  });

  sendBtn?.addEventListener("click", () => {
    refreshLink();
    if (sentHint) sentHint.textContent = "Pronto — e-mail preparado.";
    setTimeout(() => {
      if (sentHint) sentHint.textContent = "Nada é enviado automaticamente.";
    }, 1800);
  });

  refreshLink();
}

/* ============================
   Topbar + ToTop
   ============================ */

function initTopbarAndToTop() {
  const topbar = $("#topbar");
  const toTop = $("#toTop");

  function onScroll() {
    const y = window.scrollY || 0;
    if (topbar) topbar.classList.toggle("isScrolled", y > 10);
    if (toTop) toTop.style.display = y > 700 ? "inline-flex" : "none";
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ============================
   Reveal on scroll
   ============================ */

let revealObserver = null;

function initReveal() {
  refreshRevealObserver();
}

function refreshRevealObserver() {
  if (revealObserver) {
    revealObserver.disconnect();
  }

  const els = $$(".reveal");
  if (!els.length) return;

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("isIn");
          revealObserver.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
  );

  els.forEach((el) => {
    if (!el.classList.contains("isIn")) revealObserver.observe(el);
  });
}

function initSmoothAnchors() {
  // scroll suave para links internos (#...)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // compensar topbar fixa
      const offset = 110;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}


function parseCatsAttr(str = "") {
  return String(str)
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function renderPortfolioIntoGrid(gridEl, { includeCats = [], limit = 6 } = {}) {
  if (!gridEl) return;

  const wanted = new Set(includeCats.map((x) => String(x).trim()).filter(Boolean));

  const list = PROJECTS.filter((p) => {
    const cats = getProjectCategories(p);
    return cats.some((c) => wanted.has(c));
  }).slice(0, Math.max(1, Number(limit) || 6));

  gridEl.innerHTML = list.map((p) => {
    const thumb = p.thumb || (p.images && p.images[0]) || "";
    const catsText = getProjectCategoriesText(p);

    return `
      <article class="portfolio-card reveal" tabindex="0" role="button"
        aria-label="Abrir ${escapeHtml(p.title)}" data-id="${escapeHtml(p.id)}">
        <img class="portfolio-thumb" src="${escapeHtml(thumb)}"
             alt="${escapeHtml(p.title)}" loading="lazy" />
        <div class="portfolio-body">
          <h3 class="portfolio-title">${escapeHtml(p.title)}</h3>
          <div class="portfolio-cat"><span class="dot"></span>${escapeHtml(catsText)}</div>
          <div class="portfolio-meta">${escapeHtml(p.meta || "")}</div>
        </div>
      </article>
    `;
  }).join("");

  gridEl.querySelectorAll(".portfolio-card").forEach((card) => {
    card.addEventListener("click", () => openProject(card.dataset.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProject(card.dataset.id);
      }
    });
  });

  refreshRevealObserver();
}

function initPortfolioEmbeds() {
  // qualquer lugar do site com data-portfolio vira “vitrine”
  document.querySelectorAll("[data-portfolio]").forEach((gridEl) => {
    const cats = parseCatsAttr(gridEl.getAttribute("data-cats") || "");
    const limit = gridEl.getAttribute("data-limit") || "6";
    renderPortfolioIntoGrid(gridEl, { includeCats: cats, limit });
  });
}







function ensureProjectModalExists() {
  // já existe? ok
  const hasBack = document.getElementById("modalBack");
  const hasModal = document.getElementById("portfolioModal");
  if (hasBack && hasModal) return;

  // backdrop
  if (!hasBack) {
    const back = document.createElement("div");
    back.id = "modalBack";
    back.className = "modalBack";
    back.setAttribute("aria-hidden", "true");
    back.style.display = "none";
    document.body.appendChild(back);
  }

  // modal overlay
  if (!hasModal) {
    const modal = document.createElement("div");
    modal.id = "portfolioModal";
    modal.className = "modal";
    modal.style.display = "none";

    // ✅ Estrutura alinhada com seu styles.css (.modal__card, .modal__gallery, .modalImg etc.)
    modal.innerHTML = `
      <div class="modal__card">
        <div class="modal__head">
          <div>
            <div class="mono modal__eyebrow" id="modalCategory">CASE</div>
            <div class="modal__title" id="modalTitle">—</div>
            <div class="modal__meta" id="modalMeta"></div>
          </div>
          <button class="iconBtn" id="modalClose" type="button" aria-label="Fechar">✕</button>
        </div>

        <div class="modal__body">
          <div class="modal__gallery">
            <button class="navBtn navBtn--left" id="prevBtn" type="button" aria-label="Anterior">‹</button>
            <img id="modalImage" class="modalImg" src="" alt="" />
            <button class="navBtn navBtn--right" id="nextBtn" type="button" aria-label="Próxima">›</button>
          </div>

          <div class="modal__caption mono" id="modalCaption">—</div>

          <p class="modal__summary" id="modalDesc"></p>

          <div class="modal__tags" id="modalTags"></div>

          <div class="modal__cols">
            <div class="modalBox">
              <div class="modalBox__t">Destaques</div>
              <ul class="modalBox__l" id="modalHighlights"></ul>
            </div>
            <div class="modalBox">
              <div class="modalBox__t">Entregáveis</div>
              <ul class="modalBox__l" id="modalDeliverables"></ul>
            </div>
          </div>

          <!-- 🔷 BOTÃO EXTERNO DINÂMICO (Sketchfab ou outro link) -->
          <div id="modalExternal"></div>

          <div class="modal__cta">
            <div class="modal__ctaT">Quer algo nesse padrão?</div>
            <a class="btn btn--primary"
              href="https://wa.me/5532999518800?text=Ol%C3%A1%2C%20Marcos%21%20Vim%20do%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener"
              id="modalCTA">
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </div>
    `;

    document.body.appendChild(modal);
  }

  // rebind dos elementos globais do modal (seu initModal já faz isso)
  initModal();
}


function absolutizeAssetPath(p) {
  const s = String(p || "").trim();
  if (!s) return "";
  if (s.startsWith("http://") || s.startsWith("https://") || s.startsWith("/")) return s;
  return "/" + s;
}



function initThemeEasterEgg() {
  // alvos universais: qualquer elemento com data-theme-toggle
  const toggles = Array.from(document.querySelectorAll("[data-theme-toggle]"));

  // compat: ids do HOME (caso você ainda tenha)
  const heroImg = document.getElementById("easterEgg");
  const aboutMobileImg = document.getElementById("aboutPhotoMobile");
  const aboutDesktopImg = document.getElementById("aboutPhotoDesktop");
  const brandAvatar = document.querySelector(".topbar .brand__avatar");

  const clickable = [...toggles, heroImg, aboutMobileImg, aboutDesktopImg, brandAvatar].filter(Boolean);

  // imagens que você quer trocar (se existirem na página)
  function swapThemeImages(isDark) {
    // troca APENAS imagens explicitamente marcadas
    document.querySelectorAll("img[data-theme-img]").forEach((img) => {
      const light = img.getAttribute("data-light");
      const dark  = img.getAttribute("data-dark");
      const next = isDark ? dark : light;
      if (next) img.src = next;
    });
  }
  const footerAvatar = document.querySelector(".footer .brand__avatar");
  const aboutPhotoDesktop = document.getElementById("aboutPhotoDesktop");
  const aboutPhotoMobile  = document.getElementById("aboutPhotoMobile");

  let clickCount = 0;


  
  function applyTheme(theme) {
    const isDark = theme === "dark";

    // ✅ garante compatibilidade com qualquer CSS:
    // - se o CSS usa html.dark
    // - se usa body.dark
    // - se usa [data-theme="dark"]
    document.documentElement.classList.toggle("dark", isDark);
    document.body.classList.toggle("dark", isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");

    // Troca apenas imagens explicitamente marcadas
    document.querySelectorAll("img[data-theme-img]").forEach((img) => {
      const light = img.getAttribute("data-light");
      const dark  = img.getAttribute("data-dark");
      if (!light || !dark) return;
      img.src = isDark ? dark : light;
    });

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  function handleEasterClick() {
    clickCount++;
    if (clickCount >= 5) {
      const isDarkNow = document.body.classList.contains("dark");
      applyTheme(isDarkNow ? "light" : "dark");
      clickCount = 0;
    }
  }

  clickable.forEach(el => {
    el.addEventListener("click", handleEasterClick);
  });

  const savedTheme = localStorage.getItem("theme");
  applyTheme(savedTheme === "dark" ? "dark" : "light");
}
