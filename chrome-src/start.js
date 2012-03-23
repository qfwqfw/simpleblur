var link = document.createElement('link'); 
//link.href = chrome.extension.getURL('main.css'); 
link.href = 'http://qfwqfw.github.com/newsblur-css/simple.css';
link.type = 'text/css'; 
link.rel = 'stylesheet'; 
document.documentElement.insertBefore(link); 
