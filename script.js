// script.js

// Ejemplo de propiedades (estas pueden ser obtenidas de un backend o base de datos)
const properties = [
  {
      id: 1,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczOJvngK6SOW6-G4L0D-ffoxxc0sK9iSWPCqu5LcUYUxHaVyFia-hlf094IS-Q51oSoIAoG0FzQdeKlanuOGDOSO9bF-Zqgccd-S1Ba6R0mxw4-KqWqw4z9LHectXm5-tyiJEil5IjvH34gLvLFN6hc=w641-h641-s-no-gm?authuser=0',
      title: 'Casa en la Zona Norte',
      description: 'Hermosa casa con 3 habitaciones y 2 baños.',
      price: '$120,000',
      location: 'Zona Norte',
  },
  {
      id: 2,
      image: 'https://lh3.googleusercontent.com/pw/AP1GczMNBbGN4xVS4Eneh_S6zc3b0icMeXJCjYT2k5zwOqLWOhwUqm4rK6ktv6cpY2QGk2eoMHxA9tQRa1tlVjOTn3MDLrPU1VpJmNyH0Lqc8KXQvZmhbzBNEZpB73TOmkAwql6RZPYaf_1PTgfk0jBkRBA=w641-h641-s-no-gm?authuser=0',
      title: 'Apartamento en el Centro',
      description: 'Apartamento céntrico con acceso a todos los servicios.',
      price: '$385,000',
      location: 'Centro',
  },
  {
    id: 3,
    image: 'https://lh3.googleusercontent.com/pw/AP1GczN825cGe0PUmZm5agaPfAcWSnVP8aS7cIeFaEKEtzM3Nkj7qrajonFUp33lygv-4x7uIRKE_PThwyK55NUuJ6T502TfKIr2Chc7OqUia_qcmkWADKWXmwsSafHlePQWgJLjY-HWxqPnfrXmlRawS5s=w641-h641-s-no-gm?authuser=0',
    title: 'Apartamento en el Centro3',
    description: 'Apartamento céntrico con acceso a todos los servicios.',
    price: '$285,000',
    location: 'Centro',
},
{
  id: 4,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczMgIO8pq5k3lUsKPCKqC1INV1CdPzfWg9oMn_LjpKuG-JqY1V1NPaxhbsuiv8JW1FNO6dFmjpKRKe3Lin3KyhRqjYRytTRR60pARcqhqonQCmsaz6TUcKlqyY9b5xbfdlW2SNOnNrSWnF952ZpTtEY=w641-h641-s-no-gm?authuser=0',
  title: 'Apartamento en el Centro1',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$805,000',
  location: 'Centro',
},
{
  id: 5,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczNf1Q-PhAmu_ldZW8TAnKdgTYaTj3kGTVkL1r60jLH7kPXWTH-b1iFTdPA6qpSxMkwCTR7DmDfYzE40ok77bjn_eQ-lsj1A-hjy-7oX0eFFuTYGNEnVYJj0i3oYevCtGfMLbxhCnB27MQlV3l4Ms7g=w641-h641-s-no-gm?authuser=0',
  title: 'Apartamento en el Centro2',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$195,000',
  location: 'Centro',
},
{
  id: 6,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczPiGsj_-GsBw_uQVWRdbtNHawrhgBWrWt2G9jZBtWWZNNWJ2FC4-SEiMD0FwuD2L1zd14YbQ43MmPKlYlJS1J_cenpQct5ovhdwUC4eSNn5tuQTWz7J10icC71lLqjcXI4yzFPTyUX7A77rep4wmVs=w641-h641-s-no-gm?authuser=0',
  title: 'casa sur',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$105,000',
  location: 'Zona Sur',
},
{
  id: 7,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczNIEa6pyI4ye_XZIy-MqbFm8XfBKDKNalmUQiooHqdvfUWnd0DJKLHmE2kUB9EpZWvJ6CtejnXvGuV0GqZxzoRqsDEBiQpgr96rjSBrr5xgdbY_-0PjiCSQOHy_6H3R0ttMPZFQQcpCmxP7kaRcZFs=w641-h641-s-no-gm?authuser=0',
  title: 'casa norte choco',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$90,000',
  location: 'Zona Sur',
},

{
  id: 8,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczMkkNpBpTB7Bn8DmvgzvLg9S_zQnPBr4CwamFy8y6d3Ybgn8KAxZkN_qUG_ebR1qxrqoUnEscQ_2tOOO7lXAcnpWv2Nn2dvDy5eFAY2kBFlx_NrwA6M7B-Afqm9gRT5G4dngEz3VJ3KFv9DMAQMuso=w641-h641-s-no-gm?authuser=0',
  title: 'casa norte choco',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$90,000',
  location: 'Zona Norte',
},

{
  id: 9,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczPSBPC0ZLLK2vqpaVXbZI7_OkJtKQEKWkXCMEOR9enOBZRLpa-4cxav6fA9eSPEnGMb9n7JYOQnjA0oRLgsmE8ZveFEnXdQY4uah0Ekdcoa64JgFIB3ZvxJ71DkTVyEsFsqs3nQ5-bdxzeGerFiTRk=w641-h641-s-no-gm?authuser=0',
  title: 'casa norte choco',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$90,000',
  location: 'Zona Sur',
},

{
  id: 10,
  image: 'https://lh3.googleusercontent.com/pw/AP1GczNj3sFMB535VYnbTvkX7MxzLSzK-jVTfSpfyB1Mxb4sTQdiwfMkyWOX3vFwlysOUxnflHNhaanVNocmfsOujc4aQ6ICAmjLnXNwQWx4j3iD6IlUiSLsVbOR_oo0zEm-vJ70yzhQle0vj8SnA0HVpl4=w641-h641-s-no-gm?authuser=0',
  title: 'casa campo',
  description: 'Apartamento céntrico con acceso a todos los servicios.',
  price: '$900,000',
  location: 'Centro',
},
];

