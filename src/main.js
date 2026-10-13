// ── Configuração de lançamento ─────────────────────────────────────────
// Fase 'lista': todos os botões levam ao cadastro de e-mail (entrar na fila).
// Quando o app estiver no ar, troque STAGE para 'live' e os botões viram "Baixar no Android" (PLAY_URL).
const STAGE = 'lista';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.animaee.app';
const WEB_URL = 'https://animae-plus-main.vercel.app';
// ───────────────────────────────────────────────────────────────────────

const LOGO = './assets/brand/logo-horizontal-dark.svg';
const SYMBOL = './assets/brand/symbol.svg';
const MAIN_LABEL = STAGE === 'live' ? 'Baixar no Android' : 'Entrar na lista';
const MAIN_URL = STAGE === 'live' ? PLAY_URL : '#lista';

const main = (extra = '') => `<a class="btn ${extra}" href="${MAIN_URL}" ${MAIN_URL.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${MAIN_LABEL}</a>`;
const playIcon = '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12-7.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

const faqs = [
  { q: 'O ANIMAE vai ser pago?', a: 'O acesso inicial é gratuito. No futuro existirá um plano premium com recursos avançados, mas a camada social principal sempre terá versão free. Quem entra na lista garante condições especiais de fundador.' },
  { q: 'Por que não tem episódio?', a: 'O ANIMAE não é streaming. Você assiste onde preferir e usa o app para marcar, evoluir e conversar com quem sentiu o mesmo que você.' },
  { q: 'O que é “build in public”?', a: 'O app é construído por uma pessoa, em público. Você acompanha cada decisão e pode influenciar o que entra. Quem está na lista tem voz.' },
  { q: 'Quando vai sair?', a: 'Estamos finalizando o app. Quem entra na lista é avisado primeiro, no dia em que ele chegar ao Google Play.' },
  { q: 'Como funcionam os badges?', a: 'Você ganha badges ao cumprir marcos da sua jornada, como finalizar séries ou explorar gêneros novos. Eles ficam no seu perfil.' },
  { q: 'Tem Android e iOS?', a: 'Android primeiro. Existe também uma versão web. Entre na lista para ser avisado também do iOS.' },
];

const phone = (inner, cls = '') => `<div class="phone ${cls}" aria-hidden="true"><div class="phone__in">${inner}</div></div>`;
const feedScreen = `
  <div class="ui-tabs"><b>Amigos</b><span>Comunidade</span></div>
  <div class="ui-stories"><i style="--c:#ff5c02"></i><i style="--c:#3c7bff"></i><i style="--c:#ff2e8a"></i><i style="--c:#ff9f2a"></i></div>
  <div class="ui-post"><div class="ui-post__h"><i style="--c:#ff5c02"></i><div><b>Marina concluiu um anime</b><small>há 12 minutos</small></div></div>
  <div class="ui-post__img"><span>ATAQUE<br>FINAL</span></div><p>Esse final me destruiu. Alguém aí?</p></div>`;
const communityScreen = `
  <div class="ui-tabs"><span>Amigos</span><b>Comunidade</b></div>
  <div class="ui-chips"><em>Um dia</em><em>Novidades</em><em>Debates</em></div>
  <div class="ui-post"><div class="ui-post__h"><i style="--c:#3c7bff"></i><div><b>Naruto_89</b><small>Ep. 220 · Teoria em andamento</small></div></div><p>“Esse episódio mudou como eu vejo o Kakashi. Alguém mais sentiu isso?”</p></div>
  <div class="ui-post"><div class="ui-post__h"><i style="--c:#ff2e8a"></i><div><b>Luna</b><small>concluiu Frieren</small></div></div><p>Final lindo demais. Sem spoilers aqui.</p></div>`;
