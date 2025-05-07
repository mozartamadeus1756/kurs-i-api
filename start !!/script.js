let currentFact = ''; //varbael for å lagre faktaen 

// når knappen trykkes, kjøres funksjonen 
document.querySelector("#button")?.addEventListener("click", fetchFact); 
async function fetchFact() { // en async funksjon 
  try {
    console.log("Button was pressed");
    const response = await fetch('https://meowfacts.herokuapp.com/'); // fetch en fakta
    
    if (!response.ok) { // skjekker om responsen er ok
      throw new Error('Failed to fetch cat fact');
    }
    const data = await response.json(); // konverterer responsen til json
    currentFact = data.data[0]; // API-en retunerer dataen og lagrer den i variablen 
    document.getElementById("fact-line").textContent = currentFact; // og printer den !!
    
  } catch (error) {
    console.error(error);
  }
}