// Fetch the SVG file and inject it into the container
fetch('8clone.svg')
  .then(response => response.text())
  .then(data => {
    document.getElementById('svg-container').innerHTML = data;
 
    const timeline = anime.timeline({
        easing: 'easeOutElastic(1, .8)',
        loop: true // Set loop to false to run the animations only once
      });
      
      // First animation
      
      timeline
      .add({
        targets: '#svg-container svg',
        translateX: [
          { value: -600, duration: 1000, delay: 500 }, // Move from the right (off-screen) to 900
          //{ value: -500, duration: 500 } // Hold at 900 for a moment (optional)
        ],
        scaleX: [
          { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
          { value: 1, duration: 900 },
          { value: 1, duration: 100, delay: 500, easing: 'easeOutExpo' },
          { value: 1, duration: 900 }
        ]
      })
      .add({
        targets: '#svg-container svg',
        translateX: [
          { value: -1200, duration: 1000, delay: 500 }, // Move from 900 to 1000
          //{ value: -2040, duration: 0 } // Hold at 1000 for a moment (optional)
        ],
        scaleX: [
          { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
          { value: 1, duration: 900 },
          { value: 1, duration: 100, delay: 500, easing: 'easeOutExpo' },
          { value: 1, duration: 900 }
        ]
      });
});


