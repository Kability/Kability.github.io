// Kability Landing Page JavaScript

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const categoryTabs = document.querySelectorAll('.category-tab');
const workflowGrid = document.getElementById('workflow-grid');

// Workflow data
const workflowData = {
    automation: [
        {
            title: "AI Email Response System",
            description: "Automatically generate contextual email responses using GPT-4 with custom prompts and filters.",
            tag: "Email Automation"
        },
        {
            title: "Social Media Content Pipeline",
            description: "Create, schedule, and optimize social media posts across multiple platforms using AI.",
            tag: "Social Media"
        },
        {
            title: "Document Intelligence Workflow",
            description: "Extract, analyze, and categorize information from documents using OCR and NLP.",
            tag: "Document Processing"
        }
    ],
    creative: [
        {
            title: "AI Art Generation Pipeline",
            description: "Complete workflow for generating, refining, and post-processing AI artwork with multiple models.",
            tag: "Visual Art"
        },
        {
            title: "Story Writing Assistant",
            description: "Collaborative AI writing system for creating compelling narratives and character development.",
            tag: "Creative Writing"
        },
        {
            title: "Music Composition AI",
            description: "Generate original music compositions with AI, from melody to full orchestration.",
            tag: "Music Creation"
        }
    ],
    analysis: [
        {
            title: "Data Insights Engine",
            description: "Automated data analysis and visualization pipeline with AI-powered insights generation.",
            tag: "Data Science"
        },
        {
            title: "Market Research AI",
            description: "Comprehensive market analysis using AI to gather, process, and analyze market data.",
            tag: "Market Analysis"
        },
        {
            title: "Sentiment Analysis System",
            description: "Real-time sentiment analysis of social media, reviews, and customer feedback.",
            tag: "Sentiment Analysis"
        }
    ],
    productivity: [
        {
            title: "AI Task Manager",
            description: "Intelligent task prioritization and scheduling system that adapts to your workflow.",
            tag: "Task Management"
        },
        {
            title: "Meeting Notes AI",
            description: "Automatic meeting transcription, summarization, and action item extraction.",
            tag: "Meeting Automation"
        },
        {
            title: "Smart Calendar Assistant",
            description: "AI-powered calendar management with intelligent scheduling and conflict resolution.",
            tag: "Calendar Management"
        }
    ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeWorkflows();
    initializeScrollEffects();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        navToggle.classList.toggle('active');
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Workflows section functionality
function initializeWorkflows() {
    // Load initial workflows (automation)
    loadWorkflows('automation');
    
    // Category tab switching
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Load workflows for selected category
            const category = tab.getAttribute('data-category');
            loadWorkflows(category);
        });
    });
}

// Load workflows for a specific category
function loadWorkflows(category) {
    const workflows = workflowData[category] || [];
    
    // Add loading state
    workflowGrid.classList.add('loading');
    
    // Clear existing content
    workflowGrid.innerHTML = '';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        workflows.forEach((workflow, index) => {
            const workflowCard = createWorkflowCard(workflow);
            workflowCard.style.animationDelay = `${index * 0.1}s`;
            workflowGrid.appendChild(workflowCard);
        });
        
        // Remove loading state
        workflowGrid.classList.remove('loading');
        
        // Animate cards in
        const cards = workflowGrid.querySelectorAll('.workflow-card');
        cards.forEach(card => card.classList.add('fade-in-up'));
    }, 300);
}

// Create workflow card element
function createWorkflowCard(workflow) {
    const card = document.createElement('div');
    card.className = 'workflow-card';
    card.innerHTML = `
        <div class="workflow-tag">${workflow.tag}</div>
        <h3>${workflow.title}</h3>
        <p>${workflow.description}</p>
    `;
    
    // Add hover effect
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
    
    return card;
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .tool-category, .section-header');
    animateElements.forEach(el => observer.observe(el));
    
    // Parallax effect for background orbs
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const orb1 = document.querySelector('.orb-1');
        const orb2 = document.querySelector('.orb-2');
        
        if (orb1 && orb2) {
            orb1.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.05}px)`;
            orb2.style.transform = `translate(${-scrolled * 0.1}px, ${scrolled * 0.03}px)`;
        }
    });
}

// Initialize additional animations
function initializeAnimations() {
    // Floating cards animation enhancement
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-20px) rotate(5deg) scale(1.05)';
            card.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotate(0deg) scale(1)';
            card.style.boxShadow = 'none';
        });
    });
    
    // Hero stats counter animation
    const stats = document.querySelectorAll('.stat-number');
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 20);
    };
    
    // Trigger counter animation when stats are visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statValue = entry.target.textContent.replace('+', '');
                animateCounter(entry.target, parseInt(statValue));
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    stats.forEach(stat => {
        const originalValue = stat.textContent;
        stat.textContent = '0+';
        stat.setAttribute('data-target', originalValue.replace('+', ''));
        statsObserver.observe(stat);
    });
}

// Button click handlers
document.addEventListener('click', (e) => {
    // Handle button clicks with feedback
    if (e.target.matches('.btn-primary, .btn-secondary, .btn-outline')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
        
        // Add ripple effect
        createRipple(e);
    }
    
    // Handle tool category clicks
    if (e.target.closest('.tool-category')) {
        const category = e.target.closest('.tool-category');
        category.style.transform = 'scale(0.98)';
        setTimeout(() => {
            category.style.transform = '';
        }, 200);
    }
});

// Create ripple effect for buttons
function createRipple(event) {
    const button = event.target;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Add ripple CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 600ms linear;
        background-color: rgba(255, 255, 255, 0.6);
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
    
    // Navigate workflow categories with arrow keys
    if (e.target.matches('.category-tab')) {
        const tabs = Array.from(categoryTabs);
        const currentIndex = tabs.indexOf(e.target);
        let newIndex;
        
        if (e.key === 'ArrowLeft') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        } else if (e.key === 'ArrowRight') {
            newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        }
        
        if (newIndex !== undefined) {
            tabs[newIndex].focus();
            tabs[newIndex].click();
        }
    }
});

// Performance optimizations
let scrollTimer = null;
window.addEventListener('scroll', () => {
    if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(() => {
        // Throttled scroll handler
        handleScroll();
    }, 10);
});

function handleScroll() {
    const scrollTop = window.pageYOffset;
    
    // Update navbar only when necessary
    if (scrollTop > 100 && !navbar.classList.contains('scrolled')) {
        navbar.classList.add('scrolled');
    } else if (scrollTop <= 100 && navbar.classList.contains('scrolled')) {
        navbar.classList.remove('scrolled');
    }
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('Script error:', e.error);
    // Graceful fallback for critical functionality
    if (e.error && e.error.message.includes('workflowData')) {
        loadWorkflows('automation'); // Fallback to default category
    }
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', () => {
    // Add ARIA labels and roles
    const navToggleBtn = document.querySelector('.nav-toggle');
    if (navToggleBtn) {
        navToggleBtn.setAttribute('aria-label', 'Toggle navigation menu');
        navToggleBtn.setAttribute('aria-expanded', 'false');
        navToggleBtn.setAttribute('role', 'button');
    }
    
    // Add focus management for mobile menu
    navMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const focusableElements = navMenu.querySelectorAll('a[href]');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeNavigation,
        initializeWorkflows,
        loadWorkflows,
        createWorkflowCard
    };
}