// FETCH DATA FROM LOCAL .JSON FILE  

// fetch("people.json")
//   .then(response => response.json())
//   .then(json => {
//     json.forEach( person => {
//       const div = document.createElement("div");
//       div.innerHTML = `${person.name} is ${person.age}`
//       document.body.appendChild(div); 
//     })
//   })

  // FETCH PHOTO FROM EXTERNAL API

  // fetch ("https://jsonplaceholder.typicode.com/photos/3")
  //   .then (res => res.json())
  //   .then (json => {
  //     console.log(json)
  //     const img = document.createElement("img");
  //     img.src = json.url
  //     document.body.appendChild(img)
  //   })

  // ERROR HANDLING

  fetch("people.json")
    .then(res => {throw 404} )
    .then (json => {
      json.forEach (person => {
        const div = createElement("div")
        div.innerHTML = `${person.name} is ${person.age}`
        document.body.appendChils(div)
      })
    })
    .catch(err => console.error(err))