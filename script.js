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