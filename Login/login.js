//Unique Firebase Object  authDomain: "fire-form-a5ba0.firebaseapp.com",
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
const db = firestore.collection("Login");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Get Form Values
let fname = document.getElementById("fname").value;
let phone = document.getElementById("phone").value;
let dist = document.getElementById("dist").value;
firestore
  .collection("Login")
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
