firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // Si el usuario esta comprobado y entra

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
    var todo = document.getElementById('todo');

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Bienvenido: "+ email_id ;
      
      
      

    }


  } else {
    //sino
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error, usuario incorrecto o no existe " );

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  
}
