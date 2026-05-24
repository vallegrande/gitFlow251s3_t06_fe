# 🚀 INSTRUCCIONES COMPLETAS - PROYECTO FRONTEND ANGULAR 17

## ✅ ERRORES CORREGIDOS

### **Errores Críticos Solucionados:**

1. ✅ **app.config.ts** - Agregado `provideHttpClient(withFetch())` para habilitar HttpClient
2. ✅ **app.routes.ts** - Agregadas todas las rutas necesarias (/, /tasks, /create, /edit/:id)
3. ✅ **task.ts (service)** - Agregados métodos faltantes: `createTask()`, `getTask()`, `updateTask()`
4. ✅ **task-form.ts** - Implementada lógica completa para crear tareas con validación
5. ✅ **task-list.ts** - Mejorada lógica de filtrado y eliminación con confirmación
6. ✅ **task-edit.ts** - Corregido import (era `task.service` ahora es `task`)
7. ✅ **task-edit.ts** - Cambiado `styleUrl` a `styleUrls` (plural)
8. ✅ **app.ts** - Agregado `RouterLink` a imports
9. ✅ **app.html** - Agregado header con navegación y footer
10. ✅ **Todos los CSS** - Creados estilos modernos y profesionales

### **Mejoras Implementadas:**

- ✨ Diseño moderno con gradientes y sombras
- ✨ Animaciones suaves en tarjetas y botones
- ✨ Estados de carga (loading spinners)
- ✨ Validación de formularios
- ✨ Confirmación antes de eliminar
- ✨ Navegación completa entre vistas
- ✨ Responsive design (móvil y desktop)
- ✨ Mensajes de error amigables
- ✨ Badges de estado con colores
- ✨ Iconos emoji para mejor UX

---

## 📋 CÓMO EJECUTAR EL PROYECTO

### **PASO 1: Navegar a la carpeta correcta**

```powershell
cd C:\Users\Cesia\OneDrive\Desktop\gitFlow251s3_t06_fe\frontend
```

### **PASO 2: Instalar dependencias (si es necesario)**

```powershell
npm install
```

### **PASO 3: Ejecutar el servidor de desarrollo**

```powershell
ng serve
```

O también puedes usar:

```powershell
npm start
```

### **PASO 4: Abrir en el navegador**

Abre tu navegador en: **http://localhost:4200**

---

## 🔗 CONECTAR CON EL BACKEND SPRING BOOT

### **Requisitos:**

1. El backend debe estar corriendo en: `http://localhost:8080`
2. El backend debe tener CORS habilitado para `http://localhost:4200`

### **Configurar CORS en Spring Boot:**

Agrega esta clase en tu backend:

```java
package com.example.taskmanager.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:4200")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

### **Verificar que el backend esté corriendo:**

1. Abre: `http://localhost:8080/api/tasks`
2. Deberías ver un JSON con las tareas (puede estar vacío: `[]`)

---

## 🎯 FUNCIONALIDADES DISPONIBLES

### **1. Ver Lista de Tareas**
- Ruta: `/tasks` o `/`
- Muestra todas las tareas en tarjetas
- Filtro por título o estado
- Botones para editar y eliminar

### **2. Crear Nueva Tarea**
- Ruta: `/create`
- Formulario con validación
- Campos: Título, Descripción, Estado
- Redirección automática después de crear

### **3. Editar Tarea**
- Ruta: `/edit/:id`
- Carga los datos de la tarea
- Permite modificar todos los campos
- Botón de cancelar para volver

### **4. Eliminar Tarea**
- Desde la lista de tareas
- Confirmación antes de eliminar
- Actualización automática de la lista

---

## 📁 ESTRUCTURA DE ARCHIVOS CORREGIDOS

