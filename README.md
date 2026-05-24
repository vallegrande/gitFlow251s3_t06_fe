# Gestor de Tareas - Frontend (Angular)

Aplicación web desarrollada con **Angular** para la gestión de tareas. Este proyecto implementa mejores prácticas en control de versiones mediante **Gitflow** y **Conventional Commits**.


## 🎯 Descripción del Proyecto

Este es el módulo **frontend** de una aplicación web para la gestión de tareas. Funciona en conjunto con un backend en **Spring Boot** para proporcionar una solución completa de CRUD de tareas.

### Características Principales

✅ Crear nuevas tareas  
✅ Listar todas las tareas  
✅ Filtrar tareas por estado  
✅ Editar tareas existentes  
✅ Eliminar tareas  

---

## 🔄 Gitflow - Flujo de Trabajo

### ¿Qué es Gitflow?

**Gitflow** es un modelo de ramificación que proporciona un marco robusto para gestionar versiones y lanzamientos. Define roles específicos para cada rama y establece cuándo y cómo deben fusionarse.

### Flujo de Trabajo en Features

#### 1. Crear una rama feature

```bash
# Desde la rama develop
git flow feature start sp8-us3_formCreation

# O manualmente:
git checkout develop
git pull origin develop
git checkout -b feature/sp8-us3_formCreation
```

#### 2. Desarrollar en la rama feature

```bash
# Realizar cambios en los archivos
# Crear componentes, servicios, etc.

# Validar cambios localmente
ng serve
ng test
```

#### 3. Commit con Conventional Commits

```bash
git add .
git commit -m "feat(frontend): implement form to create tasks"
```

#### 4. Publicar la rama feature

```bash
git flow feature publish sp8-us3_formCreation

# O manualmente:
git push origin feature/sp8-us3_formCreation
```

#### 5. Crear Pull Request

- Ir a GitHub
- Crear un Pull Request desde `feature/sp8-us3_formCreation` hacia `develop`
- Solicitar revisión de compañeros
- Resolver conflictos si es necesario

#### 6. Finalizar la rama feature

```bash
# Una vez aprobado el PR
git flow feature finish sp8-us3_formCreation

# O manualmente:
git checkout develop
git pull origin develop
git merge feature/sp8-us3_formCreation
git branch -d feature/sp8-us3_formCreation
git push origin develop
```


## 📝 Conventional Commits

### ¿Qué son Conventional Commits?

**Conventional Commits** es una especificación para agregar un significado legible a los mensajes de commit. Proporciona un conjunto fácil de reglas para crear un historial explícito de commits.

### Formato

```
<tipo>(<ámbito>): <descripción breve>

<descripción detallada>

<pie de página>
```

### Componentes

#### **Tipo** (Obligatorio)

Define la naturaleza del cambio:

| Tipo | Uso |
|------|-----|
| **feat** | Nueva característica |
| **fix** | Corrección de un error |
| **docs** | Cambios en documentación |
| **style** | Cambios de formato (sin afectar código) |
| **refactor** | Refactorización de código |
| **perf** | Mejoras de rendimiento |
| **test** | Agregar o actualizar tests |
| **chore** | Cambios en herramientas, configuración |
| **ci** | Cambios en integración continua |

#### **Ámbito** (Opcional pero Recomendado)

Especifica qué parte del proyecto se modificó:

```
feat(task-form)      → Componente de formulario de tareas
feat(task-service)   → Servicio de tareas
feat(router)         → Configuración de rutas
feat(styles)         → Estilos globales
```

#### **Descripción Breve** (Obligatoria)

- Máximo 50 caracteres
- Comenzar con minúscula
- No terminar con punto
- Imperativo: "implementar", no "implementó" o "implementada"

#### **Descripción Detallada** (Opcional)

Explicar **qué** y **por qué**, no **cómo**:

```
feat(task-form): add validation to task creation form

The form now validates that:
- Title is not empty
- Description has minimum 10 characters
- Status is a valid option

This prevents invalid data from being sent to the API.
```

