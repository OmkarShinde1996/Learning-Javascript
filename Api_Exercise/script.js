//Dog API : https://dog.ceo/api/breeds/image/random
//.then - promises
//asynchronus programming
//whenever you are dealing with api's or databases you are making asynchronouus programming 
//and then you have to use .then to get the information that you actually need

//stuff that you don't have to wait
console.log('print 1st');
const dogImageDiv = document.getElementById('dogImage');
const refreshButton = document.getElementById('refreshButton');

//stuff that you have to wait hence called asynchronus programming
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
    console.log(json.message);
    dogImageDiv.innerHTML = `<img src='${json.message}'/>`
});

const refreshButtonClicked = () => {
    // location.reload();
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json.message);
        dogImageDiv.innerHTML = `<img src='${json.message}'/>`
    });
}

refreshButton.onclick = () => (refreshButtonClicked());


//stuff that you don't have to wait
console.log('print 3rd');