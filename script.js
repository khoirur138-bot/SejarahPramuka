/* =========================================================
   WEBSITE SEJARAH PRAMUKA
   JavaScript Interaktif
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. NAVBAR / MENU MOBILE
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        // Tutup menu ketika link diklik
        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }


    /* =====================================================
       2. SMOOTH SCROLL
       ===================================================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* =====================================================
       3. PROGRESS BAR SAAT SCROLL
       ===================================================== */

    let progressBar = document.querySelector(".scroll-progress");

    // Jika belum ada, buat otomatis
    if (!progressBar) {
        progressBar = document.createElement("div");
        progressBar.className = "scroll-progress";

        progressBar.style.position = "fixed";
        progressBar.style.top = "0";
        progressBar.style.left = "0";
        progressBar.style.width = "0%";
        progressBar.style.height = "4px";
        progressBar.style.background = "#f4c542";
        progressBar.style.zIndex = "9999";
        progressBar.style.transition = "width 0.1s linear";

        document.body.appendChild(progressBar);
    }

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;
        const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrollPercent =
            (scrollTop / documentHeight) * 100;

        progressBar.style.width = scrollPercent + "%";
    });


    /* =====================================================
       4. ANIMASI MUNCUL SAAT SCROLL
       ===================================================== */

    const animatedElements = document.querySelectorAll(
        ".fade-in, .timeline-item, .card, .materi-card, .feature-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach(element => {
        element.classList.add("fade-element");
        observer.observe(element);
    });


    /* =====================================================
       5. TOMBOL BACK TO TOP
       ===================================================== */

    let backToTop = document.querySelector("#backToTop");

    if (!backToTop) {

        backToTop = document.createElement("button");

        backToTop.id = "backToTop";
        backToTop.innerHTML = "↑";
        backToTop.setAttribute("aria-label", "Kembali ke atas");

        backToTop.style.position = "fixed";
        backToTop.style.right = "25px";
        backToTop.style.bottom = "25px";
        backToTop.style.width = "48px";
        backToTop.style.height = "48px";
        backToTop.style.border = "none";
        backToTop.style.borderRadius = "50%";
        backToTop.style.cursor = "pointer";
        backToTop.style.fontSize = "24px";
        backToTop.style.fontWeight = "bold";
        backToTop.style.background = "#f4c542";
        backToTop.style.color = "#1b4332";
        backToTop.style.zIndex = "999";

        backToTop.style.display = "none";

        document.body.appendChild(backToTop);
    }

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       6. EFEK NAVBAR SAAT SCROLL
       ===================================================== */

    const navbar = document.querySelector("nav, .navbar, header");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        });

    }


    /* =====================================================
       7. PENCARIAN MATERI
       ===================================================== */

    const searchInput = document.querySelector("#searchInput");
    const searchItems = document.querySelectorAll(
        ".search-item, .materi-card, .card, .timeline-item"
    );

    if (searchInput && searchItems.length > 0) {

        searchInput.addEventListener("input", function () {

            const keyword = this.value.toLowerCase().trim();

            searchItems.forEach(item => {

                const text = item.textContent.toLowerCase();

                if (text.includes(keyword)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }

            });

        });

    }


    /* =====================================================
       8. INTERAKSI TIMELINE
       ===================================================== */

    const timelineItems =
        document.querySelectorAll(".timeline-item");

    timelineItems.forEach(item => {

        item.addEventListener("click", () => {

            timelineItems.forEach(other => {
                other.classList.remove("active");
            });

            item.classList.add("active");

        });

    });


    /* =====================================================
       9. KUIS SEJARAH PRAMUKA
       ===================================================== */

    const quizData = [

        {
            question:
                "Di pulau manakah Robert Baden-Powell mengadakan perkemahan percobaan yang menjadi tonggak awal gerakan kepanduan dunia?",

            options: [
                "Brownsea Island",
                "Jamboree Island",
                "Gilwell Island",
                "London Island",
                "Scotland Island"
            ],

            answer: 0
        },

        {
            question:
                "Pada tahun berapakah perkemahan percobaan Baden-Powell di Brownsea Island dilaksanakan?",

            options: [
                "1905",
                "1906",
                "1907",
                "1908",
                "1910"
            ],

            answer: 2
        },

        {
            question:
                "Buku Baden-Powell yang berperan besar dalam penyebaran gerakan kepanduan adalah...",

            options: [
                "The Scout Handbook",
                "Scouting for Boys",
                "World Scout Movement",
                "Aids to Scouting",
                "The Scout Leader"
            ],

            answer: 1
        },

        {
            question:
                "Pada tahun berapakah buku Scouting for Boys diterbitkan?",

            options: [
                "1905",
                "1907",
                "1908",
                "1910",
                "1912"
            ],

            answer: 2
        },

        {
            question:
                "Organisasi kepanduan perempuan yang berkembang setelah lahirnya gerakan kepanduan adalah...",

            options: [
                "Girl Guides",
                "Girl Scouts Indonesia",
                "World Girl Scout",
                "Lady Scouts",
                "Women Scouts"
            ],

            answer: 0
        },

        {
            question:
                "Pada tahun berapakah Gerakan Pramuka secara resmi diperkenalkan kepada masyarakat Indonesia?",

            options: [
                "1945",
                "1950",
                "1959",
                "1961",
                "1965"
            ],

            answer: 3
        },

        {
            question:
                "Tanggal yang diperingati sebagai Hari Pramuka di Indonesia adalah...",

            options: [
                "20 Mei",
                "1 Juni",
                "20 Juli",
                "14 Agustus",
                "17 Agustus"
            ],

            answer: 3
        },

        {
            question:
                "Tokoh yang dikenal sebagai Bapak Pandu Sedunia adalah...",

            options: [
                "Soekarno",
                "Sri Sultan Hamengku Buwono IX",
                "Robert Baden-Powell",
                "Agus Salim",
                "Ki Hajar Dewantara"
            ],

            answer: 2
        },

        {
            question:
                "Siapakah tokoh yang menjadi Ketua Kwartir Nasional pertama Gerakan Pramuka?",

            options: [
                "Ir. Soekarno",
                "Sri Sultan Hamengku Buwono IX",
                "Mohammad Hatta",
                "Jenderal Soedirman",
                "H. Agus Salim"
            ],

            answer: 1
        },

        {
            question:
                "Undang-Undang yang secara khusus mengatur tentang Gerakan Pramuka adalah...",

            options: [
                "UU No. 12 Tahun 2010",
                "UU No. 20 Tahun 2003",
                "UU No. 3 Tahun 2002",
                "UU No. 24 Tahun 2009",
                "UU No. 40 Tahun 2009"
            ],

            answer: 0
        }

    ];


    /* =====================================================
       10. MENJALANKAN KUIS
       ===================================================== */

    const quizContainer = document.querySelector("#quiz");

    if (quizContainer) {

        let currentQuestion = 0;
        let score = 0;
        let answered = false;

        function loadQuestion() {

            answered = false;

            const question = quizData[currentQuestion];

            quizContainer.innerHTML = `

                <div class="quiz-header">

                    <span>
                        Soal ${currentQuestion + 1}
                        dari ${quizData.length}
                    </span>

                    <span>
                        Skor: ${score}
                    </span>

                </div>

                <div class="quiz-question">

                    <h3>
                        ${question.question}
                    </h3>

                </div>

                <div class="quiz-options">

                    ${question.options
                        .map(
                            (option, index) => `
                            
                            <button
                                class="quiz-option"
                                data-index="${index}"
                            >
                                <span class="option-letter">
                                    ${String.fromCharCode(65 + index)}
                                </span>

                                <span>
                                    ${option}
                                </span>

                            </button>
                            
                            `
                        )
                        .join("")}

                </div>

                <div class="quiz-feedback"></div>

                <button
                    class="quiz-next"
                    style="display:none;"
                >
                    Soal Berikutnya →
                </button>

            `;


            const options =
                quizContainer.querySelectorAll(".quiz-option");

            const feedback =
                quizContainer.querySelector(".quiz-feedback");

            const nextButton =
                quizContainer.querySelector(".quiz-next");


            options.forEach(option => {

                option.addEventListener("click", () => {

                    if (answered) return;

                    answered = true;

                    const selected =
                        Number(option.dataset.index);

                    options.forEach(btn => {
                        btn.disabled = true;
                    });


                    if (selected === question.answer) {

                        score += 10;

                        option.classList.add("correct");

                        feedback.innerHTML =
                            "✅ <strong>Benar!</strong> Jawaban kamu tepat.";

                    } else {

                        option.classList.add("wrong");

                        options[
                            question.answer
                        ].classList.add("correct");

                        feedback.innerHTML =
                            `❌ <strong>Kurang tepat.</strong>
                            Jawaban yang benar adalah
                            <strong>${question.options[question.answer]}</strong>.`;

                    }


                    feedback.style.display = "block";
                    nextButton.style.display = "block";

                });

            });


            nextButton.addEventListener("click", () => {

                currentQuestion++;

                if (currentQuestion < quizData.length) {

                    loadQuestion();

                } else {

                    showResult();

                }

            });

        }


        /* =================================================
           11. HASIL KUIS
           ================================================= */

        function showResult() {

            let message = "";

            if (score === 100) {

                message =
                    "🏆 Luar biasa! Pengetahuan sejarah Pramukamu sangat kuat!";

            } else if (score >= 80) {

                message =
                    "🥇 Sangat bagus! Kamu sudah menguasai sejarah Pramuka.";

            } else if (score >= 60) {

                message =
                    "🥈 Bagus! Tingkatkan lagi pemahamanmu.";

            } else if (score >= 40) {

                message =
                    "📚 Lumayan, tetapi masih perlu belajar lebih banyak.";

            } else {

                message =
                    "💪 Jangan menyerah! Pelajari kembali materi kemudian coba lagi.";

            }


            quizContainer.innerHTML = `

                <div class="quiz-result">

                    <div class="result-icon">
                        🏕️
                    </div>

                    <h2>
                        Kuis Selesai!
                    </h2>

                    <div class="final-score">
                        ${score}
                    </div>

                    <p>
                        ${message}
                    </p>

                    <button
                        id="restartQuiz"
                        class="quiz-next"
                    >
                        🔄 Ulangi Kuis
                    </button>

                </div>

            `;


            document
                .querySelector("#restartQuiz")
                .addEventListener("click", () => {

                    currentQuestion = 0;
                    score = 0;

                    loadQuestion();

                });

        }


        // Mulai kuis
        loadQuestion();

    }


    /* =====================================================
       12. COUNTER ANIMASI
       ===================================================== */

    const counters =
        document.querySelectorAll("[data-count]");

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.count);

        let current = 0;

        const duration = 1500;

        const increment =
            target / (duration / 16);

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                counter.textContent =
                    Math.floor(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target;

            }

        };

        const counterObserver =
            new IntersectionObserver(entries => {

                if (entries[0].isIntersecting) {

                    updateCounter();

                    counterObserver.disconnect();

                }

            });

        counterObserver.observe(counter);

    });


    /* =====================================================
       13. DARK / LIGHT MODE
       ===================================================== */

    const themeButton =
        document.querySelector("#themeToggle");

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "pramuka-theme",
                isDark ? "dark" : "light"
            );

        });


        const savedTheme =
            localStorage.getItem("pramuka-theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
        }

    }


    /* =====================================================
       14. TAHUN / TIMELINE INTERAKTIF
       ===================================================== */

    const yearButtons =
        document.querySelectorAll("[data-year]");

    yearButtons.forEach(button => {

        button.addEventListener("click", () => {

            const year =
                button.dataset.year;

            const target =
                document.querySelector(
                    `[data-content-year="${year}"]`
                );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        });

    });


    /* =====================================================
       15. EFEK PARALLAX HERO
       ===================================================== */

    const hero =
        document.querySelector(".hero");

    if (hero) {

        window.addEventListener("scroll", () => {

            const scroll =
                window.scrollY;

            if (scroll < 700) {

                hero.style.backgroundPosition =
                    `center ${scroll * 0.4}px`;

            }

        });

    }


    /* =====================================================
       16. ACTIVE NAVIGATION BERDASARKAN SECTION
       ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(
            '.nav-menu a[href^="#"]'
        );

    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        navigationLinks.forEach(link => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                "#" + entry.target.id
                            ) {

                                link.classList.add("active");

                            }

                        });

                    }

                });

            },
            {
                threshold: 0.3
            }
        );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* =====================================================
       17. NOTIFIKASI INTERAKTIF
       ===================================================== */

    function showNotification(message) {

        const notification =
            document.createElement("div");

        notification.className =
            "custom-notification";

        notification.textContent =
            message;

        notification.style.position = "fixed";
        notification.style.top = "25px";
        notification.style.right = "25px";
        notification.style.padding = "15px 22px";
        notification.style.borderRadius = "12px";
        notification.style.background = "#1b4332";
        notification.style.color = "#ffffff";
        notification.style.fontWeight = "600";
        notification.style.zIndex = "10000";
        notification.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.2)";

        document.body.appendChild(notification);

        setTimeout(() => {

            notification.style.opacity = "0";
            notification.style.transform =
                "translateX(30px)";

            notification.style.transition =
                "all 0.4s ease";

            setTimeout(() => {
                notification.remove();
            }, 400);

        }, 2500);

    }


    /* =====================================================
       18. TOMBOL COPY TEKS
       ===================================================== */

    const copyButtons =
        document.querySelectorAll(".copy-btn");

    copyButtons.forEach(button => {

        button.addEventListener("click", async () => {

            const targetId =
                button.dataset.target;

            const target =
                document.querySelector(targetId);

            if (!target) return;

            try {

                await navigator.clipboard.writeText(
                    target.textContent
                );

                showNotification(
                    "Teks berhasil disalin!"
                );

            } catch (error) {

                showNotification(
                    "Tidak dapat menyalin teks."
                );

            }

        });

    });


    /* =====================================================
       19. PRELOADER
       ===================================================== */

    const preloader =
        document.querySelector("#preloader");

    if (preloader) {

        window.addEventListener("load", () => {

            setTimeout(() => {

                preloader.classList.add("loaded");

                setTimeout(() => {
                    preloader.remove();
                }, 500);

            }, 500);

        });

    }


    /* =====================================================
       20. KONSOLE
       ===================================================== */

    console.log(
        "%c🏕️ Website Sejarah Pramuka berhasil dimuat!",
        "font-size:18px;font-weight:bold;"
    );

    console.log(
        "Selamat belajar sejarah Gerakan Pramuka Indonesia dan Dunia."
    );

});