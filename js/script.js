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