```
frontend/src/app/
├── app.config.ts          ✅ CORREGIDO (agregado HttpClient)
├── app.routes.ts          ✅ CORREGIDO (todas las rutas)
├── app.ts                 ✅ CORREGIDO (RouterLink agregado)
├── app.html               ✅ CORREGIDO (header y navegación)
├── app.css                ✅ CREADO (estilos modernos)
│
├── services/
│   └── task.ts            ✅ CORREGIDO (todos los métodos CRUD)
│
└── components/
    ├── task-form/
    │   ├── task-form.ts   ✅ CORREGIDO (lógica completa)
    │   ├── task-form.html ✅ CORREGIDO (diseño moderno)
    │   └── task-form.css  ✅ CREADO (estilos profesionales)
    │
    ├── task-list/
    │   ├── task-list.ts   ✅ CORREGIDO (filtrado mejorado)
    │   ├── task-list.html ✅ CORREGIDO (tarjetas modernas)
    │   └── task-list.css  ✅ CREADO (grid responsive)
    │
    └── task-edit/
        ├── task-edit.ts   ✅ CORREGIDO (import y lógica)
        ├── task-edit.html ✅ CORREGIDO (formulario completo)
        └── task-edit.css  ✅ CREADO (estilos consistentes)
```

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### **Error: "This command is not available when running the Angular CLI outside a workspace"**

**Solución:** Estás en la carpeta incorrecta. Debes estar en `frontend/`:

```powershell
cd C:\Users\Cesia\OneDrive\Desktop\gitFlow251s3_t06_fe\frontend
```

### **Error: "Cannot read package.json"**

**Solución:** Mismo problema, navega a la carpeta `frontend/`

### **Error: "HttpClient provider not found"**

**Solución:** Ya corregido en `app.config.ts` con `provideHttpClient()`

### **Error: "CORS policy blocked"**

**Solución:** Configura CORS en el backend (ver sección anterior)

### **Error: "Cannot GET /api/tasks"**

**Solución:** El backend no está corriendo. Inicia Spring Boot primero.

---

## 🎨 CARACTERÍSTICAS DEL DISEÑO

- **Colores:** Gradiente morado/azul (#667eea → #764ba2)
- **Tipografía:** System fonts (San Francisco, Segoe UI, Roboto)
- **Animaciones:** Transiciones suaves de 0.3s
- **Sombras:** Box-shadow para profundidad
- **Responsive:** Breakpoint en 768px para móviles
- **Estados:** Hover, focus, active, disabled
- **Loading:** Spinners animados
- **Badges:** Estados con colores (verde, naranja, gris)

---

## 📝 COMANDOS ÚTILES

```powershell
# Navegar a la carpeta
cd C:\Users\Cesia\OneDrive\Desktop\gitFlow251s3_t06_fe\frontend

# Instalar dependencias
npm install

# Ejecutar en desarrollo
ng serve

# Compilar para producción
ng build

# Ver versión de Angular
ng version

# Limpiar caché
npm cache clean --force
```

---

## ✅ CHECKLIST DE VERIFICACIÓN

- [ ] Estoy en la carpeta `frontend/`
- [ ] Ejecuté `npm install`
- [ ] El backend está corriendo en `http://localhost:8080`
- [ ] CORS está configurado en el backend
- [ ] Ejecuté `ng serve`
- [ ] Abrí `http://localhost:4200` en el navegador
- [ ] Puedo ver la interfaz con el header
- [ ] Puedo navegar entre "Ver Tareas" y "Nueva Tarea"
- [ ] Puedo crear una tarea
- [ ] Puedo ver la lista de tareas
- [ ] Puedo editar una tarea
- [ ] Puedo eliminar una tarea

---

## 🎓 PARA GITFLOW Y CONVENTIONAL COMMITS

### **Commits recomendados:**

```bash
git add .
git commit -m "fix(frontend): corregir imports y agregar HttpClient provider"
git commit -m "feat(frontend): implementar navegación completa entre vistas"
git commit -m "style(frontend): agregar diseño moderno con gradientes y animaciones"
git commit -m "feat(task-service): agregar métodos CRUD completos"
git commit -m "fix(task-edit): corregir import de servicio y styleUrls"
```

---

## 📞 SOPORTE

Si tienes algún error:

1. Verifica que estés en la carpeta `frontend/`
2. Verifica que el backend esté corriendo
3. Revisa la consola del navegador (F12)
4. Revisa la terminal donde corre `ng serve`

---

**¡Proyecto completamente funcional y con diseño moderno! 🎉**