### Ejemplos de Commits Válidos

```bash
# Característica simple
git commit -m "feat(frontend): implement form to create tasks"

# Corrección de error
git commit -m "fix(task-list): resolve filter not updating on status change"

# Con descripción detallada
git commit -m "feat(task-service): add HTTP error handling

- Add error interceptor
- Display user-friendly messages
- Log errors for debugging"

# Mejora de estilo
git commit -m "style(components): update task component styling with Tailwind"

# Documentación
git commit -m "docs(README): add Gitflow workflow documentation"

# Configuración
git commit -m "chore(package): upgrade Angular to version 18"
```

# Ver cambios antes de commitear
git diff

# Hacer commit interactivo (seleccionar qué agregar)
git add -p
git commit -m "feat(frontend): ..."
```

---

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── task-form/          # Formulario de creación
│   │   │   ├── task-list/          # Lista de tareas
│   │   │   ├── task-edit/          # Edición de tareas
│   │   ├── services/
│   │   │   └── task.service.ts     # Servicio de tareas
│   │   ├── app.routes.ts           # Rutas de la aplicación
│   │   └── app.ts                  # Componente raíz
│   ├── main.ts                     # Punto de entrada
│   └── styles.css                  # Estilos globales
├── angular.json                    # Configuración de Angular
├── package.json                    # Dependencias del proyecto
├── tsconfig.json                   # Configuración de TypeScript
└── README.md                        # Documentación


## 🚀 Instalación y Configuración

### Requisitos Previos

- Node.js 18+ 
- npm 9+
- Angular CLI 18+
- Git configurado

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd gitFlow251s3_t06_fe

# 2. Instalar dependencias
npm install

# 3. Inicializar Gitflow (opcional)
git flow init

# 4. Ejecutar el servidor de desarrollo
ng serve

# 5. Abrir en el navegador
# http://localhost:4200
```

### Comandos Útiles

```bash
# Desarrollo
ng serve                    # Inicia servidor de desarrollo
ng build                    # Compila para producción
ng test                     # Ejecuta pruebas unitarias
ng lint                     # Valida el código

# Git
git flow feature start <nombre>     # Crear feature
git flow feature finish <nombre>    # Finalizar feature
git flow release start <version>    # Preparar lanzamiento
git flow release finish <version>   # Finalizar lanzamiento
```

---

## 📸 Imágenes del Proyecto




### Pantalla Principal - Lista de Tareas

![Pantalla de Lista de Tareas](./screenshots/task-list.png)

*Descripción: Lista de todas las tareas con opción de filtrar por estado y botones de editar/eliminar*

### Formulario de Creación de Tareas

![Formulario de Creación](./screenshots/task-form.png)

*Descripción: Formulario para crear nuevas tareas con campos de título, descripción y estado*

### Vista de Edición de Tareas

![Vista de Edición](./screenshots/task-edit.png)

*Descripción: Interfaz para modificar los datos de una tarea existente*

### Confirmación de Acciones

![Confirmación](./screenshots/task-confirmation.png)

*Descripción: Mensajes de confirmación después de crear, editar o eliminar tareas*

---

## 🤝 Contribuciones

Este proyecto fue desarrollado siguiendo estrictamente las prácticas de **Gitflow** y **Conventional Commits**.

### Pasos para Contribuir

1. **Crear una rama feature** desde `develop`
   ```bash
   git flow feature start nombre-feature
   ```

2. **Hacer cambios y commits** con mensajes convencionales
   ```bash
   git commit -m "feat(componente): descripción del cambio"
   ```

3. **Publicar la rama**
   ```bash
   git flow feature publish nombre-feature
   ```

4. **Crear un Pull Request** en GitHub para revisión

5. **Finalizar la rama** después de la aprobación
   ```bash
   git flow feature finish nombre-feature
   ```


## 📄 Licencia

Este proyecto es parte de un laboratorio educativo de la carrera de Análisis de Sistemas.

---

**Última actualización:** 23 de mayo de 2026
