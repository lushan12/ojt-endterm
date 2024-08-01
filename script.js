// script.js

// Define arrays of backgrounds and texts
const backgrounds = [
    'url(https://th.bing.com/th/id/OIP.x_YClY5ZgloBxjv9gKc2gAAAAA?rs=1&pid=ImgDetMain)',  // Add your actual image paths here
    'url(https://th.bing.com/th/id/OIP.RDZjc5KYpCWYv05z5ryr2AHaHa?rs=1&pid=ImgDetMain)',
    'url(https://th.bing.com/th/id/OIP._3JrBsB8je6Ynl9YIcJujgHaE8?rs=1&pid=ImgDetMain)'
];

const texts = [
    {
        title: 'Free online courses certificates',
        description: 'Upskill your knowledge about your role and industry as you gain more experience.'
    },
    {
        title: 'Advanced learning resources',
        description: 'Explore advanced courses and deepen your expertise in various fields.'
    },
    {
        title: 'Certifications for professionals',
        description: 'Get certified and boost your career with our professional courses.'
    }
];

// Get references to the elements
const textContentDiv = document.querySelector('.text-content-div');
const headerContent = document.querySelector('.header-content');
const nextButton = document.querySelector('.secondary-btn:nth-of-type(1)');
const previousButton = document.querySelector('.secondary-btn:nth-of-type(2)');
const primaryBtn1 = document.querySelector('.primary-btn1');
const primaryBtn2 = document.querySelector('.primary-btn2');

let currentIndex = 0;

// Function to update the background and text content
function updateContent(index) {
    if (index >= 0 && index < backgrounds.length) {
        headerContent.style.backgroundImage = backgrounds[index];
        textContentDiv.querySelector('h1').textContent = texts[index].title;
        textContentDiv.querySelector('p').textContent = texts[index].description;
        currentIndex = index;
    }
}

// Event listener for the "next" button
nextButton.addEventListener('click', function() {
    const nextIndex = (currentIndex + 1) % backgrounds.length;
    updateContent(nextIndex);
});

// Event listener for the "previous" button
previousButton.addEventListener('click', function() {
    const prevIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
    updateContent(prevIndex);
});

// Event listener for the "Read More" button
primaryBtn1.addEventListener('click', function() {
    window.location.href = 'nextPage.html'; // Change to your actual next page URL
});

// Event listener for the "Join Now" button
primaryBtn2.addEventListener('click', function() {
    window.history.back(); // Navigate to the previous page in browser history
});

// section 4 
document.addEventListener('DOMContentLoaded', () => {
    // Handle star rating clicks
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.parentElement;
            const stars = rating.querySelectorAll('.star');
            const value = parseInt(star.getAttribute('data-value'));

            stars.forEach(st => {
                if (parseInt(st.getAttribute('data-value')) <= value) {
                    st.classList.add('selected');
                } else {
                    st.classList.remove('selected');
                }
            });
        });
    });

    // Show login prompt when enroll button is clicked
    document.getElementById('enroll-button').addEventListener('click', () => {
        document.getElementById('login-prompt').style.display = 'flex';
    });

    // Close login prompt
    document.getElementById('login-close').addEventListener('click', () => {
        document.getElementById('login-prompt').style.display = 'none';
    });
    document.addEventListener("DOMContentLoaded", function() {
        // Add JavaScript functionality here
        // e.g., form validation, interactive features, etc.
        console.log("JavaScript is running!");
    });
    
});