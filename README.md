# 📚 CRUD de Biblioteca con Node.js

Sistema CRUD para la gestión de una biblioteca desarrollado con **Node.js, Express, MongoDB y EJS**.

La aplicación permite administrar libros, autores y editoriales mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

El proyecto está preparado para ejecutarse utilizando **Docker y Docker Compose**.

---

# 🚀 Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Bootstrap
- Docker
- Docker Compose
- PNPM

---

# ✨ Características

## 📖 Libros

- Registrar libros.
- Listar libros.
- Actualizar libros.
- Eliminar libros.

## ✍️ Autores

- Registrar autores.
- Listar autores.
- Actualizar autores.
- Eliminar autores.

## 🏢 Editoriales

- Registrar editoriales.
- Listar editoriales.
- Actualizar editoriales.
- Eliminar editoriales.

---

# 📂 Estructura del Proyecto

```
Crud-de-Biblioteca-con-Nodejs/
│
├── controllers/
│   ├── autorController.js
│   ├── libroController.js
│   └── editorialController.js
│
├── models/
│   ├── Autor.js
│   ├── Libro.js
│   └── Editorial.js
│
├── routes/
│   ├── autor.js
│   ├── libro.js
│   └── editorial.js
│
├── service/
│
├── views/
│   ├── autores/
│   ├── libros/
│   └── editoriales/
│
├── public/
│   ├── css/
│   └── js/
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json
├── pnpm-lock.yaml
└── app.js
```

---

# 🐳 Instalación con Docker

## Requisitos

Tener instalado:

- Docker
- Docker Compose

---

## Clonar repositorio

```bash
git clone https://github.com/NestorAndres1215/biblioteca.git
```

Entrar al proyecto:

```bash
cd biblioteca
```

---

## Crear archivo de variables de entorno

Crear un archivo:

```
.env
```

Ejemplo:

```env
PORT=5001
MONGO_URI=mongodb://mongo:27017/biblioteca
```

---

# ▶️ Ejecutar con Docker

Construir la imagen y levantar los contenedores:

```bash
docker compose up --build
```

La aplicación estará disponible en:

```
http://localhost:5001
```

MongoDB se ejecutará automáticamente dentro de su contenedor.

---

# 💻 Instalación sin Docker

Instalar dependencias:

```bash
pnpm install
```

Ejecutar aplicación:

```bash
pnpm start
```

---

# 🗄️ Base de Datos

Base de datos:

```
biblioteca
```

---

## Colección libros

```json
[
  {
    "idLibro": "L001",
    "titulo": "Cien años de soledad",
    "idEditorial": "E001",
    "idAutor": "A001"
  },
  {
    "idLibro": "L002",
    "titulo": "El principito",
    "idEditorial": "E002",
    "idAutor": "A002"
  }
]
```

---

## Colección autores

```json
[
  {
    "idAutor": "A001",
    "nombre": "Julio",
    "apellido": "Ramírez",
    "pais": "Perú"
  },
  {
    "idAutor": "A002",
    "nombre": "María",
    "apellido": "López",
    "pais": "México"
  }
]
```

---

## Colección editoriales

```json
[
  {
    "idEditorial": "E001",
    "editorial": "Planeta"
  },
  {
    "idEditorial": "E002",
    "editorial": "Santillana"
  }
]
```

---

# 🔌 Endpoints

## 📚 Libros

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/libros` | Listar libros |
| POST | `/libros` | Registrar libro |
| PUT | `/libros/:id` | Actualizar libro |
| DELETE | `/libros/:id` | Eliminar libro |

---

## ✍️ Autores

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/autores` | Listar autores |
| POST | `/autores` | Registrar autor |
| PUT | `/autores/:id` | Actualizar autor |
| DELETE | `/autores/:id` | Eliminar autor |

---

## 🏢 Editoriales

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/editoriales` | Listar editoriales |
| POST | `/editoriales` | Registrar editorial |
| PUT | `/editoriales/:id` | Actualizar editorial |
| DELETE | `/editoriales/:id` | Eliminar editorial |

---

# 🐳 Comandos Docker

Construir imagen:

```bash
docker compose build
```

Levantar contenedores:

```bash
docker compose up
```

Ejecutar en segundo plano:

```bash
docker compose up -d
```

Detener contenedores:

```bash
docker compose down
```

Ver logs:

```bash
docker compose logs -f
```

---

# 👨‍💻 Autor

Proyecto desarrollado con:

- Node.js
- Express
- MongoDB
- Docker
