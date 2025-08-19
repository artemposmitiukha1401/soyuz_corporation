const NEWS_PER_PAGE = 6;
let allNews = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch("./news.json")
    .then((res) => res.json())
    .then((data) => {
      allNews = sortNewsByDate(data);
      renderNews();
      renderPagination();
    })
    .catch((err) => console.error("Помилка завантаження новин:", err));
});

function getCurrentPage() {
  return Math.max(1, parseInt(new URLSearchParams(window.location.search).get("page")) || 1);
}

function sortNewsByDate(news) {
  return news.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}`;
}

function renderNews() {
  const container = document.getElementById("news_list");
  const template = document.getElementById("news-template");
  if (!container || !template) return console.error("Контейнер або шаблон не знайдено");

  const page = getCurrentPage();
  const start = (page - 1) * NEWS_PER_PAGE;
  const pageNews = allNews.slice(start, start + NEWS_PER_PAGE);

  container.innerHTML = "";

  pageNews.forEach((news, i) => {
    try {
      const clone = template.content.cloneNode(true);
      clone.querySelector('[data-news="title"]').textContent = news.title;
      const linkEl = clone.querySelector('[data-news="link"]');
      linkEl.href = news.link;
      clone.querySelector('[data-news="date"]').textContent = formatDate(news.date);
      container.appendChild(clone);
    } catch (e) {
      console.error(`Помилка при рендерингу новини #${i + 1}:`, e);
    }
  });
}

function renderPagination() {
  const pagination = document.getElementById("news_pages");
  if (!pagination) return console.error("Контейнер пагінації не знайдено");

  const totalPages = Math.ceil(allNews.length / NEWS_PER_PAGE);
  const current = getCurrentPage();

  pagination.innerHTML = "";
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const a = document.createElement("a");
    a.className = "page_selector";
    a.textContent = i;
    a.href = `?page=${i}`;
    if (i === current) {
      a.style.backgroundColor = "#002e4e";
      a.style.color = "white";
    }
    pagination.appendChild(a);
  }
}
