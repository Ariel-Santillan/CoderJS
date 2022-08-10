import { peliculas } from './Peliculas.js';
import { productosCandy } from "./ProductosCandy.js";


//Agregar las películas disponibles en el array importado
let divPelicula = document.createElement('div')
function mostrarPeliculas (peliculas) {
  const cineContenedor = document.getElementById('cine-peliculas');
  peliculas.forEach((pelicula) => {
    
    divPelicula.classList.add('card');
    divPelicula.innerHTML += `<div class="card-image">
                        <img src = ${pelicula.img}>
                        <span class="card-title">${pelicula.nombre}</span>
                    </div>
                    <div class="card-content">
                    <p>Año de estreno: ${pelicula.anioLanzamiento}</p>
                    <p>${pelicula.categoria}</p>
                    <a onclick="console.log(1)" class="btn btn-primary">Agregar al carrito</a>
                    </div>
        `
        cineContenedor.appendChild(divPelicula)
  });
};

function ocultarPeliculas() {
    divPelicula.classList.remove("card")
    divPelicula.innerHTML = ""
}



//Agregar el candy disponible en el array importado
const arrayCarrito = []
const divCandy = document.createElement('div')
const mostrarProductosCandy = (productosCandy) => {
    const candyContenedor = document.getElementById('cine-candy');
    
    productosCandy.forEach((candy) => {
      
      divCandy.classList.add('card');
      divCandy.innerHTML += `<div class="card-image">
                          <img src = ${candy.img}>
                          <span class="card-title">${candy.nombre}</span>
                      </div>
                      <div class="card-content">
                      <p>Precio: $${candy.precio}</p>
                      <a id="boton-agregar-carrito" class="btn btn-primary">Agregar al carrito</a>
                      </div>
          `
          candyContenedor.appendChild(divCandy)
    });
  };
  //<input type="button" onclick="agregarAlCarrito" value="Agregar al carrito">

  function ocultarProductosCandy() {

    divCandy.classList.remove("card")
    divCandy.innerHTML = ""
}


function filtrarPeliculas(peliculaBuscada){
    console.log(peliculaBuscada);
    let peliculaEncontrada = peliculas.filter( (pelicula) => pelicula.nombre.includes(peliculaBuscada))
    ocultarPeliculas()
    mostrarPeliculas(peliculaEncontrada)
}

function filtrarCandy(candyBuscado){
    console.log(candyBuscado);
    let candyEncontrado = productosCandy.filter( (candy) => candy.nombre.includes(candyBuscado))
    ocultarProductosCandy()
    mostrarProductosCandy(candyEncontrado)
}

function agregarAlCarrito(){
  console.log(1);
}


function verCarrito(){

    }

//Ocultar todas las peliculas
  let botonOcultarPeliculas = document.getElementById("ocultarPeliculas")
  botonOcultarPeliculas.addEventListener("click", ocultarPeliculas)

//Mostrar todas las peliculas
  let botonVerPeliculas = document.getElementById("verPeliculas")
  botonVerPeliculas.addEventListener("click", ()=>mostrarPeliculas(peliculas))

//Ocultar todo el Candy
    let botonOcultarCandy = document.getElementById("ocultarCandy")
    botonOcultarCandy.addEventListener("click", ocultarProductosCandy)
  
//Mostrar todo el Candy
    let botonVerCandy = document.getElementById("verCandy")
    botonVerCandy.addEventListener("click", ()=>mostrarProductosCandy(productosCandy))


//Filtrar películas
let botonFiltrarPeliculas = document.getElementById("filtrar-peliculas")
let peliculaABuscar = document.getElementById("filtro")
botonFiltrarPeliculas.addEventListener("click", ()=>filtrarPeliculas(peliculaABuscar.value))

//Filtrar Candy
let botonFiltrarCandy = document.getElementById("filtrar-candy")
let candyABuscar = document.getElementById("filtro")
botonFiltrarCandy.addEventListener("click", ()=>filtrarCandy(candyABuscar.value))

//Agregar al carrito
let botonAgregarCarrito = document.getElementById("hola")
console.log(botonAgregarCarrito);
botonAgregarCarrito.addEventListener("click", agregarAlCarrito)
 

