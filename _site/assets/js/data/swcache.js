const resource = [
    /* --- CSS --- */
    '/dl8z/assets/css/style.css',

    /* --- PWA --- */
    '/dl8z/app.js',
    '/dl8z/sw.js',

    /* --- HTML --- */
    '/dl8z/index.html',
    '/dl8z/404.html',

    
        '/dl8z/categories/',
    
        '/dl8z/tags/',
    
        '/dl8z/archives/',
    
        '/dl8z/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/dl8z/assets/img/favicons/android-chrome-192x192.png',
        '/dl8z/assets/img/favicons/android-chrome-512x512.png',
        '/dl8z/assets/img/favicons/apple-touch-icon.png',
        '/dl8z/assets/img/favicons/favicon-16x16.png',
        '/dl8z/assets/img/favicons/favicon-32x32.png',
        '/dl8z/assets/img/favicons/favicon.ico',
        '/dl8z/assets/img/favicons/mstile-150x150.png',
        '/dl8z/assets/img/favicons/safari-pinned-tab.svg',
        '/dl8z/assets/js/dist/categories.min.js',
        '/dl8z/assets/js/dist/commons.min.js',
        '/dl8z/assets/js/dist/home.min.js',
        '/dl8z/assets/js/dist/misc.min.js',
        '/dl8z/assets/js/dist/page.min.js',
        '/dl8z/assets/js/dist/post.min.js',
        '/dl8z/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

