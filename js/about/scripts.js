document.addEventListener('DOMContentLoaded', function () {
    const skillBars = document.querySelectorAll('.skill-bar');

    const animateBars = () => {
        skillBars.forEach(bar => {
            const skillValue = bar.getAttribute('data-skill');
            let innerBar = bar.querySelector('.skill-bar-inner');

            if (!innerBar) {
                innerBar = document.createElement('div');
                innerBar.classList.add('skill-bar-inner');
                bar.appendChild(innerBar);
            }

            // Set initial width to 100% to animate to 0 and then to the final value
            innerBar.style.animation = 'fillBar 1s ease-in-out forwards';

            // Delay the adjustment to final value
            setTimeout(() => {
                innerBar.style.width = skillValue + '%';
                innerBar.style.animation = 'adjustWidth 1s ease-in-out forwards';
            }, 200); // Delay should match the duration of fillBar animation
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateBars();
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.skill-box').forEach(box => {
        observer.observe(box);
    });
});
