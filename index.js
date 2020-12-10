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

  // fetch("people.json")
  //   .then(res => {throw 404} )
  //   .then (json => {
  //     json.forEach (person => {
  //       const div = createElement("div")
  //       div.innerHTML = `${person.name} is ${person.age}`
  //       document.body.appendChils(div)
  //     })
  //   })
  //   .catch(err => console.error(err))


//ASYNC / AWAIT (GET)

// async function getData() {
//   const response = await fetch ("people.json");
//   const data = await response.json();

//   data.forEach(person => {
//     const div = document.createElement("div");
//     div.innerHTML = person.name;
//     document.body.appendChild(div)
//   })
// }

// getData()

// async function getPosts() {
//   const postPromise = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts = await postPromise.json()
  
//   let html = "";

//   posts.slice(0,5).forEach ( post => {
//     const title = post.title;
//     const body = post.body
//     html += `
//       <div class="post">
//         <h3>${title}</h3>
//         <p>${body}</p>
//       </div>
//     `
//   })
//   document.body.innerHTML = html;
// }

// getPosts()

//ASYNC / AWAIT (GET) - ERROR HANDLING WITH IF STATEMENT

// async function getPosts() {
//   const postPromise = await fetch('https://jsonplaceholder.typicode.com/posts');
// IF STATEMENT HERE
//   if(postPromise.ok) {
//     const posts = await postPromise.json()
//     let html = "";
  
//     posts.slice(0,5).forEach ( post => {
//       const title = post.title;
//       const body = post.body
//       html += `
//         <div class="post">
//           <h3>${title}</h3>
//           <p>${body}</p>
//         </div>
//       `
//     })

//     document.body.innerHTML = html;
//   } else {
//       console.error(`Error: ${postPromise.status}`)
//   }

// }

// getPosts()

// FETCH BLOG POSTS (POST) STYLE BOOTSTRAP FORM

document.getElementById("fetchForm").addEventListener("submit", submitPost);

// 1 PREVENT DEFAULT 
async function submitPost(e) {
  e.preventDefault();

// 2 GET THE VALUES FROM USER
  let title = document.getElementById("titleInput").value
  let body = document.getElementById("bodyInput").value

// 3 DEFINE OPTIONS
  const options = {
    method: "POST",
    body: JSON.stringify({title: title, body: body}),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  };

// 4 FETCH DATA AND DISPLAY IT 
  const postPromise = await fetch('https://jsonplaceholder.typicode.com/posts', options);
  const post = await postPromise.json();

  title = post.title;
  body = post.body;

  document.querySelector(".card-title").innerHTML = title;
  document.querySelector(".card-text").innerHTML = body;
  
  // CLEAR INPUTS AFTER SUBMIT
  document.getElementById('fetchForm').reset();

}