document.addEventListener('DOMContentLoaded', () => {
  // Welcome screen
  anime.timeline({
    targets: '.welcome',
    easing: 'easeOutExpo',
  })
  .add({
    width: ['0vw', '100vw'],
    duartion: 1200,
  })
  .add({
    delay: 2700,
    translateX: '100vw',
    duration: 1500,
    complete: function(anime) {
      document.querySelector('.welcome').remove();
    },
  })
  // Heading and sub-heading
  anime({
    targets: '.welcome-heading',
    delay: 400,
    opacity: 1,
    duration: 1800,
    translateY: ['-30px', '0px'],
    easing: 'easeOutExpo',
  })
  anime({
    targets: '.welcome-sub-heading',
    delay: 600,
    opacity: 1,
    duration: 1800,
    translateY: ['-30px', '0px'],
    easing: 'easeOutExpo',
  })
  // Loader animation
  anime({
    targets: '.loader-wrapper',
    opacity: 1,
    easing: 'easeOutExpo',
    duration: 1800,
    delay: 1500,
  })
  anime({
    targets: '.loader',
    opacity: 1,
    easing: 'easeOutExpo',
    duration: 2300,
    delay: 2000,
    width: ['0%', '100%'],
  })
})