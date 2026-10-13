# Mis finanzas — paquete para GitHub Pages

Archivos: `index.html` (la app), `manifest.webmanifest`, `sw.js` (funciona sin conexión) y `icons/`.

## Subirlo a GitHub Pages
1. En GitHub, creá un repositorio nuevo (por ejemplo `finanzas`).
2. Subí **el contenido** de esta carpeta a la raíz del repositorio (`index.html` tiene que quedar en la raíz, no dentro de otra carpeta).
3. En el repositorio: **Settings → Pages → Build and deployment → Deploy from a branch**, rama `main`, carpeta `/ (root)`.
4. Esperá un minuto y abrí `https://TU-USUARIO.github.io/finanzas/`.
5. En el celular, desde Chrome: menú ⋮ → **Instalar app** (o "Agregar a la pantalla principal").

## Pasar todo lo que ya cargaste
Tus datos **no se suben a GitHub**: se guardan en el navegador de cada dispositivo. Para llevarlos:
1. En la app que usabas dentro de Claude: pestaña **Ingresos → Exportar respaldo**. Se guarda un archivo `finanzas-respaldo-AAAA-MM-DD.json` con gastos, ingresos, presupuesto, objetivos, comisiones **con sus comprobantes**, tarjetas y ajustes.
2. Pasá ese archivo al dispositivo donde vas a usar la app nueva.
3. En la app nueva: pestaña **Ingresos → Importar** y elegí el archivo.

Si cargaste datos en más de un dispositivo, hacé el respaldo en el que tenga más (los gastos, ingresos, presupuesto y objetivos quedan en cada navegador; comisiones, tarjetas y ajustes estaban en tu cuenta de Claude y salen en cualquier dispositivo).

## Cosas a saber
- Fuera de Claude no está la interpretación con IA del chat: funciona el modo básico (entiende montos, "lucas", cuotas, medio de pago, "pagó Ari", etc.). El dictado por voz sí funciona.
- Hacé un respaldo de vez en cuando: si borrás los datos del navegador, se pierde lo cargado.
- Cada dispositivo tiene sus propios datos. Para tener lo mismo en dos, exportá en uno e importá en el otro.
- Para actualizar la app: reemplazá `index.html` en el repositorio y subí el número de `V` en `sw.js` (por ejemplo `finanzas-v2`). Los datos no se tocan.
