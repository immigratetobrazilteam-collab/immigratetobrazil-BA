/** BA JS - Salvador - Tropical-relaxing with yellow turquoise and sunny Afro vibes */
const STATE_CONFIG = {
  stateCode: 'ba',
  capital: 'Salvador',
  formspreeUrl: 'https://formspree.io/f/xvzojynz',
  colors: { primary: '#ffeb3b', secondary: '#00bcd4', accent: '#ffd700' },
  animations: {"enabled": true, "header": {"type": "sunsetFade", "duration": "0.9s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "tropicalSlide", "duration": "1.3s", "easing": "ease-in-out", "stagger": "0.25s"}, "hero": {"type": "beachParallax", "speed": 0.3, "direction": "vertical"}, "cards": {"type": "relaxedLift", "scale": 1.02, "shadow": "warm"}, "images": {"type": "sunsetReveal", "gradient": true, "duration": "1.2s"}},
  interactions: {"hover": "tropical-sway", "scroll": "beach-breeze", "transitions": "sunset-fade", "click": "coconut-drop"},
  premiumEffects: ["sunset-gradient", "palm-shadows", "ocean-breeze", "tropical-ambiance"]
};

const SECTIONS = ["ba-index-section--map", "ba-index-section-frequently-asked-questions-about-living-in-", "ba-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
