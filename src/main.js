// ── Configuração de lançamento ─────────────────────────────────────────
// Fase 'lista': todos os botões levam ao cadastro de e-mail (entrar na fila).
// Quando o app estiver no ar, troque STAGE para 'live' e os botões viram "Baixar no Android" (PLAY_URL).
const STAGE = 'lista';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.animaee.app';
const WEB_URL = 'https://animae-plus-main.vercel.app';
// ───────────────────────────────────────────────────────────────────────

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const LOGO = './assets/brand/logo-horizontal-dark.svg';
const SYMBOL = './assets/brand/symbol.svg';
const MAIN_LABEL = STAGE === 'live' ? 'Baixar no Android' : 'Entrar na lista';
const MAIN_URL = STAGE === 'live' ? PLAY_URL : '#hero-lista';

const main = (extra = '') => `<a class="btn ${extra}" href="${MAIN_URL}" ${MAIN_URL.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${MAIN_LABEL}</a>`;
const playIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const faqs = [
  { q: 'O ANIMAE vai ser pago?', a: 'O acesso inicial é gratuito. No futuro existirá um plano premium com recursos avançados, mas a camada social principal sempre terá versão free. Quem entra na lista garante condições especiais de fundador.' },
  { q: 'Por que não tem episódio?', a: 'O ANIMAE não é streaming. Você assiste onde preferir e usa o app para marcar, evoluir e conversar com quem sentiu o mesmo que você.' },
  { q: 'Quando vai sair?', a: 'Estamos finalizando o app. Quem entra na lista é avisado primeiro, no dia em que ele chegar ao Google Play.' },
  { q: 'Como funcionam os badges?', a: 'Você ganha badges ao cumprir marcos da sua jornada, como finalizar séries ou explorar gêneros novos. Eles ficam no seu perfil.' },
  { q: 'Tem Android e iOS?', a: 'Android primeiro. Existe também uma versão web. Entre na lista para ser avisado também do iOS.' },
];

const phone = (inner, cls = '') => `<div class="phone ${cls}" aria-hidden="true"><div class="phone__in">${inner}</div></div>`;
const IMG = './assets/img/';
// Telas que ainda faltam aparecem sinalizadas na LP. Quando todas chegarem, mude para false.
const SHOW_TODO = true;
// Prova social: preencha com o número REAL de inscritos na lista. Enquanto for null, a LP mostra o texto neutro.
const WAITLIST_COUNT = 847;
const EXAMPLE_COUNT = 847; // só aparece sinalizado como exemplo enquanto SHOW_TODO = true
const todo = (title, hint, fallback) => SHOW_TODO ? `<div class="todo"><b>FALTA A TELA</b><span>${title}</span><small>${hint}</small></div>` : fallback;
const flag = (txt) => SHOW_TODO ? `<div class="flag">${txt}</div>` : '';
const shot = (f, alt) => `<img class="shot" src="${IMG}${f}" alt="${alt}" decoding="async">`;
const detalheScreen = shot('app-detalhe.webp', 'Tela de um anime no ANIMAE, com progresso de episódios');
const listaScreen = shot('app-lista.webp', 'Minha Lista no ANIMAE, com progresso por anime');
const perfilScreen = shot('app-perfil.webp', 'Perfil no ANIMAE, com XP, sequência e conquistas');
const feedScreen = shot('app-feed.webp', 'Feed de amigos no ANIMAE, com stories e avaliações');
const comunidadeScreen = shot('app-comunidade.webp', 'Comunidade no ANIMAE, com o quiz do dia do Draco e debates');
const conquistasScreen = shot('app-conquistas.webp', 'Conquistas no ANIMAE, com badges e progresso');
const buscaScreen = shot('app-busca.webp', 'Busca e descoberta no ANIMAE');

