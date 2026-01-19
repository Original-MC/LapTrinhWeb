// Dữ liệu giỏ hàng mẫu (thay bằng localStorage thực tế)
let cart = JSON.parse(localStorage.getItem('cart')) || [
  // Ví dụ:
  // { id: 1, name: "Nhà Giả Kim", price: 79000, quantity: 2, image: "https://via.placeholder.com/80x100" },
];

const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

function renderCart() {
  const tbody = document.getElementById('cartItemsBody');
  const emptyDiv = document.getElementById('emptyCart');

  tbody.innerHTML = '';

  if (cart.length === 0) {
    emptyDiv.style.display = 'flex';
    tbody.style.display = 'none';
  } else {
    emptyDiv.style.display = 'none';
    tbody.style.display = '';

    cart.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${item.image || 'https://via.placeholder.com/80x100'}" alt="${item.name}" width="80"></td>
        <td><strong>${item.name}</strong></td>
        <td style="text-align:center;">${item.quantity}</td>
        <td style="text-align:right; font-weight:bold;">
          ${(item.price * item.quantity).toLocaleString('vi-VN')} ₫
        </td>
      `;
      tbody.appendChild(row);
    });
  }

  calculateTotal();
}

function calculateTotal() {
  let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discount = 0;     // có thể thêm logic giảm giá
  let shipping = 0;     // có thể thêm logic phí ship

  let total = subtotal - discount + shipping;

  document.getElementById('subTotal').textContent = subtotal.toLocaleString('vi-VN') + ' ₫';
  document.getElementById('discount').textContent = discount.toLocaleString('vi-VN') + ' ₫';
  document.getElementById('shipping').textContent = shipping.toLocaleString('vi-VN') + ' ₫';
  document.getElementById('grandTotal').textContent = total.toLocaleString('vi-VN') + ' ₫';

  return { subtotal, discount, shipping, total };
}

function placeOrder() {
  const fullName = document.getElementById('fullName').value.trim();
  const phone    = document.getElementById('phone').value.trim();
  const address  = document.getElementById('address').value.trim();

  if (!fullName || !phone || !address) {
    alert("Vui lòng điền đầy đủ thông tin giao hàng!");
    return;
  }

  if (cart.length === 0) {
    alert("Giỏ hàng đang trống!");
    return;
  }

  const { subtotal, discount, shipping, total } = calculateTotal();

  const newOrder = {
    id: Date.now(),
    date: new Date().toLocaleString('vi-VN'),
    customer: { fullName, phone, address },
    items: [...cart],
    subtotal,
    discount,
    shipping,
    total,
    status: "Chờ xác nhận"
  };

  // Lưu vào lịch sử giao dịch
  orderHistory.push(newOrder);
  localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

  // Xóa giỏ hàng
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));

  alert("Đặt hàng thành công!\nMã đơn hàng: " + newOrder.id + "\nChúng tôi sẽ liên hệ bạn sớm nhất.");

  // In hóa đơn (cửa sổ mới)
  printInvoice(newOrder);

  // Cập nhật giao diện
  renderCart();
}

function printInvoice(order) {
  const win = window.open('', '_blank');
  win.document.write(`
    <html>
    <head><title>Hóa đơn #${order.id}</title></head>
    <body style="font-family:Arial; padding:30px;">
      <h1>HÓA ĐƠN ĐẶT HÀNG</h1>
      <p><strong>Mã đơn:</strong> ${order.id}</p>
      <p><strong>Ngày đặt:</strong> ${order.date}</p>
      <hr>
      <p><strong>Khách hàng:</strong> ${order.customer.fullName}</p>
      <p><strong>SĐT:</strong> ${order.customer.phone}</p>
      <p><strong>Địa chỉ:</strong> ${order.customer.address}</p>
      <hr>
      <table border="1" style="width:100%; border-collapse:collapse;">
        <tr style="background:#f0f0f0;">
          <th style="padding:10px;">Sản phẩm</th>
          <th style="padding:10px;">SL</th>
          <th style="padding:10px;">Đơn giá</th>
          <th style="padding:10px;">Thành tiền</th>
        </tr>
  `);

  order.items.forEach(item => {
    win.document.write(`
      <tr>
        <td style="padding:10px;">${item.name}</td>
        <td style="padding:10px; text-align:center;">${item.quantity}</td>
        <td style="padding:10px; text-align:right;">${item.price.toLocaleString('vi-VN')} ₫</td>
        <td style="padding:10px; text-align:right;">${(item.price*item.quantity).toLocaleString('vi-VN')} ₫</td>
      </tr>
    `);
  });

  win.document.write(`
      </table>
      <hr>
      <h3 style="text-align:right;">Tổng tiền: ${order.total.toLocaleString('vi-VN')} ₫</h3>
      <p style="text-align:center; margin-top:60px;">Cảm ơn quý khách đã ủng hộ Hiệu Sách Thành Phố Vinh!</p>
    </body>
    </html>
  `);
  win.document.close();
  setTimeout(() => win.print(), 800);
}

// Khởi động
document.addEventListener('DOMContentLoaded', renderCart);