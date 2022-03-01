const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';

    // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}

const displaySearchResult = data => {
      const searchResult = document.getElementById('search-result');
      searchResult.textContent = '';
    // if(phones.length == 0){
    //     // show no result found
    // }
     data.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
                <h6 class="card-title">Brand: ${phone.brand}</h6>
                <button onclick="loadPhoneDetail('${phone.slug}')">Details</button>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data));
}

const displayPhoneDetail = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top width=200px" alt="...">
    <div class="card-body">
        <h5 class="card-title">Phone Name: ${phone.name}</h5>
        <h6 class="card-title">Brand: ${phone.brand}</h6>
        <p class="card-text">Release Date: ${phone.releaseDate}.</p>
        <p class="card-text">Chipset: ${phone.mainFeatures.chipSet}.</p>
        <p class="card-text">Display Size: ${phone.mainFeatures.displaySize}.</p>
        <p class="card-text">Memory: ${phone.mainFeatures.memory}.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    phoneDetails.appendChild(div);
}