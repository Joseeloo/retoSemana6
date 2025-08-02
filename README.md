# Catálogo de Productos

Este proyecto es una aplicación sencilla en JavaScript para gestionar un catálogo de productos en una tienda. Permite **agregar**, **eliminar**, **buscar** y **mostrar** productos, utilizando distintos tipos de funciones:

- Función de declaración
- Función de expresión
- Función anónima
- Función flecha

## Reto Semana 6

Implementar las siguientes funciones en JavaScript:

- `agregarProducto(nombre, precio)`: función de declaración para agregar productos.
- `eliminarProducto(nombre)`: función de expresión para eliminar productos por su nombre.
- `buscarProducto(nombre)`: función anónima que devuelve un producto por su nombre.
- `mostrarProductos()`: función flecha que muestra todos los productos.

## Tecnologías

- HTML
- JavaScript

## Estructura del Reto
catalogoProductos/

  ├── index.html
  
  ├── catalogoProductos.js
  
  └── README.md

## 🚀 Cómo usar

1. Abre el archivo `index.html` en un navegador.
2. El script `catalogoProductos.js` se ejecuta automáticamente.
3. Abre la consola del navegador para ver los resultados.

## Ejemplo de uso

```javascript
agregarProducto("Cama", 300);
agregarProducto("Mesa", 150);
mostrarProductos();
eliminarProducto("Mesa");
const producto = buscarProducto("Cama");
console.log(producto);
