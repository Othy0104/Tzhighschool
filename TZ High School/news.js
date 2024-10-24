// JSONファイルを読み込んで、ニュースリストを表示する関数
fetch('news.json')  // 手作りのJSONファイルを読み込む
    .then(response => response.json())  // JSONデータとしてパース
    .then(data => {
        const newsList = document.getElementById('newsList');

        // すべてのニュース項目をループ処理して表示
        data.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');

            newsItem.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.date}</p>
                <p>${item.description}</p>
            `;

            newsList.appendChild(newsItem);
        });
    })
    .catch(error => console.error('Error fetching news:', error));  // エラー処理
