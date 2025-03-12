document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach((faq) => {
        faq.querySelector(".faq-question").addEventListener("click", function () {
            faqs.forEach((item) => {
                if (item !== faq) item.classList.remove("active");
            });

            faq.classList.toggle("active");
        });
    });
});
