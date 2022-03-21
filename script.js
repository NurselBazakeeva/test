document.getElementById("button-1").addEventListener("click", getText);

function getText() {
    fetch("db.txt")
    .then((res) => {
        return res.text();
    })
    .then((data) => {
        document.getElementById("output").innerHTML = data;
    })
}

document.getElementById("button-2").addEventListener("click", getJson);

function getJson() {
    fetch("db.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let output = "";
        data.forEach((post) => {
            output += '<li>${post.title}</li>';
        });

        document.getElementById("output").innerHTML = output;
    });
}