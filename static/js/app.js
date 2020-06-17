function populateDropDown() {
    distinctList=[]
    fetch('https://pridetrip.herokuapp.com/zones').then(data=>data.json()).then(d=>{
    d.results.forEach(n=>{
        o = document.createElement("option")
        o.text = n.dozone
        document.getElementById('selDataset').add(o)
    })
    
})}

function populateTable(dozone) {
    var pannel = d3.select("#trip-metadata")
    document.getElementById("trip-metadata").innerHTML = ""
    passenger_count = []
    total_amount = []
    tip_amount = []
    payment_type = []
    trip_distance=[]

    fetch('https://pridetrip.herokuapp.com/pridedata?length=10000').then(data=>data.json()).then(d=>{
    d.results.forEach(r=>{
        if (dozone == r.dozone || typeof dozone == "undefined") {
            passenger_count.push(r.passenger_count)
        }

        if (dozone == r.dozone || typeof dozone == "undefined") {
            total_amount.push(r.total_amount)
        }
       
        if (dozone == r.dozone || typeof dozone == "undefined") {
            tip_amount.push(r.tip_amount)
        }

        if (dozone == r.dozone || typeof dozone == "undefined") {
            payment_type.push(r.payment_type)
        }

        if (dozone == r.dozone || typeof dozone == "undefined") {
            trip_distance.push(r.trip_distance)
        }
    })
    passenger = jStat.mean(passenger_count)
    total = jStat.mean(total_amount)
    tip = jStat.mean(tip_amount)
    payment = jStat.mean(payment_type)
    distance = jStat.mean(trip_distance)

    
    var type;
    switch (payment) {
        case 1:
          type = "Credit Card";
          break;
        case 2:
           type = "Cash";
          break;
        case 3:
          type = "No Charge";
          break;
        case 4:
          type = "Dispute";
          break;
        case 5:
          type = "Unknown";
          break;
        case 6:
          type = "Voided Trip";
      }

    pannel.append("h4").text("Passenger Count: " + Math.round(passenger))   
    pannel.append("h4").text("Trip Cost: $" + Math.round(total))
    pannel.append("h4").text("Tip: $" + Math.round(tip))
    pannel.append("h4").text("Payment Type: " + type)
    pannel.append("h4").text("Trip Distance: " + Math.round(distance) + " mi" )

})
}
  

populateTable()
populateDropDown()
// callChart()




function optionChanged(dropoffzone) {
    console.log(dropoffzone);
    populateTable(dropoffzone)
    // callChart(dropoffzone)

}