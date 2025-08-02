let catalogo = [];
function agregarProducto(nombre, precio) {
    if (!nombre || precio <= 0) {
        console.log("Datos invalidos!");
        return;
    }
    const existe = catalogo.find(p => p.nombre === nombre);
    if (existe) {
        console.log("Producto ya existe en el catalogo!");
        return;
    }
    catalogo.push({ nombre, precio });
    console.log(`Producto "${nombre}" agregado!`);
}
const eliminarProducto = function(nombre) {
    const index = catalogo.findIndex(p => p.nombre === nombre);
    if (index !== -1) {
        catalogo.splice(index, 1);
        console.log(`Producto "${nombre}" eliminado!`);
    } else {
        console.log("Producto no encontrado!");
    }
};
const buscarProducto = function(nombre) {
    return catalogo.find(p => p.nombre === nombre);
};
const mostrarProductos = () => {
    if (catalogo.length === 0) {
        console.log("Catalogo vacio!");
        return;
    }
    console.log("Productos dentro del catalogo:");
    catalogo.forEach(p => {
        console.log(`- ${p.nombre}: $${p.precio}`);
    });
};
agregarProducto("Cama", 300);
agregarProducto("Velador", 70);
agregarProducto("Sillon", 120);
agregarProducto("Mesa", 150);
agregarProducto("Refrigerador", 415);
mostrarProductos();
eliminarProducto("Velador");
mostrarProductos();
const buscado = buscarProducto("Refrigerador");
console.log("Producto encontrado:", buscado);
