// Video blur on scroll
function initVideoBlur() {
  const video = document.getElementById('background-video');
  if (!video) return;

  const maxBlur = 10; // Maximum blur in pixels
  const scrollThreshold = 300; // Scroll distance for max blur

  const updateBlur = () => {
    const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const blurAmount = Math.min((scroll / scrollThreshold) * maxBlur, maxBlur);
    video.style.filter = `blur(${blurAmount}px)`;
  };

  // Initial call
  updateBlur();

  // Update on scroll with throttling
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateBlur();
        ticking = false;
      });
      ticking = true;
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVideoBlur);
} else {
  initVideoBlur();
}

