// Loading Screen Animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    let progress = 0;
    
    const interval = setInterval(() => {
      progress += 5;
      loadingProgress.style.width = `${progress}%`;
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          loadingScreen.style.opacity = '0';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
          }, 900);
        }, 900);
      }
    }, 100);
    
    // Create kr rha hu main yha se particles ko he hee 
    createParticles();
    
    // Initialize countdown
    startCountdown();
  });
  
  // Creating Particles
  function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 5 + 3;
      
      // Random animation delay
      const delay = Math.random() * 5;
      
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDelay = `${delay}s`;
      
      // Randomly choose kar lena guys between fire (orange) and water (blue) particles
      const isFireParticle = Math.random() > 0.5;
      particle.style.backgroundColor = isFireParticle ? 
        'rgba(255, 69, 0, 0.7)' : 'rgba(0, 255, 255, 0.7)';
      
      container.appendChild(particle);
    }
  }
  
  // Countdown Timer
  function startCountdown() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Set the target date (30 days from now ya 14 april) ya jab bhi ho 
    const now = new Date();
    const targetDate = new Date(now);
    targetDate.setDate(now.getDate() + 30);
    
    function updateCountdown() {
      const currentTime = new Date();
      const difference = targetDate - currentTime;
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      daysElement.textContent = days;
      hoursElement.textContent = hours;
      minutesElement.textContent = minutes;
      secondsElement.textContent = seconds;
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
  

  
  // FAQ Toggle
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.style.display === 'block';
      
      // Close all answers
      document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.display = 'none';
      });
      
      document.querySelectorAll('.faq-question').forEach(item => {
        item.style.setProperty('--rotation', '0deg');
      });
      
      // Open clicked answer if it was closed
      if (!isOpen) {
        answer.style.display = 'block';
        question.style.setProperty('--rotation', '45deg');
      }
    });
  });