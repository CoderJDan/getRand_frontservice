document.addEventListener('DOMContentLoaded', function () {
    getRelatedQuery();
});

document.getElementById("left-refresh").addEventListener("click", () => {
    updateRelatedTopic();
})


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
        url: "http://127.0.0.1:5001/analysticservice/relatedQueries/findall"
    }).done((jsondata) => {
        // 가져온 데이터를 HTML에 표시
        console.log(jsondata)
        renderQueryData(jsondata);

        // const relatedSearchesData = {
        //     labels: [
        //         "develop app", "development", "git develop", "develop an app",
        //         "develop branch", "web develop", "developer",
        //         "develop synonym", "develop meaning", "google develop"
        //     ],
        //     datasets: [{
        //         label: 'Search Volume',
        //         data: [100, 53, 48, 36, 31, 23, 22, 21, 20, 17],
        //         backgroundColor: 'rgba(54, 162, 235, 0.6)',
        //         borderColor: 'rgba(54, 162, 235, 1)',
        //         borderWidth: 1
        //     }]
        // };

    }).fail((err) => {
        console.error("데이터 받기 실패", err);
    });
}

function updateRelatedTopic() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5001/analysticservice/relatedTopics/update",
        // dataType: "json"
    }).done((jsondata) => {
        console.log(jsondata)
    })
}