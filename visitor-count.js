function visitorCounter(){
    fetch("https://p51hih4aid.execute-api.us-east-1.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
        document.getElementById("visitor-count").innerHTML=body
    })
}