const discoverScreen = `
  <div class="ui-tabs"><b>Descoberta</b><span>Para você</span></div>
  <div class="ui-grid"><i style="--c:#ff5c02"></i><i style="--c:#3c7bff"></i><i style="--c:#ff2e8a"></i><i style="--c:#ff9f2a"></i><i style="--c:#3c7bff"></i><i style="--c:#ff5c02"></i></div>
  <p class="ui-note">Recomendações por emoção, não por popularidade.</p>`;
const badgesScreen = `
  <div class="ui-tabs"><b>Badges</b><span>Nível 12</span></div>
  <div class="xp"><i style="width:68%"></i></div>
  <div class="ui-badges"><i>⚡</i><i>🔥</i><i>🏅</i><i>🎴</i><i>🌙</i><i>⭐</i></div>
  <p class="ui-note">680 / 1000 XP para o próximo nível.</p>`;

const tabs = [
  { id: 'feed', label: 'Feed social', title: 'Um feed que entende o que você sentiu', text: 'Não é cronológico. Não é por popularidade. É por ressonância emocional. Posts de quem assistiu o mesmo episódio que você, no mesmo estado de espírito, aparecem primeiro. Conversa real acontece aqui.', a: feedScreen, b: communityScreen },
  { id: 'descoberta', label: 'Descoberta', title: 'O próximo anime que vai te marcar', text: 'Descoberta guiada pelo que você sentiu, não pelo que está em alta. Encontre o próximo anime favorito a partir de quem tem o seu gosto.', a: discoverScreen, b: feedScreen },
  { id: 'badges', label: 'Badges', title: 'Sua jornada vira conquista', text: 'Cada episódio rende XP. Cumpra marcos, desbloqueie badges e mostre quem você é no mundo anime.', a: badgesScreen, b: discoverScreen },
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
      <p class="lead">O ANIMAE não é streaming. É o diário social de anime: o lugar onde você encontra quem sentiu o mesmo depois de um final que destroça.</p>
      <div class="hero__cta">
        ${main()}
        <a class="btn btn--pink" href="${WEB_URL}" target="_blank" rel="noopener">${playIcon} Ver o app</a>
      </div>
      <p class="proof"><span class="dots"><i style="--c:#ff5c02"></i><i style="--c:#3c7bff"></i><i style="--c:#ff2e8a"></i><i style="--c:#ff9f2a"></i></span><span><b>Android primeiro</b> · grátis no acesso antecipado</span></p>
      <div class="hero__stage">
        <img class="hero__draco" src="${SYMBOL}" alt="Draco, mascote do ANIMAE" width="260" height="223">
        ${phone(feedScreen, 'phone--hero')}
      </div>
    </div>
  </section>

  <section class="sec" id="como">
    <div class="wrap">
      <h2 class="center">Você ama anime<br>mas vive fragmentado em 8 apps</h2>
      <p class="sub center">Tracking no MAL, conversa no Discord, teorias no Reddit. Você orbita o conteúdo sem nunca ter uma base.</p>
      <div class="bento">
        <article class="bcard bcard--tall">
          <h3>Descoberta às cegas</h3>
          <p>Sem contexto sobre o que você sente, os algoritmos empurram qualquer coisa. Você quer o próximo anime que vai te quebrar, não qualquer anime.</p>
          <div class="strip"><i style="--c:#7a1f1f">魂</i><i style="--c:#8a6a12">火</i><i style="--c:#3f7a1a">月</i><i style="--c:#1a7a52">龍</i><i style="--c:#1a5f7a">空</i><i style="--c:#3b2a8a">影</i></div>
        </article>
        <article class="bcard">
          <div><h3>Comunidade pulverizada</h3><p>Sua tribo está espalhada em 10 plataformas. Discord, Twitter, Reddit, MAL. Ninguém sabe onde se reunir de verdade.</p></div>
          <img src="${SYMBOL}" alt="" width="120" height="103">
        </article>
        <article class="bcard bcard--pink">
          <div><h3>Social sem sentimento</h3><p>Os apps de anime existentes tratam você como número. Nenhum pergunta o que você sentiu. Nenhum conecta por emoção.</p></div>
          <img src="${SYMBOL}" alt="" width="120" height="103">
        </article>
      </div>
      <div class="center"><a class="btn" href="${MAIN_URL}">${MAIN_LABEL}</a></div>
    </div>
  </section>

  <section class="sec" id="app">
    <div class="wrap">
      <h2 class="center">Tudo que existe ao redor<br>do anime em um lugar</h2>
      <div class="tabs" role="tablist">
        ${tabs.map((t, i) => `<button role="tab" class="tab ${i === 0 ? 'is-on' : ''}" data-tab="${t.id}" aria-selected="${i === 0}"><img src="${SYMBOL}" alt="" width="36" height="31">${t.label}</button>`).join('')}
      </div>
      ${tabs.map((t, i) => `
      <div class="panel" data-panel="${t.id}" ${i ? 'hidden' : ''} role="tabpanel">
        <div class="panel__phones">${phone(t.a)}${phone(t.b, 'phone--low')}</div>
        <div class="panel__fade"></div>
        <div class="panel__text"><h3>${t.title}</h3><p>${t.text}</p></div>
      </div>`).join('')}
      <div class="center"><a class="btn" href="${MAIN_URL}">${MAIN_LABEL}</a></div>
    </div>
  </section>

  <section class="sec">
    <div class="wrap split">
      <div class="split__text">
        <h2>Tudo que existe ao redor do anime em um lugar</h2>
        <p class="sub">O ANIMAE não é um projeto de fim de semana. É construído com a disciplina de quem passou anos em produto: cada decisão tem um porquê, cada feature tem uma hipótese.</p>
        <a class="btn" href="${MAIN_URL}">${MAIN_LABEL}</a>
      </div>
      <div class="split__card">${phone(feedScreen, 'phone--tall')}</div>
    </div>
  </section>

  <section class="sec proofsec" id="baixar">
    <div class="wrap center">
      <div class="dots dots--lg"><i style="--c:#ff5c02"></i><i style="--c:#3c7bff"></i><i style="--c:#ff2e8a"></i><i style="--c:#ff9f2a"></i><i style="--c:#32d27f"></i></div>
      <p class="big">Android</p>
      <p class="sub"><b>Primeiro</b> no Google Play. Entre na lista e seja avisado no dia do lançamento.</p>
      <a class="btn" href="${MAIN_URL}">${MAIN_LABEL}</a>
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

  <section class="sec">
    <div class="wrap">
      <div class="box newsletter" id="lista">
        <h2>O ANIMAE é esse lugar</h2>
        <p class="sub">Entre na lista e seja avisado no dia em que o app chegar ao Android. Também avisamos do iOS.</p>
        <form class="form" novalidate>
          <label class="sr" for="email">Seu e-mail</label>
          <input id="email" type="email" placeholder="Digite seu endereço de e-mail" autocomplete="email" required>
          <button class="btn" type="submit">Entrar na lista</button>
        </form>
        <small>Grátis, sem cartão e sem spam.</small>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="wrap footer__in">
    <div class="footer__l"><a href="#">Termos de Privacidade</a></div>
    <p>Criado por Thiago Miranda <i></i> © 2026 Animae <i></i> Todos os direitos reservados</p>
  </div>
</footer>`;

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(t => { t.classList.toggle('is-on', t === tab); t.setAttribute('aria-selected', String(t === tab)); });
  document.querySelectorAll('.panel').forEach(p => { p.hidden = p.dataset.panel !== tab.dataset.tab; });
}));

document.querySelectorAll('.faq__q').forEach(btn => btn.addEventListener('click', () => {
  const item = btn.parentElement, open = item.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', String(open));
  document.getElementById(btn.getAttribute('aria-controls')).hidden = !open;
}));

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();
  const b = event.currentTarget.querySelector('button');
  b.textContent = 'Você está na lista ✓'; b.disabled = true;
});
