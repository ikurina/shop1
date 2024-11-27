let slideIndex = 0;

function showSlide() {
    const slides = document.querySelectorAll('.slider img');
    
    // Ẩn tất cả các slide
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function moveSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.slider img');

    // Đặt lại slideIndex nếu nó ra ngoài giới hạn
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlide(); // Cập nhật hiển thị sau khi thay đổi slideIndex
}


document.getElementById("buyButton").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "flex";
});

document.getElementById("buyButton2").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "flex";
});

function closePopup() {
    document.getElementById("popupForm").style.display = "none";
}

document.getElementById("oderForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Cảm ơn bạn đã mua hàng!")
    closePopup();
});

document.getElementById("oderForm").addEventListener("submit", async function(event){
    event.preventDefault(); // Ngừng hành động mặc định của form

    // Lấy dữ liệu từ form
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    // Dữ liệu cần gửi đến server
    const orderData = {
        name: name,
        address: address,
        phone: phone
    };

    try {
        // Gửi dữ liệu đến server qua fetch API
        const response = await fetch("http://localhost:5000/submit", { // Địa chỉ server của bạn
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Đảm bảo gửi dữ liệu dưới dạng JSON
            },
            body: JSON.stringify(orderData) // Chuyển dữ liệu sang chuỗi JSON
        });

        // Kiểm tra phản hồi từ server
        if (response.ok) {
            const result = await response.json(); // Lấy phản hồi từ server
            alert(result.message); // Hiển thị thông báo từ server
            closePopup(); // Đóng popup sau khi gửi form thành công
        } else {
            alert("Đã xảy ra lỗi khi gửi dữ liệu!");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Không thể kết nối đến server!");
    }
});
