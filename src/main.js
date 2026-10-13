const LOGO = './assets/brand/logo-horizontal-dark.svg';
const SYMBOL = './assets/brand/symbol.svg';

const steps = [
  { n: '01', title: 'Marque o que você assiste', text: 'Episódio por episódio, do seu jeito. Sua jornada fica organizada sem você abrir uma planilha.' },
  { n: '02', title: 'Suba de nível', text: 'Cada episódio rende XP. Complete marcos, desbloqueie badges e mostre quem você é no mundo anime.' },
  { n: '03', title: 'Ache a sua gente', text: 'Veja o que seus amigos estão assistindo, converse sobre o episódio e descubra o próximo anime favorito.' },
];

const features = [
  { icon: '⚡', title: 'XP e níveis', text: 'Assistir vira progresso de verdade. Quanto mais você vive, mais sobe.' },
  { icon: '🏅', title: 'Badges', text: 'Conquistas para maratonistas, explorador de gêneros, finalizador de séries e mais.' },
  { icon: '🎴', title: 'Perfil otaku', text: 'Sua vitrine: o que você viu, o que ama e o seu nível. Orgulho nerd, sem vergonha.' },
  { icon: '💬', title: 'Feed da comunidade', text: 'Reações, teorias e papo sobre o episódio, com gente que entende a referência.' },
];

const faqs = [
  { q: 'O ANIMAE é um app de streaming?', a: 'Não. A gente não exibe episódios. O ANIMAE é o diário social de anime: você marca o que assiste (em qualquer plataforma), acompanha seu progresso e conversa com a comunidade.' },
  { q: 'Vai ser pago?', a: 'O acesso antecipado é gratuito. No futuro, deve existir um plano premium com recursos extras, mas a base — marcar, evoluir e conversar — continua aberta.' },
  { q: 'Quando sai?', a: 'Estamos em teste fechado no Google Play agora. Quem entrar na lista é chamado primeiro, antes da abertura geral.' },
  { q: 'Tem Android e iOS?', a: 'Android primeiro, depois iOS. Também existe uma versão web para acompanhar o projeto.' },
  { q: 'Como funcionam os badges?', a: 'Você ganha badges ao cumprir marcos da sua jornada: finalizar séries, manter ritmo, explorar gêneros novos. Eles aparecem no seu perfil.' },
  { q: 'O que é “build in public”?', a: 'O app é feito por uma pessoa só, em público. Você acompanha a evolução e ajuda a decidir o que entra. Quem está na lista tem voz.' },
];

const cta = (label, ghost = false, href = '#lista') =>
  `<a class="btn ${ghost ? 'btn--ghost' : ''}" href="${href}">${label}</a>`;

const appCard = `
  <div class="appcard" aria-hidden="true">
    <div class="appcard__top"><img src="${SYMBOL}" alt="" width="28" height="24"><span>Minha jornada</span><b>Nv. 12</b></div>
    <div class="xp"><i style="width:68%"></i></div>
    <p class="xp__label">680 / 1000 XP · próximo badge: Maratonista</p>
    <div class="row"><span class="dot"></span><div><strong>Frieren</strong><small>Ep. 18 de 28</small></div><em>64%</em></div>
    <div class="row"><span class="dot dot--blue"></span><div><strong>Jujutsu Kaisen</strong><small>Ep. 9 de 24</small></div><em>38%</em></div>
    <div class="row"><span class="dot dot--pink"></span><div><strong>Dandadan</strong><small>Ep. 12 de 12</small></div><em>✓</em></div>
  </div>`;

