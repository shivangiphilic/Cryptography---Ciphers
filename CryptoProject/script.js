// Delay the removal of the preloader after 3 seconds
setTimeout(function() {
    var preloader = document.getElementById('preloader');
    var loader = document.getElementById('loader');
    
    // Slide the loader up to hide it
    loader.style.transform = 'translateY(-100%)';
    
    // Remove the preloader after the sliding animation completes
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 1000); // The animation duration is 1 second
}, 3000); // Display the preloader for 3 seconds
    