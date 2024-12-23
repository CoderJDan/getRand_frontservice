document.addEventListener('DOMContentLoaded', function () {
    getRelatedQuery();
});

document.getElementById("left-refresh").addEventListener("click", () => {
    updateRelatedQuery();
});

document.getElementById("searchButton").addEventListener("click", () => {
    console.log("Query 검색 클릭")
    var searchInput = $("#searchInput").val();
    if (!searchInput || searchInput.trim() === "") {
        return;
    }
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5001/analysticservice/relatedQueries/keyword",
        data: {keyword: searchInput}
    }).done((jsondata) => {
        // 가져온 데이터를 HTML에 표시
        console.log(jsondata);
        renderQueryData(jsondata);
    }).fail((err) => {
        console.error("데이터 받기 실패", err);
    });

});

function getRelatedQuery() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5001/analysticservice/relatedQueries/findall"
    }).done((jsondata) => {
        // 가져온 데이터를 HTML에 표시
        renderQueryData(jsondata);
    }).fail((err) => {
        console.error("데이터 받기 실패", err);
    });
}

function updateRelatedQuery() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5001/analysticservice/relatedQueries/update",
        // dataType: "json"
    }).done((jsondata) => {
        console.log(jsondata)
    })
}

function renderQueryData(data) {
    const container = document.getElementById('left-list');
    container.innerHTML = '';
    data.forEach((item, index) => {
        const queryElement = document.createElement('li');
        queryElement.textContent = `${index + 1} ${item.query}`;
        queryElement.addEventListener('click', () => {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(item.query)}`, '_blank');
        });

        container.appendChild(queryElement);
    });
}