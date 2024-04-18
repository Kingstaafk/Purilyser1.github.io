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
const db = firestore.collection("Newsletter");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let email = document.getElementById("email").value;

  firestore
    .collection("Newsletter")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().fname;
        if (firstName === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      email: email,
    })
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("You have subscribed successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm();
});