const tabs = [
  { id: 'feed', label: 'Feed social', title: 'A conversa continua depois do episódio', text: 'Veja o que seus amigos acabaram de assistir e avaliar, entre em debates e jogue o quiz do dia com o Draco.', a: feedScreen, b: comunidadeScreen },
  { id: 'diario', label: 'Seu diário', title: 'Marque cada episódio e veja sua jornada', text: 'Acompanhe o que você assiste, anime por anime. Um toque marca o episódio, o progresso avança e a sua lista fica sempre em dia, do jeito que você quer.', a: listaScreen, b: detalheScreen },
  { id: 'badges', label: 'Perfil e badges', title: 'Sua jornada vira conquista', text: 'Cada episódio rende XP. Mantenha a sequência, suba de nível, desbloqueie conquistas e mostre quem você é no mundo anime.', a: perfilScreen, b: conquistasScreen },
];

document.querySelector('#root').innerHTML = `
<header class="nav">
  <div class="wrap nav__in">
    <a href="#top" aria-label="ANIMAE"><img class="nav__logo" src="${LOGO}" alt="ANIMAE" width="190" height="47"></a>
    <div class="nav__right">
      <nav class="nav__links" aria-label="Seções"><a href="#app">O app</a><a href="#como">Como funciona</a><a href="#faq">FAQ</a></nav>
      ${main('btn--sm')}
    </div>
  </div>
</header>

<main id="top">
  <section class="hero">
    <div class="wrap hero__in">
      <h1>O lugar onde a conversa<br>continua depois do episódio</h1>
      <p class="lead">O ANIMAE não é streaming. É o diário social de anime: marque o que você assiste, ganhe XP e badges e fale com quem sentiu o mesmo depois de um final que destroça.</p>
      <div class="hero__cta">
        ${STAGE === 'lista' ? `<form class="form form--hero" id="hero-lista" novalidate>
          <label class="sr" for="email-hero">Seu e-mail</label>
          <input id="email-hero" type="email" placeholder="Seu melhor e-mail" autocomplete="email" required>
          <button class="btn" type="submit">${MAIN_LABEL}</button>
        </form>` : main()}
      </div>
      ${(() => {
        const faces = [1, 2, 3, 4].map(n => `<img src="${IMG}fan-${n}.png" alt="" width="40" height="40">`).join('');
        const n = WAITLIST_COUNT ?? (SHOW_TODO ? EXAMPLE_COUNT : null);
        if (n === null) return `<p class="proof"><span class="dots"><i style="--c:#ff5c02"></i><i style="--c:#3c7bff"></i><i style="--c:#ff2e8a"></i><i style="--c:#ff9f2a"></i></span><span><b>Android primeiro</b> · grátis no acesso antecipado</span></p>`;
        return `<p class="proof proof--fans"><span class="faces">${faces}</span><span><b>${n}+</b> fãs já na fila</span></p>`;
      })()}
      <div class="hero__stage">
        <picture>
          <source type="image/webp" srcset="${IMG}hero-mao.webp">
          <img class="hero__hand" src="${IMG}hero-mao.png" alt="A mão do Draco segurando um celular com a home do ANIMAE" width="1089" height="1445" fetchpriority="high">
        </picture>
      </div>
    </div>
  </section>

  <section class="sec" id="como">
    <div class="wrap">
      <h2 class="center">Você ama anime<br>mas vive fragmentado em 8 apps</h2>
      <p class="sub center">Tracking no MAL, conversa no Discord, teorias no Reddit. Você orbita o conteúdo sem nunca ter uma base.</p>
      <div class="bento">
        <article class="bcard bcard--a">
          <div class="bcard__text"><h3>Descoberta às cegas</h3><p>Sem contexto sobre o que você sente, os algoritmos empurram qualquer coisa. Você quer o próximo anime que vai te quebrar não qualquer anime.</p></div>
          <img class="bcard__collage" src="${IMG}card-colagem.webp" alt="" width="483" height="334" loading="lazy">
        </article>
        <div class="bento__col">
          <article class="bcard bcard--b" style="background-image:url(${IMG}card-comunidade.webp)">
            <div class="bcard__text"><h3>Comunidade pulverizada</h3><p>Sua tribo está espalhada em 10 plataformas. Discord, Twitter, Reddit, MAL. Ninguém sabe onde se reunir de verdade.</p></div>
          </article>
          <article class="bcard bcard--c" style="background-image:url(${IMG}card-social.webp)">
            <div class="bcard__text"><h3>Social sem sentimento</h3><p>Os apps de anime existentes tratam você como número. Nenhum pergunta o que você sentiu. Nenhum conecta por emoção.</p></div>
          </article>
        </div>
      </div>
      <div class="center"><a class="btn" href="${MAIN_URL}">${MAIN_LABEL}</a></div>
    </div>
  </section>

  <section class="sec" id="app">
    <div class="wrap">
      <h2 class="center">Tudo que existe ao redor<br>do anime em um lugar</h2>
      <div class="tabcard">
        <div class="tabs" role="tablist">
          ${tabs.map((t, i) => `<button role="tab" class="tab ${i === 0 ? 'is-on' : ''}" data-tab="${t.id}" aria-selected="${i === 0}"><img src="${SYMBOL}" alt="" width="40" height="34"><span>${t.label}</span></button>`).join('')}
        </div>
        <div class="tabcard__body">
          ${tabs.map((t, i) => `
          <div class="panel" data-panel="${t.id}" ${i ? 'hidden' : ''} role="tabpanel">
            <div class="panel__phones">${phone(t.a)}${phone(t.b, 'phone--low')}</div>
            <div class="panel__fade"></div>
            <div class="panel__text"><h3>${t.title}</h3><p>${t.text}</p></div>
          </div>`).join('')}
        </div>
      </div>
      <div class="center"><a class="btn" href="${MAIN_URL}">${MAIN_LABEL}</a></div>
    </div>
  </section>

  <section class="sec">
    <div class="wrap split">
      <div class="split__text">
        <h2>Feito com cuidado, em público</h2>
        <p class="sub">O ANIMAE não é um projeto de fim de semana. É construído por quem passou anos em produto: cada decisão tem um porquê e cada feature nasce de uma hipótese. Quem entra na lista acompanha tudo e ajuda a decidir o que vem depois.</p>
        <a class="btn" href="${MAIN_URL}">${MAIN_LABEL}</a>
      </div>
      <div class="split__card">${phone(perfilScreen, 'phone--tall')}</div>
    </div>
  </section>

  <section class="marquee" aria-hidden="true">
    <div class="marquee__track">
      ${Array.from({ length: 2 }, () => `<div class="marquee__set">${['Entra na lista', 'A conversa continua', 'Seu anime. Sua jornada. Sua gente.', 'O diário social de anime'].map(t => `<span>${t}</span><img src="${SYMBOL}" alt="" width="72" height="62">`).join('')}</div>`).join('')}
    </div>
  </section>

  <section class="sec" id="faq">
    <div class="wrap faqwrap">
      <h2>Perguntas frequentes</h2>
      <div class="faq">
        ${faqs.map((f, i) => `
        <div class="faq__item ${i === 0 ? 'is-open' : ''}">
          <button class="faq__q" aria-expanded="${i === 0}" aria-controls="fa-${i}">${f.q}<span class="faq__ic" aria-hidden="true"></span></button>
          <div class="faq__a" id="fa-${i}" ${i ? 'hidden' : ''}>${f.a}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="sec proofsec" id="baixar">
    <div class="wrap center">
      ${WAITLIST_COUNT ? `<p class="proof proof--fans proof--lg"><span class="faces">${[1, 2, 3, 4].map(n => `<img src="${IMG}fan-${n}.png" alt="" width="56" height="56">`).join('')}</span><span><b>${WAITLIST_COUNT}+</b> fãs já na fila</span></p>` : ''}
      <p class="big">Feito para o<br>Android Primeiro</p>
      <p class="sub">O app chega primeiro ao Google Play. Entre na lista e seja avisado no dia do lançamento.</p>
      <a class="btn" href="${MAIN_URL}">${MAIN_LABEL}</a>
      <p class="dracoquote"><img src="${SYMBOL}" alt="" width="48" height="41"><span>“A fila não anda sozinha. Entra logo.” <b>— Draco</b></span></p>
    </div>
  </section>

