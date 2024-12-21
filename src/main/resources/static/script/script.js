const commonOptions = {
    responsive: true,
    plugins: {
        legend: {
            labels: {
                font: {
                    family: "'Google Sans', 'Arial', sans-serif"
                }
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // 여기에 검색 로직 구현
            console.log('Searching for:', searchTerm);
            // API 호출 또는 데이터 필터링 로직 추가
        }
    }

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("closeModalBtn");

    if (openModalBtn && modal && closeModalBtn) {
        // 모달 열기
        openModalBtn.onclick = function () {
            modal.style.display = "block";
        };

        // 모달 닫기
        closeModalBtn.onclick = function () {
            modal.style.display = "none";
        };

        // 모달 외부 클릭 시 닫기
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    } else {
        console.error("모달 또는 버튼 요소를 찾을 수 없습니다.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("closeModalBtn");

    const loginView = document.getElementById("loginView");
    const signupView = document.getElementById("signupView");
    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");

    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    // 로그인 -> 회원가입 뷰 전환
    showSignup.addEventListener("click", () => {
        loginView.style.display = "none";
        signupView.style.display = "block";
    });

    // 회원가입 -> 로그인 뷰 전환
    showLogin.addEventListener("click", () => {
        signupView.style.display = "none";
        loginView.style.display = "block";
    });

    // 모달 닫기
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // 로그인 버튼 기능
    loginBtn.addEventListener("click", () => {
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        if (username && password) {
            alert(`로그인 성공: ${username}`);
            modal.style.display = "none";
        } else {
            alert("아이디와 비밀번호를 입력해주세요.");
        }
    });
    // 로그아웃 버튼 기능
    logoutBtn.addEventListener("click", () => {
        alert("로그아웃 되었습니다.");
        modal.style.display = "block";
    });
});

// 회원가입 버튼 기능
signupBtn.addEventListener("click", () => {
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (username && email && password) {
        alert(`회원가입 성공: ${username}`);
        modal.style.display = "none";
    } else {
        alert("모든 필드를 입력해주세요.");
    }
});



