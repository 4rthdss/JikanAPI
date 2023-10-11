function getSeason() {
    let seasonUrl = `https://api.jikan.moe/v4/seasons/now`
    fetch(seasonUrl)
    .then(response => response.json())
    .then(data => {
        let node = document.getElementById('search_results');
        while (node.firstChild) {node.removeChild(node.firstChild);}


            data.data.forEach(item => {
                document.getElementById('search_results')
                .insertAdjacentHTML(
                    'beforeend',
                    `
                    <span>${item.title}</span>
                        <div class="card__image">
                            <a data-fancybox href="${item.images.jpg.large_image_url}"><img width="230" heigth="325" src="${item.images.jpg.large_image_url}" alt="${item.title}" /> </a>

                            </div>
                        <br> 
                    `
                );
            });
    });

}
getSeason()

function search() {
    let query = document.getElementById('search_query').value;

    let requestUrl = `https://api.jikan.moe/v4/anime?q=${query}&sfw`;


    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        let node = document.getElementById('search_results');
        while (node.firstChild) {node.removeChild(node.firstChild);}
            data.data.forEach(item => {
                document.getElementById('search_results')
                .insertAdjacentHTML(
                    'beforeend',
                    `
                    <span>${item.title}</span>
                        <div class="card__image">
                            <img width="230" heigth="325" src="${item.images.jpg.large_image_url}" alt="${item.title}" />
                        </div>
                        <br> 
                    `
                );
            });
    });
}

document.getElementById('search').onclick = () => search();
document.getElementById('search_query').onkeydown = (event) => {
    if (event.keyCode === 13) {
        search();
    }
};
