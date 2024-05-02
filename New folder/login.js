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

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior

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
        if (firstName === fn) {
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
  if (fname != "null" && phone != "null" && dist != "null") {
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
  fire
    .firestore()
    .createUserWithEmailAndPassword(
      this.state.fname,
      this.state.phone,
      this.state.dist
    )
    .then((u) => {})
    .catch((error) => {
      switch (error.code) {
        case "firestore/name-already-in-use":
          console.log(`Name ${this.state.fname} already in use.`);
          break;

        default:
          console.log(error.message);
          break;
      }
    });
  //alert
  alert("You have logged in successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm();
});
