document.addEventListener('DOMContentLoaded', function() {
    // News data with realistic forecasts for 2025
    const newsData = {
        economic: [
            {
                date: '15 мая 2025',
                title: 'Новый этап сотрудничества в рамках инициативы "Один пояс, один путь"',
                text: 'Россия и Китай подписали соглашение о расширении сотрудничества в рамках инициативы "Один пояс, один путь". Документ предусматривает увеличение пропускной способности пограничных переходов на 30% к концу 2025 года.',
                source: 'https://www.rbc.ru/economics/',
                sourceName: 'РБК Экономика'
            },
            {
                date: '12 мая 2025',
                title: 'Снижение таможенных пошлин на ключевые товары между ЕАЭС и Китаем',
                text: 'Евразийская экономическая комиссия утвердила снижение таможенных пошлин на ряд ключевых товаров в торговле с Китаем. Изменения вступят в силу с 1 июля 2025 года и коснутся более 200 товарных позиций.',
                source: 'https://www.vedomosti.ru/',
                sourceName: 'Ведомости'
            },
            {
                date: '8 мая 2025',
                title: 'Запуск нового железнодорожного маршрута между Россией и Китаем',
                text: 'Открыт новый железнодорожный маршрут, соединяющий Екатеринбург и Урумчи. Ожидается, что это сократит время доставки грузов между регионами на 3-4 дня и увеличит товарооборот на 15%.',
                source: 'https://tass.ru/ekonomika/',
                sourceName: 'ТАСС Экономика'
            },
            {
                date: '30 апреля 2025',
                title: 'Цифровизация таможенных процедур на границе России и Китая',
                text: 'Завершен первый этап внедрения единой цифровой платформы для таможенного оформления на границе России и Китая. Система позволяет сократить время оформления документов на 60% и минимизировать бумажный документооборот.',
                source: 'https://www.kommersant.ru/',
                sourceName: 'Коммерсантъ'
            },
            {
                date: '25 апреля 2025',
                title: 'Расширение мультимодальных перевозок через Северный морской путь',
                text: 'Объявлено о расширении программы мультимодальных перевозок через Северный морской путь с использованием портов Дальнего Востока. Проект позволит увеличить грузопоток между Азией и Европой на 20% к концу года.',
                source: 'https://www.interfax.ru/',
                sourceName: 'Интерфакс'
            }
        ],
        technical: [
            {
                date: '16 мая 2025',
                title: 'Сезонные ограничения для грузовиков в приграничных районах Китая',
                text: 'В связи с началом сезона дождей в провинции Хэйлунцзян введены временные ограничения для тяжелых грузовиков на некоторых участках дорог. Ограничения будут действовать до конца июня и могут вызвать задержки в доставке грузов.',
                source: 'https://www.rg.ru/',
                sourceName: 'Российская Газета'
            },
            {
                date: '14 мая 2025',
                title: 'Плановые работы на Транссибирской магистрали',
                text: 'РЖД проводит плановые ремонтные работы на восточном участке Транссибирской магистрали. Работы продлятся до 25 мая и могут вызвать задержки грузовых составов до 24 часов на отдельных участках.',
                source: 'https://ria.ru/',
                sourceName: 'РИА Новости'
            },
            {
                date: '10 мая 2025',
                title: 'Штормовое предупреждение в Японском море',
                text: 'Метеорологическая служба объявила штормовое предупреждение в Японском море на период 12-15 мая. Ожидаются волны высотой до 4-5 метров, что может привести к задержкам морских грузоперевозок между портами России и Китая.',
                source: 'https://www.newsvl.ru/',
                sourceName: 'Новости Владивостока'
            },
            {
                date: '5 мая 2025',
                title: 'Модернизация погранперехода Забайкальск-Маньчжурия',
                text: 'На крупнейшем сухопутном погранпереходе Забайкальск-Маньчжурия начались работы по модернизации инфраструктуры. До 20 мая возможны задержки в оформлении грузов до 12 часов. После завершения работ пропускная способность увеличится на 40%.',
                source: 'https://www.eastrussia.ru/',
                sourceName: 'Восток России'
            },
            {
                date: '28 апреля 2025',
                title: 'Ограничения авиаперевозок из-за весенних туманов в Северном Китае',
                text: 'В аэропортах Северного Китая наблюдаются сезонные туманы, характерные для весеннего периода. Возможны задержки и отмены грузовых авиарейсов в течение ближайших 2-3 недель, особенно в утренние часы.',
                source: 'https://www.aviaport.ru/',
                sourceName: 'АвиаПорт'
            }
        ],
        status: [
            {
                date: '17 мая 2025',
                companies: [
                    { name: 'РЖД Логистика', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'FESCO', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'Деловые Линии', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'СДЭК', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'COSCO Shipping', status: 'delay', statusText: 'Задержки из-за шторма в Японском море' }
                ],
                text: 'Большинство логистических компаний работают в штатном режиме. COSCO Shipping сообщает о задержках судов в Японском море из-за штормовых условий. Ожидаемое время задержки - 2-3 дня.',
                source: 'https://www.logirus.ru/',
                sourceName: 'Логирус'
            },
            {
                date: '15 мая 2025',
                companies: [
                    { name: 'РЖД Логистика', status: 'delay', statusText: 'Задержки на Транссибе' },
                    { name: 'FESCO', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'Деловые Линии', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'СДЭК', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'COSCO Shipping', status: 'normal', statusText: 'Работает нормально' }
                ],
                text: 'РЖД Логистика информирует о временных задержках грузовых составов на восточном участке Транссибирской магистрали из-за плановых ремонтных работ. Задержки составляют от 12 до 24 часов.',
                source: 'https://www.rzd-partner.ru/',
                sourceName: 'РЖД-Партнер'
            },
            {
                date: '12 мая 2025',
                companies: [
                    { name: 'РЖД Логистика', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'FESCO', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'Деловые Линии', status: 'delay', statusText: 'Задержки в Хабаровском крае' },
                    { name: 'СДЭК', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'COSCO Shipping', status: 'normal', statusText: 'Работает нормально' }
                ],
                text: '"Деловые Линии" сообщают о задержках автомобильных перевозок в Хабаровском крае из-за сезонных дождей и ремонта дорог. Ожидаемое время задержки - до 48 часов.',
                source: 'https://www.alta.ru/',
                sourceName: 'Альта-Софт'
            },
            {
                date: '8 мая 2025',
                companies: [
                    { name: 'РЖД Логистика', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'FESCO', status: 'delay', statusText: 'Задержки в порту Владивостока' },
                    { name: 'Деловые Линии', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'СДЭК', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'COSCO Shipping', status: 'normal', statusText: 'Работает нормально' }
                ],
                text: 'FESCO информирует о временных задержках в обработке контейнеров в порту Владивостока из-за увеличенного грузопотока. Ожидаемое время задержки - до 36 часов.',
                source: 'https://www.logistics.ru/',
                sourceName: 'Логистика'
            },
            {
                date: '5 мая 2025',
                companies: [
                    { name: 'РЖД Логистика', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'FESCO', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'Деловые Линии', status: 'normal', statusText: 'Работает нормально' },
                    { name: 'СДЭК', status: 'delay', statusText: 'Задержки авиаперевозок из Китая' },
                    { name: 'COSCO Shipping', status: 'normal', statusText: 'Работает нормально' }
                ],
                text: 'СДЭК сообщает о задержках в авиаперевозках грузов из Северного Китая из-за сезонных туманов в регионе. Задержки могут составлять от 1 до 3 дней.',
                source: 'https://www.tks.ru/',
                sourceName: 'ТКС.РУ'
            }
        ]
    };

    // Initialize news containers
    loadNews('economic', 0, 3);
    loadNews('technical', 0, 3);
    loadNews('status', 0, 3);

    // Add event listeners for load more buttons
    document.getElementById('load-more-economic').addEventListener('click', function() {
        loadNews('economic', 3, 5);
        this.style.display = 'none';
    });

    document.getElementById('load-more-technical').addEventListener('click', function() {
        loadNews('technical', 3, 5);
        this.style.display = 'none';
    });

    document.getElementById('load-more-status').addEventListener('click', function() {
        loadNews('status', 3, 5);
        this.style.display = 'none';
    });

    // Add event listeners for refresh buttons
    document.querySelectorAll('.logistics-news__refresh').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            this.classList.add('refreshing');
            
            // Simulate refresh delay
            setTimeout(() => {
                refreshNews(category);
                this.classList.remove('refreshing');
            }, 1000);
        });
    });

    // Function to load news
    function loadNews(category, start, end) {
        const container = document.getElementById(`${category}-news-container`);
        
        // Clear loading message if it exists
        const loadingEl = container.querySelector('.logistics-news__loading');
        if (loadingEl) {
            container.removeChild(loadingEl);
        }
        
        // Get news items for the category
        const news = newsData[category].slice(start, end);
        
        // Create and append news items
        news.forEach(item => {
            if (category === 'status') {
                // Create company status item
                const statusItem = document.createElement('div');
                statusItem.className = 'logistics-news__item';
                
                const dateEl = document.createElement('div');
                dateEl.className = 'logistics-news__date';
                dateEl.textContent = item.date;
                statusItem.appendChild(dateEl);
                
                               // Add company statuses
                               item.companies.forEach(company => {
                                const companyStatus = document.createElement('div');
                                companyStatus.className = 'company-status';
                                
                                const indicator = document.createElement('div');
                                indicator.className = `company-status__indicator status-${company.status}`;
                                companyStatus.appendChild(indicator);
                                
                                const name = document.createElement('div');
                                name.className = 'company-status__name';
                                name.textContent = company.name;
                                companyStatus.appendChild(name);
                                
                                const statusText = document.createElement('div');
                                statusText.className = 'company-status__text';
                                statusText.textContent = company.statusText;
                                companyStatus.appendChild(statusText);
                                
                                statusItem.appendChild(companyStatus);
                            });
                            
                            const textEl = document.createElement('div');
                            textEl.className = 'logistics-news__text';
                            textEl.textContent = item.text;
                            statusItem.appendChild(textEl);
                            
                            const sourceEl = document.createElement('div');
                            sourceEl.className = 'logistics-news__source';
                            const sourceLink = document.createElement('a');
                            sourceLink.href = item.source;
                            sourceLink.target = '_blank';
                            sourceLink.textContent = item.sourceName;
                            sourceEl.appendChild(sourceLink);
                            statusItem.appendChild(sourceEl);
                            
                            container.appendChild(statusItem);
                        } else {
                            // Create regular news item
                            const newsItem = document.createElement('div');
                            newsItem.className = 'logistics-news__item';
                            
                            const dateEl = document.createElement('div');
                            dateEl.className = 'logistics-news__date';
                            dateEl.textContent = item.date;
                            newsItem.appendChild(dateEl);
                            
                            const titleEl = document.createElement('h3');
                            titleEl.className = 'logistics-news__title';
                            titleEl.textContent = item.title;
                            newsItem.appendChild(titleEl);
                            
                            const textEl = document.createElement('div');
                            textEl.className = 'logistics-news__text';
                            textEl.textContent = item.text;
                            newsItem.appendChild(textEl);
                            
                            const sourceEl = document.createElement('div');
                            sourceEl.className = 'logistics-news__source';
                            const sourceLink = document.createElement('a');
                            sourceLink.href = item.source;
                            sourceLink.target = '_blank';
                            sourceLink.textContent = item.sourceName;
                            sourceEl.appendChild(sourceLink);
                            newsItem.appendChild(sourceEl);
                            
                            container.appendChild(newsItem);
                        }
                    });
                }
                
                // Function to refresh news
                function refreshNews(category) {
                    const container = document.getElementById(`${category}-news-container`);
                    
                    // Clear container
                    container.innerHTML = '';
                    
                    // Add loading message
                    const loadingEl = document.createElement('div');
                    loadingEl.className = 'logistics-news__loading';
                    loadingEl.textContent = 'Обновление данных...';
                    container.appendChild(loadingEl);
                    
                    // Simulate API call delay
                    setTimeout(() => {
                        // Reload initial news
                        loadNews(category, 0, 3);
                        
                        // Reset load more button
                        document.getElementById(`load-more-${category}`).style.display = 'block';
                    }, 1500);
                }
                
                // Function to format date
                function formatDate(dateString) {
                    const date = new Date(dateString);
                    const day = date.getDate().toString().padStart(2, '0');
                    const month = (date.getMonth() + 1).toString().padStart(2, '0');
                    const year = date.getFullYear();
                    return `${day}.${month}.${year}`;
                }
                
                // Weather data update for specific regions
                function updateWeatherInfo() {
                    const weatherData = {
                        'Забайкальск': {
                            temp: '18°C',
                            condition: 'Переменная облачность',
                            impact: 'Нет влияния на перевозки'
                        },
                        'Владивосток': {
                            temp: '16°C',
                            condition: 'Дождь',
                            impact: 'Возможны незначительные задержки'
                        },
                        'Хэйлунцзян': {
                            temp: '22°C',
                            condition: 'Сильный дождь',
                            impact: 'Ограничения для грузовиков'
                        },
                        'Японское море': {
                            temp: '15°C',
                            condition: 'Шторм',
                            impact: 'Задержки морских перевозок'
                        }
                    };
                    
                    const weatherContainer = document.getElementById('weather-info-container');
                    if (!weatherContainer) return;
                    
                    weatherContainer.innerHTML = '';
                    
                    for (const [region, data] of Object.entries(weatherData)) {
                        const weatherItem = document.createElement('div');
                        weatherItem.className = 'weather-item';
                        
                        const regionEl = document.createElement('div');
                        regionEl.className = 'weather-item__region';
                        regionEl.textContent = region;
                        weatherItem.appendChild(regionEl);
                        
                        const tempEl = document.createElement('div');
                        tempEl.className = 'weather-item__temp';
                        tempEl.textContent = data.temp;
                        weatherItem.appendChild(tempEl);
                        
                        const conditionEl = document.createElement('div');
                        conditionEl.className = 'weather-item__condition';
                        conditionEl.textContent = data.condition;
                        weatherItem.appendChild(conditionEl);
                        
                        const impactEl = document.createElement('div');
                        impactEl.className = 'weather-item__impact';
                        impactEl.textContent = data.impact;
                        weatherItem.appendChild(impactEl);
                        
                        weatherContainer.appendChild(weatherItem);
                    }
                }
                
                // Initialize weather info if container exists
                if (document.getElementById('weather-info-container')) {
                    updateWeatherInfo();
                    
                    // Update weather every 30 minutes
                    setInterval(updateWeatherInfo, 30 * 60 * 1000);
                }
                
                // Air traffic status update
                function updateAirTraffic() {
                    const airportData = {
                        'Шереметьево (SVO)': {
                            status: 'normal',
                            statusText: 'Работает нормально',
                            delays: 'Нет задержек'
                        },
                        'Пекин (PEK)': {
                            status: 'delay',
                            statusText: 'Незначительные задержки',
                            delays: 'Задержки 30-60 минут из-за тумана'
                        },
                        'Владивосток (VVO)': {
                            status: 'normal',
                            statusText: 'Работает нормально',
                            delays: 'Нет задержек'
                        },
                        'Харбин (HRB)': {
                            status: 'delay',
                            statusText: 'Значительные задержки',
                            delays: 'Задержки 1-3 часа из-за сильного тумана'
                        },
                        'Шанхай (PVG)': {
                            status: 'normal',
                            statusText: 'Работает нормально',
                            delays: 'Нет задержек'
                        }
                    };
                    
                    const airTrafficContainer = document.getElementById('air-traffic-container');
                    if (!airTrafficContainer) return;
                    
                    airTrafficContainer.innerHTML = '';
                    
                    for (const [airport, data] of Object.entries(airportData)) {
                        const airportItem = document.createElement('div');
                        airportItem.className = 'airport-item';
                        
                        const airportEl = document.createElement('div');
                        airportEl.className = 'airport-item__name';
                        airportEl.textContent = airport;
                        airportItem.appendChild(airportEl);
                        
                        const statusIndicator = document.createElement('div');
                        statusIndicator.className = `airport-item__indicator status-${data.status}`;
                        airportItem.appendChild(statusIndicator);
                        
                        const statusEl = document.createElement('div');
                        statusEl.className = 'airport-item__status';
                        statusEl.textContent = data.statusText;
                        airportItem.appendChild(statusEl);
                        
                        const delaysEl = document.createElement('div');
                        delaysEl.className = 'airport-item__delays';
                        delaysEl.textContent = data.delays;
                        airportItem.appendChild(delaysEl);
                        
                        airTrafficContainer.appendChild(airportItem);
                    }
                }
                
                // Initialize air traffic info if container exists
                if (document.getElementById('air-traffic-container')) {
                    updateAirTraffic();
                    
                    // Update air traffic every 15 minutes
                    setInterval(updateAirTraffic, 15 * 60 * 1000);
                }
            });
            