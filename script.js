function loadPopulation(){

Papa.parse("data/population.csv",{

download:true,
header:true,

complete:function(results){

let html=""

results.data.forEach(row=>{

html+=`

<div class="population-card">

${row.indicator}

<strong>${row.value}</strong>

</div>

`

})

document.getElementById("population").innerHTML=html

}

})

}

function loadFacilities(){

Papa.parse("data/facilities.csv",{

download:true,
header:true,

complete:function(results){

let html=""

results.data.forEach(row=>{

html+=`

<div class="facility-card">

${row.facility}

<span>${row.count}</span>

</div>

`

})

document.getElementById("facilities").innerHTML=html

}

})

}

function loadHealth(){

Papa.parse("data/health.csv",{

download:true,
header:true,

complete:function(results){

let html=""

results.data.forEach(row=>{

html+=`

<div class="health-card">

${row.facility}

<strong>${row.count}</strong>

</div>

`

})

document.getElementById("health").innerHTML=html

}

})

}

function loadSafety(){

Papa.parse("data/safety.csv",{

download:true,
header:true,

complete:function(results){

let html=""

results.data.forEach(row=>{

html+=`

<div class="safety-card">

${row.facility}

<div class="safety-number">${row.count}</div>

</div>

`

})

document.getElementById("safety").innerHTML=html

}

})

}

function loadEducation(){

Papa.parse("data/education.csv",{

download:true,
header:true,

complete:function(results){

let html=""

results.data.forEach(row=>{

html+=`

<div class="edu-card">

${row.level}

<br>

Sekolah: <strong>${row.schools}</strong>

<br>

Guru: <strong>${row.teachers}</strong>

<br>

Murid: <strong>${row.students}</strong>

</div>

`

})

document.getElementById("education").innerHTML=html

}

})

}

function loadEthnicity(){

Papa.parse("data/ethnicity.csv",{

download:true,
header:true,

complete:function(results){

let labels=[]
let values=[]

results.data.forEach(r=>{

labels.push(r.ethnicity)
values.push(r.percentage)

})

new Chart(document.getElementById("ethnicityChart"),{

type:"doughnut",

data:{

labels:labels,

datasets:[{

data:values

}]

}

})

}

})

}

function loadAge(){

Papa.parse("data/age_structure.csv",{

download:true,
header:true,

complete:function(results){

let labels=[]
let values=[]

results.data.forEach(r=>{

labels.push(r.age_group)
values.push(r.percentage)

})

new Chart(document.getElementById("ageChart"),{

type:"bar",

data:{

labels:labels,

datasets:[{

data:values

}]

}

})

}

})

}

loadPopulation()
loadFacilities()
loadHealth()
loadSafety()
loadEducation()
loadEthnicity()
loadAge()
