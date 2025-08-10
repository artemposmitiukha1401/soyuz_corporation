const NEWS_PER_PAGE = 6;
let allNews = [];
let filteredNews = [];

function getCurrentPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page')) || 1;
    return Math.max(1, page);
}

function getNewsForPage(page) {
    const startIndex = (page - 1) * NEWS_PER_PAGE;
    const endIndex = startIndex + NEWS_PER_PAGE;
    return filteredNews.slice(startIndex, endIndex);
}

function getTotalNewsPages() {
    return Math.ceil(filteredNews.length / NEWS_PER_PAGE);
}

function renderNews() {
    const container = document.getElementById("news_list");
    const template = document.getElementById("news-template");

    if (!container || !template) {
        console.error('Не знайдено контейнер або шаблон для новин');
        return;
    }

    const currentPage = getCurrentPage();
    const newsToRender = getNewsForPage(currentPage);

    container.innerHTML = "";

    newsToRender.forEach((news, index) => {
        try {
            const clone = template.content.cloneNode(true);
            
            const titleEl = clone.querySelector('[data-news="title"]');
            const linkEl = clone.querySelector('[data-news="link"]');
            const dateEl = clone.querySelector('[data-news="date"]');

            if (titleEl) titleEl.textContent = news.title;
            if (linkEl) {
                linkEl.href = news.link;
                linkEl.setAttribute("href", news.link);
            }
            if (dateEl) dateEl.textContent = formatDate(news.date);

            container.appendChild(clone);
        } catch (error) {
            console.error(`Помилка при рендерингу новини №${index + 1}:`, error);
        }
    });

    console.log(`Відображено ${newsToRender.length} новин на сторінці ${currentPage}`);
}

function renderNewsPagination() {
    const paginationContainer = document.getElementById('news_pages');
    if (!paginationContainer) {
        console.error('Не знайдено контейнер для пагінації новин');
        return;
    }

    const currentPage = getCurrentPage();
    const totalPages = getTotalNewsPages();

    paginationContainer.innerHTML = '';


    if (totalPages <= 1) {
        console.log('Пагінація не потрібна - всього одна сторінка');
        return;
    }

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.className = 'page_selector';
        pageLink.textContent = i;

        const currentUrl = new URL(window.location);
        currentUrl.searchParams.set('page', i);
        pageLink.href = currentUrl.toString();

        if (i === currentPage) {
            pageLink.style.backgroundColor = '#002e4e';
            pageLink.style.color = 'white';
        }

        paginationContainer.appendChild(pageLink);
    }

    console.log(`Створено ${totalPages} сторінок пагінації для новин`);
}

function updateNewsFilters() {
    const filterLinks = document.querySelectorAll('.news-filter');
    const currentPage = getCurrentPage();

    filterLinks.forEach(link => {
        const url = new URL(link.href);
        if (currentPage > 1) {
            url.searchParams.set('page', currentPage);
            link.href = url.toString();
        }
    });
}

function goToNewsPage(pageNumber) {
    const url = new URL(window.location);
    url.searchParams.set('page', pageNumber);
    window.location.href = url.toString();
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}


document.addEventListener("DOMContentLoaded", () => {
    fetch("./news.json")
        .then((response) => response.json())
        .then((newsArray) => {
            allNews = newsArray;
            filteredNews = [...allNews]; 

            console.log(`Загальна кількість новин: ${filteredNews.length}`);
            console.log(`Активна сторінка: ${getCurrentPage()}`);
            
            renderNews();
            renderNewsPagination();
            updateNewsFilters();
        })
        .catch((error) => {
            console.error('Помилка завантаження новин:', error);
        });
});