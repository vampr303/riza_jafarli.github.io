// Portfolio images array (legacy)
const portfolioImages = [
    'https://via.placeholder.com/600x800?text=Проект+1',
    'https://via.placeholder.com/600x800?text=Проект+2',
    'https://via.placeholder.com/600x800?text=Проект+3',
    'https://via.placeholder.com/600x800?text=Проект+4',
    'https://via.placeholder.com/600x800?text=Проект+5',
    'https://via.placeholder.com/600x800?text=Проект+6'
];

// Competitions data with videos and descriptions
const competitionsData = [
    {
        title: 'профессионалы 2023',
        // внешняя ссылка на страницу видео (открывается в новой вкладке)
        videoUrl: 'https://www.youtube.com/watch?v=M6fgIOuqk28',
        description: 'место в Всероссийское чемпионатное движение по профессиональному мастерству «Профессионалы». Это было одно из самых сложных соревнований в моей карьере, требующее максимальной концентрации и подготовки. Я тренировался месяцами, чтобы достичь этого результата. Победа в этом чемпионате открыла для меня много новых возможностей и подтвердила мой статус как профессионала.'
    },
    {
        title: 'World Robot Olympiad 2024',
        videoUrl: 'https://www.youtube.com/watch?v=xtTiP2OPR9s',
        videoUrl2: 'https://www.youtube.com/watch?v=_AvwfRnpVDk',
        description: 'В 2024 году я принял участие в республиканском этапе Всемирной олимпиады роботов (WRO 2024) в категории Future Engineers и одержал победу среди 12 команд ( 50 участников ). Я разрабатывал и программировал автономный автомобиль, способный самостоятельно ориентироваться на трассе и выполнять сложные задачи. Участие в этом соревновании дало мне ценный опыт командной работы, инженерного мышления и применения искусственного интеллекта в робототехнике.'
    },
    {
        title: 'Международный конкурс',
        videoUrl: 'https://youtu.be/SCmoT2D6iTA?si=lvKDpATPqiN0PwfE',
        description: 'Моя команда получила золотую медаль в региональном конкурсе по водородным машинам H2 Grand Prix Pro. Они должны были собрать гоночные машины на водородных топливных элементах и соревноваться в скорости и эффективности. Моя команда усердно работала над проектом ( а я им оказывал экспертскую помошь), и моя машина показала выдающиеся результаты, что принесло нам золотую медаль. Этот опыт научил меня и мою команду многому о возобновляемых источниках энергии и инженерии.'
    },
    {
        title: 'Сюрприз',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        description: 'Что то интересное...'
    }
];

// Функция открытия модального окна соревнования
function openCompetitionModal(index) {
    const modal = document.getElementById('competitionModal');
    const title = document.getElementById('competitionTitle');
    const description = document.getElementById('competitionDescription');
    const videoLinksContainer = document.getElementById('competitionVideoLinks');
    
    const competition = competitionsData[index];
    title.textContent = competition.title;
    description.textContent = competition.description;
    
    // Для WRO (index 1) показываем две кнопки с разными ссылками, для остальных - одну
    if (index === 1) {
        // WRO: две кнопки с разными видео
        videoLinksContainer.innerHTML = `
            <a href="${competition.videoUrl}" target="_blank" rel="noopener" class="btn btn-primary">Посмотреть видео 1 на YouTube</a>
            <a href="${competition.videoUrl2}" target="_blank" rel="noopener" class="btn btn-primary">Посмотреть видео 2 на YouTube</a>
        `;
    } else {
        // Остальные соревнования: одна кнопка
        videoLinksContainer.innerHTML = `
            <a href="${competition.videoUrl}" target="_blank" rel="noopener" class="btn btn-primary">Посмотреть видео на YouTube</a>
        `;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Функция закрытия модального окна соревнования
function closeCompetitionModal() {
    const modal = document.getElementById('competitionModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Функция открытия модального окна портфолио (legacy)
function openModal(index) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = portfolioImages[index];
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Функция закрытия модального окна портфолио (legacy)
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const competitionModal = document.getElementById('competitionModal');
    
    // Закрытие модального окна соревнований при клике на фон
    if (competitionModal) {
        competitionModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCompetitionModal();
            }
        });
    }

    // Закрытие модального окна при нажатии Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCompetitionModal();
        }
    });
});

// Функция скачивания резюме
function downloadResume() {
    alert('Загрузка резюме: Riza_Resume.pdf');
    // В реальном приложении здесь была бы загрузка файла
    // window.location.href = '/resume/Ivan_Resume.pdf';
}

// Функция обработки отправки формы
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    
    alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
    
    // Очистка формы
    event.target.reset();
    
    // В реальном приложении здесь была бы отправка данных на сервер
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         name: name,
    //         email: email,
    //         message: message
    //     })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('Сообщение успешно отправлено!');
    //     event.target.reset();
    // })
    // .catch(error => {
    //     console.error('Ошибка:', error);
    //     alert('Ошибка при отправке сообщения');
    // });
}

// Плавная прокрутка при клике на навигацию (опционально, браузер это делает автоматически)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            // Браузер автоматически прокручивает, но можно добавить дополнительную логику здесь
        }
    });
});



