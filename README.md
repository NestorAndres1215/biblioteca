# Crud de Biblioteca con Node.js

Este es un proyecto CRUD para la gestión de una biblioteca utilizando Node.js, Express, MongoDB y EJS.

## Tecnologías Utilizadas
- Node.js
- Express
- MongoDB
- EJS
- Bootstrap

## Instalación
1. Clona el repositorio:
   ```sh
   git clone https://github.com/TU_USUARIO/Crud-de-Biblioteca-con-Nodejs.git
   ```
2. Entra en el directorio del proyecto:
   ```sh
   cd Crud-de-Biblioteca-con-Nodejs
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia el servidor:
   ```sh
   npm start
   ```

## Estructura de la Base de Datos

### Colección: `libros`
```json
[
  {
    "_id": "ObjectId(67d5f64c66fed84acb072f91)",
    "idLibro": "L001",
    "titulo": "Cien años de soledad",
    "idEditorial": "E001",
    "idAutor": "A001"
  },
  {
    "_id": "ObjectId(67d5f64c66fed84acb072f92)",
    "idLibro": "L002",
    "titulo": "El principito",
    "idEditorial": "E002",
    "idAutor": "A002"
  },
  {
    "_id": "ObjectId(67d5f64c66fed84acb072f93)",
    "idLibro": "L003",
    "titulo": "Don Quijote de la Mancha",
    "idEditorial": "E003",
    "idAutor": "A003"
  }
]
```

### Colección: `editoriales`
```json
[
  {
    "_id": "ObjectId(67d5f62666fed84acb072f8e)",
    "idEditorial": "E001",
    "editorial": "Planeta"
  },
  {
    "_id": "ObjectId(67d5f62666fed84acb072f8f)",
    "idEditorial": "E002",
    "editorial": "Santillana"
  },
  {
    "_id": "ObjectId(67d5f62666fed84acb072f90)",
    "idEditorial": "E003",
    "editorial": "Alfaguara"
  }
]
```

### Colección: `autores`
```json
[
  {
    "_id": "ObjectId(67d5f5c466fed84acb072f8b)",
    "idAutor": "A001",
    "nombre": "Julio",
    "apellido": "Ramírez",
    "pais": "Perú"
  },
  {
    "_id": "ObjectId(67d5f5d266fed84acb072f8c)",
    "idAutor": "A002",
    "nombre": "María",
    "apellido": "López",
    "pais": "México"
  },
  {
    "_id": "ObjectId(67d5f5d266fed84acb072f8d)",
    "idAutor": "A003",
    "nombre": "Carlos",
    "apellido": "García",
    "pais": "Argentina"
  }
]
```

## Endpoints Principales

### Libros
- `GET /libros` - Obtiene todos los libros
- `POST /libros` - Agrega un nuevo libro
- `PUT /libros/:id` - Actualiza un libro
- `DELETE /libros/:id` - Elimina un libro

### Autores
- `GET /autores` - Obtiene todos los autores
- `POST /autores` - Agrega un nuevo autor
- `PUT /autores/:id` - Actualiza un autor
- `DELETE /autores/:id` - Elimina un autor

### Editoriales
- `GET /editoriales` - Obtiene todas las editoriales
- `POST /editoriales` - Agrega una nueva editorial
- `PUT /editoriales/:id` - Actualiza una editorial
- `DELETE /editoriales/:id` - Elimina una editorial
