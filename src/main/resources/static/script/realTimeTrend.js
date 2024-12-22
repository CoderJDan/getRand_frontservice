document.addEventListener('DOMContentLoaded', function () {
    getRealTimeTrend();
});


function renderRealTimeTrend(data) {

}


function getRealTimeTrend() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5001/analysticservice/data/realTimeTrend"
    }).done((jsondata) => {
        // 가져온 데이터를 HTML에 표시
        console.log(jsondata)
        renderRealTimeTrend(jsondata);
    }).fail((err) => {
        console.error("데이터 받기 실패", err);
    });
}