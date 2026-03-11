function loadTable(file,element){

Papa.parse(file,{

download:true,
header:true,

complete:function(results){

let data = results.data

let html = "<table>"

Object.keys(data[0]).forEach(col=>{
html+="<th>"+col+"</th>"
})

data.forEach(row=>{

html+="<tr>"

Object.values(row).forEach(val=>{
html+="<td>"+val+"</td>"
})

html+="</tr>"

})

html+="</table>"

document.getElementById(element).innerHTML=html

}

})

}

loadTable("data/education.csv","educationTable")
loadTable("data/facilities.csv","facilitiesTable")
loadTable("data/health.csv","healthTable")
loadTable("data/safety.csv","safetyTable")
loadTable("data/income.csv","incomeTable")

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

type:'doughnut',

data:{
labels:labels,
datasets:[{data:values}]
}

})

}

})

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

type:'bar',

data:{
labels:labels,
datasets:[{data:values}]
}

})

}

})
