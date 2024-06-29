let inventario = [
    {
        nombre: "Laptop",
        categoria: "Electrónica",
        precio: 1000,
        cantidad: 10,
        codigo: "P001"
    },
    {
        nombre: "Smartphone",
        categoria: "Electrónica",
        precio: 700,
        cantidad: 25,
        codigo: "P002"
    },
    {
        nombre: "Teclado",
        categoria: "Accesorios",
        precio: 50,
        cantidad: 50,
        codigo: "P003"
    },
    {
        nombre: "Monitor",
        categoria: "Electrónica",
        precio: 300,
        cantidad: 15,
        codigo: "P004"
    },
    {
        nombre: "Silla de Oficina",
        categoria: "Muebles",
        precio: 150,
        cantidad: 20,
        codigo: "P005"
    }
];

let producto = {
    nombre: "Mouse",
    categoria: "Accesorios",
    precio: 100,
    cantidad: 15,
    codigo: "P006"
}

function agregarProducto(producto){
    inventario.push(producto)
    console.log(inventario)
}

function eliminarProducto(cod){
    let arrayNuevo = inventario.filter(prod=>prod.codigo!==cod)
    console.log(arrayNuevo)
}

function actualizarCantidad(cod,cant){
    for (const product of inventario) {
        if(product.codigo==cod){
            product.cantidad=cant
        }
    }
    console.log(inventario)
}

function buscarProductoPorCategoria(cat){
    let arrayFiltrado = inventario.filter(prod=>prod.categoria==cat)
    console.log(arrayFiltrado)
}

function calcularValorTotal(){
    let valorTotal=0
    for (const producto of inventario) {
        valorTotal=valorTotal+(producto.precio*producto.cantidad)
    }
    return valorTotal
}

let resultado = calcularValorTotal()
console.log(resultado)
agregarProducto(producto)
eliminarProducto("P004")
actualizarCantidad("P003",30)
buscarProductoPorCategoria("Electrónica")