const Switch = document.querySelector('input[type="checkbox"]');
const temaActual = localStorage.getItem('theme');

if (temaActual) {
    document.documentElement.setAttribute('data-theme',temaActual);
    
    if (temaActual === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
        
        localStorage.setItem('theme', 'dark');
        Switch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        
        localStorage.setItem('theme', 'dark');
    }
    else {        
      document.documentElement.setAttribute('data-theme', 'light');
      
          localStorage.setItem('theme', 'light');
    }    
}

Switch.addEventListener('change', switchTheme, false);