</main>

<footer class="footer" id="lista">
  <div class="wrap">
    <div class="footer__lista">
      <p>Seja avisado no lançamento. Android primeiro, iOS depois. Grátis, sem spam.</p>
      <form class="form form--mini" novalidate>
        <label class="sr" for="email">Seu e-mail</label>
        <input id="email" type="email" placeholder="Seu e-mail" autocomplete="email" required>
        <button class="btn btn--mini" type="submit">Entrar na lista</button>
      </form>
    </div>
    <div class="footer__in">
      <div class="footer__l"><a href="#">Termos de Privacidade</a></div>
      <p>Criado por Thiago Miranda <i></i> © 2026 Animae <i></i> Todos os direitos reservados</p>
    </div>
  </div>
</footer>`;

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  if (tab.classList.contains('is-on')) return;
  document.querySelectorAll('.tab').forEach(t => { t.classList.toggle('is-on', t === tab); t.setAttribute('aria-selected', String(t === tab)); });
  const next = document.querySelector(`.panel[data-panel="${tab.dataset.tab}"]`);
  document.querySelectorAll('.panel').forEach(p => { p.hidden = p !== next; });
  if (window.gsap && !reduce) {
    gsap.killTweensOf(next.querySelectorAll('.phone, .panel__text'));
    gsap.fromTo(next.querySelectorAll('.phone'), { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: .55, stagger: .08, ease: 'power2.out', overwrite: true, clearProps: 'transform,opacity' });
    gsap.fromTo(next.querySelector('.panel__text'), { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: .5, delay: .12, ease: 'power2.out', overwrite: true, clearProps: 'transform,opacity' });
  }
}));

document.querySelectorAll('.faq__q').forEach(btn => btn.addEventListener('click', () => {
  const item = btn.parentElement, open = item.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', String(open));
  document.getElementById(btn.getAttribute('aria-controls')).hidden = !open;
}));

// todos os botões "Entrar na lista" levam ao campo de e-mail do topo
document.querySelectorAll('a[href="#hero-lista"]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('.hero__cta').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  setTimeout(() => document.getElementById('email-hero')?.focus({ preventScroll: true }), 600);
}));

document.querySelectorAll('.form').forEach(f => f.addEventListener('submit', event => {
  event.preventDefault();
  const b = event.currentTarget.querySelector('button');
  b.textContent = 'Você está na lista ✓'; b.disabled = true;
}));


/* ── Animações (GSAP). Sem GSAP ou com movimento reduzido, a página fica estática. ── */
const g = window.gsap;
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-stuck', scrollY > 24);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

if (g && !reduce) {
  if (window.ScrollTrigger) g.registerPlugin(ScrollTrigger);

  // divide o título em palavras para o efeito 3D de impressão
  const split = el => {
    const walk = node => [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(w => {
          if (!w) return;
          if (/^\s+$/.test(w)) { frag.append(' '); return; }
          const o = document.createElement('span'); o.className = 'w';
          const i = document.createElement('span'); i.className = 'wi'; i.textContent = w;
          o.append(i); frag.append(o);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
    });
    walk(el);
    return el.querySelectorAll('.wi');
  };

  const reveal = (el, vars = {}) => {
    const words = split(el);
    const st = vars.trigger === false ? undefined : { trigger: el, start: 'top 88%', once: true };
    g.from(words, { rotationX: -95, yPercent: 60, opacity: 0, transformOrigin: '50% 100% -24', duration: .9, stagger: .06, ease: 'power3.out', scrollTrigger: st, delay: vars.delay || 0, clearProps: 'transform,opacity' });
  };

  g.set('.w', { perspective: 800 });
  document.querySelectorAll('h1, h2, h3').forEach(h => reveal(h, h.closest('.hero') ? { trigger: false, delay: .25 } : {}));

  // entrada do hero
  const tl = g.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.nav__logo', { y: -16, opacity: 0, duration: .7 })
    .from('.nav__links a, .nav .btn', { y: -12, opacity: 0, duration: .6, stagger: .06 }, '-=.5')
    .from('.hero .lead', { y: 24, opacity: 0, duration: .8 }, '-=.35')
    .from('.hero__cta .form > *, .hero__cta .btn', { y: 24, opacity: 0, duration: .7, stagger: .1 }, '-=.5')
    .from('.proof', { y: 16, opacity: 0, duration: .6 }, '-=.4')
    .from('.hero__hand', { y: 110, scale: .92, opacity: 0, filter: 'blur(18px)', duration: 2, ease: 'power3.out', clearProps: 'transform,opacity,filter' }, '-=.8');

  // blocos que entram ao rolar
  const rise = (targets, extra = {}) => document.querySelectorAll(targets).forEach(el =>
    g.from(el, { y: 32, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true }, clearProps: 'transform,opacity', ...extra }));
  rise('.sub, .split__text .btn, .proofsec .btn, .center > .btn, .faqwrap h2 + .faq');

  // cards em 3D, em sequência
  g.from('.bcard', { rotationX: -28, y: 72, opacity: 0, scale: .94, transformPerspective: 1000, transformOrigin: '50% 100%', duration: 1, stagger: .14, ease: 'power3.out', scrollTrigger: { trigger: '.bento', start: 'top 82%', once: true }, clearProps: 'transform,opacity' });
  g.from('.bcard__collage', { yPercent: 12, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: '.bcard--a', start: 'top 90%', once: true }, clearProps: 'transform,opacity' });
  g.from('.bcard img', { scale: .5, rotation: -12, opacity: 0, duration: .8, stagger: .12, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.bento', start: 'top 70%', once: true }, clearProps: 'transform,opacity' });

  g.from('.tabs .tab', { y: 24, opacity: 0, duration: .6, stagger: .08, ease: 'power2.out', scrollTrigger: { trigger: '.tabcard', start: 'top 88%', once: true }, clearProps: 'transform,opacity' });
  gsap.set('.tabcard .phone', { willChange: 'transform,opacity' });
  g.timeline({ scrollTrigger: { trigger: '.tabcard', start: 'top 82%', once: true }, defaults: { ease: 'power3.out' } })
    .from('.panel:not([hidden]) .phone', { y: 56, opacity: 0, duration: .9, stagger: .12, clearProps: 'transform,opacity,willChange' })
    .from('.panel:not([hidden]) .panel__text', { y: 20, opacity: 0, duration: .7, clearProps: 'transform,opacity' }, '-=.55');

  g.from('.split__card', { x: 64, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.split', start: 'top 80%', once: true }, clearProps: 'transform,opacity' });
  g.from('.dots--lg i', { scale: 0, duration: .5, stagger: .08, ease: 'back.out(2)', scrollTrigger: { trigger: '.proofsec', start: 'top 80%', once: true } });
  g.from('.faq__item', { y: 24, opacity: 0, duration: .6, stagger: .08, ease: 'power3.out', scrollTrigger: { trigger: '.faq', start: 'top 85%', once: true }, clearProps: 'transform,opacity' });
  g.from('.footer__in', { opacity: 0, duration: .8, scrollTrigger: { trigger: '.footer', start: 'top 100%', once: true } });

  // marquee contínuo, pausa ao passar o mouse
  const track = document.querySelector('.marquee__track');
  const mq = g.to(track, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 });
  track.parentElement.addEventListener('mouseenter', () => g.to(mq, { timeScale: .15, duration: .5 }));
  track.parentElement.addEventListener('mouseleave', () => g.to(mq, { timeScale: 1, duration: .5 }));
}
