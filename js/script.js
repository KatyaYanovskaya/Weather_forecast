
const form = document.querySelector('#request')
const input = document.querySelector('.inp')
let city ;


// слушаем отправку формы
form.onsubmit = function(e) {

    // отменяем отправку формы
    e.preventDefault();
    // берем значение из инпута, обрезаем пробелы
    city = input.value.trim();
    // делаем запрос на сервер 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=31869089717d9877d9bb65bc29265390`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        document.querySelector('.card-city').textContent = data.name
        document.querySelector('.card-deg').innerHTML = Math.round(data.main.temp - 273) + '&deg;C'
        document.querySelector('.card-description').innerHTML = data.weather[0].description
        document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`

    });   

}


 