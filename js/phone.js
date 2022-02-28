const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}

const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(phones.length == 0){
        // show no result found
    }
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ``
    })
}
