document.addEventListener('DOMContentLoaded', function() {
    const character = document.getElementById('game-character');
    const playCountElement = document.getElementById('play-count');
    const resetBtn = document.getElementById('reset-btn');
    
    // Load play count from localStorage or set to 0 if not exists
    let playCount = localStorage.getItem('characterPlayCount') || 0;
    playCountElement.textContent = playCount;
    
    // Make character dance when clicked
    character.addEventListener('click', function() {
        // Add dance class to start animation
        this.classList.add('dance');
        
        // Increment and update play count
        playCount++;
        playCountElement.textContent = playCount;
        localStorage.setItem('characterPlayCount', playCount);
        
        // Stop animation after 1 second
        setTimeout(() => {
            this.classList.remove('dance');
        }, 1000);
    });
    
    // Reset button functionality
    resetBtn.addEventListener('click', function() {
        playCount = 0;
        playCountElement.textContent = playCount;
        localStorage.setItem('characterPlayCount', playCount);
        
        // Add a little celebration effect
        character.classList.add('dance');
        setTimeout(() => {
            character.classList.remove('dance');
        }, 1000);
    });
    
    // Bonus: Add a surprise if played more than 5 times
    function checkForSurprise() {
        if (playCount > 5) {
            character.style.filter = "drop-shadow(0 0 10px gold)";
        } else {
            character.style.filter = "none";
        }
    }
    
    // Check on load
    checkForSurprise();
    
    // Check after each click
    character.addEventListener('click', checkForSurprise);
});