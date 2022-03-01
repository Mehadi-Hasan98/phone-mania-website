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
   const totalPhone = data.slice(0, 20); 
     data.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card align-items-center">
            <img src="${phone.image}" class="card-img-top w-50" alt="...">
            <div class="card-body">
                <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
                <h6 class="card-title">Brand Name: ${phone.brand}</h6>
                <button class="bg-primary text-white border-0 rounded ps-4 pe-4" onclick="loadPhoneDetail('${phone.slug}')">Details</button>
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
    // console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top w-50 mb-4 mx-auto" alt="...">
    <div class="card-body">
        <h4 class="card-title">Phone Name: ${phone.name}</h4>
        <h5 class="card-title">Brand Name: ${phone.brand}</h5>
        <p class="card-text"><b>Release Date:</b> ${phone.releaseDate}.</p>
        <h5 class="card-title fw-bold">Main Features</h5>
        <p class="card-text"><b>Chipset:</b> ${phone.mainFeatures.chipSet}.</p>
        <p class="card-text"><b>Display Size:</b> ${phone.mainFeatures.displaySize}.</p>
        <p class="card-text"><b>Memory:</b> ${phone.mainFeatures.memory}.</p>
        <p class="card-text"><b>Storage:</b> ${phone.mainFeatures.storage}.</p>
        <h5 class="card-title fw-bold">Other Features</h5>
        <p class="card-text"><b>Bluetooth:</b> ${phone.others?.Bluetooth}.</p>
        <p class="card-text"><b>GPS:</b> ${phone.others?.GPS}.</p>
        <p class="card-text"><b>NFC:</b> ${phone.others?.NFC}.</p>
        <p class="card-text"><b>Radio:</b> ${phone.others?.Radio}.</p>
        <p class="card-text"><b>USB:</b> ${phone.others?.USB}.</p>
        <p class="card-text"><b>WLAN:</b> ${phone.others?.WLAN}.</p>
        <p class="card-text"><b>Sensors:</b> ${phone.mainFeatures?.sensors}.</p>
        <a href="#" class="btn btn-primary">See more</a>
    </div>
    `;
    phoneDetails.appendChild(div);
}