// Función para mostrar las propiedades
function displayProperties(propertiesToShow) {
  const propertyList = document.getElementById('property-list');
  propertyList.innerHTML = ''; // Limpiar lista existente

  propertiesToShow.forEach(property => {
      const propertyCard = document.createElement('div');
      propertyCard.classList.add('property-card');

      propertyCard.innerHTML = `
          <img src="${property.image}" alt="${property.title}">
          <h3>${property.title}</h3>
          <p>${property.description}</p>
          <p><strong>Precio:</strong> ${property.price}</p>
          <button onclick="contactProperty(${property.id})">Contactar</button>
      `;

      propertyList.appendChild(propertyCard);
  });
}

/*
function displayProperties(propertiesToShow) {
  const propertyList = document.getElementById('property-list');
  propertyList.innerHTML = ''; // Limpiar lista existente

  propertiesToShow.forEach(property => {
      const propertyCard = document.createElement('div');
      propertyCard.classList.add('property-card');

      propertyCard.innerHTML = `
          <img src="${propertyData.image}" alt="${propertyData.title}">
          <h3>${propertyData.title}</h3>
          <p>${propertyData.description}</p>
          <p><strong>Precio:</strong> ${propertyData.price}</p>
          <button onclick="contactProperty(${propertyData.id})">Contactar</button>
      `;

      propertyList.appendChild(propertyCard);
  });
}
*/


// Función para filtrar propiedades por ubicación
function filterProperties() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filtered = properties.filter(property =>
      property.location.toLowerCase().includes(searchInput)
  );
  displayProperties(filtered);
}

// Función para contactar una propiedad
function contactProperty(id) {
  const property = properties.find(p => p.id === id);
  alert(`Contactando al vendedor de: ${property.title}`);
}







//////////////Ycodigo de la busqueda de la base de datos al sistema. +


// Variables globales
let propertyData = [];

