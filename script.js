function show(id) {
  document.querySelector('.page.active').classList.remove('active');
  document.getElementById(id).classList.add('active');
}

let count = 0;
const msgs = ["Arre please na 🥺","Dil toot jayega 😢","Pretty please? 🥹","Last chance yes bol!","Ro jaunga if no 😭","You know you want to 😉","Ek yes se din ban jayega!","Please please please","KitKat break le phir yes bol","Sach mein no? 😔"];

document.getElementById('no').onclick = () => {
  count++;
  if (count <= 10) {
    document.getElementById('msg').textContent = msgs[count-1];
    document.getElementById('yes').style.transform = `scale(${1 + count * 0.5})`;
  }
};

document.getElementById('yes').onclick = () => {
  document.querySelector('.card').innerHTML = '';
  document.getElementById('yay').style.display = 'block';
  confetti({ particleCount: 300, spread: 120, origin: { y: 0.6 } });
};

// Floating hearts background
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 70 },
    color: { value: "#ff69b4" },
    shape: { type: "heart" },
    opacity: { value: 0.7, random: true },
    size: { value: 10, random: true },
    move: { enable: true, speed: 1.5, direction: "bottom", random: true, out_mode: "out" }
  },
  interactivity: { events: { onhover: { enable: true, mode: "repulse" } } }
});
