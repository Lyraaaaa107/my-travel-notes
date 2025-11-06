// 导航栏logo点击返回主页 - 添加到main.js文件最后
document.addEventListener('DOMContentLoaded', function() {
    const navLogos = document.querySelectorAll('.nav-logo, .nav-logo h1');
    
    navLogos.forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        });
    });
});