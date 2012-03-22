var link = document.createElement('link'); 
//link.href = chrome.extension.getURL('main.css'); 
link.href = 'https://raw.github.com/qfwqfw/newsblur-css/master/simple.css';
link.id = 'Your Stylish!'; 
link.type = 'text/css'; 
link.rel = 'stylesheet'; 
document.documentElement.insertBefore(link); 
