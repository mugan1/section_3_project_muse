$.getJSON("/data.json", data => {
    var playlist = []
    for (var key in data['playlist']) {
        playlist.push(data['playlist'][key])
    }
    var recommend = []
    for (var key in data['recommend']) {
        recommend.push(data['recommend'][key])
    }
    
    
    var marksCanvas = document.getElementById("marksChart");

    var marksData = {
        labels: ["acousticness", "danceability", "energy", "instrumentalness", "liveness", "loudness", "speechiness", "valence"],
        datasets: [{
            label: "Your List",
            fill: true,
            backgroundColor: "rgba(200,0,0,0.2)",
            data: playlist,
            pointRadius: 4
        }, {
            label: "Recommended",
            fill: true,
            backgroundColor: "rgba(0,0,200,0.2)",
            data: recommend,
            pointRadius: 4
        }]
    };
  
    var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        title: {
            display: true,
            text: 'Compare Radar Chart'
        },
        data: marksData,
        options: {
        responsive: true,
        }
    });

});


