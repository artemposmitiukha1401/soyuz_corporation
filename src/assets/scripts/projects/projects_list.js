function renderProjects() {
    const container = document.getElementById('projects_list');
    const template = document.getElementById('project-template');

    if (!container || !template) {
        console.error('Не найдено контейнер або шаблон');
        return;
    }

    container.innerHTML = '';

    projects.forEach((project, index) => {
        const clone = template.content.cloneNode(true);

        try {

            const imageEl = clone.querySelector('[data-template="image"]');
            const linkEl = clone.querySelector('[data-template="link"]');
            const titleEl = clone.querySelector('[data-template="title"]');
            const clientEl = clone.querySelector('[data-template="client"]');
            const contractEl = clone.querySelector('[data-template="contract"]');
            const sectorEl = clone.querySelector('[data-template="sector"]');
            const regionEl = clone.querySelector('[data-template="region"]');
            const periodEl = clone.querySelector('[data-template="period"]');

            if (imageEl) imageEl.src = project.image;
            if (linkEl) linkEl.href = project.link;
            if (titleEl) titleEl.textContent = project.title;
            if (clientEl) clientEl.textContent = project.client;
            if (contractEl) contractEl.textContent = project.contract;
            if (sectorEl) sectorEl.textContent = project.sector;
            if (regionEl) regionEl.textContent = project.region;
            if (periodEl) periodEl.textContent = project.period;

            container.appendChild(clone);

        } catch (error) {
            console.error(`Ошибка при рендеринге проекта ${index + 1}:`, error);
        }
    });

    console.log(`Отрендерено ${projects.length} проектов`);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Починаю завантаження проєктів');
    renderProjects();
});