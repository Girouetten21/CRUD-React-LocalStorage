# ⚛️ CRUD de Usuarios con React y LocalStorage

Este proyecto es una aplicación web simple que demuestra las cuatro operaciones básicas de la persistencia de datos (CRUD), utilizando **React** para la interfaz y el **LocalStorage** del navegador para el almacenamiento.

Este desarrollo fue realizado como parte de la práctica Fullstack de **Oplesk Academy**.

---

## 🚀 Funcionalidades y Operaciones CRUD

La aplicación permite la gestión completa de una lista de usuarios (o cualquier entidad de datos):

| Operación | Descripción | Implementación |
| :--- | :--- | :--- |
| **C**reate (Crear) | Agregar un nuevo usuario a la lista. | Formulario de entrada que genera un nuevo objeto y lo guarda en `LocalStorage`. |
| **R**ead (Leer) | Mostrar la lista completa de usuarios existentes. | Lectura de datos desde `LocalStorage` al montar el componente principal y mapeo de la lista en la interfaz. |
| **U**pdate (Actualizar) | Modificar la información de un usuario existente. | Apertura de un formulario de edición prellenado que sobrescribe el registro en `LocalStorage`. |
| **D**elete (Eliminar) | Remover un usuario de la lista. | Función que filtra el array de usuarios y actualiza el `LocalStorage` sin el registro eliminado. |

---

## 💻 Stack Tecnológico Utilizado

| Categoría | Tecnología | Rol en el Proyecto |
| :--- | :--- | :--- |
| **Framework UI** | **React** | Construcción de la interfaz de usuario con componentes funcionales. |
| **Gestión de Estado** | **React Hooks** | Uso de `useState` para el estado local y `useEffect` para sincronizar con `LocalStorage`. |
| **Persistencia de Datos** | **LocalStorage** | Simulación del almacenamiento de una base de datos directamente en el navegador. |
| **Estilización** | **CSS** (o un framework de CSS si aplica) | Diseño y presentación de los componentes. |

---

## ⚙️ Arquitectura y Puntos Clave de React

Este proyecto resalta las siguientes habilidades específicas en React:

* **Manejo de Formularios:** Control de componentes de formulario mediante el estado de React (Controlled Components).
* **Gestión de Efectos:** Uso de `useEffect` para **sincronizar el estado de React** con el `LocalStorage` cada vez que la lista de usuarios cambia.
* **Reutilización de Componentes:** Diseño de componentes separados para la tabla de visualización, el formulario de creación y los elementos individuales de la lista.
* **Paso de Props:** Comunicación de funciones y datos entre componentes padres e hijos (e.g., pasar la función `eliminarUsuario` al componente de fila de usuario).

---

## 🎬 Cómo Ejecutar el Proyecto

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Girouetten21/CRUD-React-LocalStorage.git](https://github.com/Girouetten21/CRUD-React-LocalStorage.git)
    cd CRUD-React-LocalStorage
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    # o 
    yarn install
    ```
3.  **Ejecutar la aplicación:**
    ```bash
    npm start
    # o
    yarn start
    ```
    La aplicación se abrirá automáticamente en `http://localhost:3000`.

---

## 🔗 Ver Demo (Si aplica)

* [**VER DEMO EN VIVO**](https://crud-react-localstorage.vercel.app)

---
**Desarrollado por:** [@Girouetten21](https://github.com/Girouetten21)
