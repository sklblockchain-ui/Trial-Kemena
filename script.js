function loadPopulation(){

Papa.parse("data/population.csv",{

download:true,
header:true,

complete:function(results){

let html=""

results.data.forEach(row=>{

html += `
<div class="stat">
<h3>${row.indicator}</h3>
<p>${row.value}</p>
</div>
`

})

document.getElementById("population").innerHTML = html

}

})

}
