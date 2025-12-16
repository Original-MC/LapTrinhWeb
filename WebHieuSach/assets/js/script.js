/**
 * ===========================================
 * CHỨC NĂNG 1: CHUYỂN ĐỔI GIỮA CÁC TRANG 
 * (HOME <-> DETAIL)
 * ===========================================
 */
function switchPage(pageId) {
    const homePage = document.getElementById('home-page');
    const detailPage = document.getElementById('detail-page');
    const navLinks = document.querySelectorAll('.menu a');
    const figmaFrame = document.querySelector('.figma-frame');

    // Cập nhật hiển thị trang
    if (pageId === 'home') {
        homePage.style.display = 'block';
        detailPage.style.display = 'none';
        // Đặt chiều cao khung Figma về chiều cao Trang Chủ
        if (figmaFrame) figmaFrame.style.minHeight = '5152px'; 
        
    } else if (pageId === 'detail') {
        homePage.style.display = 'none';
        detailPage.style.display = 'block';
        // Đặt chiều cao khung Figma về chiều cao Trang Chi Tiết (giả định)
        if (figmaFrame) figmaFrame.style.minHeight = '2200px'; 
        
        // Mở tab "Mô tả chi tiết" khi chuyển sang trang chi tiết
        showDetailTab('description'); 
    }
    
    // Cập nhật trạng thái active trên navbar
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });

    window.scrollTo(0, 0); // Cuộn lên đầu trang khi chuyển trang
}

/**
 * ===========================================
 * CHỨC NĂNG 2: CHUYỂN ĐỔI TAB CHI TIẾT SÁCH
 * ===========================================
 */
function showDetailTab(tabId) {
    const contents = document.querySelectorAll('#detail-page .tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    
    const items = document.querySelectorAll('#detail-page .tab-item');
    items.forEach(item => {
        item.classList.remove('active');
    });

    // Sử dụng ID để kích hoạt nội dung và nút
    const contentElement = document.getElementById(tabId + '-content');
    if (contentElement) {
        contentElement.style.display = 'block';
    }
    
    // Tìm nút tab dựa trên ID (tab-description, tab-specs, tab-review)
    const tabItemElement = document.getElementById('tab-' + tabId);
    if (tabItemElement) {
        tabItemElement.classList.add('active');
    }
}

/**
 * ===========================================
 * KHỞI TẠO (CHẠY KHI TẢI TRANG)
 * ===========================================
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mặc định hiển thị Trang Chủ và set active cho menu
    switchPage('home'); 

    // 2. Gán sự kiện cho Menu Navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            
            if (page === 'home' || page === 'detail') {
                switchPage(page);
            } else {
                alert(`Bạn đã nhấn vào mục "${this.textContent.trim()}". Nếu là trang tĩnh, cần tạo nội dung cho trang này.`);
            }
        });
    });
    
    // 3. Gán sự kiện cho các Card Sách để chuyển sang Trang Chi Tiết
    const allCards = document.querySelectorAll('.book-grid .book-card');
    allCards.forEach(card => {
        // Chỉ thêm sự kiện cho các card chưa có onclick inline (tránh xung đột)
        if (!card.getAttribute('onclick')) {
            card.addEventListener('click', () => {
                switchPage('detail');
            });
        }
    });
});