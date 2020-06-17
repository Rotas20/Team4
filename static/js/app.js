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
// do I need to map?
// do I need to write query in app.py file?
// Which is the correct https link?
// how can I make a legend for payment type?
// How is this code picking up the users dropdown selection?


function populateTable() {
    var pannel = d3.select("#trip-metadata")
    var payment_type = []
    var trip_distance = []
    var fare_amount = []
    var tip_amount = []
    var passenger_count = []
    fetch('https://pridetrip.herokuapp.com/pridedata?length=100').then(data=>data.json()).then(d=>{
    d.results.forEach(r=>{
        console.log(r);
//         table_data = document.createElement("td")
        // "Number of Passengers:" = r.passenger_count
        // "Fare:" = r.fare_amount
        // "Tip:" = r.tip_amount
        // "Payment Type:" = r.payment_type
        // "Distance:" = r.trip_distance  
//         document.getElementById('trip-metadata').add(table_data)
    

    pannel.append("h6").text("Payment Type: " + avg_payment_type)
    pannel.append("h6").text("Payment Type: " + avg_payment_type)

})}




populateDropDown();

populateTable();




// // Match name of function to Valentina's function to call graphs (Sankey and Payment/Tips)
// function populateGraphs() {
//     fetch('/priorwkdata').then(data=>data.json()).then(d=>{
//     d.datasets.forEach(n=>{
//         o = document.createElement("option")
//         o.text = n
//         document.getElementById('dataSelect').add(o)
//     })
//     updateData()
// })
// }


// Promise needs to initiate the populateDropDown, graphs and table
// fetch('/pridedata').then(data=>data.json()).then(d=>{
//     d.charts.forEach(n=>{
//         o = document.createElement("option")
//         o.text = n
//         document.getElementById('chartSelect').add(o)
//     })
//     dataEndpoints()
// })