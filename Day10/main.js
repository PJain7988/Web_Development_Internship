////////////////////////////// what is Local Storage //////////////////////////////////////////////////////////////
// localStorage is a property of the window object that allows you to store data locally in the browser it is a key-value store, where each key is a string and the value can be any type of data (string, number, object, etc.) the data is stored in the browser's memory, so it will be lost when the browser is closed or the user clears their browser data you can use the localStorage API to store and retrieve data from the browser's local storage

localStorage.setItem("name","priya");

console.log(localStorage.getItem("name"));

const obj = {
    name: "priya",
    arr:[1,2,3,"4"]
}

// localStorage.setItem("obj",{name:"priya"});
localStorage.setItem("obj",JSON.stringify(obj));
console.log(JSON.stringify(obj));
console.log("Storage - ",localStorage.getItem("obj"));
// console.log(localStorage.getItem("obj"));

let storeObj = JSON.parse(localStorage.getItem("obj"));
console.log(storeObj)
console.log(storeObj.name);

const h1=document.getElementsByTagName("h1")[0];
const getQR = async (url) => {
      const res = await axios.get(
        `https://api.api-ninjas.com/v1/qrcode?format=png&data=${encodeURIComponent(url)}`,
        {
          headers: {
            "X-Api-Key": "RvmBEYT3I0a0yMzSbNj6iQ==EN2QugiRhCqKcq3T"
          },
          responseType: "arraybuffer"
        }
      );

      // Convert to Base64
      const binary = new Uint8Array(res.data).reduce(
        (acc, byte) => acc + String.fromCharCode(byte), ''
      );
      const base64 = btoa(binary);

      // Create and append the image
      const img = document.createElement("img");
      img.src = `data:image/png;base64,${base64}`;
      img.alt = "QR Code";

      const h1 = document.querySelector("h1");
      h1.after(img);
    };

    getQR("https://pjain7988.github.io/Web_Development_Internship/Template_1/");