// let carrito = document.getElementsByClassName("btn btn-primary")
// console.log(carrito);
//id="boton-agregar-carrito" 

let carrito = document.getElementById("boton-agregar-carrito")
console.log(carrito);
//Mostrar el carrito
 let botonVerCarrito = document.getElementById("cesta-carrito")
 botonVerCarrito.addEventListener("click", verCarrito)




// function pedirIngresoPorPrompt(texto){
//     return prompt(texto)
//  }

//  function mostrarMensajePor(fn, texto){
//      if(fn == "alert"){
//          alert(texto)
//      }else if (fn == "console"){
//          console.log(texto)
//      }
//  }

//  function validarPelicula(pelicula){
//      let peliculaEncontrada = peliculas.find((peli) => peli.nombre == pelicula)
//      return peliculaEncontrada != undefined

//  }

//  function validarCandy(productoCandy){
//      let productoCandyEncontrado = peliculas.find((candy) => candy.nombre == productoCandy)
//      return productoCandyEncontrado != undefined
//  }

//  //Revisa que la cantidad e importe a pagar sean mayores a 0 y devuelve un mensaje con el resultado
//  function comprarEntrada (pelicula, cantidad, importe){
//      let compraValida = false
//      if(cantidad > 0 && importe > 0.0){
//      mostrarMensajePor("alert",`Compraste ${cantidad} entrada/s para la película ${pelicula}`)
//      compraValida = true
//      historialCompras.push(pelicula, cantidad, importe)
//      } else mostrarMensajePor("consola","Esto no es gratis")

//      return compraValida
//  }

//  //Revisa que la cantidad e importe a pagar sean mayores a 0 y devuelve un mensaje con el resultado
//  function comprarCandy(producto, cantidad, importe){
//      let compraValida = false
//  //    let importeTotal = 0
//      if(cantidad > 0 && importe > 0.0){
//          mostrarMensajePor("alert",`Compraste ${cantidad} ${producto}/s`)
//          compraValida = true
//          historialCompras.push(producto, cantidad, importe)
//          } else mostrarMensajePor("consola","Esto no es gratis")

//      const suma = (importeTotal, importe) => {return importeTotal + importe}
//      //return suma. Línea comentada porque al hacer este return, devuelve el texto de la función y no el resultado
//  }

//  //Usuario ingresa pelicula que quiere ver y se le devuelve un booleano con el resultado
//  function pedirPelicula(){
//      let pelicula = pedirIngresoPorPrompt("Ingrese la pelicula que desea ver")
//      if(validarPelicula(pelicula)){
//      let cantidadEntradas = pedirIngresoPorPrompt("Ingrese la cantidad de entradas que desea comprar")
//      let importeEntradas = pedirIngresoPorPrompt("Ingrese el importe a pagar")
//      let compraValida = comprarEntrada(pelicula, cantidadEntradas, importeEntradas)
//      return compraValida
//      }else { mostrarMensajePor("alert", "Pelicula no encontrada")}
//  }

//  //Usuario quiere ver todos los productos disponibles del Candy
//  function mostrarCandy(){
//      console.log("Productos disponibles en el Candy:")
//      productosCandy.forEach( (productoCandy) =>  mostrarMensajePor("console", productoCandy.nombre))
//  }

//  //Usuario ingresa candy que quiere comprar y se le devuelve un booleano con el resultado
//  function pedirCandy(){
//      let productoCandy = pedirIngresoPorPrompt("Ingrese el producto del Candy a comprar. Presione 'Enter' para terminar")
//      if(validarCandy(productoCandy)){
//      let importeTotalGastado = 0
//      while(productoCandy != ""){
//          let cantidadCandy = pedirIngresoPorPrompt("Ingrese la cantidad de productos del Candy que desea comprar")
//          let importeCandy = pedirIngresoPorPrompt("Ingrese el importe a pagar")
//          importeTotalGastado = comprarCandy(productoCandy, cantidadCandy, importeCandy)
//          productoCandy = pedirIngresoPorPrompt("Ingrese el producto del Candy a comprar. Presione 'Enter' para terminar")
//      }
//      }else { mostrarMensajePor("alert", "Producto del Candy no encontrado")}
//  }
//  //alert(importeTotalGastado). Línea comentada porque al hacer este return, devuelve el texto de la función y no el resultado
//  //return importeTotalGastado. Línea comentada porque al hacer este return, devuelve el texto de la función y no el resultado

