// Wait for the entire content of the page to be fully loaded and parsed
document.addEventListener("DOMContentLoaded", function() {
    // Create a new IntersectionObserver instance
    let observer = new IntersectionObserver(function(entries) {
        // Loop through each entry (observed element) that has intersected
        entries.forEach(entry => {
            // Check if the entry is currently visible in the viewport
            if (entry.isIntersecting) {
                // Add the 'active' class to the element that is visible
                entry.target.classList.add('active');
            }
        });
    });

    // Select the element with the ID 'about-us'
    let aboutUsSection = document.querySelector('#about-us');
    // Start observing the 'about-us' section with the IntersectionObserver
    observer.observe(aboutUsSection);
});