// Leer archivo Excel y cargar los datos



 // Cargar el archivo Excel al cargar la página
 document.addEventListener("DOMContentLoaded", () => {
   fetch("./propiedades.xlsx") // Archivo en la carpeta raíz
     .then((response) => response.arrayBuffer())
     .then((data) => {
       const workbook = XLSX.read(new Uint8Array(data), { type: "array" });
       const sheetName = workbook.SheetNames[0];
       const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

       propertyData = sheetData;
       
       loadPropertyCards(propertyData);
       alert("la data fue esogida directamente");
     })
     .catch((error) => console.error("Error al cargar el archivo:", error));
     //alert("la data fue NO esogida directamente");
 });

 // Renderizar las tarjetas de propiedades
 function loadPropertyCards(data) {
   const container = document.getElementById("propertyCards");
   
   container.innerHTML = ""; // Limpiar contenido previo
   

   data.forEach((property) => {
     const card = document.createElement("div");
     card.classList.add("card");
     card.innerHTML = `
       <h3>${property.Nombre}</h3>
       <p><strong>Ubicación:</strong> ${property.Ubicación}</p>
       <p><strong>Precio:</strong> $${property.Precio}</p>
       <p><strong>Habitaciones:</strong> ${property.Habitaciones}</p>
     `;
     card.addEventListener("click", () => showPropertyDetail(property));
     container.appendChild(card);
   });
 }
/*

document.getElementById("fileInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Convertir los datos del archivo Excel a JSON
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      // Guardar los datos en la variable global y renderizar tarjetas
      propertyData = sheetData;
      loadPropertyCards(propertyData);
    };

    reader.readAsArrayBuffer(file);
  }
});

/*
document.addEventListener("DOMContentLoaded", () => {
  fetch("./main/Ejemplo_Propiedades.xlsx")
    .then((response) => response.arrayBuffer())
    .then((data) => {
      const workbook = XLSX.read(new Uint8Array(data), { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      propertyData = sheetData;
      loadPropertyCards(propertyData);
    })
    .catch((error) => console.error("Error al cargar el archivo:", error));
});

// Renderizar las tarjetas de propiedades
function loadPropertyCards(data) {
  const container = document.getElementById("propertyCards");
  container.innerHTML = ""; // Limpiar contenido previo

  data.forEach((property, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${property.Nombre}</h3>
      <p><strong>Ubicación:</strong> ${property.Ubicación}</p>
      <p><strong>Precio:</strong> $${property.Precio}</p>
      <p><strong>Habitaciones:</strong> ${property.Habitaciones}</p>
    `;

    // Agregar evento de clic para mostrar los detalles
    card.addEventListener("click", () => showPropertyDetail(property));
    container.appendChild(card);
  });
}
*/



// Mostrar los detalles de una propiedad
function showPropertyDetail(property) {
  const detailSection = document.getElementById("property-detail");
  const listSection = document.getElementById("property-list1");
  const detailContainer = document.getElementById("propertyDetailContainer");

  // Llenar el detalle con la información de la propiedad
  detailContainer.innerHTML = `
    <h2>${property.Nombre}</h2>
    <p><strong>Ubicación:</strong> ${property.Ubicación}</p>
    <p><strong>Precio:</strong> $${property.Precio}</p>
    <p><strong>Habitaciones:</strong> ${property.Habitaciones}</p>
    <p><strong>Descripción:</strong> ${property.Descripción}</p>
    <p><strong>Contacto:</strong> ${property.Contacto}</p>
  `;

  

  // Mostrar la sección de detalles y ocultar la lista
  detailSection.style.display = "block";
  listSection.style.display = "none";
}

// Volver a la lista de propiedades
document.getElementById("backButton").addEventListener("click", () => {
  const detailSection = document.getElementById("property-detail");
  const listSection = document.getElementById("property-list1");

  detailSection.style.display = "none";
  listSection.style.display = "block";
});



// Evento de búsqueda
document.getElementById('searchButton').addEventListener('click', filterProperties);

// Mostrar todas las propiedades al cargar la página
displayProperties(properties);
