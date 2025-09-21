  // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
        
        // Category Filter
        const categoryButtons = document.querySelectorAll('.category-btn');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
        
        // View Options
        const viewOptions = document.querySelectorAll('.view-option');
        
        viewOptions.forEach(option => {
            option.addEventListener('click', () => {
                viewOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                const menuItems = document.querySelector('.menu-items');
                if (option.querySelector('i').classList.contains('fa-list')) {
                    menuItems.classList.add('list-view');
                } else {
                    menuItems.classList.remove('list-view');
                }
            });
        });
        
        // Add to Cart
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartCount = document.querySelector('.cart-count');
        let count = 3;
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                count++;
                cartCount.textContent = count;
                
                // Animation effect
                button.classList.add('added');
                setTimeout(() => {
                    button.classList.remove('added');
                }, 500);
            });
        });
        
        // Simple Animation on Scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.menu-item, .testimonial, .gallery-item');
            
            elements.forEach(element => {
                const position = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (position < screenPosition) {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Set initial state for animation
        document.querySelectorAll('.menu-item, .testimonial, .gallery-item').forEach(item => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(50px)';
            item.style.transition = 'all 0.5s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        // Trigger once on load
        window.addEventListener('load', animateOnScroll);

        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('nav');
        const mobileMenuOverlay = document.createElement('div');
        mobileMenuOverlay.className = 'mobile-menu-overlay';
        
        // Create mobile menu overlay
        mobileMenuOverlay.innerHTML = `
            <div class="mobile-menu-content">
                <div class="mobile-menu-header">
                    <a href="#" class="logo">Gourmet<span>Delights</span></a>
                    <button class="mobile-menu-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <ul class="mobile-nav">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#reservation">Reservations</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="mobile-menu-actions">
                    <button class="theme-toggle" id="mobile-theme-toggle">
                        <i class="fas fa-moon"></i>
                    </button>
                    <a href="#" class="cart-icon">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count">3</span>
                    </a>
                </div>
            </div>
        `;
        
        document.body.appendChild(mobileMenuOverlay);
        
        // Close mobile menu function
        const closeMobileMenu = () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            mobileMenuBtn.classList.remove('active');
        };
        
        // Mobile menu toggle functionality
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            mobileMenuBtn.classList.add('active');
        });
        
        // Close button
        mobileMenuOverlay.querySelector('.mobile-menu-close').addEventListener('click', closeMobileMenu);
        
        // Close on overlay click
        mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
        
        // Close on nav link click
        mobileMenuOverlay.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Mobile theme toggle
        const mobileThemeToggle = mobileMenuOverlay.querySelector('#mobile-theme-toggle');
        const mobileThemeIcon = mobileThemeToggle.querySelector('i');
        
        mobileThemeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                mobileThemeIcon.classList.remove('fa-moon');
                mobileThemeIcon.classList.add('fa-sun');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                mobileThemeIcon.classList.remove('fa-sun');
                mobileThemeIcon.classList.add('fa-moon');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
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

        // Header scroll effect
        const header = document.querySelector('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });


        