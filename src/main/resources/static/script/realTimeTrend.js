document.addEventListener('DOMContentLoaded', function () {
    getRealTimeTrend();

    document.getElementById("realTime-refresh").addEventListener("click", () => {

        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:5001/analysticservice/realTimeTrend/update",
            // dataType: "json"
        }).done((jsondata) => {
            renderRealTimeTrend(jsondata);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        })
    })
});


function renderRealTimeTrend(data) {
    const container = document.getElementById('dropdown-list');
    container.innerHTML = '';

    data.forEach((item, index) => {
        const dropdownElement = document.createElement('li');

        // Set the text content with an incrementing number and percentage sign
        dropdownElement.textContent = `${index + 1}         ${item.query}`;

        dropdownElement.addEventListener('click', () => {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(item.query)}`, '_blank');
        });

        container.appendChild(dropdownElement);
    });
}


function getRealTimeTrend() {
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:5001/analysticservice/realTimeTrend/findall"
    }).done((jsondata) => {
        // 가져온 데이터를 HTML에 표시
        console.log(jsondata)
        renderRealTimeTrend(jsondata);
    }).fail((err) => {
        console.error("데이터 받기 실패", err);
    });
}

