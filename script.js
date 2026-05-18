// 1. 初始化中国地图（设置中心点和缩放级别）
const map = L.map('map', {
    center: [34.3416, 108.9398], // 中国地理中心附近
    zoom: 5,
    minZoom: 4,
    maxZoom: 12
});

// 2. 加载高德纯净版地图瓦片（免去Key，美观且符合比赛规范）
L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
    subdomains: ["1", "2", "3", "4"],
    attribution: '© 高德地图'
}).addTo(map);

// 自定义一个红星标记（更符合长征主题）
const redStarIcon = L.divIcon({
    className: 'custom-pin',
    html: `<i class="fas fa-star" style="color: #d32f2f; font-size: 24px; text-shadow: 0 2px 5px rgba(0,0,0,0.3);"></i>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
});

// 3. 循环渲染 data.js 中的打点
parkData.forEach(park => {
    const marker = L.marker(park.coordinates, { icon: redStarIcon }).addTo(map);
    
    // 鼠标悬浮在点位上显示名字
    marker.bindTooltip(park.name, { direction: 'top', offset: [0, -10] });

    // 点击打点触发弹窗
    marker.on('click', () => {
        openModal(park);
    });
});

// 4. 弹窗控制与数据渲染
let currentSlideIndex = 0;
let totalSlides = 0;

function openModal(park) {
    // 填充文本与标签
    document.getElementById('info-name').innerText = park.name;
    document.getElementById('info-address').innerText = park.address || "暂无详细地址";
    document.getElementById('info-history').innerText = park.history || "暂无历史事件记载";

    // 渲染关键词标签
    const tagsContainer = document.getElementById('info-keywords');
    tagsContainer.innerHTML = '';
    if (park.keywords && park.keywords.length > 0) {
        park.keywords.forEach(tag => {
            tagsContainer.innerHTML += `<span class="tag">${tag}</span>`;
        });
    }

    // 渲染官方入口按钮（如果为空则隐藏）
    const linkContainer = document.getElementById('info-link-container');
    if (park.officialLink) {
        linkContainer.innerHTML = `<a href="${park.officialLink}" target="_blank" class="btn-link">访问官方介绍入口 <i class="fas fa-external-link-alt"></i></a>`;
    } else {
        linkContainer.innerHTML = '';
    }

    // 渲染高级滑动图片栏
    const wrapper = document.getElementById('slider-wrapper');
    const dotsContainer = document.getElementById('slider-dots');
    const sliderContainer = document.getElementById('slider-container');
    
    wrapper.innerHTML = '';
    dotsContainer.innerHTML = '';
    currentSlideIndex = 0;

    if (park.images && park.images.length > 0) {
        sliderContainer.style.display = 'block'; // 显示图片区域
        totalSlides = park.images.length;
        
        park.images.forEach((imgUrl, index) => {
            wrapper.innerHTML += `<img src="${imgUrl}" alt="${park.name}">`;
            dotsContainer.innerHTML += `<div class="dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></div>`;
        });
        updateSliderPosition();
        
        // 如果只有一张图，隐藏切换箭头
        const arrows = document.querySelectorAll('.slide-arrow');
        arrows.forEach(arrow => arrow.style.display = totalSlides <= 1 ? 'none' : 'block');
    } else {
        // 如果没有任何图片，直接隐藏整个左侧图片栏
        sliderContainer.style.display = 'none';
    }

    // 激活弹窗显现
    document.getElementById('details-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('details-modal').classList.remove('active');
}

// 5. 高级阻尼滑动轮播图逻辑
function moveSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= totalSlides) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = totalSlides - 1;
    updateSliderPosition();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateSliderPosition();
}

function updateSliderPosition() {
    const wrapper = document.getElementById('slider-wrapper');
    wrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    // 更新点指示器状态
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

// 点击弹窗外部遮罩也可以关闭弹窗
document.getElementById('details-modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});