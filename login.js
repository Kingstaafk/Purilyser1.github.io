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
  e.preventDefault(); // Prevent default form submission behavior

  // Get Form Values
  let fname = document.getElementById("fname").value;
  let phone = document.getElementById("phone").value;
  let dist = document.getElementById("dist").value;

  // Check for existing data
  firestore
    .collection("text")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().fname;
        if (fname === fn) {
          console.log("Already Exists");
          return; // Stop further processing if data already exists
        }
      });

      // Save Form Data To Firebase
      db.add({
        fname: fname,
        phone: phone,
        dist: dist,
      })
        .then(() => {
          clearForm(); // Clear form after successful submission
          // Redirect logic or other actions after successful submission can be placed here
          window.location.href = "index.html";
          document.getElementById("loginButton").disabled = true;
        })
        .catch((error) => {
          console.log(error);
        });
    });
});

// Function to clear form fields
function clearForm() {
  document.getElementById("fname").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("dist").value = "";
}
