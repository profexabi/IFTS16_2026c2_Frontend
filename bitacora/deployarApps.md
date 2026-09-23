Claro. La forma más habitual es separar el deploy en **frontend + backend**:

 - **Netlify** → frontend (React, Vite, Vue, etc.).
- **Vercel** → backend/API (Node.js, Express, Next.js API routes, etc.).
- **Base de datos** → un servicio externo como Neon, Supabase, MongoDB Atlas, PostgreSQL administrado, etc.

 Si tu aplicación es, por ejemplo:

```
mi-app/
├── frontend/     # React + Vite
└── backend/      # Node + Express
```

 el flujo sería:

```
Usuario
   ↓
Netlify
   ↓
Frontend
   ↓ HTTPS/API
Vercel
   ↓
Backend
   ↓
Base de datos
```

 ## 1\. Preparar el proyecto

 Primero asegúrate de que ambos proyectos funcionan localmente.

 ### Frontend

 Por ejemplo:

```
cd frontend
npm install
npm run dev
```

 Y comprueba que funciona en:

```
http://localhost:5173
```

 ### Backend

```
cd backend
npm install
npm run dev
```

 Por ejemplo:

```
http://localhost:3000
```

 Comprueba una ruta:

```
GET http://localhost:3000/api/users
```

---

 ## 2\. Subir el proyecto a GitHub

 Lo más cómodo es tener el proyecto en GitHub.

 Desde la carpeta raíz:

```
git init
git add .
git commit -m "Initial commit"
```

 Después crea un repositorio en GitHub y conecta el proyecto:

```
git remote add origin https://github.com/TU_USUARIO/mi-app.git
git branch -M main
git push -u origin main
```

 Una estructura posible:

```
mi-app/
├── frontend/
│   ├── package.json
│   ├── src/
│   └── ...
├── backend/
│   ├── package.json
│   ├── src/
│   └── ...
└── README.md
```

---

 # 3\. Preparar el backend para Vercel

 Aquí hay un detalle importante: **Vercel no funciona exactamente como un servidor Express tradicional que dejas ejecutándose permanentemente**. Lo habitual es adaptar el backend a funciones/serverless o utilizar un framework compatible.

 Por ejemplo, si tienes:

```
const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hola mundo" });
});

app.listen(3000);
```

 para Vercel conviene exportar la aplicación:

```
const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hola mundo" });
});

module.exports = app;
```

 Y crear:

```
backend/
├── package.json
├── api/
│   └── index.js
└── ...
```

 Una alternativa todavía más sencilla es utilizar directamente las **Vercel Functions**.

 Por ejemplo:

```
backend/
└── api/
    └── hello.js
```

```
export default function handler(req, res) {
  res.status(200).json({
    message: "Hola desde Vercel"
  });
}
```

---

 # 4\. Crear el proyecto en Vercel

 Entra en  Vercel  e inicia sesión con GitHub.

 Selecciona:

 **Add New → Project**

 Selecciona tu repositorio.

 Si tienes:

```
mi-app/
├── frontend/
└── backend/
```

 y vas a desplegar solamente `backend`, configura el **Root Directory** como:

```
backend
```

 Vercel utilizará esa carpeta como raíz del proyecto.

---

 # 5\. Configurar el backend

 Vercel detectará normalmente el proyecto a partir de `package.json`.

 Por ejemplo:

```
{
  "name": "mi-backend",
  "version": "1.0.0",
  "scripts": {
    "start": "node api/index.js"
  },
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

 Dependiendo de cómo hayas estructurado tu backend, la configuración exacta puede cambiar.

 Pulsa:

 **Deploy**

 Cuando termine tendrás algo parecido a:

```
https://mi-backend.vercel.app
```

 Prueba:

```
https://mi-backend.vercel.app/api/hello
```

 Si devuelve:

```
{
  "message": "Hola desde Vercel"
}
```

 tu backend está funcionando.

---

 # 6\. Configurar variables de entorno del backend

 Supongamos que localmente tienes:

```
DATABASE_URL=postgresql://...
JWT_SECRET=mi-secreto
```

 **No subas `.env` a GitHub.**

 Añade `.env` a:

```
.gitignore
```

 Por ejemplo:

```
node_modules/
.env
.env.local
```

 Después, en Vercel, entra en:

 **Project → Settings → Environment Variables**

 Añade:

```
DATABASE_URL
JWT_SECRET
```

 con sus respectivos valores.

 Tu código puede acceder a ellas:

```
const databaseUrl = process.env.DATABASE_URL;
```

---

 # 7\. Preparar el frontend

 Ahora vamos con Netlify.

 Si utilizas Vite + React, tu `package.json` probablemente tenga:

```
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

 Comprueba primero:

```
npm run build
```

 Deberías obtener:

```
frontend/
└── dist/
```

 Ese `dist` es lo que Netlify va a servir al navegador.

---

 # 8\. Configurar la URL del backend

 Este paso es **muy importante**.

 En desarrollo probablemente tienes:

```
fetch("http://localhost:3000/api/users")
```

 Pero cuando publiques la aplicación, eso ya no sirve.

 Tienes que utilizar la URL de Vercel:

```
fetch("https://mi-backend.vercel.app/api/users")
```

 Mejor todavía: utiliza una variable de entorno.

 En Vite:

```
VITE_API_URL=http://localhost:3000
```

 Y en tu código:

```
const API_URL = import.meta.env.VITE_API_URL;

fetch(`${API_URL}/api/users`);
```

 En producción:

```
VITE_API_URL=https://mi-backend.vercel.app
```

---

 # 9\. Deploy del frontend en Netlify

 Entra en  Netlify .

 Inicia sesión con GitHub.

 Selecciona:

 **Add new site → Import an existing project**

 Selecciona GitHub y el repositorio.

 Si tu estructura es:

