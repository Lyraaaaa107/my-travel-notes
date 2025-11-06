// blog.js - 博客页面功能
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('loadMore');
    const blogGrid = document.getElementById('blogPosts');
    
    // 模拟更多文章数据
    const moreArticles = [
        {
            category: "Culture",
            date: "2024-01-20",
            title: "Traditional Festivals Around the World",
            excerpt: "Experience colorful cultural celebrations and ancient traditions from different corners of the globe.",
            image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
            readTime: "7 min read"
        },
        {
            category: "Adventure",
            date: "2023-12-15", 
            title: "Winter Wonderland: Arctic Adventures",
            excerpt: "Chasing northern lights and exploring frozen landscapes in the magical Arctic region.",
            image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=600&h=400&fit=crop",
            readTime: "9 min read"
        }
    ];

    // 加载更多文章功能
    loadMoreBtn.addEventListener('click', function() {
        // 显示加载状态
        loadMoreBtn.textContent = 'Loading...';
        loadMoreBtn.disabled = true;

        // 模拟网络延迟
        setTimeout(() => {
            moreArticles.forEach(article => {
                const articleElement = createArticleElement(article);
                blogGrid.appendChild(articleElement);
            });

            // 隐藏加载更多按钮（如果没有更多内容）
            loadMoreBtn.style.display = 'none';
            
            // 或者恢复按钮状态（如果还有更多内容）
            // loadMoreBtn.textContent = 'Load More Stories';
            // loadMoreBtn.disabled = false;
        }, 1000);
    });

    // 创建文章元素的函数
    function createArticleElement(article) {
        const articleDiv = document.createElement('article');
        articleDiv.className = 'blog-post';
        articleDiv.setAttribute('data-category', article.category.toLowerCase());
        articleDiv.setAttribute('data-date', article.date);

        articleDiv.innerHTML = `
            <div class="post-image">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="post-content">
                <div class="post-category">${article.category}</div>
                <h2>${article.title}</h2>
                <p class="post-meta">${formatDate(article.date)} • ${article.readTime}</p>
                <p class="post-excerpt">${article.excerpt}</p>
                <a href="#" class="read-more">Read Full Story</a>
            </div>
        `;

        return articleDiv;
    }

    // 格式化日期函数
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    // 简单的分类筛选（基础版本）
    const categoryFilter = document.querySelector('.category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function(e) {
            const selectedCategory = e.target.value;
            filterArticles(selectedCategory);
        });
    }

    function filterArticles(category) {
        const articles = document.querySelectorAll('.blog-post');
        
        articles.forEach(article => {
            if (category === 'all' || article.getAttribute('data-category') === category) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    console.log('Blog page JavaScript loaded successfully!');
});