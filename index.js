// fetch data from local .json file

// fetch("people.json")
//   .then(response => response.json())
//   .then(json => {
//     json.forEach( person => {
//       const div = document.createElement("div");
//       div.innerHTML = `${person.name} is ${person.age}`
//       document.body.appendChild(div); 
//     })
//   })

  // fetch photo from and external API

  fetch ("https://jsonplaceholder.typicode.com/photos/3")
    .then (res => res.json())
    .then (json => {
      console.log(json)
      const img = document.createElement("img");
      img.src = json.url
      document.body.appendChild(img)
    })