// =========================================================================================
// PHẦN 1: KHO DỮ LIỆU SÁCH CHI TIẾT (books)
// (ĐÃ CHUẨN HÓA TÊN FILE ẢNH VÀ CHỈ DÙNG TÊN CƠ SỞ CHO 5 CUỐN LỖI)
// =========================================================================================

const books = {
    // 1. NHÀ GIẢ KIM
    "nha-gia-kim": {
        title: "Nhà Giả Kim (The Alchemist)",
        author: "Paulo Coelho",
        priceOld: "99.000đ",
        priceNew: "79.000đ",
        img: "promo-img.jpg.jpg", // GIỮ NGUYÊN (ĐÃ CHẠY TỐT)
        category: "Văn Học Kinh Điển",
        rating: 4.9,
        descFull: `<p><strong>"Nhà Giả Kim"</strong>... hành trình khám phá và theo đuổi "Vận mệnh cá nhân".</p>`,
        specs: [{ k: "Nhà cung cấp", v: "Nhã Nam" }, { k: "NXB", v: "NXB Văn Học" }, { k: "Số trang", v: "228 trang" }],
        reviews: [{ name: "Độc giả ẩn danh", date: "01/03/2024", star: 5, content: "Cuốn sách đã thay đổi tư duy của tôi về ước mơ." }]
    },
    // 2. ĐẮC NHÂN TÂM
    "dac-nhan-tam": {
        title: "Đắc Nhân Tâm (Khổ Lớn)",
        author: "Dale Carnegie",
        priceOld: "86.000đ",
        priceNew: "68.000đ",
        img: "dac-nhan-tam.webp.webp", // GIỮ NGUYÊN (ĐÃ CHẠY TỐT)
        category: "Sách Kỹ Năng",
        rating: 4.7,
        descFull: `<p><strong>Đắc Nhân Tâm</strong> là cuốn sách kỹ năng sống bán chạy nhất mọi thời đại.</p>`,
        specs: [{ k: "Nhà cung cấp", v: "First News" }, { k: "NXB", v: "NXB Tổng Hợp TPHCM" }, { k: "Số trang", v: "320 trang" }],
        reviews: [{ name: "CEO Khởi Nghiệp", date: "10/03/2024", star: 5, content: "Cuốn sách gối đầu giường cho bất kỳ ai làm quản lý." }]
    },
    // 3. TUỔI TRẺ ĐÁNG GIÁ BAO NHIÊU
    "tuoi-tre-dang-gia": {
        title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
        author: "Rosie Nguyễn",
        priceOld: "90.000đ",
        priceNew: "72.000đ",
        img: "tuoi-tre-dang-gia.jpg.jpg",
        category: "Sách Kỹ Năng Trẻ",
        rating: 4.9,
        descFull: `<p>... ngọn đuốc dẫn đường cho hàng triệu người trẻ Việt Nam đang hoang mang. ...</p>`,
        specs: [{ k: "Nhà cung cấp", v: "Nhã Nam" }, { k: "NXB", v: "NXB Hội Nhà Văn" }, { k: "Số trang", v: "285 trang" }],
        reviews: [{ name: "Sinh viên năm cuối", date: "22/03/2024", star: 5, content: "Đọc xong muốn xách balo lên và đi ngay lập tức." }]
    },
    // 4. CÂY CAM NGỌT CỦA TÔI
    "cay-cam-ngot": {
        title: "Cây Cam Ngọt Của Tôi",
        author: "José Mauro de Vasconcelos",
        priceOld: "108.000đ",
        priceNew: "86.000đ",
        img: "cay-cam-ngot.jpg", 
        category: "Văn Học Kinh Điển",
        rating: 5.0,
        descFull: `<p>...Câu chuyện đầy cảm động về Zezé, một cậu bé 5 tuổi thông minh... </p>`,
        specs: [{ k: "Nhà cung cấp", v: "Nhã Nam" }, { k: "NXB", v: "NXB Hội Nhà Văn" }, { k: "Số trang", v: "244 trang" }],
        reviews: [{ name: "Thanh Trúc", date: "02/04/2024", star: 5, content: "Một cuốn sách đau lòng nhưng đẹp đẽ vô cùng." }]
    },
    // 5. DẾ MÈN PHIÊU LƯU KÝ
    "de-men-phieu-luu-ky": {
        title: "Dế Mèn Phiêu Lưu Ký",
        author: "Tô Hoài",
        priceOld: "55.000đ",
        priceNew: "45.000đ",
        img: "de-men.jpg",
        category: "Văn Học Thiếu Nhi",
        rating: 4.8,
        descFull: `<p>...Tác phẩm văn học thiếu nhi kinh điển nhất của Việt Nam. ...</p>`,
        specs: [{ k: "NXB", v: "NXB Kim Đồng" }, { k: "Số trang", v: "144 trang" }],
        reviews: [{ name: "Bố Bim", date: "01/06/2023", star: 5, content: "Mua cho con trai đọc để biết văn học Việt Nam hay thế nào." }]
    },
    // 6. HARRY POTTER
    "harry-potter": {
        title: "Harry Potter Và Hòn Đá Phù Thuỷ (Tập 1)",
        author: "J.K. Rowling",
        priceOld: "150.000đ",
        priceNew: "125.000đ",
        img: "harry-potter.gif.gif", 
        category: "Văn Học Giả Tưởng",
        rating: 5.0,
        descFull: `<p>...Cuốn sách mở đầu cho series huyền thoại làm say mê hàng triệu độc giả... </p>`, 
        specs: [{ k: "NXB", v: "NXB Trẻ" }, { k: "Số trang", v: "360 trang" }], 
        reviews: [{ name: "Nguyễn Nhật Ánh", date: "12/02/2024", star: 5, content: "Một kiệt tác của trí tưởng tượng." }]
    },
    // 7. HOÀNG TỬ BÉ
    "hoang-tu-be": {
        title: "Hoàng Tử Bé (Tái Bản)",
        author: "Antoine De Saint-Exupéry",
        priceOld: "75.000đ",
        priceNew: "52.500đ",
        img: "hoang-tu-be.jpg.jpg",
        category: "Văn Học Thiếu Nhi",
        rating: 5.0,
        descFull: `<p>...Hoàng Tử Bé là một tác phẩm triết học dành cho người lớn đã từng là trẻ con. ...</p>`,
        specs: [{ k: "NXB", v: "NXB Hội Nhà Văn" }, { k: "Số trang", v: "100 trang" }],
        reviews: [{ name: "Mẹ Gấu", date: "14/02/2024", star: 5, content: "Mua cho con mà mẹ đọc khóc luôn. Quá đẹp và ý nghĩa." }]
    },
    // 8. MẮT BIẾC (ĐÃ SỬA TÊN CƠ SỞ)
    "mat-biec": {
        title: "Mắt Biếc",
        author: "Nguyễn Nhật Ánh",
        priceOld: "110.000đ",
        priceNew: "88.000đ",
        img: "mat-biec", // <-- TÊN CƠ SỞ
        category: "Truyện Dài",
        rating: 4.9,
        descFull: `<p>Mắt Biếc được xem là tác phẩm buồn nhất của nhà văn Nguyễn Nhật Ánh. Câu chuyện kể về mối tình đơn phương day dứt của Ngạn dành cho Hà Lan - cô bạn gái có đôi mắt biếc đẹp tuyệt trần.</p>`,
        specs: [{ k: "NXB", v: "NXB Trẻ" }, { k: "Số trang", v: "300 trang" }],
        reviews: [{ name: "Fan Nguyễn Nhật Ánh", date: "14/02/2024", star: 5, content: "Đọc lần nào cũng khóc. Thương thầy Ngạn quá." }]
    },
    // 9. RỪNG NA UY (ĐÃ SỬA TÊN CƠ SỞ)
    "rung-na-uy": {
        title: "Rừng Na Uy",
        author: "Haruki Murakami",
        priceOld: "135.000đ",
        priceNew: "108.000đ",
        img: "rung-na-uy", // <-- TÊN CƠ SỞ
        category: "Văn Học Nước Ngoài",
        rating: 4.5,
        descFull: `<p>Tiểu thuyết nổi tiếng nhất của Haruki Murakami, lấy bối cảnh nước Nhật những năm 1960. Cuốn sách là một bản nhạc buồn về tuổi trẻ, về sự cô đơn, và sự mất mát. (Phù hợp độc giả 18+)</p>`,
        specs: [{ k: "NXB", v: "Nhã Nam" }, { k: "Số trang", v: "550 trang" }],
        reviews: [{ name: "Người qua đường", date: "25/03/2024", star: 4, content: "Một cuốn sách ám ảnh." }]
    },
    // 10. HAI SỐ PHẬN (ĐÃ SỬA TÊN CƠ SỞ)
    "hai-so-phan": {
        title: "Hai Số Phận (Kane and Abel)",
        author: "Jeffrey Archer",
        priceOld: "189.000đ",
        priceNew: "145.000đ",
        img: "hai-so-phan", // <-- TÊN CƠ SỞ
        category: "Văn Học Nước Ngoài",
        rating: 4.9,
        descFull: `<p>Tiểu thuyết kinh điển về cuộc chiến kéo dài 60 năm giữa hai người đàn ông sinh ra cùng ngày nhưng ở hai thế giới khác biệt. Một câu chuyện hùng tráng về tham vọng và hận thù.</p>`,
        specs: [{ k: "NXB", v: "NXB Văn Học" }, { k: "Số trang", v: "700 trang" }],
        reviews: [{ name: "Kinh Doanh 4.0", date: "15/03/2024", star: 5, content: "Sách dày nhưng đọc vèo cái là hết. Quá kịch tính." }]
    },
    // 11. TẮT ĐÈN (ĐÃ SỬA TÊN CƠ SỞ)
    "tat-den": {
        title: "Tắt Đèn",
        author: "Ngô Tất Tố",
        priceOld: "55.000đ",
        priceNew: "42.000đ",
        img: "tat-den", // <-- TÊN CƠ SỞ
        category: "Văn Học Hiện Thực",
        rating: 4.7,
        descFull: `<p>Tắt Đèn là bức tranh chân thực và tàn khốc về nông thôn Việt Nam dưới ách thống trị của thực dân phong kiến. Nhân vật chính là Chị Dậu - điển hình cho người phụ nữ nông dân lực điền.</p>`,
        specs: [{ k: "NXB", v: "NXB Văn Học" }, { k: "Số trang", v: "200 trang" }],
        reviews: [{ name: "Sử Địa Văn", date: "10/02/2024", star: 5, content: "Tác phẩm tố cáo tội ác phong kiến đanh thép nhất." }]
    },
    // 12. SỐ ĐỎ (ĐÃ SỬA TÊN CƠ SỞ)
    "so-do": {
        title: "Số Đỏ",
        author: "Vũ Trọng Phụng",
        priceOld: "75.000đ",
        priceNew: "60.000đ",
        img: "so-do", // <-- TÊN CƠ SỞ
        category: "Văn Học Việt Nam",
        rating: 4.8,
        descFull: `<p>Số Đỏ là kiệt tác văn học trào phúng, vạch trần bộ mặt giả dối, lố lăng của xã hội tư sản thành thị Việt Nam thời Pháp thuộc với những phong trào "Âu hóa" đầy kệch cỡm.</p>`,
        specs: [{ k: "NXB", v: "NXB Văn Học" }, { k: "Số trang", v: "260 trang" }],
        reviews: [{ name: "Học sinh giỏi Văn", date: "15/01/2024", star: 5, content: "Đọc bao nhiêu lần vẫn buồn cười. Xuân Tóc Đỏ đúng là thánh." }]
    },
    // ... (Các sách còn lại) ...
    "ong-gia-va-bien-ca": { title: "Ông Già Và Biển Cả", author: "Ernest Hemingway", priceOld: "65.000đ", priceNew: "48.000đ", img: "ong-gia-va-bien-ca.jpg", category: "Văn Học Kinh Điển", rating: 4.6, descFull: `<p>...Cuộc chiến sinh tử giữa ông lão đánh cá đơn độc... </p>`, specs: [{ k: "NXB", v: "Nhã Nam" }, { k: "Số trang", v: "124 trang" }], reviews: [] },
    "chien-binh-cau-vong": { title: "Chiến Binh Cầu Vồng", author: "Andrea Hirata", priceOld: "109.000đ", priceNew: "87.000đ", img: "chien-binh-cau-vong.jpg", category: "Văn Học Giáo Dục", rating: 5.0, descFull: `<p>...Câu chuyện có thật về 10 đứa trẻ nghèo khổ... </p>`, specs: [{ k: "NXB", v: "Nhã Nam" }, { k: "Số trang", v: "428 trang" }], reviews: [] },
    "nguoi-dua-dieu": { title: "Người Đua Diều", author: "Khaled Hosseini", priceOld: "125.000đ", priceNew: "99.000đ", img: "nguoi-dua-dieu.jpg", category: "Tiểu Thuyết", rating: 4.9, descFull: `<p>...Câu chuyện lay động tâm can về tình bạn, sự phản bội... </p>`, specs: [{ k: "NXB", v: "Nhã Nam" }, { k: "Số trang", v: "460 trang" }], reviews: [] }
};


