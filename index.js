// fetch("people.json")
//   .then( response => response.json())
//   .then ( json => {
//     const div = document.createElement("div");
//     div.innerHTML = json.name; 
//     document.body.appendChild(div); 
//   })

fetch("people.json")
  .then(response => response.json())
  .then(json => {
    json.forEach( person => {
      const div = document.createElement("div");
      div.innerHTML = `${person.name} is ${person.age}`
      document.body.appendChild(div); 

    })

  })
