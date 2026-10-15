
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click',()=>links.classList.remove('open')));

const buttons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.event-card');
buttons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    buttons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    cards.forEach(card=>{
      card.style.display = (f === 'all' || card.dataset.cat === f) ? '' : 'none';
    });
  });
});