document.querySelector('#root').innerHTML = `
<header class="nav">
  <div class="wrap nav__in">
    <a href="#top" aria-label="ANIMAE"><img class="nav__logo" src="${LOGO}" alt="ANIMAE" width="130" height="32"></a>
    <nav class="nav__links" aria-label="Seções">
      <a href="#como">Como funciona</a><a href="#recursos">Recursos</a><a href="#faq">FAQ</a>
    </nav>
    ${cta('Entrar na lista')}
  </div>
</header>

<main id="top">
  <section class="hero">
    <div class="wrap hero__in">
      <div class="hero__copy">
        <p class="eyebrow">O diário social de anime</p>
        <h1>Seu anime.<br>Sua jornada.<br><span>Sua gente.</span></h1>
        <p class="lead">Marque o que você assiste, suba de nível, ganhe badges e encontre quem entende a sua obsessão. Sem planilha. Sem frescura.</p>
        <div class="hero__cta">
          ${cta('Quero entrar na lista')}
          ${cta('Ver como funciona', true, '#como')}
        </div>
        <p class="hint">Acesso antecipado gratuito · Android primeiro</p>
      </div>
      <div class="hero__art">
        <div class="bubble">Tá olhando o quê? Entra logo na lista.</div>
        <img class="hero__draco" src="${SYMBOL}" alt="Draco, o mascote do ANIMAE" width="320" height="275">
        ${appCard}
      </div>
    </div>
  </section>

  <section class="sec sec--alt" id="problema">
    <div class="wrap narrow center">
      <p class="eyebrow">O problema</p>
      <h2>Lista num app, papo em outro, teoria num terceiro.</h2>
      <p class="lead">Seu anime vive espalhado: um app para anotar, um servidor para conversar, um fórum para a teoria. No fim, você tem oito abas e nenhuma comunidade.</p>
      <p class="quote"><img src="${SYMBOL}" alt="" width="36" height="31"><span>“Eu também não queria mais um app. Esse presta.” <b>— Draco</b></span></p>
    </div>
  </section>

  <section class="sec" id="como">
    <div class="wrap">
      <p class="eyebrow center">Como funciona</p>
      <h2 class="center">Três passos. Zero planilha.</h2>
      <ol class="steps">
        ${steps.map(s => `<li class="card"><span class="step__n">${s.n}</span><h3>${s.title}</h3><p>${s.text}</p></li>`).join('')}
      </ol>
    </div>
  </section>

  <section class="sec sec--alt" id="recursos">
    <div class="wrap">
      <p class="eyebrow center">Por que é diferente</p>
      <h2 class="center">Não é uma lista. É a sua jornada otaku.</h2>
      <p class="lead center narrow">MyAnimeList e AniList organizam. O ANIMAE faz você sentir que está evoluindo — e deixa seus amigos verem.</p>
      <div class="grid4">
        ${features.map(f => `<article class="card"><span class="ico">${f.icon}</span><h3>${f.title}</h3><p>${f.text}</p></article>`).join('')}
      </div>
    </div>
  </section>

  <section class="sec" id="faq">
    <div class="wrap narrow">
      <p class="eyebrow">Transparência total</p>
      <h2>Perguntas frequentes</h2>
      <div class="faq">
        ${faqs.map((f, i) => `
          <div class="faq__item">
            <button class="faq__q" aria-expanded="false" aria-controls="faq-a-${i}">${f.q}<span aria-hidden="true">+</span></button>
            <div class="faq__a" id="faq-a-${i}" hidden>${f.a}</div>
          </div>`).join('')}
      </div>
    </div>
  </section>

  <section class="sec sec--cta newsletter" id="lista">
    <div class="wrap narrow center">
      <img class="cta__draco" src="${SYMBOL}" alt="" width="96" height="82">
      <h2>Seu próximo episódio começa aqui.</h2>
      <p class="lead">Entre na lista e seja chamado primeiro. O Draco não vai pedir duas vezes. (Já pediu.)</p>
      <form class="form" novalidate>
        <label class="sr" for="email">Seu e-mail</label>
        <input id="email" type="email" placeholder="seuemail@exemplo.com" autocomplete="email" required>
        <button class="btn" type="submit">Entrar na lista</button>
      </form>
      <p class="hint">Sem spam. Só novidades do app.</p>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="wrap footer__in">
    <img src="${LOGO}" alt="ANIMAE" width="104" height="26">
    <span>Feito por fã, para fãs. © 2026 ANIMAE</span>
  </div>
</footer>`;

document.querySelectorAll('.faq__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    btn.querySelector('span').textContent = open ? '+' : '–';
    document.getElementById(btn.getAttribute('aria-controls')).hidden = open;
  });
});

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'Você está na lista ✓';
  button.disabled = true;
});
