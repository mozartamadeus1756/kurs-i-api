document.getElementById("button").addEventListener("click", function () {
    console.log("Button was pressed");

    fetch('http://localhost:5500')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching joke');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.joke);
            document.getElementById("punchline").textContent = data.joke;
        })
        .catch(error => {
            console.error('error', error);
        });
});




