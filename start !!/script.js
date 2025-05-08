let currentFact = ''; 

document.querySelector("#button")?.addEventListener("click", fetchFact); 
async function fetchFact() { 
  try {
    console.log("Button was pressed");
    const response = await fetch('https://dog.ceo/api/breeds/image/random'); 
    
    if (!response.ok) { 
      throw new Error('Failed to fetch cat fact');
    }
    const data = await response.json(); 
    currentFact = data.message;  
    const imgElement = document.getElementById("dog-image");
    if (imgElement) {
      imgElement.src = currentFacr  ;
      imgElement.alt = "Random dog image";
    } else {
      // Hvis du ikke har et img-element, kan du opprette ett
      const img = document.createElement("img");
      img.id = "dog-image";
      img.src = currentFact;
      img.alt = "Random dog image";
      document.getElementById("fact-line").textContent = ""; // Tøm tekstfeltet
      document.getElementById("fact-line").appendChild(img); // Legg til bildet
    } 
    
  } catch (error) {
    console.error(error);
  }
}

// let currentFact = ''; 

// document.querySelector("#button")?.addEventListener("click", fetchFact); 
// async function fetchFact() { 
//   try {
//     console.log("Button was pressed");
//     const response = await fetch('https://meowfacts.herokuapp.com/'); 
    
//     if (!response.ok) { 
//       throw new Error('Failed to fetch cat fact');
//     }
//     const data = await response.json(); 
//     currentFact = data.data[0];  
//     document.getElementById("fact-line").textContent = currentFact; 
    
//   } catch (error) {
//     console.error(error);
//   }
// }


