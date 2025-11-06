// destinations.js - 目的地页面功能
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const destinationGrid = document.getElementById('destinationsGrid');
    const destinations = document.querySelectorAll('.destination-card');

    // 筛选功能
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // 更新按钮激活状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选目的地
            filterDestinations(filter);
        });
    });

    // 筛选目的地函数
    function filterDestinations(filter) {
        destinations.forEach(destination => {
            const region = destination.getAttribute('data-region');
            
            if (filter === 'all' || region === filter) {
                destination.style.display = 'block';
                // 添加淡入动画
                setTimeout(() => {
                    destination.style.opacity = '1';
                    destination.style.transform = 'translateY(0)';
                }, 100);
            } else {
                // 添加淡出动画
                destination.style.opacity = '0';
                destination.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    destination.style.display = 'none';
                }, 300);
            }
        });
    }

    // 目的地卡片点击效果
    destinations.forEach(destination => {
        destination.addEventListener('click', function(e) {
            // 如果不是点击链接，则添加点击效果
            if (e.target.tagName !== 'A') {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });

    // 搜索功能（基础版本）
    const searchInput = document.querySelector('.destination-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            searchDestinations(searchTerm);
        });
    }

    function searchDestinations(searchTerm) {
        destinations.forEach(destination => {
            const title = destination.querySelector('h3').textContent.toLowerCase();
            const description = destination.querySelector('p').textContent.toLowerCase();
            const region = destination.getAttribute('data-region');
            
            if (title.includes(searchTerm) || 
                description.includes(searchTerm) || 
                region.includes(searchTerm) ||
                searchTerm === '') {
                destination.style.display = 'block';
            } else {
                destination.style.display = 'none';
            }
        });
    }

    // 状态标签交互
    const statusLabels = document.querySelectorAll('.destination-status');
    statusLabels.forEach(label => {
        label.addEventListener('click', function(e) {
            e.stopPropagation(); // 防止触发卡片点击
            const status = this.classList.contains('visited') ? 'Visited' : 'Planning';
            alert(`This destination is marked as: ${status}`);
        });
    });

    console.log('Destinations page JavaScript loaded successfully!');
});