d3.json("http://pridetrip.herokuapp.com/pridedata_avg").then(payment=>{
    var test = payment.results
    console.log(test)
    var location = test.map(x => x.dozone);
    console.log(location)

    var avgTip = test.map(x => x.avg_tip_amount)
    console.log(avgTip)

    // Build a Bubble Chart
    var bubbleLayout = {
      title: {
        text: "Pride Week",
        font: {
          color: "#fff",
        },
      },
      paper_bgcolor: "#2b3e50",
      plot_bgcolor: "#2b3e50",
      showlegend: false,
      autosize: false,
      width: 900,
      height: 600,
      hovermode: "closest",
      xaxis: { 
        title: {
          text: "Drop Off Zone",
          font: {
          color: "#fff",
          },
          },
        automargin: true,
        showgrid: false,
        color: "#fff",
      },
      yaxis: { 
        title: {
          text: "Tip Average",
          font: {
          color: "#fff",
          },
          },
        automargin: true,
        showgrid: false,
        showline: true,
        color: "#fff",
      },
    };

    // var bubbleLayout(automargin=True);

    var bubbleData = [
      {
        x: location,
        y: avgTip,
          text: location,
        mode: "markers",
        marker: {
          size: avgTip,
          colorscale: "Earth"
        }
      }
    ];

    Plotly.newPlot("pridewk", bubbleData, bubbleLayout, {scrollZoom: true});

  })




  d3.json("http://pridetrip.herokuapp.com/priorwkdata_avg").then(payment=>{
    var test = payment.results
    console.log(test)
    var location = test.map(x => x.dozone);
    console.log(location)

    var avgTip = test.map(x => x.avg_tip_amount)
    console.log(avgTip)

    // Build a Bubble Chart
    var bubbleLayout = {
      title: {
        text: "Prior Week",
        font: {
          color: "#fff",
        },
      },
      paper_bgcolor: "#2b3e50",
      plot_bgcolor: "#2b3e50",
      showlegend: false,
      autosize: false,
      width: 900,
      height: 600,
      hovermode: "closest",
      xaxis: { 
        title: {
          text: "Drop Off Zone",
          font: {
          color: "#fff",
          },
          },
        automargin: true,
        showgrid: false,
        color: "#fff",
      },
      yaxis: { 
        title: {
          text: "Tip Average",
          font: {
          color: "#fff",
          },
          },
        automargin: true,
        showgrid: false,
        showline: true,
        color: "#fff",
      },
    };
    var bubbleData = [
      {
        x: location,
        y: avgTip,
         text: location,
        mode: "markers",
        marker: {
          size: avgTip,
        //  color: otu_ids,
          colorscale: "Rainbow"
        }
      }
    ];

    Plotly.newPlot("priorwk", bubbleData, bubbleLayout, {scrollZoom: true});

  })


