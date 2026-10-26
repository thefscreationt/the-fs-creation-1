const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

setTimeout(() => $('#intro').classList.add('go'), 300);
setTimeout(() => {
  document.body.classList.add('ok');
  $('#intro').remove();
}, 4100);

for (let i = 0; i < 28; i++) {
  const d = document.createElement('div');
  const r = Math.random;
  const s = 8 + r() * 44;
  d.className = 'bk';
  d.style.cssText = `width:${s}px;height:${s}px;left:${r()*96}%;top:${8+r()*62}%;--sx:${8+r()*22}vw;--sy:${(r()-.5)*60}px;--zf:${2.5+r()*4};--dl:${-r()*.8}s;--bl:${i%2 ? '0s' : '-.5s'}`;
  $('#bks').appendChild(d);
}

const S = [
  ['📱', 'Social Media Management', ['Instagram Handling', 'Facebook Management', 'Daily Posting', 'Story Management', 'Hashtag & Caption Strategy', 'Page Growth']],
  ['🎬', 'Content Creation & Reels', ['Viral Reels Creation', 'Trend Research', 'Cinematic Reels', 'Product Reels', 'Restaurant / Cafe Reels', 'Fashion / Gym Reels']],
  ['📍', 'Google Business Profile', ['GBP Setup & Optimization', 'Google Maps Ranking', 'Review Management', 'Business Verification', 'Local SEO']],
  ['♾️', 'Paid Ads Management', ['Meta Ads (FB & Insta)', 'Google Ads', 'YouTube Ads', 'Lead Generation Ads', 'Retargeting Campaigns']],
  ['🎨', 'Branding & Design', ['Logo Design', 'Brand Identity', 'Visiting Cards', 'Menu Design', 'Poster / Banner', 'Social Media Templates']],
  ['🖥', 'Website Development', ['Business Website', 'E-commerce Website', 'Restaurant Website', 'Landing Page', 'Portfolio Website']],
  ['📊', 'SEO Services', ['On Page SEO', 'Off Page SEO', 'Local SEO', 'Keyword Research', 'Website SEO Audit']],
  ['🤝', 'Influencer Marketing', ['Influencer Collaboration', 'Brand Promotions', 'Paid Collaborations', 'UGC Content Creation', 'Campaign Management']],
  ['▶️', 'YouTube Management', ['Channel Setup', 'Video SEO', 'Content Strategy', 'Thumbnails', 'Growth & Monetization']],
  ['📷', 'Photography Services', ['Wedding Photography', 'Pre Wedding Shoot', 'Product Photography', 'Event Photography', 'Drone Photography']]
];

$('#sg').innerHTML = S.map((s, i) => `
  <div class="cd rv">
    <h3><em>${s[0]}</em>${s[1]}</h3>
    <ul>${s[2].map(x => `<li>${x}</li>`).join('')}</ul>
    ${i < 5 ? '<a href="#sv">LEARN MORE →</a>' : ''}
  </div>
`).join('');

const P = [
  ['Wedding Film', 'w', '#6a4a2a', 'pair'],
  ['Pre Wedding', 'w', '#8a6a5a', 'pair'],
  ['Restaurant Reels', 'r', '#5a3a1a', 'plate'],
  ['Product Shoot', 'c', '#6a6a6a', 'box'],
  ['Cafe Reels', 'r', '#5a4020', 'cup'],
  ['Brand Shoot', 'b', '#7a5a20', 'cam'],
  ['Event Film', 'e', '#4a1a6a', 'stage'],
  ['Drone Shoot', 'e', '#3a5a6a', 'drone']
];

$('#pg').innerHTML = P.map((p, i) => `
  <div class="pt" data-c="${p[1]}">
    <div class="ph p${i}"><div class="pl">▶</div></div>
    <span>${p[0]}</span>
  </div>
`).join('');

$$('.fl button').forEach((b) => {
  b.onclick = () => {
    $$('.fl button').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    $$('.pt').forEach(t => t.classList.toggle('h', b.dataset.f !== 'all' && t.dataset.c !== b.dataset.f));
  };
});

$('#rs').innerHTML = [
  ['📸', 'Instagram Reach', '20K → 4M', 'In 3 Months'],
  ['📈', 'Followers Growth', '2K → 18K', 'In 2 Months'],
  ['▶️', 'Reel Views', '100K → 5M+', 'In 1 Month'],
  ['🔍', 'Google Ranking', 'Top 3 Rankings', 'For 50+ Keywords'],
  ['💲', 'Sales Increase', '300%', 'After Our Ads']
].map(r => `
  <div class="cd">
    <em>${r[0]}</em>
    <p>
      <small>${r[1]}</small>
      <b>${r[2]}</b>
      <span>${r[3]}</span>
    </p>
  </div>
`).join('');

const io = new IntersectionObserver((es) => {
  es.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: .12 });

$$('.rv').forEach((e, i) => {
  e.style.transitionDelay = `${(i % 5) * .08}s`;
  io.observe(e);
});

const co = new IntersectionObserver((es) => {
  es.forEach((e) => {
    if (!e.isIntersecting) return;
    co.unobserve(e.target);

    const el = e.target;
    const n = +el.dataset.n;
    const dur = Math.min(4500, Math.max(3000, n * 22));

    setTimeout(() => {
      const t0 = performance.now();
      let last = -1;

      (function f(t) {
        const k = Math.min((t - t0) / dur, 1);
        const v = Math.min(n, Math.floor(k * (n + 1)));

        if (v !== last) {
          last = v;
          el.textContent = v + el.dataset.s;
          if (n <= 100) {
            el.animate([{ transform: 'scale(1.22)', color: '#fff' }, { transform: 'scale(1)' }], {
              duration: 260,
              easing: 'ease-out'
            });
          }
        }

        if (k < 1) requestAnimationFrame(f);
      })(t0);
    }, Math.max(0, 3500 - performance.now()));
  });
}, { threshold: .5 });

$$('[data-n]').forEach(e => co.observe(e));

let tk = 0;
addEventListener('scroll', () => {
  if (tk) return;
  tk = 1;
  requestAnimationFrame(() => {
    tk = 0;
    $('#nv').classList.toggle('s', scrollY > 40);
    $('#pr').style.width = `${scrollY / (document.body.scrollHeight - innerHeight) * 100}%`;
  });
}, { passive: true });

const cu = $('#cur');
cu.style.left = cu.style.top = '0';
let mx = innerWidth / 2;
let my = innerHeight / 2;
let cx = mx;
let cy = my;

addEventListener('pointermove', (e) => {
  mx = e.clientX;
  my = e.clientY;
});

(function L() {
  cx += (mx - cx) * .08;
  cy += (my - cy) * .08;
  cu.style.transform = `translate3d(${cx}px,${cy}px,0)`;
  requestAnimationFrame(L);
})();

document.addEventListener('pointermove', (e) => {
  const c = e.target.closest && e.target.closest('.cd');
  if (c) {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--x', `${e.clientX - r.left}px`);
    c.style.setProperty('--y', `${e.clientY - r.top}px`);
  }
});

$('#hb').onclick = () => $('#mn').classList.toggle('o');
$$('#mn a').forEach(a => a.onclick = () => $('#mn').classList.remove('o'));
$('#up').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

