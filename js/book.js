// 출판사 추천
async function fetchBooks(query) {
    const REST_API_KEY = '672a3e50542b7d6b98430b8a29dd28ab';
    const params = new URLSearchParams({
        query,
        target: 'title',
        size: 30
    })
    console.log(params);

    const response = await fetch(`https://dapi.kakao.com/v3/search/book?${params}`, {
        method: 'GET',
        headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`
        }
    });
    if (!response.ok) {
        throw new Error("HTTP오류 - 상태코드 : " + response.status);
    }
    return response.json();
}

async function bookData() {
    try {
        // query와 section ID를 매핑
        const queries = [
            { query: "장편소설", sectionId: "gobobox" },
            { query: "오늘", sectionId:"swiper2"},
            { query: "양장", sectionId: "swiper4"},
            { query: "요즘", sectionId: "swiper5" },
            { query: "예능", sectionId: "swiper6" },
            { query: "교보문고", sectionId: "swiper9" },
            { query: "베스트셀러", sectionId: "peoplebox" },
            { query: "탐험", sectionId: "aibox" },
            { query: "기쁨", sectionId: "aipickbox"},
            { query: "출판", sectionId: "swiper14" },
            { query: "전체", sectionId: "tab1"},
            { query: "한국소설", sectionId: "tab2"},
            { query: "해외소설", sectionId: "tab3"},
            { query: "eBook", sectionId: "tab4"},
            { query: "삶", sectionId: "tab5"},
            { query: "hot", sectionId: "tab6"},
            { query: "교보", sectionId: "tab7"},
            { query: "국내", sectionId: "tab8"},
            { query: "외국", sectionId: "tab9"},
        ];

        for (const { query, sectionId } of queries) {
            const data = await fetchBooks(query);

            const section = document.querySelector(`#${sectionId}`);
            const boxElements = section.querySelectorAll(".box");

            boxElements.forEach((box, i) => {
                const doc = data.documents[i];
                if (!doc) return;

                box.innerHTML = `<img src="${doc.thumbnail}">
                        <h5>${doc.title}</h5>
                        `
            });
        }

    } catch (error) {
        console.error('에러 발생:', error);
    }
}

bookData();

const tabItems = document.querySelectorAll('.booktab li');
const tabs = document.querySelectorAll('article');

tabItems.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab, j) => {
            tab.style.display = (i === j) ? 'flex' : 'none';
        });
    });
});


