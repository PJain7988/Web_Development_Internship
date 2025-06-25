// // api : https://randomuser.me/api/
// // make random user profile and give a refresh button to get new user also give on page refresh the user should be persist

const refreshBtn = document.getElementById("refresh-btn");
const container = document.getElementById("container");

refreshBtn.addEventListener("click", async () => {
  let res = await fetch("https://randomuser.me/api/");
  let data = await res.json();
  localStorage.setItem("randomUser", JSON.stringify(data.results[0]));
  createuser();
});

function createuser() {
  let user = JSON.parse(localStorage.getItem("randomUser"));
  container.innerHTML = "";

  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = user.picture.large;

  div.innerHTML = `
    <h2>Name : ${user.name.title} ${user.name.first} ${user.name.last}</h2>
    <p><b>Phone : </b>${user.phone}</p>
    <p><b>Birthday : </b>${new Date(user.dob.date).toDateString()}</p>
    <p><b>Email : </b>${user.email}</p>
    <p><b>Username : </b>${user.login.username}</p>
    <p><b>Password : </b>${user.login.password}</p>
    <p><b>Location : </b>${user.location.city}, ${user.location.country}</p>
  `;
  div.prepend(img);
  container.append(div);
}
if (localStorage.getItem("randomUser")) {
  createuser();
}
