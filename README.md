# Albion CTA — Guild Event Manager

Sistema web para gestionar eventos de una guild en **Albion Online**, permitiendo a los líderes crear eventos, asignar roles y establecer límites para cada uno. Los miembros pueden ver eventos, unirse y seleccionar su rol disponible.

---

## 🚀 Características principales

### 👑 Roles internos del sitio
- **Leader**
- **Officers**
- **Members**

Estos roles controlan permisos dentro del sitio, como crear eventos, gestionar roles o participar en ellos.

---

## 🎯 Gestión de eventos

Cada evento puede tener:

- Título y descripción  
- Fecha y hora  
- Roles disponibles  
- Límite por cada rol  
- Lista de participantes asignados a un rol  

Los miembros pueden:

- Ver próximos eventos  
- Unirse y elegir su rol dentro del límite permitido  

---

## 🧱 Estructura del proyecto

### Frontend
- React + Vite  
- TailwindCSS  
- Componentes organizados en `/src/components`  
- Manejo de formularios con React Hook Form  
- Validación con Zod  
- Ruteo con `react-router-dom`  
- Store global (Redux o equivalente)

### Backend
- Node.js + Express  
- Validación con `express-validator`  
- Base de datos **MySQL**  
- **Prisma ORM**  
- Configuración CORS básica  

---

## 📁 Funcionalidades implementadas

- Creación y edición de eventos por líderes u oficiales  
- Filtrado y vista de eventos para los miembros  
- Registro de participante por rol  
- Límite dinámico de cada rol  
- Sistema de roles interno del sitio  
- API REST conectando frontend y backend  

---

## 🗂 Roadmap

- Autenticación con JWT  
- Dashboard con estadísticas  
- Mejoras en UI/UX  
- Notificaciones en tiempo real (posible uso de websockets)  
- Optimización del sistema de roles  

---

## 🛠 Instalación

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
``` bash
cd backend
npm install
npx prisma migrate dev
npm run dev