function renderBookDetail(bookId) {
    const book = books[bookId];

    if (!book) {
        console.error("Không tìm thấy sách với ID: " + bookId);
        window.location.href = 'index.html'; 
        return; 
    } 

    const titleElement = document.getElementById('book-title'); 
    const authorElement = document.getElementById('book-author');
    const imgElement = document.getElementById('book-img');
    const categoryElement = document.getElementById('book-category');
    
    if(titleElement) titleElement.innerText = book.title;
    if(authorElement) authorElement.innerHTML = `Tác giả: <b>${book.author}</b>`;
    if(categoryElement) categoryElement.innerText = book.category;
    document.title = book.title;
    
    // ===============================================
    // CẢI TIẾN LOGIC LOAD ẢNH ĐA ĐỊNH DẠNG
    // ===============================================
    if(imgElement) {
        const baseSrc = `../assets/images/${book.img}`;
        const extensions = ['webp', 'png', 'jpg', 'jpeg'];
        let extensionIndex = 0;

        function tryLoadImage() {
            if (extensionIndex >= extensions.length) {
                // Nếu thử hết các định dạng phổ biến mà vẫn lỗi
                imgElement.src = 'https://via.placeholder.com/400x500.png?text=Image+Not+Found'; 
                return;
            }

            const currentExt = extensions[extensionIndex];
            let newSrc;

            if (book.img.includes('.')) {
                 // Trường hợp tên file đã có đuôi (ví dụ: promo-img.jpg.jpg), dùng nó cho lần thử đầu tiên
                 newSrc = `../assets/images/${book.img}`;
                 // Sau đó, trong lần thử tiếp theo, ta dùng bookId làm base
            } else {
                 // Trường hợp tên file là tên cơ sở (mat-biec, rung-na-uy)
                 newSrc = `../assets/images/${book.img}.${currentExt}`;
            }

            // Gán src mới và tăng index
            imgElement.src = newSrc;
            extensionIndex++;
        }
        
        // Đặt handler lỗi
        imgElement.onerror = function() {
            tryLoadImage();
        };

        // Lần thử đầu tiên: dùng tên file chính xác (đã có trong book.img)
        if (book.img.includes('.')) {
            imgElement.src = `../assets/images/${book.img}`;
            imgElement.alt = book.title;
            // Nếu không lỗi, hàm onerror sẽ không chạy.
        } else {
             // Nếu chỉ là tên cơ sở, ta bắt đầu thử từ .webp (index 0)
             imgElement.src = `../assets/images/${book.img}.${extensions[0]}`;
             imgElement.alt = book.title;
        }

    }
    // ===============================================
    
    const priceOld = document.getElementById('price-old');
    const priceNew = document.getElementById('price-new');
    if(priceOld) priceOld.innerText = book.priceOld;
    if(priceNew) priceNew.innerText = book.priceNew;
    
    const ratingCount = document.querySelector('.rating-count');
    if (ratingCount) ratingCount.innerText = `(${book.reviews ? book.reviews.length : 0} đánh giá)`;
    
    // 2. Render Tab Mô Tả
    if (document.getElementById('tab-desc-render')) {
        document.getElementById('tab-desc-render').innerHTML = book.descFull;
    }

    // 3. Render Tab Thông Số
    if (document.getElementById('tab-specs-render') && book.specs) {
        const specsHTML = book.specs.map(item => `
            <tr>
                <td>${item.k}</td>
                <td>${item.v}</td>
            </tr>
        `).join('');
        document.getElementById('tab-specs-render').innerHTML = specsHTML;
    }

    // 4. Render Tab Bình Luận
    if (document.getElementById('tab-reviews-render') && book.reviews) {
        const reviewsHTML = book.reviews.map(rev => `
            <div class="review-item">
                <div class="review-header">
                    <span class="review-author">${rev.name}</span>
                    <span class="review-date">${rev.date}</span>
                </div>
                <div class="review-stars">
                    ${'<i class="fas fa-star"></i>'.repeat(rev.star)}
                    ${'<i class="far fa-star"></i>'.repeat(5 - rev.star)}
                </div>
                <p class="review-text">${rev.content}</p>
            </div>
        `).join('');
        document.getElementById('tab-reviews-render').innerHTML = reviewsHTML;
    }
}

