const head = document.querySelector('head');

const favicon = document.createElement('link');

favicon.rel = 'icon';
favicon.type = 'image/x-icon';
favicon.href = 'images/favicon.ico';

head.appendChild(favicon);