/*Este programa simula el proceso de carga de productos por parte de un empleado en un sistema 
de una pastelería. Se puede agregar y eliminar productos, finalmente se puede mostrar el detalle
de todos los productos disponibles.*/

alert("Bienvenido al secrtor de PRODUCTOS DISPONIBLES DE CIPRIANO PASTELERÍA, presione Aceptar para continuar.");
let opcion_valida=true;
let productos=[];

let respuesta="S";

//clase producto
class Producto{
    constructor(nombre, precio, stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
}

//objetos que representan a los productos que vende la pastelería.

const producto1=new Producto("Torta de chocolate",4000,50);
const producto2=new Producto("Brownie",1000,40);
const producto3=new Producto("Torta de dulce de leche",3000,20);
const producto4=new Producto("Combo dulce",2000,15);


//array que guarda los productos iniciales
productos = [producto1,producto2,producto3,producto4];

//función para agregar un producto nuevo.
const agregarProdcuto = () => {
    let nombre=prompt("Ingrese nombre del producto: ");
    let precio;
    let stock;
    do {
        precio=parseInt(prompt("Ingrese precio del prodcuto: "));
        if (parseInt(precio)<0 || isNaN(precio)) {
            alert("PRECIO INCORRECTO. INTENTE DE NUEVO.");
        }   
    } while (parseInt(precio)<0 || isNaN(precio));

    
    do {
        stock=parseInt(prompt("Ingrese stock del prodcuto: "));
        if (parseInt(stock)<0 || isNaN(stock)) {
            alert("STOCK INCORRECTO. INTENTE DE NUEVO.");
        }   
    } while (parseInt(stock)<0 || isNaN(stock));

    productos.push(new Producto (nombre,precio,stock));
    alert("Se ha agregado el producto exitosamente");
}

//función para mostrar productos disponibles.
const mostrarProductos = (conjuntoProductos) => {
    let listadoproductos="";
    conjuntoProductos.forEach(producto => {
        listadoproductos+="\n*****************************"+
                     "\nCódigo: "+ conjuntoProductos.indexOf(producto)+
                     "\nNombre: "+producto.nombre+
                     "\nPrecio: "+producto.precio+
                     "\nStock: "+producto.stock;
    });
    alert(listadoproductos);
    
}

const eliminarProducto = (conjuntoProductos) =>{
    
    do {
        
        codigo = prompt("Ingrese el código del producto que desea eliminar: ");
        if (parseInt(codigo)<0 || parseInt(codigo)>conjuntoProductos.length || isNaN(codigo)) {
            alert("CODIGO INCORRECTO. INTENTE DE NUEVO.");
        }
        
    } while (parseInt(codigo)<0 || parseInt(codigo)>conjuntoProductos.length || isNaN(codigo));

    let confirmacion = confirm("Seguro que desea eliminar el producto?");
    if (confirmacion===true) {
        conjuntoProductos.splice(codigo,1);
        alert("Se ha eliminado el producto ");
    }else{
        alert("Eliminación cancelada");
    }

}

//función para desplegar el menu y seleccionar una opción.
function menu() {
    do {
        let opcion = prompt("Seleccione la operación que desea realizar:\n1. Agregar nuevo producto.\n"+
        "2. Mostrar productos disponibles.\n3. Eliminar Producto. \n4. Salir.");
        
        switch (opcion) {
            case "1":
                opcion_valida=true;
                agregarProdcuto();
            break;
            case "2":
                opcion_valida=true;
                mostrarProductos(productos);
            break;
            case "3":
                opcion_valida=true;
                eliminarProducto(productos);
            break;
            case "4":
                opcion_valida=true;
            break;

            default:
                    alert("Opción inválida.");
                    opcion_valida=false;
                break;
        }
    } while (opcion_valida==false);
}


do {
    menu(); 
    do {
        respuesta = prompt("¿Desea realizar otra operación? (S/N): ");
        if (respuesta!=="S" && respuesta!=="N") {
            alert("Opción invalida!!! Precione Aceptar e ingrese una opción válida.");
        }
    } while (respuesta!=="S" && respuesta!=="N");
} while (respuesta=='S');
alert("GRACIAS. FIN DEL PROGRAMA.");


