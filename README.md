# Gaming Hub

Gaming Hub es una aplicación web académica que presenta un catálogo breve de videojuegos. Permite consultar información de cada título y mantiene la última selección en el almacenamiento local del navegador.

## Objetivo

Aplicar conceptos de desarrollo frontend mediante una interfaz construida con React, componentes reutilizables y estilos responsivos de Bootstrap.

## Funcionalidades

- Muestra un catálogo con *The Legend of Zelda: Tears of the Kingdom*, *Elden Ring* y *Cyberpunk 2077*.
- Presenta la imagen, descripción, categoría, plataformas y año de lanzamiento del juego seleccionado.
- Abre con el primer juego del catálogo si no hay una selección válida guardada.
- Guarda la selección elegida en `localStorage` para restaurarla al volver a abrir la aplicación en el mismo navegador.
- Utiliza imágenes locales incluidas en el proyecto.

## Tecnologías

- React 19 y JavaScript
- Vite 8
- Bootstrap 5 y Bootstrap Icons
- CSS

## Requisitos

- Node.js compatible con la versión de Vite instalada
- npm

## Instalación y ejecución

Desde la raíz del proyecto:

```bash
npm install
npm run dev
```

Vite mostrará la dirección local para abrir en el navegador.

## Comprobaciones

```bash
npm run build
npm run lint
```

## Estructura principal

```text
src/
  assets/          Imágenes locales del catálogo
  components/      Encabezado, tarjetas, catálogo, detalle y pie de página
  App.jsx          Datos, selección y composición principal
  main.jsx         Punto de entrada y estilos globales de Bootstrap
index.html         Documento HTML de entrada
```

## Persistencia

La aplicación almacena el juego seleccionado bajo la clave `ultimoJuegoSeleccionado` de `localStorage`. Los datos del catálogo se mantienen en el proyecto; al restaurar la selección, se utiliza el identificador guardado para recuperar el elemento correspondiente. Si los datos guardados no se pueden leer o no corresponden a un juego del catálogo, se muestra el primero.

## Contexto académico

Proyecto de la Evaluación Sumativa N.º 4 de Programación Frontend, INACAP Sede Puente Alto.