// //  function validarFechaDeVencimiento(fechaDeVencimiento){
// //      const milisegundosPorDia = 691200000
// //      const fechaHoy = new Date
// //      const fechaIngresada =new Date(fechaDeVencimiento)

// //      let diferenciaDeFechas = (fecha - fechaHoy) / milisegundosPorDia
// //      return diferenciaDeFechas > 0
// //  }

//  class Candy{
//      constructor(nombre, precio, fechaDeVencimiento){
//          this.nombre = nombre;
//          this.precio = precio;
//          this.fechaDeVencimiento = fechaDeVencimiento
//      }

//      mostrarDetalles(){
//          for( const candy of productosCandy){
//              mostrarMensajePor("consola",`Producto ${this.nombre} con precio ${this.precio}`)
//          }
//      }

//  }

//  class Pelicula{
//      constructor (nombre, anioLanzamiento, categoria){
//          this.nombre = nombre;
//          this.anioLanzamiento = anioLanzamiento;
//          this.categoria = categoria;
//      }

//      mostrarDetalles() {
//          for( const pelicula of peliculas){
//              mostrarMensajePor("consola",`Pelicula ${this.nombre}, estrenada en el año ${this.anioLanzamiento} catalogada como ${this.categoria}`)
//          }
//      }
//  }

// //  //Cine carga nuevas peliculas y se agregan al array correspondiente
// //  function crearPelicula(){
// //      let nombre = pedirIngresoPorPrompt("Ingrese el nombre de la pelicula")
// //      let anioLanzamiento = parseInt(pedirIngresoPorPrompt("Ingrese el año de lanzamiento"))
// //      let categoria = pedirIngresoPorPrompt("Ingrese la categoria")

// //      pelicula = new Pelicula(nombre, anioLanzamiento, categoria)
// //      peliculas.push ( pelicula )
// //      return pelicula
// //  }

// //  //Cine carga nuevos productos de candy y se agregan al array correspondiente
// //  function crearCandy(){
// //      let nombre = pedirIngresoPorPrompt("Ingrese el nombre del producto")
// //      let precio = parseFloat(pedirIngresoPorPrompt("Ingrese el precio del producto"))
// //      let fechaDeVencimiento = pedirIngresoPorPrompt("Ingrese la fecha de vencimiento con formato MM dd yyyy")

// //      let productoVencido = validarFechaDeVencimiento(fechaDeVencimiento)
// //      if(!productoVencido){
// //      productosCandy.push( new Candy(nombre, precio, fechaDeVencimiento) )
// //      }else { mostrarMensajePor("alert", "Este producto está vencido, no se puede poner a la venta") }
// //  }

//  function historialDeCompras(){
//      historialCompras.forEach ( (compra) => mostrarMensajePor("console", compra))
//  }

// //  //Lado cine
// //  const peliculas = []
// //  const productosCandy = []
// //  let cantidadPeliculas = pedirIngresoPorPrompt("Ingrese la cantidad de peliculas que desea cargar")
// //  for(let i = 0; i < cantidadPeliculas; i++){
// //      pelicula = crearPelicula()
// //      pelicula.mostrarDetalles()
// //  }

// //  let cantidadCandy = pedirIngresoPorPrompt("Ingrese la cantidad de productos de candy que desea cargar")
// //  for(let i = 0; i < cantidadCandy; i++){
// //      crearCandy()
// //  }

//  //Lado usuario

//  const historialCompras = []

//  let cantidadDeCompras = pedirIngresoPorPrompt("Ingrese la cantidad de compras que desea hacer")
//  for(let i = 0; i < cantidadDeCompras; i++){
//      let compraValida = pedirPelicula()
//      if(compraValida){
//          mostrarCandy()
//          let importeTotalGastadoCandy = pedirCandy()
//      }
//  }
//  let historialDeComprasPedido = pedirIngresoPorPrompt("¿Desea ver su historial de compras? Ingrese Si o No")
//  if(historialDeComprasPedido == "Si"){
//      historialDeCompras()
//  }

 //alert(importeTotalGastadoCandy). Línea comentada porque al hacer este return, devuelve el texto de la función y no el resultado
