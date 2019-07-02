var db = firebase.firestore();


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
                      <p cols="40" rows="5" name="texto" onKeyUp="return limitar(event,this.value,200)" onKeyDown="return limitar(event,this.value,200)">${doc.data().descr}</p></td>
                      
                      <h4>Precio:</h4>
                      <ul>
                          <li>$ ${doc.data().precio}</li>
                     
                      </ul>
                      <h4>Ubicacion:</h4>
                      <ul>
                          <li>${doc.data().dir}</li>
                      </ul>  
                      <h4>Llamar:</h4>
                      <ul>
                      <a href="https://api.whatsapp.com/send?phone=56973498377&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20hotel%20." ><img border="0"  src="tel.png"/></a>
       
                     
                      </ul>  
                  </div>
      
              </div>
        
      
          `  
    });
}); 
//fin leer

function precio2(){
    var tabla = document.getElementById('tabla');

    db.collection("Registro").orderBy("precio").onSnapshot((querySnapshot) => {
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
                          <h4>Llamar:</h4>
                          <ul>
                          <a href="https://api.whatsapp.com/send?phone=56973498377&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20hotel%20." ><img border="0"  src="tel.png"/></a>
           
                         
                          </ul>  
                         
                      </div>
          
                  </div>
            
          
              `  
        });
    }); 
    //fin leer

}

function precio(){
    var tabla = document.getElementById('tabla');

    db.collection("Registro").orderBy("precio", "desc").onSnapshot((querySnapshot) => {
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
                          <h4>Llamar:</h4>
                          <ul>
                          <a href="https://api.whatsapp.com/send?phone=56973498377&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20hotel%20." ><img border="0"  src="tel.png"/></a>
           
                         
                          </ul>  
                         
                      </div>
          
                  </div>
            
          
              `  
        });
    }); 
    //fin leer

}


function nombre(){
    var tabla = document.getElementById('tabla');

    db.collection("Registro").orderBy("nom").onSnapshot((querySnapshot) => {
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
                          <h4>Llamar:</h4>
                          <ul>
                          <a href="https://api.whatsapp.com/send?phone=56973498377&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20hotel%20." ><img border="0"  src="tel.png"/></a>
           
                         
                          </ul>  
                      </div>
          
                  </div>
            
          
              `  
        });
    }); 
    //fin leer

}