function showDetailTab(tabItem) {
    const tabs = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.style.display = 'none');
    
    tabItem.classList.add('active');
    const tabId = tabItem.getAttribute('data-tab');
    
    if(tabId === 'description') document.getElementById('description-content').style.display = 'block';
    if(tabId === 'specs') document.getElementById('specs-content').style.display = 'block';
    if(tabId === 'review') document.getElementById('review-content').style.display = 'block';
}


// =========================================================================================
// PHẦN 3: LOGIC KHỞI TẠO VÀ GÁN SỰ KIỆN
// =========================================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    const bookIdsInGrid = [
        'nha-gia-kim', 'dac-nhan-tam', 'tuoi-tre-dang-gia', 'cay-cam-ngot', 'de-men-phieu-luu-ky',
        'harry-potter', 'hoang-tu-be', 'mat-biec', 'rung-na-uy', 'hai-so-phan', 
        'tat-den', 'so-do', 'ong-gia-va-bien-ca', 'chien-binh-cau-vong', 'nguoi-dua-dieu'
    ];
    
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'index.html' || currentPage === '') {
        // ==========================================================
        // LOGIC TRANG CHỦ (index.html) - FIX LỖI HIỂN THỊ VÀ LIÊN KẾT
        // ==========================================================

        const homePage = document.getElementById('home-page');
        if (homePage) {
            homePage.style.display = 'block'; 
        }
        
        const allCards = document.querySelectorAll('.book-grid .book-card');
        
        allCards.forEach((card, index) => {
            const bookId = bookIdsInGrid[index];
            if (bookId) {
                // GHI ĐÈ SỰ KIỆN ONCLICK CŨ (switchPage) BẰNG LIÊN KẾT MPA MỚI
                card.onclick = () => {
                    window.location.href = `index3.html?id=${bookId}`;
                };
            }
        });
        
        // GHI ĐÈ CÁC LIÊN KẾT KHÁC TRÊN NAVBAR/BUTTONS
        document.querySelectorAll('.navbar a[data-page="detail"], .banner .btn-primary').forEach(link => {
            link.onclick = (e) => {
                e.preventDefault();
                window.location.href = `index3.html?id=nha-gia-kim`;
            };
        });

        // Sửa lỗi liên kết logo navbar về trang chủ
        document.querySelector('.navbar .logo').onclick = () => {
             window.location.href = `index.html`;
        };

    } else if (currentPage === 'index3.html') {
        // ==========================================================
        // LOGIC TRANG CHI TIẾT (index3.html)
        // ==========================================================

        const params = new URLSearchParams(window.location.search);
        const bookId = params.get('id');
        
        if (bookId) {
            renderBookDetail(bookId);
        } else {
            renderBookDetail('nha-gia-kim'); 
        }

        // Gán sự kiện chuyển tab và Logic Quantity control
        document.querySelectorAll('.tab-item').forEach(tab => {
            tab.addEventListener('click', function() {
                showDetailTab(this);
            });
        });
        
        const qtyInput = document.getElementById('quantity');
        const btnPlus = document.getElementById('plus-btn');
        const btnMinus = document.getElementById('minus-btn');
        if (btnPlus && btnMinus) {
            btnPlus.onclick = () => { if (qtyInput.value < 100) qtyInput.value++ };
            btnMinus.onclick = () => { if (qtyInput.value > 1) qtyInput.value-- };
        }
        
        // Sửa link Navbar và Breadcrumb về Trang Chủ
        document.querySelectorAll('.navbar a[href="#"], .breadcrumb a[href="#"]').forEach(link => {
            if (link.textContent.includes('Trang chủ') || link.getAttribute('href') === '#') {
                link.href = 'index.html';
            }
        });
        const logoLink = document.querySelector('.navbar .logo a');
        if (logoLink) logoLink.href = 'index.html';

    }
});