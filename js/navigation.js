// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation items
    const navItems = document.querySelectorAll('.nav-item');
    
    // Function to set active state
    function setActiveNavItem(activeItem) {
        // Remove active class from all items
        navItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked item
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }
    
    // Add click event listeners to all navigation items
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Prevent default only if it's not a link
            if (!this.href) {
                e.preventDefault();
            }
            
            // Set active state
            setActiveNavItem(this);
            
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Set initial active state based on current page
    function setInitialActiveState() {
        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;
        
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href) {
                // Check if this is the current page
                if (currentPath.endsWith(href) || 
                    (currentPath.endsWith('/') && href === 'index.html') ||
                    (currentPath.endsWith('/') && href === '#home') ||
                    (currentHash && href.includes(currentHash))) {
                    setActiveNavItem(item);
                }
            }
        });
    }
    
    // Initialize active state
    setInitialActiveState();
    
    // Handle hash changes for single page navigation
    window.addEventListener('hashchange', function() {
        const currentHash = window.location.hash;
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href && href.includes(currentHash)) {
                setActiveNavItem(item);
            }
        });
    });
    
    // Add smooth scroll for anchor links
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href && href.startsWith('#')) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });
    
    // Add hover sound effect (optional)
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Add subtle scale effect
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            // Reset transform
            this.style.transform = '';
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        const activeNavItem = document.querySelector('.nav-item.active');
        if (!activeNavItem) return;
        
        const currentIndex = Array.from(navItems).indexOf(activeNavItem);
        let nextIndex;
        
        switch(e.key) {
            case 'ArrowLeft':
                nextIndex = currentIndex > 0 ? currentIndex - 1 : navItems.length - 1;
                break;
            case 'ArrowRight':
                nextIndex = currentIndex < navItems.length - 1 ? currentIndex + 1 : 0;
                break;
            case 'Enter':
            case ' ':
                activeNavItem.click();
                return;
            default:
                return;
        }
        
        e.preventDefault();
        setActiveNavItem(navItems[nextIndex]);
        navItems[nextIndex].focus();
    });
    
    // Add focus styles for accessibility
    navItems.forEach(item => {
        item.addEventListener('focus', function() {
            this.style.outline = '2px solid #3b82f6';
            this.style.outlineOffset = '2px';
        });
        
        item.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 