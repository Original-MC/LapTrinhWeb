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
            category: "Văn Học Kinh Điển",
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
            category: "Văn Học Thiếu Nhi",
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
            category: "Sách Kỹ Năng",
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
            category: "Sách Kỹ Năng Trẻ",
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
            category: "Văn Học Kinh Điển",
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
            category: "Văn Học Nước Ngoài",
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
            category: "Văn Học Thiếu Nhi",
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
            priceOld: "65.000đ",
            priceNew: "48.000đ",
            img: "../assets/images/ong-gia-va-bien-ca.jpg",
            category: "Văn Học Kinh Điển",
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
            category: "Truyện Dài",
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
            category: "Văn Học Nước Ngoài",
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
            category: "Văn Học Việt Nam",
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
            category: "Văn Học Giáo Dục",
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
            category: "Văn Học Hiện Thực",
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
        }
    };

    // --- LOGIC XỬ LÝ (KHÔNG CẦN SỬA) ---
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id');

    if (bookId && books[bookId]) {
        const book = books[bookId];
        
        // 1. Render Thông tin cơ bản
        document.getElementById('book-title').innerText = book.title;
        document.getElementById('book-author').innerHTML = `Tác giả: <b>${book.author}</b>`;
        document.getElementById('book-category').innerText = book.category;
        document.getElementById('price-old').innerText = book.priceOld;
        document.getElementById('price-new').innerText = book.priceNew;
        document.getElementById('book-img').src = book.img;
        document.querySelector('.rating-count').innerText = `(${book.reviews ? book.reviews.length : 0} đánh giá)`;
        document.title = book.title;

        // 2. Render Tab Mô Tả (HTML)
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

    } else {
        if(bookId) console.log("Không tìm thấy sách: " + bookId);
    }

    // --- LOGIC CHUYỂN TAB & SỐ LƯỢNG ---
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

    const qtyInput = document.getElementById('quantity');
    const btnPlus = document.getElementById('plus-btn');
    const btnMinus = document.getElementById('minus-btn');
    if (btnPlus && btnMinus) {
        btnPlus.onclick = () => qtyInput.stepUp();
        btnMinus.onclick = () => qtyInput.stepDown();
    }
});