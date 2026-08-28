
async function bookData() {
    const REST_API_KEY = '672a3e50542b7d6b98430b8a29dd28ab';
    const params = new URLSearchParams({
        query: '미움받을 용기',
        target: 'title',
        size: 50  // 한 페이지에 보여질 문서 수
    })
    console.log(params);

    try {
        const response = await fetch(`https://dapi.kakao.com/v3/search/book?${params}`, {
            // 옵션 설정
            method: 'GET',
            headers: {
                Authorization: `KakaoAK ${REST_API_KEY}`
            }
        });
        console.log(response);  // Response객체 반환

        if (!response.ok) {
            throw new Error("HTTP오류 - 상태코드 : " + response.status);
        }

        const data = await response.json();

        const boxElements = document.querySelectorAll(".box");

        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return;

            box.innerHTML = `<img src="${data.documents[i].thumbnail}">
                    <h3>${data.documents[i].title}</h3>
                    <h6>${data.documents[i].authors}</h6>
                    <p>${data.documents[i].contents.substring(0, 60)}</p>
                    <button>click</button>
                    `
        });

    } catch (error) {
        console.log('에러 발생', error);
    }

}

bookData();
