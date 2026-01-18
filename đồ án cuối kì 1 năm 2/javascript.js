document.addEventListener("DOMContentLoaded", function() {
    
    // ======================================================
    // 1. XỬ LÝ NAV "DANH MỤC" -> VỀ TRANG DANHMUC.HTML
    // ======================================================
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        // Tìm thẻ a nào có chữ "Danh Mục" thì gán link cho nó
        if (link.innerText.trim() === "Danh Mục") {
            link.href = "danhmuc.html";
        }
    });

    // ======================================================
    // 2. HIỆU ỨNG CHUYỂN TRANG MƯỢT MÀ (FADE IN/OUT)
    // ======================================================
    
    // a. Hiện trang (Fade In) ngay khi tải xong
    setTimeout(() => {
        document.body.classList.add('page-loaded');
    }, 50); // Delay nhỏ để trình duyệt kịp nhận CSS

    // b. Xử lý khi click vào link để chuyển trang (Fade Out)
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Chỉ áp dụng hiệu ứng nếu là link nội bộ (không phải #, không phải javascript, không mở tab mới)
            if (href && href !== '#' && !href.startsWith('javascript') && this.target !== '_blank') {
                e.preventDefault(); // Ngăn chuyển trang ngay lập tức
                
                // Mờ trang đi
                document.body.classList.remove('page-loaded');

                // Đợi 0.5s (bằng thời gian trong CSS) rồi mới chuyển
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });

    // ======================================================
    // 3. CHỨC NĂNG TÌM KIẾM SÁCH (THÔNG MINH)
    // ======================================================
    const searchInput = document.getElementById('search-input');
    
    // Chỉ chạy chức năng tìm kiếm nếu trang hiện tại có thanh tìm kiếm với đúng ID
    if (searchInput) {
        const productItems = document.querySelectorAll('.product-item');
        
        // Tạo thông báo "Không tìm thấy" nếu chưa có
        let noResultMsg = document.getElementById('no-result');
        if (!noResultMsg) {
            noResultMsg = document.createElement('div');
            noResultMsg.id = 'no-result';
            noResultMsg.style.display = 'none';
            noResultMsg.style.textAlign = 'center';
            noResultMsg.style.padding = '20px';
            noResultMsg.style.color = '#777';
            noResultMsg.style.fontSize = '18px';
            noResultMsg.innerText = 'Không tìm thấy sách nào phù hợp.';
            
            // Chèn vào sau danh sách sản phẩm
            const productList = document.querySelector('.product-list');
            if (productList) productList.appendChild(noResultMsg);
        }

        // Hàm xóa dấu tiếng Việt (Ví dụ: "Thép" -> "thep")
        function removeVietnameseTones(str) {
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
            str = str.replace(/đ/g, "d");
            str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
            str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
            str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
            str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
            str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
            str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
            str = str.replace(/Đ/g, "D");
            // Chuẩn hóa và xóa ký tự đặc biệt
            return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        }

        // Lắng nghe sự kiện khi gõ phím
        searchInput.addEventListener('input', function(e) {
            const txtSearch = removeVietnameseTones(e.target.value.trim());
            let hasResult = false;

            productItems.forEach(item => {
                const nameElement = item.querySelector('.product-name');
                if (nameElement) {
                    const nameOriginal = nameElement.innerText;
                    const nameClean = removeVietnameseTones(nameOriginal);

                    // Kiểm tra xem tên sách có chứa từ khóa tìm kiếm không
                    if (nameClean.includes(txtSearch)) {
                        item.style.display = ''; // Hiện
                        hasResult = true;
                    } else {
                        item.style.display = 'none'; // Ẩn
                    }
                }
            });

            // Ẩn hiện thông báo kết quả
            if (noResultMsg) {
                // Nếu tìm không ra VÀ ô tìm kiếm không trống -> Hiện thông báo
                if (!hasResult && txtSearch.length > 0) {
                    noResultMsg.style.display = 'block';
                } else {
                    noResultMsg.style.display = 'none';
                }
            }
        });
    }
});