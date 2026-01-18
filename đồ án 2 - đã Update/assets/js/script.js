    document.addEventListener('DOMContentLoaded', () => {

    // --- KHO DỮ LIỆU SÁCH CHI TIẾT (FULL DATA) ---
    const books = {
        // 1. TÔI VẼ
        "toi-ve": {
            title: "Tôi Vẽ - Phương Pháp Tự Học Vẽ Truyện Tranh",
            author: "Nhiều tác giả (Đông A)",
            priceOld: "100.000đ",
            priceNew: "80.000đ",
            img: "../assets/images/book-cover.jpg",
            category: "Mỹ Thuật & Thiết Kế",
            rating: 4.8,
            descFull: `
                <p><strong>"Tôi vẽ"</strong> là cuốn cẩm nang nhập môn tuyệt vời dành cho những bạn trẻ yêu thích truyện tranh và mong muốn tự tay sáng tạo nên những nhân vật của riêng mình. Không giáo điều hay lý thuyết khô khan, cuốn sách đi thẳng vào thực hành với phong cách trình bày trẻ trung, dễ hiểu.</p>
                <p>Nội dung sách bao quát toàn bộ quy trình sáng tác:</p>
                <ul>
                    <li><strong>Dụng cụ:</strong> Giới thiệu các loại bút, giấy, mực và cách sử dụng hiệu quả.</li>
                    <li><strong>Hình họa căn bản:</strong> Tỷ lệ cơ thể người, vẽ khuôn mặt, bàn tay, bàn chân ở nhiều góc độ.</li>
                    <li><strong>Thiết kế nhân vật:</strong> Cách tạo ra cá tính nhân vật qua trang phục, kiểu tóc và biểu cảm.</li>
                    <li><strong>Phối cảnh & Bối cảnh:</strong> Kỹ thuật vẽ background, luật xa gần (1 điểm tụ, 2 điểm tụ).</li>
                    <li><strong>Kỹ thuật kể chuyện:</strong> Phân khung (paneling), dẫn dắt mắt người đọc và tạo nhịp điệu cho trang truyện.</li>
                </ul>
                <p>Đây là "người thầy" đầu tiên không thể thiếu trên bàn vẽ của bất kỳ họa sĩ truyện tranh tương lai nào.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "Đông A" },
                { k: "NXB", v: "NXB Dân Trí" },
                { k: "Tác giả", v: "Nhiều tác giả" },
                { k: "Hình thức", v: "Bìa mềm" },
                { k: "Số trang", v: "300 trang" },
                { k: "Kích thước", v: "19 x 25 cm" }
            ],
            reviews: [
                { name: "Phan Vũ Linh", date: "20/10/2023", star: 5, content: "Sách minh họa cực đẹp, hướng dẫn từng bước một rất dễ theo dõi." },
                { name: "Trần Minh", date: "15/12/2023", star: 4, content: "Nội dung cơ bản, rất tốt cho người mới bắt đầu (newbie)." },
                { name: "Lê Lan", date: "05/01/2024", star: 5, content: "Giấy dày dặn, in sắc nét. Mình đã học được cách vẽ phối cảnh nhờ cuốn này." }
            ]
        },

        // 2. HARRY POTTER
        "harry-potter": {
            title: "Harry Potter Và Hòn Đá Phù Thuỷ (Tập 1)",
            author: "J.K. Rowling",
            priceOld: "150.000đ",
            priceNew: "125.000đ",
            img: "../assets/images/harry-potter.jpg",
            category: "Văn Học Giả Tưởng",
            rating: 5.0,
            descFull: `
                <p><strong>Harry Potter và Hòn đá Phù thủy</strong> là cuốn sách mở đầu cho series huyền thoại làm say mê hàng triệu độc giả trên toàn thế giới. Câu chuyện bắt đầu vào ngày sinh nhật thứ 11 của cậu bé mồ côi Harry Potter, khi cậu nhận được lá thư nhập học từ Trường Phù thủy và Pháp sư Hogwarts.</p>
                <p>Từ một cậu bé gầy gò sống trong gầm cầu thang nhà dượng Dursley, Harry bước vào một thế giới diệu kỳ với đũa phép, chổi bay, Thầy Dumbledore uy thái và cả những người bạn tuyệt vời như Ron và Hermione.</p>
                <p>Tuy nhiên, thế giới phép thuật không chỉ có màu hồng. Harry phải đối mặt với quá khứ bí ẩn về cái chết của cha mẹ mình và sự trỗi dậy của Chúa tể Hắc ám Voldemort. Cuộc phiêu lưu bảo vệ Hòn đá Phù thủy chính là thử thách đầu tiên chứng minh lòng dũng cảm của cậu.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "NXB Trẻ" },
                { k: "NXB", v: "NXB Trẻ" },
                { k: "Tác giả", v: "J.K. Rowling" },
                { k: "Người dịch", v: "Lý Lan" },
                { k: "Hình thức", v: "Bìa mềm" },
                { k: "Số trang", v: "360 trang" }
            ],
            reviews: [
                { name: "Nguyễn Nhật Ánh", date: "12/02/2024", star: 5, content: "Một kiệt tác của trí tưởng tượng. Đọc đi đọc lại vẫn thấy hay." },
                { name: "Potterhead Vietnam", date: "10/01/2024", star: 5, content: "Bản dịch của cô Lý Lan vẫn là huyền thoại. Sách in đẹp." },
                { name: "Thùy Chi", date: "22/12/2023", star: 5, content: "Mua tặng cháu gái mà mình đọc ké xong mê luôn." }
            ]
        },

        // 3. NHÀ GIẢ KIM
        "nha-gia-kim": {
            title: "Nhà Giả Kim",
            author: "Paulo Coelho",
            priceOld: "79.000đ",
            priceNew: "63.000đ",
            img: "../assets/images/nha-gia-kim.jpg",
            category: "Tiểu Thuyết",
            rating: 4.9,
            descFull: `
                <p><strong>"Nhà Giả Kim"</strong> (The Alchemist) là một trong những cuốn sách bán chạy nhất lịch sử, chỉ xếp sau Kinh Thánh. Cuốn sách kể về hành trình của Santiago, một chàng chăn cừu người Tây Ban Nha, người đã dám từ bỏ cuộc sống an nhàn để đi tìm kho báu ở Kim Tự Tháp Ai Cập theo lời báo mộng.</p>
                <p>Xuyên suốt hành trình, Santiago gặp gỡ nhiều người: một bà già gypsy, một vị vua già, và một nhà giả kim. Mỗi cuộc gặp gỡ là một bài học sâu sắc về việc lắng nghe trái tim và theo đuổi "Vận mệnh cá nhân".</p>
                <blockquote>"Khi bạn khao khát một điều gì đó, cả vũ trụ sẽ hợp lực giúp bạn đạt được điều đó."</blockquote>
                <p>Cuốn sách không chỉ là một câu chuyện phiêu lưu, mà là một lời động viên mạnh mẽ cho bất cứ ai đang hoài nghi về ước mơ của mình.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "Nhã Nam" },
                { k: "NXB", v: "NXB Văn Học" },
                { k: "Tác giả", v: "Paulo Coelho" },
                { k: "Kích thước", v: "13 x 20.5 cm" },
                { k: "Số trang", v: "228 trang" }
            ],
            reviews: [
                { name: "Độc giả ẩn danh", date: "01/03/2024", star: 5, content: "Cuốn sách đã thay đổi tư duy của tôi về ước mơ." },
                { name: "Hải Đăng", date: "28/02/2024", star: 4, content: "Sách mỏng nhưng triết lý sâu sắc. Tuy nhiên đoạn kết hơi hụt hẫng một chút." },
                { name: "Thu Hà", date: "15/01/2024", star: 5, content: "Sách gối đầu giường của mình. Đọc mỗi khi mất phương hướng." }
            ]
        },

        // 4. HOÀNG TỬ BÉ
        "hoang-tu-be": {
            title: "Hoàng Tử Bé (Tái Bản)",
            author: "Antoine De Saint-Exupéry",
            priceOld: "75.000đ",
            priceNew: "52.500đ",
            img: "../assets/images/hoang-tu-be.jpg",
            category: "Sách Thiếu Nhi",
            rating: 5.0,
            descFull: `
                <p><strong>Hoàng Tử Bé</strong> không chỉ là một cuốn sách thiếu nhi, mà là một tác phẩm triết học dành cho người lớn đã từng là trẻ con. Câu chuyện kể về một phi công bị rơi máy bay giữa sa mạc Sahara và cuộc gặp gỡ kỳ lạ với một cậu bé tóc vàng đến từ tiểu tinh cầu B-612.</p>
                <p>Qua những câu chuyện ngây thơ của Hoàng Tử Bé về bông hoa hồng kiêu kỳ, về con cừu, về những hành tinh kỳ quặc có ông vua, gã khoác lác hay nhà buôn... tác giả nhẹ nhàng gửi gắm thông điệp về tình yêu, tình bạn và trách nhiệm:</p>
                <p><em>"Người ta chỉ nhìn thấy thật rõ ràng bằng trái tim. Cái cốt yếu thì mắt thường không nhìn thấy được."</em></p>
                <p>Đây là cuốn sách trong sáng nhất, buồn nhất và đẹp nhất mà bạn có thể đọc.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "Nhã Nam" },
                { k: "NXB", v: "NXB Hội Nhà Văn" },
                { k: "Tác giả", v: "Antoine De Saint-Exupéry" },
                { k: "Hình thức", v: "Bìa mềm" },
                { k: "Số trang", v: "100 trang" }
            ],
            reviews: [
                { name: "Mẹ Gấu", date: "14/02/2024", star: 5, content: "Mua cho con mà mẹ đọc khóc luôn. Quá đẹp và ý nghĩa." },
                { name: "Tuấn Tú", date: "30/01/2024", star: 5, content: "Bản dịch của Nhã Nam rất trau chuốt. Hình minh họa màu tuyệt vời." }
            ]
        },

        // 5. ĐẮC NHÂN TÂM
        "dac-nhan-tam": {
            title: "Đắc Nhân Tâm (Khổ Lớn)",
            author: "Dale Carnegie",
            priceOld: "86.000đ",
            priceNew: "68.000đ",
            img: "../assets/images/dac-nhan-tam.jpg",
            category: "Sách Kĩ Năng Sống",
            rating: 4.7,
            descFull: `
                <p><strong>Đắc Nhân Tâm</strong> (How to Win Friends and Influence People) là cuốn sách kỹ năng sống bán chạy nhất mọi thời đại. Dù được viết từ thập kỷ 30 của thế kỷ trước, những nguyên tắc trong sách vẫn còn nguyên giá trị trong xã hội hiện đại.</p>
                <p>Cuốn sách đưa ra các nguyên tắc vàng trong việc đối nhân xử thế:</p>
                <ul>
                    <li>Không chỉ trích, oán trách hay than phiền.</li>
                    <li>Thành thật khen ngợi và biết ơn người khác.</li>
                    <li>Biết lắng nghe và khuyến khích người khác nói về họ.</li>
                    <li>Tôn trọng ý kiến của người khác.</li>
                </ul>
                <p>Đây là cẩm nang giúp bạn cải thiện các mối quan hệ xã hội, được yêu mến hơn và thành công hơn trong giao tiếp.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "First News - Trí Việt" },
                { k: "NXB", v: "NXB Tổng Hợp TPHCM" },
                { k: "Tác giả", v: "Dale Carnegie" },
                { k: "Người dịch", v: "Nguyễn Hiến Lê" },
                { k: "Số trang", v: "320 trang" }
            ],
            reviews: [
                { name: "CEO Khởi Nghiệp", date: "10/03/2024", star: 5, content: "Cuốn sách gối đầu giường cho bất kỳ ai làm quản lý." },
                { name: "Sinh viên năm nhất", date: "05/03/2024", star: 5, content: "Nhờ cuốn sách này mình đã tự tin hơn khi giao tiếp với bạn mới." }
            ]
        },

        // 6. TIẾNG ANH 4
        "tieng-anh-4": {
            title: "Tiếng Anh Lớp 4 Tập 1 - Global Success",
            author: "Bộ Giáo Dục & Đào Tạo",
            priceOld: "35.000đ",
            priceNew: "32.000đ",
            img: "../assets/images/tieng-anh-4.jpg",
            category: "Sách Giáo Khoa",
            rating: 4.5,
            descFull: `
                <p>Sách giáo khoa <strong>Tiếng Anh 4 - Tập 1 (Global Success)</strong> được biên soạn theo Chương trình giáo dục phổ thông mới của Bộ Giáo dục và Đào tạo. Sách tập trung phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết cho học sinh tiểu học.</p>
                <p><strong>Điểm nổi bật:</strong></p>
                <ul>
                    <li>Nội dung bám sát khung năng lực ngoại ngữ 6 bậc.</li>
                    <li>Hình ảnh minh họa sinh động, nhiều màu sắc, tạo hứng thú học tập.</li>
                    <li>Các chủ đề gần gũi: Gia đình, Trường học, Sở thích, Bạn bè.</li>
                    <li>Có kèm theo file nghe và học liệu điện tử hỗ trợ phụ huynh kèm con học tại nhà.</li>
                </ul>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "NXB Giáo Dục Việt Nam" },
                { k: "NXB", v: "NXB Giáo Dục Việt Nam" },
                { k: "Tác giả", v: "Hoàng Văn Vân (Tổng chủ biên)" },
                { k: "Năm xuất bản", v: "2023" },
                { k: "Hình thức", v: "Bìa mềm" }
            ],
            reviews: [
                { name: "Phụ huynh bé Na", date: "05/09/2023", star: 5, content: "Sách chuẩn bộ giáo dục, mua online tiện hơn ra nhà sách xếp hàng." },
                { name: "Cô giáo Thảo", date: "20/08/2023", star: 5, content: "Chương trình mới rất hay, chú trọng giao tiếp nhiều hơn." }
            ]
        },

        // 7. CÂY KHẾ
        "cay-khe": {
            title: "Truyện Cổ Tích: Cây Khế",
            author: "Dân Gian Việt Nam",
            priceOld: "25.000đ",
            priceNew: "18.000đ",
            img: "../assets/images/cay-khe.jpg",
            category: "Truyện Tranh Thiếu Nhi",
            rating: 4.6,
            descFull: `
                <p><strong>Cây Khế</strong> (hay Ăn Khế Trả Vàng) là một trong những câu chuyện cổ tích nổi tiếng nhất trong kho tàng văn học dân gian Việt Nam. Truyện kể về hai anh em cha mẹ mất sớm, người anh tham lam chiếm hết gia tài, chỉ để lại cho người em túp lều và cây khế.</p>
                <p>Nhờ lòng tốt và sự thật thà, người em được chim lạ đưa đi lấy vàng và trở nên giàu có. Người anh vì tham lam vô độ nên đã phải trả giá đắt. Câu chuyện giáo dục các em nhỏ bài học sâu sắc về tình anh em, lòng nhân hậu và luật nhân quả: "Ở hiền gặp lành, ác giả ác báo".</p>
                <p>Phiên bản này có tranh minh họa màu nước tuyệt đẹp, phù hợp cho lứa tuổi mầm non và tiểu học.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "NXB Kim Đồng" },
                { k: "NXB", v: "NXB Kim Đồng" },
                { k: "Độ tuổi", v: "3 - 8 tuổi" },
                { k: "Hình thức", v: "Bìa mềm" },
                { k: "Số trang", v: "32 trang" }
            ],
            reviews: [
                { name: "Bé Bông", date: "01/06/2023", star: 5, content: "Con thích nhất đoạn chim phượng hoàng bay đi lấy vàng." },
                { name: "Mẹ Lan", date: "12/06/2023", star: 4, content: "Truyện hay, hình vẽ đẹp, nhưng giấy hơi mỏng." }
            ]
        },

        // 8. MILK AND HONEY
        "milk-and-honey": {
            title: "Milk and Honey (Sữa Và Mật)",
            author: "Rupi Kaur",
            priceOld: "250.000đ",
            priceNew: "180.000đ",
            img: "../assets/images/milk-and-honey.jpg",
            category: "Thơ Ca",
            rating: 4.8,
            descFull: `
                <p><strong>Milk and Honey</strong> là tập thơ đầu tay của Rupi Kaur đã tạo nên một hiện tượng văn học toàn cầu, bán được hơn 2.5 triệu bản và nằm trong danh sách Best-seller của New York Times hơn một năm liền.</p>
                <p>Cuốn sách được chia làm 4 phần: <em>Đau (The Hurting), Yêu (The Loving), Vỡ (The Breaking), và Lành (The Healing)</em>. Đó là những dòng thơ trần trụi, đau đớn nhưng đầy nữ tính về tình yêu, sự mất mát, chấn thương và quá trình chữa lành.</p>
                <p>Mỗi bài thơ đi kèm với những nét vẽ minh họa đơn giản do chính tác giả thực hiện, tạo nên một trải nghiệm thị giác và cảm xúc độc đáo.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "NXB Hội Nhà Văn" },
                { k: "Tác giả", v: "Rupi Kaur" },
                { k: "Ngôn ngữ", v: "Song ngữ Anh - Việt" },
                { k: "Hình thức", v: "Bìa mềm" },
                { k: "Số trang", v: "204 trang" }
            ],
            reviews: [
                { name: "Thơ Thẩn", date: "14/03/2024", star: 5, content: "Những dòng thơ chạm đến đáy tim. Đọc để thấy mình được ủi an." },
                { name: "Bảo Ngọc", date: "10/02/2024", star: 5, content: "Sách rất đẹp, dịch giả giữ được hồn của nguyên tác." }
            ]
        },

        // 9. TUỔI TRẺ ĐÁNG GIÁ BAO NHIÊU
        "tuoi-tre": {
            title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
            author: "Rosie Nguyễn",
            priceOld: "90.000đ",
            priceNew: "72.000đ",
            img: "../assets/images/tuoi-tre.jpg",
            category: "Sách Kĩ Năng Sống",
            rating: 4.9,
            descFull: `
                <p><strong>Tuổi Trẻ Đáng Giá Bao Nhiêu</strong> không chỉ là một cuốn sách, nó là ngọn đuốc dẫn đường cho hàng triệu người trẻ Việt Nam đang hoang mang trước ngưỡng cửa cuộc đời. Tác giả Rosie Nguyễn, một "Ta ba lô" chính hiệu, chia sẻ những câu chuyện thực tế về việc học, làm việc và đi.</p>
                <p>Cuốn sách xoay quanh 3 phần: <em>HỌC, LÀM, ĐI</em>. Bạn sẽ tìm thấy câu trả lời cho những trăn trở: Tôi là ai? Tôi đam mê điều gì? Làm sao để sống một tuổi trẻ không hối tiếc?</p>
                <blockquote>"Bạn hối tiếc vì không nắm bắt lấy một cơ hội nào đó, chẳng có ai phải mất ngủ."</blockquote>
                <p>Hãy đọc để hiểu rằng tuổi trẻ là tài sản quý giá nhất mà bạn đang sở hữu.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "Nhã Nam" },
                { k: "NXB", v: "NXB Hội Nhà Văn" },
                { k: "Tác giả", v: "Rosie Nguyễn" },
                { k: "Kích thước", v: "14 x 20.5 cm" },
                { k: "Số trang", v: "285 trang" }
            ],
            reviews: [
                { name: "Sinh viên năm cuối", date: "22/03/2024", star: 5, content: "Đọc xong muốn xách balo lên và đi ngay lập tức. Cảm ơn chị Rosie." },
                { name: "Văn Hậu", date: "15/03/2024", star: 5, content: "Cuốn sách đã kéo mình ra khỏi vũng lầy của sự lười biếng." }
            ]
        },

        // 10. CÂY CAM NGỌT CỦA TÔI
        "cay-cam-ngot": {
            title: "Cây Cam Ngọt Của Tôi",
            author: "José Mauro de Vasconcelos",
            priceOld: "108.000đ",
            priceNew: "86.000đ",
            img: "../assets/images/cay-cam-ngot.jpg",
            category: "Tiểu Thuyết",
            rating: 5.0,
            descFull: `
                <p><strong>Cây Cam Ngọt Của Tôi</strong> là cuốn tự truyện đầy cảm động của nhà văn Brazil José Mauro de Vasconcelos. Câu chuyện kể về Zezé, một cậu bé 5 tuổi sinh ra trong một gia đình nghèo đông con, thông minh, nghịch ngợm nhưng vô cùng nhạy cảm và thiếu thốn tình thương.</p>
                <p>Người bạn thân thiết nhất của Zezé là một cây cam ngọt nhỏ sau nhà, nơi cậu trút bầu tâm sự. Nhưng cuộc đời đã dạy cho Zezé nỗi đau quá sớm, nỗi đau của sự chia ly và sự trưởng thành ép buộc.</p>
                <blockquote>"Tại sao người ta lại nói cho bọn trẻ biết nhiều chuyện như vậy trong khi chúng còn bé thế?"</blockquote>
                <p>Hãy chuẩn bị khăn giấy, vì cuốn sách này sẽ khiến bạn khóc, cười và vỡ vụn trái tim.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "Nhã Nam" },
                { k: "NXB", v: "NXB Hội Nhà Văn" },
                { k: "Tác giả", v: "José Mauro de Vasconcelos" },
                { k: "Dịch giả", v: "Nguyễn Bích Lan" },
                { k: "Số trang", v: "244 trang" }
            ],
            reviews: [
                { name: "Thanh Trúc", date: "02/04/2024", star: 5, content: "Một cuốn sách đau lòng nhưng đẹp đẽ vô cùng. Thương Zezé." },
                { name: "Minh Quân", date: "01/04/2024", star: 5, content: "Ai chưa đọc cuốn này là một thiếu sót lớn của cuộc đời." }
            ]
        },

        // 11. HAI SỐ PHẬN
        "hai-so-phan": {
            title: "Hai Số Phận (Kane and Abel)",
            author: "Jeffrey Archer",
            priceOld: "189.000đ",
            priceNew: "145.000đ",
            img: "../assets/images/hai-so-phan.jpg",
            category: "Tiểu Thuyết",
            rating: 4.9,
            descFull: `
                <p><strong>Hai Số Phận</strong> (Kane and Abel) là tiểu thuyết kinh điển của Jeffrey Archer. Câu chuyện kể về hai người đàn ông sinh ra cùng một ngày, cùng một giờ, nhưng ở hai thế giới hoàn toàn khác biệt.</p>
                <p>William Kane, con trai của một triệu phú ngân hàng Mỹ, sinh ra trong nhung lụa. Abel Rosnovski, một đứa trẻ vô thừa nhận ở Ba Lan, lớn lên trong cảnh nghèo đói và chiến tranh. Định mệnh đã đưa đẩy họ vượt qua 60 năm thăng trầm của lịch sử thế giới để rồi trở thành kẻ thù không đội trời chung trên thương trường.</p>
                <p>Một câu chuyện hùng tráng về tham vọng, hận thù, danh dự và sự tha thứ. Cuốn sách lôi cuốn đến mức bạn sẽ không thể đặt xuống cho đến trang cuối cùng.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "Huy Hoàng Bookstore" },
                { k: "NXB", v: "NXB Văn Học" },
                { k: "Tác giả", v: "Jeffrey Archer" },
                { k: "Hình thức", v: "Bìa mềm" },
                { k: "Số trang", v: "700 trang" }
            ],
            reviews: [
                { name: "Kinh Doanh 4.0", date: "15/03/2024", star: 5, content: "Sách dày nhưng đọc vèo cái là hết. Quá kịch tính." },
                { name: "Đức Thịnh", date: "10/03/2024", star: 5, content: "Một bài học lớn về ý chí vươn lên của con người." }
            ]
        },

        // 12. DẾ MÈN PHIÊU LƯU KÝ
        "de-men-phieu-luu-ky": {
            title: "Dế Mèn Phiêu Lưu Ký",
            author: "Tô Hoài",
            priceOld: "50.000đ",
            priceNew: "35.000đ",
            img: "../assets/images/de-men.jpg",
            category: "Sách Thiếu Nhi",
            rating: 4.8,
            descFull: `
                <p><strong>Dế Mèn Phiêu Lưu Ký</strong> là tác phẩm văn học thiếu nhi kinh điển nhất của Việt Nam, đã được dịch ra gần 40 thứ tiếng trên thế giới. Tô Hoài đã mượn thế giới loài vật nhỏ bé để kể những câu chuyện lớn lao về tình bạn và khát vọng hòa bình.</p>
                <p>Câu chuyện theo chân chú Dế Mèn cường tráng nhưng xốc nổi. Sau bài học đắt giá về cái chết của Dế Choắt, Mèn cùng người bạn đường Dế Trũi đã đi du lịch khắp thế giới, kết giao với các loài vật và chống lại những điều bất công.</p>
                <p>Tác phẩm là bầu trời tuổi thơ của biết bao thế hệ người Việt.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "NXB Kim Đồng" },
                { k: "NXB", v: "NXB Kim Đồng" },
                { k: "Tác giả", v: "Tô Hoài" },
                { k: "Số trang", v: "144 trang" },
                { k: "Kích thước", v: "13 x 19 cm" }
            ],
            reviews: [
                { name: "Bố Bim", date: "01/06/2023", star: 5, content: "Mua cho con trai đọc để biết văn học Việt Nam hay thế nào." },
                { name: "Hương Giang", date: "12/05/2023", star: 5, content: "Đọc lại vẫn thấy hay như ngày bé." }
            ]
        },

        // 13. ÔNG GIÀ VÀ BIỂN CẢ
        "ong-gia-va-bien-ca": {
            title: "Ông Già Và Biển Cả",
            author: "Ernest Hemingway",
            priceOld: "100.000đ",
            priceNew: "92.000đ",
            img: "../assets/images/ong-gia-va-bien-ca.jpg",
            category: "Tiểu Thuyết",
            rating: 4.6,
            descFull: `
                <p><strong>Ông Già Và Biển Cả</strong> (The Old Man and the Sea) là tác phẩm đỉnh cao đã mang về giải Nobel Văn học cho Ernest Hemingway. Truyện kể về Santiago, một ông lão đánh cá nghèo khổ ở Cuba, người đã 84 ngày không bắt được con cá nào.</p>
                <p>Vào ngày thứ 85, ông quyết định ra khơi xa và đụng độ với một con cá kiếm khổng lồ. Cuộc chiến sinh tử giữa ông già đơn độc và con cá kiêu hùng kéo dài suốt ba ngày đêm là bản hùng ca về sức mạnh, ý chí và phẩm giá của con người trước thiên nhiên khắc nghiệt.</p>
                <blockquote>"Con người có thể bị hủy diệt nhưng không thể bị đánh bại."</blockquote>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "Nhã Nam" },
                { k: "NXB", v: "NXB Văn Học" },
                { k: "Tác giả", v: "Ernest Hemingway" },
                { k: "Hình thức", v: "Bìa mềm" },
                { k: "Số trang", v: "124 trang" }
            ],
            reviews: [
                { name: "Hải Ngư", date: "20/03/2024", star: 5, content: "Nguyên lý tảng băng trôi của Hemingway thật xuất sắc." },
                { name: "Quốc Anh", date: "18/03/2024", star: 4, content: "Sách mỏng nhưng nội dung cực kỳ nặng ký." }
            ]
        },

        // 14. MẮT BIẾC
        "mat-biec": {
            title: "Mắt Biếc",
            author: "Nguyễn Nhật Ánh",
            priceOld: "110.000đ",
            priceNew: "88.000đ",
            img: "../assets/images/mat-biec.jpg",
            category: "Tiểu Thuyết",
            rating: 4.9,
            descFull: `
                <p><strong>Mắt Biếc</strong> được xem là tác phẩm buồn nhất của nhà văn Nguyễn Nhật Ánh. Câu chuyện kể về mối tình đơn phương day dứt của Ngạn dành cho Hà Lan - cô bạn gái có đôi mắt biếc đẹp tuyệt trần từ thuở nhỏ ở làng Đo Đo.</p>
                <p>Hà Lan lên thành phố và không cưỡng lại được những cám dỗ phồn hoa, để lại Ngạn với tình yêu thầm lặng bên cây đàn guitar và những bản tình ca buồn. Câu chuyện kéo dài qua nhiều năm tháng, từ khi họ là những đứa trẻ cho đến khi con gái của Hà Lan lớn lên...</p>
                <p>Một câu chuyện về tình yêu thuần khiết, sự hy sinh và những tiếc nuối khôn nguôi của tuổi trẻ.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "NXB Trẻ" },
                { k: "NXB", v: "NXB Trẻ" },
                { k: "Tác giả", v: "Nguyễn Nhật Ánh" },
                { k: "Hình thức", v: "Bìa mềm" },
                { k: "Số trang", v: "300 trang" }
            ],
            reviews: [
                { name: "Fan Nguyễn Nhật Ánh", date: "14/02/2024", star: 5, content: "Đọc lần nào cũng khóc. Thương thầy Ngạn quá." },
                { name: "Hà Linh", date: "10/02/2024", star: 5, content: "Truyện hay hơn phim rất nhiều. Ngôn từ rất đẹp." }
            ]
        },

        // 15. RỪNG NA UY
        "rung-na-uy": {
            title: "Rừng Na Uy",
            author: "Haruki Murakami",
            priceOld: "135.000đ",
            priceNew: "108.000đ",
            img: "../assets/images/rung-na-uy.jpg",
            category: "Tiểu Thuyết",
            rating: 4.5,
            descFull: `
                <p><strong>Rừng Na Uy</strong> (Norwegian Wood) là tiểu thuyết nổi tiếng nhất của Haruki Murakami, lấy bối cảnh nước Nhật những năm 1960 đầy biến động. Câu chuyện xoay quanh Toru Watanabe và mối tình với hai người con gái có tính cách trái ngược: Naoko yếu đuối, tổn thương và Midori tràn đầy sức sống.</p>
                <p>Cuốn sách là một bản nhạc buồn về tuổi trẻ, về sự cô đơn, về tình dục và cái chết. Nó khắc họa chân thực những khủng hoảng tâm lý của người trẻ khi phải đối mặt với sự mất mát và trưởng thành.</p>
                <p><em>*Lưu ý: Sách có yếu tố nhạy cảm, phù hợp với độc giả trưởng thành (18+).</em></p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "Nhã Nam" },
                { k: "NXB", v: "NXB Hội Nhà Văn" },
                { k: "Tác giả", v: "Haruki Murakami" },
                { k: "Dịch giả", v: "Trịnh Lữ" },
                { k: "Số trang", v: "550 trang" }
            ],
            reviews: [
                { name: "Người qua đường", date: "25/03/2024", star: 4, content: "Một cuốn sách ám ảnh. Văn phong của Murakami rất đặc biệt." },
                { name: "Mai Anh", date: "20/03/2024", star: 5, content: "Bản dịch của bác Trịnh Lữ rất hay." }
            ]
        },

        // 16. SỐ ĐỎ
        "so-do": {
            title: "Số Đỏ",
            author: "Vũ Trọng Phụng",
            priceOld: "75.000đ",
            priceNew: "60.000đ",
            img: "../assets/images/so-do.jpg",
            category: "Tiểu Thuyết",
            rating: 4.8,
            descFull: `
                <p><strong>Số Đỏ</strong> là kiệt tác văn học trào phúng "vô tiền khoáng hậu" của văn học Việt Nam. Tác phẩm xoay quanh nhân vật Xuân Tóc Đỏ - từ một kẻ hạ lưu, nhặt bóng quần vợt, nhờ sự láu cá và thời cuộc nhiễu nhương mà leo lên tầng lớp thượng lưu, trở thành "vĩ nhân" cứu quốc.</p>
                <p>Thông qua tiếng cười chua cay, Vũ Trọng Phụng đã vạch trần bộ mặt giả dối, lố lăng của xã hội tư sản thành thị Việt Nam thời Pháp thuộc với những phong trào "Âu hóa", "Vui vẻ trẻ trung" đầy kệch cỡm.</p>
                <p>Tác phẩm là cuốn sách giáo khoa về nghệ thuật châm biếm.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "Nhà Sách Minh Thắng" },
                { k: "NXB", v: "NXB Văn Học" },
                { k: "Tác giả", v: "Vũ Trọng Phụng" },
                { k: "Hình thức", v: "Bìa cứng" },
                { k: "Số trang", v: "260 trang" }
            ],
            reviews: [
                { name: "Học sinh giỏi Văn", date: "15/01/2024", star: 5, content: "Đọc bao nhiêu lần vẫn buồn cười. Xuân Tóc Đỏ đúng là thánh." },
                { name: "Thầy Hùng", date: "10/01/2024", star: 5, content: "Tác phẩm giá trị nhất của dòng văn học hiện thực phê phán." }
            ]
        },

        // 17. NGƯỜI ĐUA DIỀU
        "nguoi-dua-dieu": {
            title: "Người Đua Diều",
            author: "Khaled Hosseini",
            priceOld: "125.000đ",
            priceNew: "99.000đ",
            img: "../assets/images/nguoi-dua-dieu.jpg",
            category: "Tiểu Thuyết",
            rating: 4.9,
            descFull: `
                <p><strong>Người Đua Diều</strong> (The Kite Runner) là câu chuyện lay động tâm can về tình bạn giữa Amir - con trai một thương gia giàu có và Hassan - con trai người hầu Hazara tại Afghanistan. Bi kịch xảy ra vào một ngày mùa đông năm 1975, khi Amir chứng kiến Hassan bị hãm hại nhưng hèn nhát bỏ chạy.</p>
                <p>Sự hèn nhát đó đã ám ảnh Amir suốt cuộc đời, ngay cả khi cậu đã di cư sang Mỹ. Nhiều năm sau, Amir quyết định quay trở lại Afghanistan - lúc này đang bị tàn phá bởi chiến tranh Taliban - để tìm cách chuộc lại lỗi lầm quá khứ.</p>
                <blockquote>"Vì cậu, cả ngàn lần rồi."</blockquote>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "Nhã Nam" },
                { k: "NXB", v: "NXB Hội Nhà Văn" },
                { k: "Tác giả", v: "Khaled Hosseini" },
                { k: "Số trang", v: "460 trang" }
            ],
            reviews: [
                { name: "Lan Khuê", date: "05/04/2024", star: 5, content: "Một cuốn sách lấy đi quá nhiều nước mắt. Đỉnh cao của cảm xúc." },
                { name: "Quang Đăng", date: "01/04/2024", star: 5, content: "Ám ảnh, day dứt nhưng kết thúc có hậu." }
            ]
        },

        // 18. CHIẾN BINH CẦU VỒNG
        "chien-binh-cau-vong": {
            title: "Chiến Binh Cầu Vồng",
            author: "Andrea Hirata",
            priceOld: "109.000đ",
            priceNew: "87.000đ",
            img: "../assets/images/chien-binh-cau-vong.jpg",
            category: "Tiểu Thuyết",
            rating: 5.0,
            descFull: `
                <p><strong>Chiến Binh Cầu Vồng</strong> kể về 10 đứa trẻ nghèo khổ tại hòn đảo Belitong (Indonesia) và cuộc đấu tranh để được đến trường. Dưới sự dạy dỗ của thầy Harfan và cô Mus, những đứa trẻ ấy đã chứng minh rằng: Nghèo đói không thể giết chết ước mơ.</p>
                <p>Đây là câu chuyện có thật về sức mạnh của giáo dục và tình yêu thương. Cuốn sách đã truyền cảm hứng cho hàng triệu độc giả trên toàn thế giới và được coi là tác phẩm có tầm ảnh hưởng nhất Indonesia hiện đại.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "Nhã Nam" },
                { k: "NXB", v: "NXB Hội Nhà Văn" },
                { k: "Tác giả", v: "Andrea Hirata" },
                { k: "Số trang", v: "428 trang" }
            ],
            reviews: [
                { name: "Cô giáo vùng cao", date: "20/11/2023", star: 5, content: "Động lực cho những người làm nghề giáo như mình." },
                { name: "Minh Anh", date: "15/11/2023", star: 5, content: "Sách rất hay và cảm động. Ai cũng nên đọc một lần." }
            ]
        },

        // 19. TẮT ĐÈN
        "tat-den": {
            title: "Tắt Đèn",
            author: "Ngô Tất Tố",
            priceOld: "55.000đ",
            priceNew: "42.000đ",
            img: "../assets/images/tat-den.jpg",
            category: "Tiểu Thuyết",
            rating: 4.7,
            descFull: `
                <p><strong>Tắt Đèn</strong> là bức tranh chân thực và tàn khốc nhất về nông thôn Việt Nam dưới ách thống trị của thực dân phong kiến. Nhân vật chính là Chị Dậu - điển hình cho người phụ nữ nông dân lực điền: khỏe mạnh, tháo vát và giàu tình yêu thương chồng con.</p>
                <p>Để có tiền nộp sưu cho chồng, chị đã phải bán chó, bán con, và cuối cùng là bán cả dòng sữa của mình. Cái kết chị chạy ra giữa đêm tối "tối như cái tiền đồ của chị" đã trở thành nỗi ám ảnh của văn học Việt Nam.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "NXB Văn Học" },
                { k: "NXB", v: "NXB Văn Học" },
                { k: "Tác giả", v: "Ngô Tất Tố" },
                { k: "Số trang", v: "200 trang" }
            ],
            reviews: [
                { name: "Sử Địa Văn", date: "10/02/2024", star: 5, content: "Tác phẩm tố cáo tội ác phong kiến đanh thép nhất." },
                { name: "Bảo Bảo", date: "05/02/2024", star: 4, content: "Đọc mà thương chị Dậu đứt ruột." }
            ]
        },

        // 20. CHIẾN THẮNG CON QUỶ TRONG BẠN
        "chien-thang-con-quy": {
            title: "Chiến Thắng Con Quỷ Trong Bạn",
            author: "Napoleon Hill",
            priceOld: "120.000đ",
            priceNew: "96.000đ",
            img: "../assets/images/chien-thang-con-quy.jpg",
            category: "Tâm Lý & Kỹ Năng Sống",
            rating: 4.6,
            descFull: `
                <p><strong>Chiến Thắng Con Quỷ Trong Bạn</strong> (Outwitting the Devil) là tác phẩm bị gia đình Napoleon Hill giấu kín suốt 70 năm vì nội dung quá táo bạo. Cuốn sách là cuộc đối thoại giả tưởng giữa tác giả và Con Quỷ - phần đen tối trong tâm trí mỗi người.</p>
                <p>Con Quỷ tiết lộ cách nó kiểm soát 98% nhân loại thông qua: nỗi sợ hãi, sự trì hoãn, thói quen buông thả... Cuốn sách giúp bạn nhận diện kẻ thù bên trong mình và cung cấp 7 nguyên tắc để đạt được tự do về tinh thần và tài chính.</p>
            `,
            specs: [
                { k: "Nhà cung cấp", v: "Thái Hà Books" },
                { k: "NXB", v: "NXB Lao Động" },
                { k: "Tác giả", v: "Napoleon Hill" },
                { k: "Số trang", v: "300 trang" }
            ],
            reviews: [
                { name: "Doanh nhân trẻ", date: "01/01/2024", star: 5, content: "Cuốn sách giúp mình vượt qua sự trì hoãn." },
                { name: "Thành Đạt", date: "28/12/2023", star: 4, content: "Nội dung hơi khó đọc nhưng rất thấm." }
            ]
        },
        // --- PHẦN BÙ VÀO KHOẢNG GIỮA (21 - 45) ---

   
        
 
// --- BẮT ĐẦU TỪ CUỐN 21 (Dữ liệu Specs & Reviews đầy đủ) ---

    // 21. ĐỒI GIÓ HÚ
    "doi-gio-hu": {
        title: "Đồi Gió Hú (Wuthering Heights)",
        author: "Emily Brontë",
        priceOld: "110.000đ",
        priceNew: "88.000đ",
        img: "../assets/images/doi-gio-hu.jpg",
        category: "Văn Học Kinh Điển",
        rating: 4.8,
        descFull: `<p>Câu chuyện tình yêu đầy ám ảnh và hoang dại giữa Heathcliff và Catherine Earnshaw trên vùng đồng cỏ nước Anh. Một kiệt tác văn học về tình yêu, sự thù hận và định mệnh.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Nhã Nam" },
            { k: "NXB", v: "NXB Văn Học" },
            { k: "Số trang", v: "400 trang" },
            { k: "Hình thức", v: "Bìa mềm" },
            { k: "Kích thước", v: "14 x 20.5 cm" }
        ],
        reviews: [
            { name: "Thu Thủy", date: "12/03/2024", star: 5, content: "Một cuốn sách ám ảnh đến tận trang cuối cùng. Tình yêu của Heathcliff thật điên dại." },
            { name: "Minh Khôi", date: "10/02/2024", star: 5, content: "Văn phong cổ điển, dịch giả chuyển ngữ rất mượt mà." }
        ]
    },

    // 22. NHỮNG NGƯỜI KHỐN KHỔ
    "nhung-nguoi-khon-kho": {
        title: "Những Người Khốn Khổ (Trọn Bộ)",
        author: "Victor Hugo",
        priceOld: "350.000đ",
        priceNew: "280.000đ",
        img: "../assets/images/nhung-nguoi-khon-kho.jpg",
        category: "Văn Học Kinh Điển",
        rating: 5.0,
        descFull: `<p>Bản anh hùng ca về tình thương và lòng nhân ái. Câu chuyện về Jean Valjean đã lấy đi nước mắt của hàng triệu độc giả.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Huy Hoàng Bookstore" },
            { k: "NXB", v: "NXB Văn Học" },
            { k: "Số trang", v: "1500 trang" },
            { k: "Trọng lượng", v: "1200 gr" },
            { k: "Hình thức", v: "Bìa cứng" }
        ],
        reviews: [
            { name: "Bác Hùng", date: "20/01/2024", star: 5, content: "Bộ sách để đời. Giấy in đẹp, chữ rõ ràng, rất đáng tiền." },
            { name: "Lan Anh", date: "15/01/2024", star: 5, content: "Đọc để thấy lòng người bao dung đến nhường nào." }
        ]
    },

    // 23. CUỐN THEO CHIỀU GIÓ
    "cuon-theo-chieu-gio": {
        title: "Cuốn Theo Chiều Gió",
        author: "Margaret Mitchell",
        priceOld: "300.000đ",
        priceNew: "290.000đ",
        img: "../assets/images/cuon-theo-chieu-gio.jpg",
        category: "Văn Học Kinh Điển",
        rating: 4.9,
        descFull: `<p>"Sau tất cả, ngày mai là một ngày mới." Câu chuyện về nàng Scarlett O'Hara mạnh mẽ giữa bối cảnh cuộc Nội chiến Mỹ.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Nhã Nam" },
            { k: "NXB", v: "NXB Văn Học" },
            { k: "Số trang", v: "850 trang" },
            { k: "Kích thước", v: "16 x 24 cm" },
            { k: "Hình thức", v: "Bìa mềm" }
        ],
        reviews: [
            { name: "Ngọc Diệp", date: "05/04/2024", star: 5, content: "Scarlett mãi là nhân vật nữ mình yêu thích nhất. Mạnh mẽ và kiên cường." },
            { name: "Tuấn Hưng", date: "01/04/2024", star: 4, content: "Sách dày nhưng đọc rất cuốn. Phim hay nhưng truyện còn hay hơn." }
        ]
    },

    // 24. KHÔNG GIA ĐÌNH
    "khong-gia-dinh": {
        title: "Không Gia Đình",
        author: "Hector Malot",
        priceOld: "135.000đ",
        priceNew: "130.000đ",
        img: "../assets/images/khong-gia-dinh.jpg",
        category: "Văn Học Thiếu Nhi",
        rating: 5.0,
        descFull: `<p>Hành trình phiêu lưu của cậu bé Remi và gánh xiếc rong. Bài học tuyệt vời về lòng dũng cảm.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Đông A" },
            { k: "NXB", v: "NXB Văn Học" },
            { k: "Dịch giả", v: "Huỳnh Lý" },
            { k: "Số trang", v: "580 trang" },
            { k: "Độ tuổi", v: "Mọi lứa tuổi" }
        ],
        reviews: [
            { name: "Mẹ Gấu", date: "10/03/2024", star: 5, content: "Mua cho con đọc hè. Câu chuyện rất cảm động và ý nghĩa." },
            { name: "Hải Đăng", date: "08/03/2024", star: 5, content: "Remi và cụ Vitalis là tuổi thơ của mình." }
        ]
    },

    // 25. THÉP ĐÃ TÔI THẾ ĐẤY
    "thep-da-toi-the-day": {
        title: "Thép Đã Tôi Thế Đấy",
        author: "Nikolai Ostrovsky",
        priceOld: "200.000đ",
        priceNew: "150.000đ",
        img: "../assets/images/thep-da-toi-the-day.jpg",
        category: "Văn Học Nga",
        rating: 4.7,
        descFull: `<p>"Cái quý nhất của con người là sự sống..." Cuốn sách gối đầu giường của nhiều thế hệ thanh niên.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Minh Thắng" },
            { k: "NXB", v: "NXB Văn Học" },
            { k: "Số trang", v: "520 trang" },
            { k: "Kích thước", v: "14.5 x 20.5 cm" }
        ],
        reviews: [
            { name: "Thanh Niên", date: "26/03/2024", star: 5, content: "Đọc để thấy mình cần sống có lý tưởng hơn. Paven mãi đỉnh." },
            { name: "Quốc Bảo", date: "20/03/2024", star: 4, content: "Sách in giấy hơi mỏng nhưng nội dung thì tuyệt vời." }
        ]
    },

    // 26. LƯỢC SỬ THỜI GIAN
    "luoc-su-thoi-gian": {
        title: "Lược Sử Thời Gian",
        author: "Stephen Hawking",
        priceOld: "115.000đ",
        priceNew: "92.000đ",
        img: "../assets/images/luoc-su-thoi-gian.jpg",
        category: "Khoa Học",
        rating: 4.8,
        descFull: `<p>Khám phá bí ẩn của vũ trụ, từ Big Bang đến lỗ đen, qua ngòi bút thiên tài của Stephen Hawking.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "NXB Trẻ" },
            { k: "NXB", v: "NXB Trẻ" },
            { k: "Lĩnh vực", v: "Vật lý thiên văn" },
            { k: "Số trang", v: "256 trang" }
        ],
        reviews: [
            { name: "Yêu Khoa Học", date: "15/02/2024", star: 5, content: "Kiến thức uyên bác nhưng được viết rất dễ hiểu." },
            { name: "Minh Trí", date: "10/02/2024", star: 5, content: "Sách khoa học hay nhất mình từng đọc." }
        ]
    },

    // 27. KHỞI NGHIỆP TINH GỌN
    "khoi-nghiep-tinh-gon": {
        title: "Khởi Nghiệp Tinh Gọn",
        author: "Eric Ries",
        priceOld: "155.000đ",
        priceNew: "125.000đ",
        img: "../assets/images/khoi-nghiep-tinh-gon.jpg",
        category: "Kinh Tế",
        rating: 4.8,
        descFull: `<p>Phương pháp khởi nghiệp hiện đại: Xây dựng - Đo lường - Học hỏi. Cuốn sách thay đổi tư duy của hàng ngàn Founder.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "DT Books" },
            { k: "NXB", v: "NXB Tổng Hợp TPHCM" },
            { k: "Số trang", v: "350 trang" },
            { k: "Hình thức", v: "Bìa mềm" }
        ],
        reviews: [
            { name: "CEO Startup", date: "05/01/2024", star: 5, content: "Tư duy MVP (Sản phẩm khả dụng tối thiểu) quá hay. Must read cho founder." },
            { name: "Hùng IT", date: "02/01/2024", star: 5, content: "Sách thực tế, áp dụng được ngay vào dự án." }
        ]
    },

    // 28. CẨM NANG KHỞI NGHIỆP
    "cam-nang-khoi-nghiep": {
        title: "Cẩm Nang Khởi Nghiệp",
        author: "Ken Colwell",
        priceOld: "180.000đ",
        priceNew: "145.000đ",
        img: "../assets/images/cam-nang-khoi-nghiep.jpg",
        category: "Kinh Tế",
        rating: 4.6,
        descFull: `<p>Hướng dẫn từ A-Z cho người mới bắt đầu: Từ ý tưởng đến gọi vốn và vận hành doanh nghiệp.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "PACE" },
            { k: "NXB", v: "NXB Tài Chính" },
            { k: "Số trang", v: "400 trang" },
            { k: "Hình thức", v: "Bìa mềm" }
        ],
        reviews: [
            { name: "Người mới", date: "12/12/2023", star: 5, content: "Rất chi tiết và bài bản. Như một tấm bản đồ cho người khởi nghiệp." }
        ]
    },

    // 29. TỐC ĐỘ CỦA NIỀM TIN
    "toc-do-cua-niem-tin": {
        title: "Tốc Độ Của Niềm Tin",
        author: "Stephen M.R. Covey",
        priceOld: "160.000đ",
        priceNew: "128.000đ",
        img: "../assets/images/toc-do-cua-niem-tin.jpg",
        category: "Kỹ Năng Quản Lý",
        rating: 4.7,
        descFull: `<p>Khi niềm tin tăng, tốc độ tăng và chi phí giảm. Cuốn sách dành cho các nhà lãnh đạo muốn xây dựng văn hóa doanh nghiệp.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "PACE" },
            { k: "NXB", v: "NXB Tổng Hợp TPHCM" },
            { k: "Số trang", v: "480 trang" },
            { k: "Kích thước", v: "15.5 x 24 cm" }
        ],
        reviews: [
            { name: "Quản lý nhân sự", date: "20/11/2023", star: 5, content: "Niềm tin là thứ tài sản vô hình nhưng giá trị nhất của doanh nghiệp." }
        ]
    },

    // 30. CHIẾN LƯỢC ĐẠI DƯƠNG XANH
    "chien-luoc-dai-duong-xanh": {
        title: "Chiến Lược Đại Dương Xanh",
        author: "W. Chan Kim",
        priceOld: "149.000đ",
        priceNew: "119.000đ",
        img: "../assets/images/chien-luoc-dai-duong-xanh.jpg",
        category: "Kinh Tế",
        rating: 4.9,
        descFull: `<p>Làm sao để thoát khỏi sự cạnh tranh khốc liệt (Đại dương đỏ) và tìm ra khoảng trống thị trường mới (Đại dương xanh)?</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Alpha Books" },
            { k: "NXB", v: "NXB Lao Động" },
            { k: "Tái bản", v: "Mới nhất" },
            { k: "Số trang", v: "320 trang" }
        ],
        reviews: [
            { name: "Marketer", date: "18/03/2024", star: 5, content: "Cuốn sách thay đổi hoàn toàn tư duy marketing của mình." },
            { name: "Sinh viên KT", date: "15/03/2024", star: 5, content: "Ví dụ minh họa rất hay (Cirque du Soleil)." }
        ]
    },

    // 31. TƯ DUY NHANH VÀ CHẬM
    "tu-duy-nhanh-va-cham": {
        title: "Tư Duy Nhanh Và Chậm",
        author: "Daniel Kahneman",
        priceOld: "219.000đ",
        priceNew: "175.000đ",
        img: "../assets/images/tu-duy-nhanh-va-cham.png",
        category: "Tâm Lý Học",
        rating: 4.8,
        descFull: `<p>Giải mã hai hệ thống tư duy chi phối nhận thức của con người. Tác phẩm của chủ nhân giải Nobel Kinh tế.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Alpha Books" },
            { k: "NXB", v: "NXB Thế Giới" },
            { k: "Số trang", v: "612 trang" },
            { k: "Bìa", v: "Mềm" }
        ],
        reviews: [
            { name: "Minh Tâm", date: "22/02/2024", star: 5, content: "Sách hơi dày và khó đọc nhưng cực kỳ giá trị về tâm lý hành vi." }
        ]
    },

    // 32. PHI LÝ TRÍ
    "phi-ly-tri": {
        title: "Phi Lý Trí",
        author: "Dan Ariely",
        priceOld: "139.000đ",
        priceNew: "110.000đ",
        img: "../assets/images/phi-ly-tri.jpg",
        category: "Tâm Lý Học",
        rating: 4.7,
        descFull: `<p>Tại sao chúng ta lại hành động thiếu lý trí? Những động lực vô hình đằng sau các quyết định hàng ngày.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Alpha Books" },
            { k: "NXB", v: "NXB Lao Động" },
            { k: "Số trang", v: "350 trang" },
            { k: "Kích thước", v: "13 x 20.5 cm" }
        ],
        reviews: [
            { name: "Lan Chi", date: "14/02/2024", star: 5, content: "Hài hước, dễ hiểu hơn Tư duy nhanh và chậm. Rất đáng đọc." }
        ]
    },

    // 33. ALICE Ở XỨ SỞ DIỆU KỲ
    "alice-xu-so-dieu-ky": {
        title: "Alice Ở Xứ Sở Diệu Kỳ",
        author: "Lewis Carroll",
        priceOld: "85.000đ",
        priceNew: "68.000đ",
        img: "../assets/images/alice-xu-so-dieu-ky.png",
        category: "Văn Học Thiếu Nhi",
        rating: 4.6,
        descFull: `<p>Cuộc phiêu lưu đầy màu sắc của cô bé Alice khi rơi vào hang thỏ. Thế giới tưởng tượng kỳ diệu cho mọi lứa tuổi.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Đông A" },
            { k: "NXB", v: "NXB Văn Học" },
            { k: "Minh họa", v: "Màu" },
            { k: "Số trang", v: "180 trang" }
        ],
        reviews: [
            { name: "Bé Na", date: "01/06/2023", star: 5, content: "Tranh đẹp quá, con rất thích chú Mèo Cheshire." }
        ]
    },

    // 35. HIỂU VỀ TRÁI TIM
    "hieu-ve-trai-tim": {
        title: "Hiểu Về Trái Tim",
        author: "Minh Niệm",
        priceOld: "138.000đ",
        priceNew: "110.000đ",
        img: "../assets/images/hieu-ve-trai-tim.jpg",
        category: "Kỹ Năng Sống",
        rating: 4.9,
        descFull: `<p>Cuốn sách chữa lành tâm hồn: Khổ đau, Hạnh phúc, Tha thứ, Buông xả... Giúp bạn thấu hiểu chính mình.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "First News" },
            { k: "NXB", v: "NXB Tổng Hợp TPHCM" },
            { k: "Tác giả", v: "Thiền sư Minh Niệm" },
            { k: "Số trang", v: "480 trang" }
        ],
        reviews: [
            { name: "An Nhiên", date: "01/01/2024", star: 5, content: "Sách giúp mình tìm lại sự bình an trong tâm hồn. Cảm ơn Thầy." },
            { name: "Đức", date: "28/12/2023", star: 5, content: "Đọc mỗi khi thấy lòng bất an." }
        ]
    },

    // 36. ĐÀN ÔNG SAO HỎA ĐÀN BÀ SAO KIM
    "dan-ong-sao-hoa": {
        title: "Đàn Ông Sao Hỏa, Đàn Bà Sao Kim",
        author: "John Gray",
        priceOld: "158.000đ",
        priceNew: "126.000đ",
        img: "../assets/images/dan-ong-sao-hoa.jpg",
        category: "Tâm Lý Hôn Nhân",
        rating: 4.7,
        descFull: `<p>Cẩm nang kinh điển giúp thấu hiểu sự khác biệt cơ bản giữa nam và nữ để xây dựng hạnh phúc bền vững.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "BizBooks" },
            { k: "NXB", v: "NXB Hồng Đức" },
            { k: "Số trang", v: "460 trang" },
            { k: "Hình thức", v: "Bìa mềm" }
        ],
        reviews: [
            { name: "Vợ chồng son", date: "14/02/2024", star: 5, content: "Nhờ cuốn sách này mà bọn mình bớt cãi nhau những chuyện vặt vãnh." }
        ]
    },

    // 37. TRÍ TUỆ DO THÁI
    "tri-tue-do-thai": {
        title: "Trí Tuệ Do Thái",
        author: "Eran Katz",
        priceOld: "129.000đ",
        priceNew: "103.000đ",
        img: "../assets/images/tri-tue-do-thai.png",
        category: "Kỹ Năng Sống",
        rating: 4.6,
        descFull: `<p>Khám phá bí mật về sự thông minh và thành công vượt trội của người Do Thái thông qua câu chuyện thú vị.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Alpha Books" },
            { k: "NXB", v: "NXB Lao Động" },
            { k: "Số trang", v: "320 trang" },
            { k: "Kích thước", v: "13 x 20.5 cm" }
        ],
        reviews: [
            { name: "Doanh nhân", date: "10/01/2024", star: 4, content: "Nhiều bài học hay về tư duy và trí nhớ." }
        ]
    },

    // 38. ĐỜI NGẮN ĐỪNG NGỦ DÀI
    "doi-ngan-dung-ngu-dai": {
        title: "Đời Ngắn Đừng Ngủ Dài",
        author: "Robin Sharma",
        priceOld: "75.000đ",
        priceNew: "60.000đ",
        img: "../assets/images/doi-ngan-dung-ngu-dai.jpg",
        category: "Self-Help",
        rating: 4.8,
        descFull: `<p>Những bài học ngắn gọn, súc tích để đánh thức con người phi thường trong bạn. Hãy sống trọn vẹn mỗi ngày.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "NXB Trẻ" },
            { k: "NXB", v: "NXB Trẻ" },
            { k: "Số trang", v: "228 trang" },
            { k: "Kích thước", v: "13 x 20 cm" }
        ],
        reviews: [
            { name: "Sinh viên", date: "05/09/2023", star: 5, content: "Sách ngắn gọn, dễ đọc, truyền cảm hứng rất tốt." }
        ]
    },

    // 39. TRÊN ĐƯỜNG BĂNG
    "tren-duong-bang": {
        title: "Trên Đường Băng",
        author: "Tony Buổi Sáng",
        priceOld: "80.000đ",
        priceNew: "64.000đ",
        img: "../assets/images/tren-duong-bang.jpg",
        category: "Self-Help",
        rating: 4.9,
        descFull: `<p>Cuốn sách truyền cảm hứng mạnh mẽ cho giới trẻ Việt Nam về tinh thần khởi nghiệp, học tập và sống có trách nhiệm.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "NXB Trẻ" },
            { k: "NXB", v: "NXB Trẻ" },
            { k: "Số trang", v: "300 trang" },
            { k: "Tác giả", v: "Tony Buổi Sáng" }
        ],
        reviews: [
            { name: "Fan Dượng Tony", date: "20/11/2023", star: 5, content: "Hài hước, sâu cay. Đọc để bớt ảo tưởng sức mạnh." }
        ]
    },

    // 40. EFFORTLESS ENGLISH
    "effortless-english": {
        title: "Luyện Nói Tiếng Anh Như Người Bản Ngữ",
        author: "A.J. Hoge",
        priceOld: "160.000đ",
        priceNew: "128.000đ",
        img: "../assets/images/effortless-english.jpg",
        category: "Ngoại Ngữ",
        rating: 4.7,
        descFull: `<p>Phương pháp học tiếng Anh tự nhiên, tập trung vào nghe và phản xạ, giúp bạn nói tiếng Anh tự tin.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "MCBooks" },
            { k: "NXB", v: "NXB Hồng Đức" },
            { k: "Kèm theo", v: "App học online" },
            { k: "Số trang", v: "350 trang" }
        ],
        reviews: [
            { name: "Học viên", date: "15/03/2024", star: 5, content: "Phương pháp nghe rất hiệu quả. App dễ dùng." }
        ]
    },

    // 41. TỰ HỌC TIẾNG TRUNG
    "tu-hoc-tieng-trung": {
        title: "Tự Học Tiếng Trung Cơ Bản",
        author: "The Zhishi",
        priceOld: "120.000đ",
        priceNew: "96.000đ",
        img: "../assets/images/tu-hoc-tieng-trung.jpg",
        category: "Ngoại Ngữ",
        rating: 4.5,
        descFull: `<p>Giáo trình dễ hiểu, kèm file nghe cho người mới bắt đầu làm quen với tiếng Trung.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "MCBooks" },
            { k: "NXB", v: "NXB Hồng Đức" },
            { k: "Số trang", v: "250 trang" },
            { k: "Kèm theo", v: "Audio/App" }
        ],
        reviews: [
            { name: "Người mới", date: "10/02/2024", star: 4, content: "Sách in màu đẹp, bài giảng dễ hiểu." }
        ]
    },

    // 42. TỰ HỌC TIẾNG NHẬT
    "tu-hoc-tieng-nhat": {
        title: "Tự Học Tiếng Nhật Cơ Bản",
        author: "Trần Hải Quỳnh",
        priceOld: "110.000đ",
        priceNew: "88.000đ",
        img: "../assets/images/tu-hoc-tieng-nhat.jpg",
        category: "Ngoại Ngữ",
        rating: 4.6,
        descFull: `<p>Lộ trình học bài bản từ bảng chữ cái Hiragana, Katakana đến giao tiếp cơ bản.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "MCBooks" },
            { k: "NXB", v: "NXB Hồng Đức" },
            { k: "Quà tặng", v: "Bookmark" },
            { k: "Số trang", v: "200 trang" }
        ],
        reviews: [
            { name: "Du học sinh", date: "01/01/2024", star: 5, content: "Rất tốt cho người tự học ở nhà." }
        ]
    },

    // 43. TIẾNG HÀN CƠ BẢN
    "tieng-han-co-ban": {
        title: "Tiếng Hàn Cùng Cheri Hyeri",
        author: "Kim Hye Ri",
        priceOld: "135.000đ",
        priceNew: "108.000đ",
        img: "../assets/images/tieng-han-co-ban.jpg",
        category: "Ngoại Ngữ",
        rating: 4.8,
        descFull: `<p>Học tiếng Hàn thú vị cùng Youtuber nổi tiếng Cheri Hyeri. Nội dung gần gũi, thực tế.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "SkyBooks" },
            { k: "NXB", v: "NXB Thanh Niên" },
            { k: "Kèm theo", v: "Video bài giảng" },
            { k: "Số trang", v: "280 trang" }
        ],
        reviews: [
            { name: "Fan Hyeri", date: "20/12/2023", star: 5, content: "Sách xinh xỉu, chị Hyeri dạy dễ thương lắm." }
        ]
    },

    // 44. PUTIN - LOGIC CỦA QUYỀN LỰC
    "putin-logic-quyen-luc": {
        title: "Putin - Logic Của Quyền Lực",
        author: "Hubert Seipel",
        priceOld: "168.000đ",
        priceNew: "135.000đ",
        img: "../assets/images/putin-logic-quyen-luc.jpg",
        category: "Chính Trị",
        rating: 4.7,
        descFull: `<p>Cái nhìn sâu sắc về tư duy chính trị và con người của Tổng thống Nga Vladimir Putin qua ngòi bút nhà báo phương Tây.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "NXB Thế Giới" },
            { k: "NXB", v: "NXB Thế Giới" },
            { k: "Số trang", v: "400 trang" },
            { k: "Hình thức", v: "Bìa mềm" }
        ],
        reviews: [
            { name: "Quốc tế học", date: "15/03/2024", star: 5, content: "Tư liệu quý giá để hiểu về nước Nga hiện đại." }
        ]
    },

    // 45. QUÂN VƯƠNG
    "quan-vuong": {
        title: "Quân Vương (The Prince)",
        author: "Niccolò Machiavelli",
        priceOld: "90.000đ",
        priceNew: "72.000đ",
        img: "../assets/images/quan-vuong.jpg",
        category: "Chính Trị",
        rating: 4.6,
        descFull: `<p>Tác phẩm kinh điển về thuật cai trị và khoa học chính trị. "Mục đích biện minh cho phương tiện".</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Omega Plus" },
            { k: "NXB", v: "NXB Tri Thức" },
            { k: "Số trang", v: "200 trang" },
            { k: "Dịch giả", v: "Vũ Đạo Dung" }
        ],
        reviews: [
            { name: "Lãnh đạo", date: "10/02/2024", star: 4, content: "Sách mỏng nhưng thâm thúy. Đọc để hiểu về quyền lực." }
        ]
    },

    // 46. PINOCCHIO
    "pinocchio": {
        title: "Cuộc Phiêu Lưu Của Pinocchio",
        author: "Carlo Collodi",
        priceOld: "85.000đ",
        priceNew: "68.000đ",
        img: "../assets/images/pinocchio.jpg",
        category: "Văn Học Thiếu Nhi",
        rating: 4.8,
        descFull: `<p>Câu chuyện kinh điển về chú rối gỗ mũi dài muốn trở thành người thật. Bài học sâu sắc về sự trung thực.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Đông A" },
            { k: "NXB", v: "NXB Văn Học" },
            { k: "Số trang", v: "200 trang" },
            { k: "Minh họa", v: "Màu" }
        ],
        reviews: [
            { name: "Bé Bi", date: "01/06/2023", star: 5, content: "Con hứa sẽ không nói dối như Pinocchio." }
        ]
    },

    // 47. CHARLIE VÀ NHÀ MÁY SÔ CÔ LA
    "charlie-socola": {
        title: "Charlie Và Nhà Máy Sô Cô La",
        author: "Roald Dahl",
        priceOld: "95.000đ",
        priceNew: "76.000đ",
        img: "../assets/images/charlie-socola.jpg",
        category: "Văn Học Thiếu Nhi",
        rating: 5.0,
        descFull: `<p>Cuộc phiêu lưu ngọt ngào và kỳ lạ của Charlie trong nhà máy sô cô la bí ẩn của ông Willy Wonka.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "NXB Kim Đồng" },
            { k: "NXB", v: "NXB Kim Đồng" },
            { k: "Dịch giả", v: "Dương Tường" },
            { k: "Số trang", v: "180 trang" }
        ],
        reviews: [
            { name: "Fan Roald Dahl", date: "14/02/2024", star: 5, content: "Truyện hay, dí dỏm và giàu trí tưởng tượng." }
        ]
    },

    // 48. ĐỒI THỎ
    "doi-tho": {
        title: "Đồi Thỏ (Watership Down)",
        author: "Richard Adams",
        priceOld: "135.000đ",
        priceNew: "108.000đ",
        img: "../assets/images/doi-tho.jpg",
        category: "Văn Học Kinh Điển",
        rating: 4.9,
        descFull: `<p>Một cuốn tiểu thuyết phiêu lưu hào hùng về một bầy thỏ đi tìm vùng đất mới. Tác phẩm lay động trái tim hàng triệu độc giả.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Nhã Nam" },
            { k: "NXB", v: "NXB Hội Nhà Văn" },
            { k: "Số trang", v: "500 trang" },
            { k: "Kích thước", v: "15 x 24 cm" }
        ],
        reviews: [
            { name: "Yêu động vật", date: "20/03/2024", star: 5, content: "Một kiệt tác. Thế giới loài thỏ được miêu tả quá sống động." }
        ]
    },

    // 49. ÂM THANH VÀ CUỒNG NỘ
    "am-thanh-va-cuong-no": {
        title: "Âm Thanh Và Cuồng Nộ",
        author: "William Faulkner",
        priceOld: "300.000đ",
        priceNew: "230.000đ",
        img: "../assets/images/am-thanh-va-cuong-no.jpg",
        category: "Văn Học Kinh Điển",
        rating: 4.7,
        descFull: `<p>Kiệt tác của văn học Mỹ, xoay quanh sự suy tàn của gia đình Compson. Một tác phẩm thách thức nhưng đầy sức hút.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "NXB Văn Học" },
            { k: "NXB", v: "NXB Văn Học" },
            { k: "Số trang", v: "400 trang" },
            { k: "Dịch giả", v: "Phan Hồng Hạnh" }
        ],
        reviews: [
            { name: "Mọt sách", date: "10/01/2024", star: 4, content: "Khó đọc nhưng khi hiểu rồi thì thấy cực kỳ xuất sắc. Kỹ thuật dòng ý thức đỉnh cao." }
        ]
    },

    // 50. THỬ NGHIỆM KINH DOANH
    "thu-nghiem-kinh-doanh": {
        title: "Thử Nghiệm Kinh Doanh",
        author: "Stefan H. Thomke",
        priceOld: "169.000đ",
        priceNew: "135.000đ",
        img: "../assets/images/thu-nghiem-kinh-doanh.jpg",
        category: "Kinh Tế - Quản Trị",
        rating: 4.8,
        descFull: `<p>Sức mạnh đáng kinh ngạc của các cuộc thử nghiệm kinh doanh (A/B Testing) trong thời đại số.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "PACE" },
            { k: "NXB", v: "NXB Tổng Hợp TPHCM" },
            { k: "Số trang", v: "380 trang" },
            { k: "Bìa", v: "Mềm" }
        ],
        reviews: [
            { name: "Digital Marketer", date: "05/02/2024", star: 5, content: "Rất cần thiết cho các doanh nghiệp muốn đổi mới sáng tạo." }
        ]
    },

    // 51. QUẢN TRỊ BẰNG VĂN HÓA
    "quan-tri-bang-van-hoa": {
        title: "Quản Trị Bằng Văn Hóa",
        author: "Giản Tư Trung",
        priceOld: "180.000đ",
        priceNew: "144.000đ",
        img: "../assets/images/quan-tri-bang-van-hoa.jpg",
        category: "Quản Trị",
        rating: 4.9,
        descFull: `<p>Cách thức kiến tạo và tái tạo văn hóa tổ chức. Cuốn sách tâm huyết dành cho các nhà lãnh đạo Việt Nam.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "PACE" },
            { k: "NXB", v: "NXB Tri Thức" },
            { k: "Tác giả", v: "Giản Tư Trung" },
            { k: "Số trang", v: "450 trang" }
        ],
        reviews: [
            { name: "CEO", date: "01/03/2024", star: 5, content: "Cuốn sách nền tảng về văn hóa doanh nghiệp. Rất sâu sắc." }
        ]
    },

    // 52. TỪ ĐÓI NGHÈO ĐẾN THỊNH VƯỢNG
    "tu-doi-ngheo-den-thinh-vuong": {
        title: "Từ Đói Nghèo Đến Thịnh Vượng",
        author: "Arnold Kling & Nick Schulz",
        priceOld: "140.000đ",
        priceNew: "112.000đ",
        img: "../assets/images/tu-doi-ngheo-den-thinh-vuong.jpg",
        category: "Kinh Tế Học",
        rating: 4.6,
        descFull: `<p>Tài sản vô hình, nợ tiềm ẩn và thành tựu lâu dài không phụ thuộc vào sự khan hiếm.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "PACE" },
            { k: "NXB", v: "NXB Tổng Hợp TPHCM" },
            { k: "Số trang", v: "300 trang" },
            { k: "Hình thức", v: "Bìa mềm" }
        ],
        reviews: [
            { name: "Sinh viên Kinh tế", date: "12/12/2023", star: 5, content: "Góc nhìn mới mẻ về sự phát triển kinh tế." }
        ]
    },

    // 53. BẢN ĐỒ CHIẾN LƯỢC
    "ban-do-chien-luoc": {
        title: "Bản Đồ Chiến Lược",
        author: "Robert S. Kaplan",
        priceOld: "220.000đ",
        priceNew: "176.000đ",
        img: "../assets/images/ban-do-chien-luoc.jpg",
        category: "Kinh Tế - Quản Trị",
        rating: 4.8,
        descFull: `<p>Công cụ hữu hiệu bậc nhất để kết nối và đồng bộ công việc hàng ngày của từng thành viên với tầm nhìn chiến lược (BSC).</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "PACE" },
            { k: "NXB", v: "NXB Tổng Hợp TPHCM" },
            { k: "Số trang", v: "550 trang" },
            { k: "Bìa", v: "Cứng" }
        ],
        reviews: [
            { name: "Giám đốc chiến lược", date: "20/02/2024", star: 5, content: "Sách giáo khoa cho việc xây dựng Balanced Scorecard." }
        ]
    },

    // 54. CHÍNH BẮC
    "chinh-bac": {
        title: "Chính Bắc (True North)",
        author: "Bill George",
        priceOld: "165.000đ",
        priceNew: "132.000đ",
        img: "../assets/images/chinh-bac.jpg",
        category: "Kỹ Năng Lãnh Đạo",
        rating: 4.7,
        descFull: `<p>Khám phá ra chiếc "La bàn nội tâm" của chính mình để dẫn dắt bản thân và trở thành nhà lãnh đạo đích thực.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "PACE" },
            { k: "NXB", v: "NXB Tổng Hợp TPHCM" },
            { k: "Dịch giả", v: "Võ Kiều Linh" },
            { k: "Số trang", v: "350 trang" }
        ],
        reviews: [
            { name: "Team Leader", date: "15/01/2024", star: 5, content: "Giúp mình định hướng lại phong cách lãnh đạo." }
        ]
    },

    // 55. 10 VẠN CÂU HỎI VÌ SAO
    "10-van-cau-hoi": {
        title: "10 Vạn Câu Hỏi Vì Sao",
        author: "Phạm Hồng (Biên soạn)",
        priceOld: "60.000đ",
        priceNew: "48.000đ",
        img: "../assets/images/10-van-cau-hoi.jpg",
        category: "Khoa Học Thường Thức",
        rating: 4.5,
        descFull: `<p>Bộ sách giải đáp những thắc mắc về thế giới xung quanh, khơi dậy niềm đam mê khoa học cho trẻ em.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Minh Long" },
            { k: "NXB", v: "NXB Mỹ Thuật" },
            { k: "Độ tuổi", v: "6 - 15 tuổi" },
            { k: "Hình thức", v: "Bìa mềm" }
        ],
        reviews: [
            { name: "Phụ huynh", date: "01/06/2023", star: 5, content: "Bé nhà mình rất thích, hỏi suốt ngày." }
        ]
    },

    // 56. SIÊU KINH TẾ HỌC HÀI HƯỚC
    "sieu-kinh-te-hoc": {
        title: "Siêu Kinh Tế Học Hài Hước",
        author: "Steven D. Levitt",
        priceOld: "145.000đ",
        priceNew: "116.000đ",
        img: "../assets/images/sieu-kinh-te-hoc.jpg",
        category: "Kinh Tế Học",
        rating: 4.8,
        descFull: `<p>Sự giảm nhiệt toàn cầu, những cô gái bán hoa yêu nước và vì sao những kẻ đánh bom liều chết nên mua bảo hiểm nhân thọ.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Alpha Books" },
            { k: "NXB", v: "NXB Lao Động" },
            { k: "Số trang", v: "350 trang" },
            { k: "Phong cách", v: "Hài hước, châm biếm" }
        ],
        reviews: [
            { name: "Kinh tế gia", date: "10/03/2024", star: 5, content: "Góc nhìn kinh tế học cực kỳ độc đáo và thú vị." }
        ]
    },

    // 57. NGÔI NHÀ NHỎ TRÊN THẢO NGUYÊN
    "ngoi-nha-nho": {
        title: "Ngôi Nhà Nhỏ Trên Thảo Nguyên",
        author: "Laura Ingalls Wilder",
        priceOld: "80.000đ",
        priceNew: "64.000đ",
        img: "../assets/images/ngoi-nha-nho.jpg",
        category: "Văn Học Thiếu Nhi",
        rating: 5.0,
        descFull: `<p>Câu chuyện ấm áp về gia đình Ingalls khai hoang trên vùng thảo nguyên nước Mỹ. Một tác phẩm giàu tính nhân văn.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "NXB Kim Đồng" },
            { k: "NXB", v: "NXB Kim Đồng" },
            { k: "Dịch giả", v: "Lưu Diệu Vân" },
            { k: "Số trang", v: "250 trang" }
        ],
        reviews: [
            { name: "Hoài niệm", date: "14/02/2024", star: 5, content: "Tuổi thơ ùa về. Câu chuyện gia đình ấm áp nhất." }
        ]
    },

    // 58. NHỮNG TẤM LÒNG CAO CẢ
    "nhung-tam-long-cao-ca": {
        title: "Những Tấm Lòng Cao Cả",
        author: "Edmondo De Amicis",
        priceOld: "90.000đ",
        priceNew: "72.000đ",
        img: "../assets/images/nhung-tam-long-cao-ca.jpg",
        category: "Văn Học Thiếu Nhi",
        rating: 5.0,
        descFull: `<p>Cuốn nhật ký của cậu bé Enrico về tình thầy trò, bè bạn và lòng yêu nước. Một cuốn sách giáo dục nhân cách tuyệt vời.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Đông A" },
            { k: "NXB", v: "NXB Văn Học" },
            { k: "Dịch giả", v: "Hoàng Thiếu Sơn" },
            { k: "Số trang", v: "360 trang" }
        ],
        reviews: [
            { name: "Giáo viên CN", date: "20/11/2023", star: 5, content: "Sách gối đầu giường để dạy con nên người." }
        ]
    },

    // 59. KHÉO ĂN NÓI SẼ CÓ ĐƯỢC THIÊN HẠ
    "kheo-an-noi": {
        title: "Khéo Ăn Nói Sẽ Có Được Thiên Hạ",
        author: "Trác Nhã",
        priceOld: "110.000đ",
        priceNew: "88.000đ",
        img: "../assets/images/kheo-an-noi.jpg",
        category: "Kỹ Năng Giao Tiếp",
        rating: 4.6,
        descFull: `<p>Không biết ăn nói đụng đâu hỏng đấy. Khéo ăn nói muốn gì được nấy. Cẩm nang giúp bạn thành công trong giao tiếp.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Minh Long" },
            { k: "NXB", v: "NXB Văn Học" },
            { k: "Số trang", v: "400 trang" },
            { k: "Bìa", v: "Mềm" }
        ],
        reviews: [
            { name: "Sale Man", date: "15/01/2024", star: 5, content: "Rất nhiều kỹ năng thực tế, áp dụng được ngay." }
        ]
    },

    // 60. BÀI HỌC DIỆU KỲ TỪ CHIẾC XE RÁC
    "chiec-xe-rac": {
        title: "Bài Học Diệu Kỳ Từ Chiếc Xe Rác",
        author: "David J. Pollay",
        priceOld: "60.000đ",
        priceNew: "48.000đ",
        img: "../assets/images/chiec-xe-rac.jpg",
        category: "Kỹ Năng Sống",
        rating: 4.7,
        descFull: `<p>Hãy bỏ qua những điều tiêu cực (rác rưởi) do người khác ném vào bạn và sống một cuộc đời hạnh phúc hơn.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "First News" },
            { k: "NXB", v: "NXB Tổng Hợp TPHCM" },
            { k: "Số trang", v: "160 trang" },
            { k: "Kích thước", v: "13 x 20.5 cm" }
        ],
        reviews: [
            { name: "Sống Tích Cực", date: "01/01/2024", star: 5, content: "Cuốn sách giúp mình bình tĩnh hơn trước những chuyện bực mình." }
        ]
    },

    // 61. THIẾT KẾ CUỘC ĐỜI THỊNH VƯỢNG
    "thiet-ke-cuoc-doi": {
        title: "Thiết Kế Cuộc Đời Thịnh Vượng",
        author: "Thái Phạm",
        priceOld: "199.000đ",
        priceNew: "159.000đ",
        img: "../assets/images/thiet-ke-cuoc-doi.jpg",
        category: "Phát Triển Bản Thân",
        rating: 4.8,
        descFull: `<p>Hướng dẫn chi tiết cách thức xây dựng cuộc đời đáng mơ ước của bạn: Từ tư duy, tài chính đến sức khỏe.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Happy Live" },
            { k: "NXB", v: "NXB Thế Giới" },
            { k: "Tác giả", v: "Thái Phạm" },
            { k: "Bìa", v: "Cứng" }
        ],
        reviews: [
            { name: "Fan Happy Live", date: "20/12/2023", star: 5, content: "Sách in màu rất đẹp, nội dung truyền cảm hứng." }
        ]
    },

    // 62. CHỦ NGHĨA TƯ BẢN
    "chu-nghia-tu-ban": {
        title: "Một Chủ Nghĩa Tư Bản Vì Lợi Ích Các Bên",
        author: "Klaus Schwab",
        priceOld: "180.000đ",
        priceNew: "144.000đ",
        img: "../assets/images/chu-nghia-tu-ban.jpg",
        category: "Kinh Tế - Chính Trị",
        rating: 4.8,
        descFull: `<p>Tầm nhìn về một nền kinh tế toàn cầu bền vững, nơi lợi nhuận không phải là mục tiêu duy nhất.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "PACE" },
            { k: "NXB", v: "NXB Tổng Hợp TPHCM" },
            { k: "Tác giả", v: "Chủ tịch WEF" },
            { k: "Số trang", v: "350 trang" }
        ],
        reviews: [
            { name: "Nhà nghiên cứu", date: "15/03/2024", star: 5, content: "Tầm nhìn vĩ mô về tương lai kinh tế thế giới." }
        ]
    },

    

    // 64. CHÍNH TRỊ LUẬN
    "chinh-tri-luan": {
        title: "Chính Trị Luận (Politics)",
        author: "Aristotle",
        priceOld: "199.000đ",
        priceNew: "159.000đ",
        img: "../assets/images/chinh-tri-luan.jpg",
        category: "Triết Học",
        rating: 5.0,
        descFull: `<p>Tác phẩm nền tảng của triết học chính trị phương Tây. Aristotle phân tích bản chất của nhà nước, công dân và các thể chế.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Alpha Books" },
            { k: "NXB", v: "NXB Thế Giới" },
            { k: "Dịch giả", v: "Nông Duy Trường" },
            { k: "Số trang", v: "550 trang" }
        ],
        reviews: [
            { name: "Sinh viên Luật", date: "15/01/2024", star: 5, content: "Sách khó đọc nhưng là nền tảng không thể thiếu." }
        ]
    },

    // 65. CỘNG HÒA
    "cong-hoa-plato": {
        title: "Cộng Hòa (The Republic)",
        author: "Plato",
        priceOld: "220.000đ",
        priceNew: "176.000đ",
        img: "../assets/images/cong-hoa-plato.jpg",
        category: "Triết Học",
        rating: 5.0,
        descFull: `<p>Tác phẩm vĩ đại nhất của Plato, bàn về công lý, nhà nước lý tưởng và vai trò của triết vương.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Nhã Nam" },
            { k: "NXB", v: "NXB Thế Giới" },
            { k: "Dịch giả", v: "Đỗ Khánh Hoan" },
            { k: "Số trang", v: "700 trang" }
        ],
        reviews: [
            { name: "Triết học gia", date: "20/02/2024", star: 5, content: "Đỉnh cao của tư duy triết học Hy Lạp cổ đại." }
        ]
    },

    // 66. NẾP GẤP THỜI GIAN
    "nep-gap-thoi-gian": {
        title: "Nếp Gấp Thời Gian",
        author: "Madeleine L'Engle",
        priceOld: "115.000đ",
        priceNew: "92.000đ",
        img: "../assets/images/nep-gap-thoi-gian.jpg",
        category: "Văn Học Giả Tưởng",
        rating: 4.6,
        descFull: `<p>Cuộc phiêu lưu xuyên không gian và thời gian của Meg Murry để giải cứu cha mình.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Nhã Nam" },
            { k: "NXB", v: "NXB Văn Học" },
            { k: "Giải thưởng", v: "Newbery Medal" },
            { k: "Số trang", v: "300 trang" }
        ],
        reviews: [
            { name: "Fan Sci-fi", date: "05/03/2024", star: 4, content: "Ý tưởng tesseract rất thú vị. Truyện hấp dẫn." }
        ]
    },

    // 67. CHỐT SALES
    "chot-sales": {
        title: "Chốt Sales - Đàm Phán Thành Công",
        author: "Craig Christensen & cộng sự",
        priceOld: "120.000đ",
        priceNew: "96.000đ",
        img: "../assets/images/chot-sales.jpg",
        category: "Kinh Doanh",
        rating: 4.7,
        descFull: `<p>5 kỹ năng bán hàng cốt lõi để chốt hợp đồng thành công. Cuốn sách thực chiến dành cho dân sales.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "PACE" },
            { k: "NXB", v: "NXB Tổng Hợp TPHCM" },
            { k: "Giới thiệu", v: "Stephen M.R. Covey" },
            { k: "Số trang", v: "250 trang" }
        ],
        reviews: [
            { name: "Best Seller", date: "12/12/2023", star: 5, content: "Ngắn gọn, súc tích, áp dụng được ngay." }
        ]
    },

    // 68. TUYÊN NGÔN ĐẢNG CỘNG SẢN
    "tuyen-ngon-dang-cong-san": {
        title: "Tuyên Ngôn Đảng Cộng Sản",
        author: "Karl Marx & Frederick Engels",
        priceOld: "90.000đ",
        priceNew: "72.000đ",
        img: "../assets/images/tuyen-ngon-dang-cong-san.jpg",
        category: "Chính Trị",
        rating: 5.0,
        descFull: `<p>Văn kiện lịch sử quan trọng, đặt nền móng cho chủ nghĩa cộng sản khoa học và phong trào công nhân quốc tế.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "NXB Chính Trị QG" },
            { k: "NXB", v: "NXB Chính Trị QG" },
            { k: "Ngôn ngữ", v: "Song ngữ Anh - Việt" },
            { k: "Số trang", v: "150 trang" }
        ],
        reviews: [
            { name: "Đảng viên", date: "03/02/2024", star: 5, content: "Tài liệu học tập chính trị quan trọng." }
        ]
    },

    // 69. LƯỢC SỬ KINH TẾ HỌC
    "luoc-su-kinh-te-hoc": {
        title: "Lược Sử Kinh Tế Học",
        author: "Niall Kishtainy",
        priceOld: "155.000đ",
        priceNew: "124.000đ",
        img: "../assets/images/luoc-su-kinh-te-hoc.jpg",
        category: "Kinh Tế Học",
        rating: 4.8,
        descFull: `<p>Câu chuyện thú vị về lịch sử các tư tưởng kinh tế từ thời cổ đại đến hiện đại, giải thích các quy luật vận hành thế giới.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Nhã Nam" },
            { k: "NXB", v: "NXB Thế Giới" },
            { k: "Số trang", v: "360 trang" },
            { k: "Bìa", v: "Mềm" }
        ],
        reviews: [
            { name: "Sinh viên", date: "15/03/2024", star: 5, content: "Dễ hiểu hơn giáo trình ở trường rất nhiều." }
        ]
    },

    // 70. GIẢI THÍCH NGỮ PHÁP TIẾNG PHÁP
    "ngu-phap-tieng-phap": {
        title: "Giải Thích Ngữ Pháp Tiếng Pháp",
        author: "Sylvie Poisson-Quinton",
        priceOld: "110.000đ",
        priceNew: "88.000đ",
        img: "../assets/images/ngu-phap-tieng-phap.jpg",
        category: "Học Ngoại Ngữ",
        rating: 4.7,
        descFull: `<p>Tài liệu tra cứu ngữ pháp đầy đủ và chi tiết, phù hợp cho người học tiếng Pháp ở mọi trình độ.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Fahasa" },
            { k: "NXB", v: "NXB Đà Nẵng" },
            { k: "Trình độ", v: "Sơ - Trung - Cao cấp" },
            { k: "Số trang", v: "300 trang" }
        ],
        reviews: [
            { name: "Du học sinh Pháp", date: "10/01/2024", star: 5, content: "Sách must-have cho ai học tiếng Pháp." }
        ]
    },

    // 71. VỪA LƯỜI VỪA BẬN VẪN GIỎI TIẾNG ANH
    "vua-luoi-vua-ban": {
        title: "Vừa Lười Vừa Bận Vẫn Giỏi Tiếng Anh",
        author: "Nguyễn Văn Hiệp",
        priceOld: "89.000đ",
        priceNew: "69.000đ",
        img: "../assets/images/vua-luoi-vua-ban.jpg",
        category: "Học Ngoại Ngữ",
        rating: 4.5,
        descFull: `<p>Phương pháp học tiếng Anh thụ động qua âm thanh (nghe vô thức), dành cho người bận rộn.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "MCBooks" },
            { k: "NXB", v: "NXB Hồng Đức" },
            { k: "Kèm theo", v: "App MCBooks" },
            { k: "Số trang", v: "200 trang" }
        ],
        reviews: [
            { name: "Nhân viên VP", date: "05/02/2024", star: 4, content: "Hợp với người đi làm bận rộn như mình." }
        ]
    },

    // 72. CẨM NANG TỰ HỌC TIẾNG PHÁP
    "tu-hoc-tieng-phap": {
        title: "Cẩm Nang Hướng Dẫn Tự Học Tiếng Pháp",
        author: "Ánh Nga (Biên soạn)",
        priceOld: "95.000đ",
        priceNew: "76.000đ",
        img: "../assets/images/tu-hoc-tieng-phap.jpg",
        category: "Học Ngoại Ngữ",
        rating: 4.4,
        descFull: `<p>Sách hướng dẫn lộ trình tự học tiếng Pháp từ sơ cấp đến trung cấp, kèm bài tập thực hành.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Minh Tâm" },
            { k: "NXB", v: "NXB Thanh Niên" },
            { k: "Trình độ", v: "Cơ bản" },
            { k: "Số trang", v: "220 trang" }
        ],
        reviews: [
            { name: "Người tự học", date: "12/12/2023", star: 4, content: "Khá ổn cho người mới bắt đầu." }
        ]
    },

    // 73. ĐÀM THOẠI TIẾNG NHẬT
    "dam-thoai-tieng-nhat": {
        title: "Đàm Thoại Tiếng Nhật Trong Doanh Nghiệp",
        author: "Midori Iwazawa",
        priceOld: "105.000đ",
        priceNew: "84.000đ",
        img: "../assets/images/dam-thoai-tieng-nhat.jpg",
        category: "Học Ngoại Ngữ",
        rating: 4.6,
        descFull: `<p>Các mẫu câu giao tiếp thương mại thiết yếu khi làm việc trong công ty Nhật Bản.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Fahasa" },
            { k: "NXB", v: "NXB ĐH Sư Phạm TP.HCM" },
            { k: "Kèm theo", v: "File nghe MP3" },
            { k: "Chủ đề", v: "Tiếng Nhật thương mại" }
        ],
        reviews: [
            { name: "Nhân viên công ty Nhật", date: "20/02/2024", star: 5, content: "Rất thực tế, giúp mình tự tin hơn khi nói chuyện với sếp." }
        ]
    },

    // 74. TỰ HỌC 2000 TỪ VỰNG TIẾNG ANH
    "2000-tu-vung-anh": {
        title: "Tự Học 2000 Từ Vựng Tiếng Anh Theo Chủ Đề",
        author: "The Windy",
        priceOld: "80.000đ",
        priceNew: "60.000đ",
        img: "../assets/images/2000-tu-vung-anh.jpg",
        category: "Học Ngoại Ngữ",
        rating: 4.5,
        descFull: `<p>Học từ vựng nhanh chóng qua các chủ đề thông dụng nhất. Sách có hình ảnh minh họa dễ nhớ.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "MCBooks" },
            { k: "NXB", v: "NXB Hồng Đức" },
            { k: "Số trang", v: "300 trang" },
            { k: "Kích thước", v: "14.5 x 20.5 cm" }
        ],
        reviews: [
            { name: "Học sinh cấp 3", date: "10/01/2024", star: 5, content: "Từ vựng chia theo chủ đề rất dễ học." }
        ]
    },

    // 75. TẬP VIẾT TIẾNG HÀN
    "tap-viet-tieng-han": {
        title: "Tập Viết Tiếng Hàn Cho Người Mới Bắt Đầu",
        author: "The Changmi",
        priceOld: "65.000đ",
        priceNew: "50.000đ",
        img: "../assets/images/tap-viet-tieng-han.jpg",
        category: "Học Ngoại Ngữ",
        rating: 4.8,
        descFull: `<p>Vở luyện viết chữ Hangul chuẩn, giúp người mới bắt đầu luyện nét và ghi nhớ mặt chữ nhanh chóng.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "MCBooks" },
            { k: "NXB", v: "NXB Hồng Đức" },
            { k: "Loại", v: "Vở luyện viết" },
            { k: "Số trang", v: "100 trang" }
        ],
        reviews: [
            { name: "Fan Kpop", date: "15/02/2024", star: 5, content: "Giấy dày, in rõ đẹp. Tập viết rất thích." }
        ]
    },

    // 76. TOTTO-CHAN BÊN CỬA SỔ
    "totto-chan": {
        title: "Totto-chan Bên Cửa Sổ",
        author: "Kuroyanagi Tetsuko",
        priceOld: "98.000đ",
        priceNew: "78.000đ",
        img: "../assets/images/totto-chan.jpg",
        category: "Văn Học Thiếu Nhi",
        rating: 5.0,
        descFull: `<p>Cuốn tự truyện kinh điển về nền giáo dục khai phóng. Ngôi trường Tomoe với những toa tàu cũ đã nuôi dưỡng tâm hồn trẻ thơ tuyệt vời.</p>`,
        specs: [
            { k: "Nhà cung cấp", v: "Nhã Nam" },
            { k: "NXB", v: "NXB Văn Học" },
            { k: "Dịch giả", v: "Trương Thùy Lan" },
            { k: "Số trang", v: "350 trang" }
        ],
        reviews: [
            { name: "Giáo viên", date: "20/11/2023", star: 5, content: "Mơ ước về một ngôi trường Tomoe cho mọi đứa trẻ." },
            { name: "Phụ huynh", date: "18/11/2023", star: 5, content: "Đọc để hiểu và yêu thương con đúng cách hơn." }
        ]
        },

    
    
    
    // ... Bạn có thể thêm tiếp các cuốn khác theo mẫu này
    };

    // --- LOGIC XỬ LÝ (ĐÃ CẬP NHẬT BREADCRUMB) ---
    const params = new URLSearchParams(window.location.search);
    let bookId = params.get('id');
    
    // Nếu không có ID thì mặc định chọn cuốn đầu tiên
    if (!bookId) bookId = 'toi-ve';

    if (bookId && books[bookId]) {
        const book = books[bookId];
        
        // 1. Cập nhật Tiêu đề trang & BREADCRUMB (Phần mới thêm)
        document.title = book.title;
        
        // --- ĐOẠN MỚI THÊM ĐÂY ---
        const breadCat = document.getElementById('breadcrumb-category');
        const breadTitle = document.getElementById('breadcrumb-title');
        if(breadCat) breadCat.innerText = book.category;
        if(breadTitle) breadTitle.innerText = book.title;
        // --------------------------

        // 2. Render Thông tin cơ bản
        document.getElementById('book-title').innerText = book.title;
        document.getElementById('book-author').innerHTML = `Tác giả: <b>${book.author}</b>`;
        
        // Kiểm tra xem element có tồn tại không trước khi gán để tránh lỗi
        if(document.getElementById('book-category')) 
            document.getElementById('book-category').innerText = book.category;
            
        document.getElementById('price-old').innerText = book.priceOld;
        document.getElementById('price-new').innerText = book.priceNew;
        document.getElementById('book-img').src = book.img;
        
        const ratingCount = document.querySelector('.rating-count');
        if(ratingCount) ratingCount.innerText = `(${book.reviews ? book.reviews.length : 0} đánh giá)`;

        // 3. Render Tab Mô Tả (HTML)
        if (document.getElementById('tab-desc-render')) {
            document.getElementById('tab-desc-render').innerHTML = book.descFull;
        }

        // 4. Render Tab Thông Số
        if (document.getElementById('tab-specs-render') && book.specs) {
            const specsHTML = book.specs.map(item => `
                <tr>
                    <td>${item.k}</td>
                    <td>${item.v}</td>
                </tr>
            `).join('');
            document.getElementById('tab-specs-render').innerHTML = specsHTML;
        }

        // 5. Render Tab Bình Luận
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

    } else {
        console.log("Không tìm thấy sách: " + bookId);
        document.getElementById('book-title').innerText = "Không tìm thấy sách!";
    }

    // --- LOGIC CHUYỂN TAB ---
    const tabs = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.style.display = 'none');
            
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            
            if(tabId === 'description') document.getElementById('description-content').style.display = 'block';
            if(tabId === 'specs') document.getElementById('specs-content').style.display = 'block';
            if(tabId === 'review') document.getElementById('review-content').style.display = 'block';
        });
    });

    // --- LOGIC TĂNG GIẢM SỐ LƯỢNG ---
    const qtyInput = document.getElementById('quantity');
    const btnPlus = document.getElementById('plus-btn');
    const btnMinus = document.getElementById('minus-btn');
    if (btnPlus && btnMinus && qtyInput) {
        btnPlus.onclick = () => qtyInput.stepUp();
        btnMinus.onclick = () => qtyInput.stepDown();
    }
});