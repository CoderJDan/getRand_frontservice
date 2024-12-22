document.addEventListener('DOMContentLoaded', function () {
    getRelatedQuery();
});


function renderQueryData(data) {
    const container = document.getElementById('left-list');
    container.innerHTML = '';
    data.forEach(item => {
        const queryElement = document.createElement('li'); // li 태그 생성
        queryElement.textContent = `Query: ${item.query}, Volume: ${item.value}`;
        container.appendChild(queryElement);
    });
}


function getRelatedQuery() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5001/analysticservice/data/relatedQuery"
    }).done((jsondata) => {
        // 가져온 데이터를 HTML에 표시
        console.log(jsondata)
        renderQueryData(jsondata);
    }).fail((err) => {
        console.error("데이터 받기 실패", err);
    });
}