```
mi-app/
├── frontend/
└── backend/
```

 configura:

 **Base directory**

```
frontend
```

 **Build command**

```
npm run build
```

 **Publish directory**

```
dist
```

 En algunos proyectos Netlify detectará automáticamente estos valores.

---

 # 10\. Añadir la variable de entorno del frontend

 En Netlify ve a:

 **Site configuration → Environment variables**

 Añade:

```
VITE_API_URL
```

 con:

```
https://mi-backend.vercel.app
```

 Después vuelve a hacer un deploy.

 Esto es importante porque las variables `VITE_*` se incorporan al frontend **durante el build**.

---

 # 11\. Configurar CORS

 Ahora tenemos:

```
Frontend:
https://mi-app.netlify.app

Backend:
https://mi-backend.vercel.app
```

 El navegador considera que son orígenes diferentes.

 Por eso el backend debe permitir solicitudes desde Netlify.

 Si utilizas Express:

```
npm install cors
```

 Y:

```
const cors = require("cors");

app.use(cors({
  origin: "https://mi-app.netlify.app"
}));
```

 Durante desarrollo puedes permitir localhost:

```
const allowedOrigins = [
  "http://localhost:5173",
  "https://mi-app.netlify.app"
];

app.use(cors({
  origin: allowedOrigins
}));
```

 Para una aplicación real, conviene configurar esto de forma que solo se permitan los dominios que realmente necesitas.

---

 # 12\. Probar el sistema completo

 Ahora deberías tener:

```
                 ┌──────────────┐
                 │    Usuario   │
                 └──────┬───────┘
                        │
                        ▼
              ┌──────────────────┐
              │     Netlify      │
              │    Frontend      │
              └────────┬─────────┘
                       │
                       │ HTTPS
                       ▼
              ┌──────────────────┐
              │     Vercel       │
              │      API         │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │    Database      │
              └──────────────────┘
```

 Prueba primero el backend:

```
https://mi-backend.vercel.app/api/hello
```

 Después abre:

```
https://mi-app.netlify.app
```

 Y prueba una operación que haga una petición a la API.

 En Chrome puedes abrir:

 **F12 → Network**

 y comprobar que la petición vaya a:

```
https://mi-backend.vercel.app/api/...
```

 y no a:

```
http://localhost:3000/api/...
```

---

 # 13\. Configurar una base de datos

 Si tu backend utiliza PostgreSQL, por ejemplo, tendrás algo como:

```
DATABASE_URL=postgresql://usuario:password@host/database
```

 Esa variable debe estar configurada **en Vercel**, no en el código.

 Por ejemplo:

```
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL
});
```

 El flujo será:

```
Netlify
   │
   │ HTTP request
   ▼
Vercel API
   │
   │ DATABASE_URL
   ▼
PostgreSQL
```

---

 # 14\. Si utilizas React Router

 Hay otro problema bastante común.

 Supongamos que tienes:

```
/
 /login
 /dashboard
 /profile
```

 En desarrollo funciona:

```
http://localhost:5173/dashboard
```

 pero al publicar puedes encontrarte con un `404` al entrar directamente en:

```
https://mi-app.netlify.app/dashboard
```

 porque Netlify intenta buscar físicamente `/dashboard`.

 Para una SPA puedes crear:

```
frontend/public/_redirects
```

 con:

```
/* /index.html 200
```

 Después:

```
git add .
git commit -m "Configure SPA redirects"
git push
```

 Netlify hará un nuevo deploy.

---

 # 15\. Deploys automáticos

 Una de las ventajas de este sistema es que **no necesitas volver a hacer manualmente el deploy cada vez**.

 Después de configurar GitHub:

```
git push
     │
     ├──────────────► Netlify
     │                  ↓
     │               Build frontend
     │                  ↓
     │               Deploy
     │
     └──────────────► Vercel
                        ↓
                     Build API
                        ↓
                     Deploy
```

 Por ejemplo:

```
git add .
git commit -m "Add authentication"
git push
```

 Netlify y Vercel detectarán el cambio y harán nuevos deploys.

---

 ## 16\. Dominios personalizados

 Finalmente puedes tener algo más profesional:

```
www.miapp.com
        │
        ▼
     Netlify
        │
        │ API
        ▼
api.miapp.com
        │
        ▼
     Vercel
```

 Por ejemplo:

 - `www.miapp.com` → Netlify
- `api.miapp.com` → Vercel

 En cada plataforma puedes añadir el dominio personalizado y configurar los registros DNS que te indique la plataforma.

---

 ## Checklist final

 Antes de dar el deploy por terminado, comprueba:

 - [ ] Frontend funciona localmente.
- [ ] Backend funciona localmente.
- [ ] `npm run build` funciona.
- [ ] Código está en GitHub.
- [ ] Backend está desplegado en Vercel.
- [ ] Variables de entorno están configuradas en Vercel.
- [ ] Frontend está desplegado en Netlify.
- [ ] `VITE_API_URL` apunta al backend de Vercel.
- [ ] CORS permite el dominio de Netlify.
- [ ] Base de datos está accesible desde Vercel.
- [ ] Las rutas de React funcionan al refrescar.
- [ ] `.env` no está en GitHub.
- [ ] Las peticiones HTTPS funcionan correctamente.

 **Una aclaración importante:** si me dices qué stack estás usando —por ejemplo **React + Vite + Node/Express + PostgreSQL**, **Next.js + Prisma**, **MERN**, etc.— puedo darte los archivos exactos (`vercel.json`, `_redirects`, `package.json`, configuración de CORS y variables `.env`) y el procedimiento de deploy específico para tu proyecto.
