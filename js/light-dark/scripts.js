document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('themeSwitch');

    // Comprobar si hay un tema guardado en localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    } else {
        document.body.classList.add('light-mode');
    }

    // Alternar entre claro y oscuro
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
