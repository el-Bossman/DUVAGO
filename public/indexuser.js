var db = firebase.firestore();

function coment(){

var nom = document.getElementById("nom").value; //nombre
var dir = document.getElementById("dir").value; //direccion
var img = document.getElementById("img").value; //img1
var img2 = document.getElementById("img2").value; //img1
var img3 = document.getElementById("img3").value; //img1
var precio = document.getElementById("precio").value; //precio
var descr = document.getElementById("descr").value; //descripcion
var d = new Date();
var n = d.getTime();



if (img === "" || img2 === "" || img3 === ""  ){
    
    
    img = "https://via.placeholder.com/728x90.png?text=Faltan+Imagenes";


}

 if(nom && dir && img && precio && descr !== ""){
   db.collection("Registro").add({
    nom: nom,
    dir: dir,
     img: img,
    img2: img2,
    img3: img3,
    precio: precio,
    descr: descr,
    n: n
 
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    nom = document.getElementById("nom").value=''; //nombre
    dir = document.getElementById("dir").value=''; //direccion
    img = document.getElementById("img").value=''; //img1
    img2 = document.getElementById("img2").value=''; //img1
    img3 = document.getElementById("img3").value=''; //img1
    precio = document.getElementById("precio").value=''; //precio
    descr = document.getElementById("descr").value=''; //descripcion
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

    

}else{
    
    alert("Uno o mas campos  estan vacios");
    nom.innerHTML = '';
    dir.innerHTML = '';
    img.innerHTML = '';
    img2.innerHTML = '';
    img3.innerHTML = '';
    precio.innerHTML = '';
    descr.innerHTML = '';
  
} 

}



//Leer por Fecha
var tabla = document.getElementById('tabla');

db.collection("Registro").orderBy("n", "desc").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
       
        console.log(`${doc.id} => ${doc.data().com}`);
        tabla.innerHTML += `
    
        <div class="row" >
                  <div class="col-lg-12">
                     <br>
                    <center>  <h1 class="page-header" style="color: antiquewhite; background-color: #32363b; font-family: Blambot Casual; border-bottom-style: solid; border-color: #fe8e00; ">${doc.data().nom}
                          <small></small>
                          <br>
                      </h1>
                  
                      </center>
                  </div>
              </div> 
        <div class="row">
      
                  <div class="col-md-8">
                      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" style="border-style: solid; border-color: aqua; ">
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${doc.data().img}" class="d-block w-100" style="height: 280px;" alt="...">
                            </div>
                            <div class="carousel-item">
                              <img src="${doc.data().img2}" class="d-block w-100"  style="height: 280px;" alt="...">
                            </div>
                            <div class="carousel-item">
                              <img src="${doc.data().img3}" class="d-block w-100" style="height: 280px ;" alt="...">
                            </div>
                          </div>
                          
                        </div>
                  </div>
      
                  <div class="col-md-4">
                      <h4>Reseña</h4>
                      <p>${doc.data().descr}</p>
                      <h4>Precio:</h4>
                      <ul>
                          <li>$ ${doc.data().precio}</li>
                     
                      </ul>
                      <h4>Ubicacion:</h4>
                      <ul>
                          <li>${doc.data().dir}</li>
                      </ul>
                      <button type="button" class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button>
                      <button type="button" class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().nom}','${doc.data().dir}','${doc.data().img}','${doc.data().img2}','${doc.data().img3}','${doc.data().precio}','${doc.data().descr}')">Modificar</button>
                      
                  </div>
      
              </div>
        
      
          `  
    });
}); 
//fin leer


// Borrar Datos
function eliminar(id){
db.collection("Registro").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

// Actualizar



function editar (id,nom,dir,img,img2,img3,precio,descr){

 nom = document.getElementById("nom").value=nom; //nombre
 dir = document.getElementById("dir").value=dir; //direccion
 img = document.getElementById("img").value=img; //img1
 img2 = document.getElementById("img2").value=img2; //img1
 img3 = document.getElementById("img3").value=img3; //img1
 precio = document.getElementById("precio").value=precio; //precio
 descr = document.getElementById("descr").value=descr; //descripcion
var boton = document.getElementById("boton");

boton.innerHTML = 'Editar';

boton.onclick = function(){
    
    var washingtonRef = db.collection("Registro").doc(id);

    var nom = document.getElementById("nom").value; //nombre
var dir = document.getElementById("dir").value; //direccion
var img = document.getElementById("img").value; //img1
var img2 = document.getElementById("img2").value; //img1
var img3 = document.getElementById("img3").value; //img1
var precio = document.getElementById("precio").value; //precio
var descr = document.getElementById("descr").value; //descripcion

return washingtonRef.update({
    nom: nom,
    dir: dir,
     img: img,
    img2: img2,
    img3: img3,
    precio: precio,
    descr: descr
   
 
   
})
.then(function() {
    console.log("Document successfully updated!");
    boton.innerHTML = 'Nuevo Hotel';
    boton.onclick=function(){
        coment();
    }
    nom = document.getElementById("nom").value=''; //nombre
    dir = document.getElementById("dir").value=''; //direccion
    img = document.getElementById("img").value=''; //img1
    img2 = document.getElementById("img2").value=''; //img1
    img3 = document.getElementById("img3").value=''; //img1
    precio = document.getElementById("precio").value=''; //precio
    descr = document.getElementById("descr").value=''; //descripcion
   
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
}


}