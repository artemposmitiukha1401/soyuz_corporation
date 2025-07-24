document.addEventListener("DOMContentLoaded", () => {
    fetch("./news.json")
        .then((response) => response.json())
        .then((newsArray) => {
            const container = document.getElementById("news_list");
            const template = document.getElementById("news-template");

            container.innerHTML = "";

            newsArray.forEach((news) => {
                const clone = template.content.cloneNode(true);
                clone.querySelector('[data-news="title"]').textContent = news.title;
                clone.querySelector('[data-news="link"]').href = news.link;
                clone.querySelector('[data-news="date"]').textContent = formatDate(news.date);
                clone.querySelector('[data-news="link"]').setAttribute("href", news.link);
                container.appendChild(clone);
            });
        });
});

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}
