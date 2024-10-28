const rulesPerPage = 2; // 1ページに表示するニュースの数
let currentPage = 1;    // 現在のページ

// JSONファイルを読み込んで、ルールリストを表示する関数
fetch('rules.json')
    .then(response => response.json())
    .then(data => {
        const totalPages = Math.ceil(data.length / rulesPerPage); // 総ページ数を計算
        displayRules(data, currentPage, rulesPerPage);             // 初期ページのニュースを表示
        setupPagination(data, totalPages);                        // ページネーションを設定
    })
    .catch(error => console.error('Error fetching rules:', error));

    // ルールを表示する関数
function displayRules(data, page, rulesPerPage) {
    const rulesList = document.getElementById('ruleList');
    rulesList.innerHTML = '';  // 現在表示されているルールをクリア

    const startIndex = (page - 1) * rulesPerPage;
    const endIndex = page * rulesPerPage;
    const paginatedItems = data.slice(startIndex, endIndex); // 現在のページのニュースを取得

    paginatedItems.forEach(rule => {
        const rulesLink = document.createElement('a');
        rulesLink.href = rule.url;
        rulesLink.target = "_blank";

        const rulesItem = document.createElement('div');
        rulesItem.classList.add('rules-item');

        rulesItem.innerHTML = `
            <h2>${rule.title}</h2>
            <p>${rule.date}</p>
            <p>${rule.description}</p>
        `;

        rulesLink.appendChild(rulesItem);
        rulesList.appendChild(rulesLink);
    });
}