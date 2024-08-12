document.getElementById('searchButton').addEventListener('click', function() {
    performSearch();
});

document.getElementById('searchText').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const query = document.getElementById('searchText').value;

    if (query) {
        const urls = [
            `https://unsplash.com/s/photos/${encodeURIComponent(query)}`,
            `https://www.pexels.com/search/${encodeURIComponent(query)}/`,
            `https://pixabay.com/images/search/${encodeURIComponent(query)}/`
        ];

        urls.forEach(url => chrome.tabs.create({ url }));
    }
}
