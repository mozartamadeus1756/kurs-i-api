let currentFact = ''; 

document.querySelector("#button")?.addEventListener("click", fetchFact); 
async function fetchFact() { 
  try {
    console.log("Button was pressed");
    const response = await fetch('https://meowfacts.herokuapp.com/'); 
    
    if (!response.ok) { 
      throw new Error('Failed to fetch cat fact');
    }
    const data = await response.json(); 
    currentFact = data.data[0];  
    document.getElementById("fact-line").textContent = currentFact; 
    
  } catch (error) {
    console.error(error);
  }
}


