function populateDropDown() {
    distinctList=[]
    fetch('https://pridetrip.herokuapp.com/zones').then(data=>data.json()).then(d=>{
    d.results.forEach(n=>{
        o = document.createElement("option")
        o.text = n.dozone
        document.getElementById('selDataset').add(o)
    })
    
})}

// want to take average based on drop off zone location
// do I need to map? object.value
// How is this code picking up the users dropdown selection?


function populateTable(dozone) {
    var pannel = d3.select("#trip-metadata")
    document.getElementById("trip-metadata").innerHTML = ""
    passenger_count = []

    fetch('https://pridetrip.herokuapp.com/pridedata?length=10000').then(data=>data.json()).then(d=>{
    d.results.forEach(r=>{
        if (dozone == r.dozone || typeof dozone == "undefined") {
            passenger_count.push(r.passenger_count)
        }
       
    })
    passenger = jStat.mode(passenger_count)
    pannel.append("h6").text("Passenger Count: " + passenger)   

 


})
}
// pannel.on("change", populateTable)   

populateTable()
populateDropDown()
callChart()




function optionChanged(dropoffzone) {
    console.log(dropoffzone);
    populateTable(dropoffzone)
    callChart(dropoffzone)

}