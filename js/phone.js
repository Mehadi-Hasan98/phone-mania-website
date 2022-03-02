    const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const error = document.getElementById('error');
    const searchText = searchField.value;
    
    // clear data
    searchField.value = '';
    // error handle
    if(searchText == ''){
        error.innerText ='please write a phone name';
        searchField.value = '';   
    }
    else{
        // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
    error.innerHTML = '';
    }   
    
}

const displaySearchResult = data => {
      const searchResult = document.getElementById('search-result');
      
    //   showing first 18 phones using slice
      const first18Data = data.slice(0, 18);
      searchResult.textContent = '';
    
        // using forEach loop
        first18Data.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        // all phone results
        div.innerHTML = `
        <div class="card align-items-center">
            <img src="${phone.image}" class="card-img-top w-50" alt="...">
            <div class="card-body">
                <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
                <h6 class="card-title">Brand Name: ${phone.brand}</h6>
                <a href="#"><button class="bg-primary text-white border-0 rounded ps-4 pe-4" onclick="loadPhoneDetail('${phone.slug}')">More details</button></a>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}
 
  loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data));
}
// single phone details
const displayPhoneDetail = phone => {
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img width="400px" height="350px" src="${phone.image}" class="card-img-top w-50 mb-4 mx-auto" alt="...">
    <div class="card-body">
        <h4 class="card-title">Phone Name: ${phone.name}</h4>
        <h5 class="card-title">Brand Name: ${phone.brand}</h5>
        <p class="card-text"><b>Release Date:</b> ${phone.releaseDate??"NO release date found"}.</p>
        <h5 class="card-title fw-bold">Main Features</h5>
        <p class="card-text"><b>Chipset:</b> ${phone.mainFeatures.chipSet}.</p>
        <p class="card-text"><b>Display Size:</b> ${phone.mainFeatures.displaySize}.</p>
        <p class="card-text"><b>Memory:</b> ${phone.mainFeatures.memory}.</p>
        <p class="card-text"><b>Storage:</b> ${phone.mainFeatures.storage}.</p>
        <h5 class="card-title fw-bold">Other Features</h5>
        <p class="card-text"><b>Bluetooth:</b> ${phone.others?.Bluetooth??"No"}.</p>
        <p class="card-text"><b>GPS:</b> ${phone.others?.GPS??"No"}.</p>
        <p class="card-text"><b>NFC:</b> ${phone.others?.NFC??"No"}.</p>
        <p class="card-text"><b>Radio:</b> ${phone.others?.Radio??"No"}.</p>
        <p class="card-text"><b>USB:</b> ${phone.others?.USB??"No"}.</p>
        <p class="card-text"><b>WLAN:</b> ${phone.others?.WLAN??"No"}.</p>
        <p class="card-text"><b>Sensors:</b> ${phone.mainFeatures?.sensors}.</p>
    </div>
    `;
    phoneDetails.appendChild(div);
}