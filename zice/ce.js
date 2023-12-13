// ce.js

function filterResults() {
    const searchBox = document.getElementById("search-box");
    const searchResults = document.getElementById("search-results");

    // 获取输入的搜索关键字
    const searchTerm = searchBox.value.toLowerCase("Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Strawberry",
    "Watermelon",);

    // 这里你可以自行定义搜索的逻辑，例如根据输入关键字过滤电影数据

    // 显示匹配的结果，可以使用 displayResults 函数
    // displayResults(filteredData, searchResults);
}

function displayResults(results, container) {
    // 清空容器
    container.innerHTML = "";

    if (results.length === 0) {
        // 如果没有匹配的结果，显示提示信息
        container.innerHTML = "<p>No results found.</p>";
    } else {
        // 显示匹配的结果
        results.forEach(result => {
            const resultItem = document.createElement("div");
            resultItem.textContent = result;
            container.appendChild(resultItem);
        });
    }
}
