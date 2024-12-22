document.addEventListener('DOMContentLoaded', function () {
    getRelatedTopic();
});


function renderTopicData(data) {
    const container = document.getElementById('right-list');
    container.innerHTML = '';
    data.forEach(item => {
        const topicElement = document.createElement('li'); // li 태그 생성
        topicElement.textContent = `Topic: ${item.title}, Volume: ${item.value}`;
        container.appendChild(topicElement);
    });
}


function getRelatedTopic() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5001/analysticservice/data/relatedTopic"
    }).done((jsondata) => {
        // 가져온 데이터를 HTML에 표시
        console.log(jsondata)
        renderTopicData(jsondata);
    }).fail((err) => {
        console.error("데이터 받기 실패", err);
    });
}