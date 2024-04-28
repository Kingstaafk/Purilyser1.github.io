const firebaseConfig = {
  apiKey: "AIzaSyBW3dSFKdNxB9Ykqo3Oe5iEvKJZLm6tzDg",
  authDomain: "purilyser-ac3a7.firebaseapp.com",
  projectId: "purilyser-ac3a7",
  storageBucket: "purilyser-ac3a7.appspot.com",
  messagingSenderId: "605679366743",
  appId: "1:605679366743:web:160384838abd1b2b6fe912",
  measurementId: "G-TFZ20L2PYW",
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("text");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Get Form Values
let fname = document.getElementById("fname").value;
let phone = document.getElementById("phone").value;
let dist = document.getElementById("dist").value;
firestore
  .collection("text")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      const fn = doc.data().fname;
      if (fname === fn) {
        console.log("Already Exists");
      }

      // console.log("data", doc.data().fname);
    });
  });

//Save Form Data To Firebase
db.doc()
  .set({
    fname: fname,
    phone: phone,
    dist: dist,
  })
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });

//alert
alert("Logged in successfully");

//clear form after submission
function clearForm() {
  document.getElementById("clearFrom").reset();
}
clearForm();

if (fname != "null" && phone != "null" && dist != "null") {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});
