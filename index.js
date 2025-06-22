const worked = document.getElementsByClassName('worked')
const daily = document.querySelector('.duration>p:nth-of-type(1)');
const weeks = document.querySelector('.duration>p:nth-of-type(2)');
const months = document.querySelector('.duration>p:nth-of-type(3)');
console.log(daily.innerText);
// two for loops
console.log(worked[0].children[0].innerText);
console.log(worked[0].children[1].innerText);
let data_json;
//fetch data.json
fetch('http://127.0.0.1:5500/frontendio/Js/time-tracking-dashboard-main/data.json')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        data_json = data;
        console.log("data_json ", data_json);
    })
function displayChange(format) {
    switch (format) {
        case 'Day':
            for(let i=0;i<6;i++){
                worked[i].children[0].innerText=data_json[i].timeframes.daily.current+'hrs';
                worked[i].children[1].innerText="Last Day "+" - "+data_json[i].timeframes.daily.previous+"hrs";
            }
            break;
        case 'Week':
            for(let i=0;i<6;i++){
                console.log(i);
                worked[i].children[0].innerText=data_json[i].timeframes.weekly.current+" hrs";
                worked[i].children[1].innerText="Last Week"+" - "+data_json[i].timeframes.weekly.previous+"hrs";
            }
            break;
        default:
        for(let i=0;i<6;i++){
                worked[i].children[0].innerText=data_json[i].timeframes.monthly.current+" hrs";
                worked[i].children[1].innerText="Last Month"+" - "+data_json[i].timeframes.monthly.previous+"hrs";
            }
    }

}

// event listeners
daily.addEventListener('click', (e) => {
    daily.style.color="hsl(236, 100%, 87%)";
    weeks.style.color="hsl(235, 45%, 61%)";
    months.style.color="hsl(235, 45%, 61%)";
    displayChange('Day');
})
weeks.addEventListener('click', (e) => {
    daily.style.color="hsl(235, 45%, 61%)";
    weeks.style.color="hsl(236, 100%, 87%)";
    months.style.color="hsl(235, 45%, 61%)";
    displayChange('Week');
})
months.addEventListener('click', (e) => {
    daily.style.color="hsl(235, 45%, 61%)";
    weeks.style.color="hsl(235, 45%, 61%)";
    months.style.color="hsl(236, 100%, 87%)";
    displayChange('Year');
})