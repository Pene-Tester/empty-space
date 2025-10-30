// Empty Space Café - Main JavaScript
// Handles subtle parallax effects and animation triggers

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeAnimations();
        initializeParallax();
        initializeMobileMenu();
    });

    /**
     * Initialize fade-in animations for hero elements
     * Triggers fade-in class on elements when they come into view
     */
    function initializeAnimations() {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        // Create intersection observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all fade-in elements
        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }

    /**
     * Initialize subtle parallax effects for constellation elements
     * Creates gentle floating motion based on mouse movement
     */
    function initializeParallax() {
        const constellations = document.querySelectorAll('.constellation');
        let mouseX = 0;
        let mouseY = 0;
        let isMouseMoving = false;

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;
            isMouseMoving = true;
        });

        // Stop tracking when mouse leaves window
        document.addEventListener('mouseleave', () => {
            isMouseMoving = false;
        });

        // Parallax animation loop
        function animateParallax() {
            if (isMouseMoving) {
                constellations.forEach((constellation, index) => {
                    const speed = 0.5 + (index * 0.3); // Different speeds for each constellation
                    const moveX = mouseX * speed * 10;
                    const moveY = mouseY * speed * 10;
                    
                    constellation.style.transform = `translate(${moveX}px, ${moveY}px)`;
                });
            } else {
                // Return to original position gradually
                constellations.forEach(constellation => {
                    const currentTransform = constellation.style.transform;
                    if (currentTransform) {
                        constellation.style.transform = currentTransform.replace(/translate\([^)]*\)/, 'translate(0px, 0px)');
                    }
                });
            }
            
            requestAnimationFrame(animateParallax);
        }

        // Start parallax animation
        animateParallax();
    }

    /**
     * Initialize mobile menu functionality
     * Handles responsive navigation for small screens
     */
    function initializeMobileMenu() {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const mobileNavMenu = document.querySelector('.mobile-nav-menu');
        const mobileNavClose = document.querySelector('.mobile-nav-close');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu .nav-link');
        
        // Toggle mobile menu
        if (mobileNavToggle && mobileNavMenu) {
            mobileNavToggle.addEventListener('click', () => {
                mobileNavMenu.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        }
        
        // Close mobile menu
        if (mobileNavClose && mobileNavMenu) {
            mobileNavClose.addEventListener('click', () => {
                mobileNavMenu.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            });
        }
        
        // Close mobile menu when clicking on links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavMenu.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            });
        });
        
        // Close mobile menu when clicking outside
        if (mobileNavMenu) {
            mobileNavMenu.addEventListener('click', (e) => {
                if (e.target === mobileNavMenu) {
                    mobileNavMenu.classList.remove('active');
                    document.body.style.overflow = ''; // Restore scrolling
                }
            });
        }
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNavMenu && mobileNavMenu.classList.contains('active')) {
                mobileNavMenu.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    }

    /**
     * Add subtle star twinkling enhancement
     * Randomly adjusts star opacity for more realistic effect
     */
    function enhanceStarTwinkling() {
        const stars = document.querySelectorAll('.star');
        
        setInterval(() => {
            stars.forEach(star => {
                if (Math.random() < 0.1) { // 10% chance per interval
                    star.style.opacity = Math.random() * 0.8 + 0.2; // Random opacity between 0.2 and 1
                }
            });
        }, 2000);
    }

    // Initialize star twinkling enhancement
    enhanceStarTwinkling();

    /**
     * Add smooth scrolling for navigation links
     */
    function initializeSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                
                // Only prevent default for hash links (smooth scrolling)
                if (targetId && targetId.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
                // For other links (like /menu), let them navigate normally
            });
        });
    }

    // Initialize smooth scrolling
    initializeSmoothScrolling();

    /**
     * Performance optimization: Reduce animations on low-end devices
     */
    function optimizeForPerformance() {
        // Check if device is likely low-end based on hardware concurrency
        const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
        
        if (isLowEndDevice) {
            // Reduce animation complexity
            document.documentElement.style.setProperty('--animation-duration', '0.5s');
            
            // Disable parallax on low-end devices
            const constellations = document.querySelectorAll('.constellation');
            constellations.forEach(constellation => {
                constellation.style.transform = 'none';
            });
        }
    }

    // Apply performance optimizations
    optimizeForPerformance();

})();
