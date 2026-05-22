# Sistema de gestion de tareas

## Proposito del Proyecto

Este proyecto corresponde al desarrollo del backend (servidor) para un Sistema de Gestión de Tareas. Su objetivo principal es centralizar y gestionar toda la lógica de negocio, el almacenamiento de datos y la comunicación con la base de datos, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre las tareas de los usuarios.

El sistema está diseñado para:
* Controlar el estado de las tareas (Pendiente, En Progreso, Completada).
* Manejar la persistencia de datos de forma segura.
* Proveer una API estructurada para que el frontend pueda consumir los recursos de manera eficiente.

# Estructura del Proyecto

# Como ejecutar el Servidor

Para estandarizar el desarrollo y evitar errores de compatibilidad, sigue estos pasos en tu terminal:


// Paso 1: Clonar repositorio

git clone [https://github.com/AlvaroSaGit/backend_express.git]

// Paso 2: Instalar/actualizar dependencias
npm install

// Paso 3: Ejecutar el servidor local
npm run dev


<!-- Ejemplo

## 📂 Estructura del Proyecto
A continuación se detalla la organización de las carpetas y archivos principales del backend:

├── src/
│   ├── config/          # Configuración de la base de datos y variables de entorno
│   ├── controllers/     # Lógica de control para manejar las peticiones HTTP
│   ├── models/          # Definición de los modelos de datos (Esquemas o Tablas)
│   ├── routes/          # Definición de las rutas/endpoints de la API
│   ├── helpers/         # Funciones de utilidad y validaciones reutilizables
│   └── app.js           # Punto de entrada principal de la aplicación
├── .env.example         # Plantilla para las variables de entorno
├── package.json         # Dependencias y scripts del proyecto
└── README.md            # Documentación del proyecto

---

## 🚀 Cómo Ejecutar el Servidor

Sigue estos pasos para configurar y poner en marcha el servidor en tu entorno local:

### 1. Prerrequisitos
Asegúrate de tener instalado:
* **Node.js** (versión LTS recomendada)
* Un gestor de paquetes como **npm** o **yarn**
* Tu motor de base de datos configurado (por ejemplo, **MySQL**)

### 2. Instalación de Dependencias
Clona el repositorio, navega hasta la carpeta del backend y ejecuta el siguiente comando para instalar los módulos necesarios:

```bash
npm install -->
