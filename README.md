# 🚗 Total Car - Landing Page Profesional

Landing page completa y moderna para **Total Car Taller Mecánico**, ubicado en Las Colinas, Managua.

---

## 📋 Características

✅ **Diseño Responsivo** - Se adapta perfectamente a móviles, tablets y desktop
✅ **Alta Conversión** - Botones CTA estratégicamente posicionados
✅ **Integración WhatsApp** - Formularios que envían directamente a WhatsApp
✅ **Rápido y Ligero** - Sin dependencias externas, solo HTML5, CSS3 y JavaScript vanilla
✅ **SEO Amigable** - Estructura semántica y meta tags optimizados
✅ **Animaciones Suaves** - Transiciones profesionales y fluidas
✅ **100% Personalizable** - Fácil de editar y adaptar

---

## 🚀 Cómo Usar

### 1. **Descargar/Clonar el Repositorio**
```bash
git clone https://github.com/riossantos32/total-car-landing.git
cd total-car-landing
```

### 2. **Abrir en el Navegador**
- Simplemente abre `index.html` en tu navegador favorito
- O sube los archivos a un servidor web

### 3. **Configurar Número de WhatsApp** ⚠️ IMPORTANTE

**En `script.js`, busca y modifica:**

```javascript
// Línea ~68
const numeroWhatsApp = '50588888888'; // ← CAMBIAR A TU NÚMERO

// Línea ~80
const numeroWhatsApp = '50588888888'; // ← CAMBIAR A TU NÚMERO
```

**Formato:** `+505` + número sin espacios (ejemplo: `50588888888`)

---

## 🎨 Personalización

### Cambiar Colores Principales

En `styles.css`, líneas 9-17:

```css
:root {
    --primary-color: #DC2626;      /* Rojo - Cambiar aquí */
    --secondary-color: #1F2937;    /* Gris oscuro */
    --accent-color: #F59E0B;       /* Naranja dorado */
    /* ... más colores */
}
```

### Cambiar Contenido

- **Título y descripción del negocio:** En `index.html`, sección `<hero>`
- **Servicios:** Modificar tarjetas en la sección `#servicios`
- **Ubicación y teléfono:** Sección `#contacto`
- **Testimonios:** Sección `.testimonios`

### Agregar Imágenes

Reemplaza `.image-placeholder` con:

```html
<img src="ruta/a/tu/imagen.jpg" alt="Taller Mecánico" class="hero-image">
```

---

## 📱 Secciones de la Landing Page

1. **Navbar** - Navegación fija y atractiva
2. **Hero** - Presentación principal con CTA
3. **Servicios** - Grid de 6 servicios principales
4. **Ventajas** - 6 razones para elegir Total Car
5. **Testimonios** - Reseñas de clientes (5 estrellas)
6. **CTA** - Llamada a la acción destacada
7. **Contacto** - Información de ubicación y teléfono
8. **Footer** - Pie de página profesional

---

## 🔧 Formularios Interactivos

### Modal: Agendar Cita
- Campos: Nombre, Email, Teléfono, Fecha, Servicio, Detalles
- Envío: Directo a WhatsApp con formato profesional

### Modal: Solicitar Cotización
- Campos: Nombre, Email, Teléfono, Marca, Año, Servicio, Descripción
- Envío: Directo a WhatsApp con formato profesional

---

## 📊 Estadísticas Animadas

En la sección Hero se muestran 3 estadísticas:
- **5.0 estrellas** - Calificación Google
- **+1000 clientes** - Clientes satisfechos
- **10+ años** - Años de experiencia

Puedes editar estos números en `index.html`.

---

## 🌐 Desplegar Online

### Opción 1: GitHub Pages (GRATIS)
```bash
# 1. Subir archivos a tu repositorio GitHub
# 2. Ir a Settings → Pages
# 3. Source: Branch main (o master)
# 4. Tu sitio estará en: https://tu-usuario.github.io/total-car-landing
```

### Opción 2: Hosting Web
- Subir archivos a través de FTP o panel del hosting
- Usar servicios como Netlify, Vercel, o similar

---

## 💡 Tips de Optimización

1. **Velocidad:** Comprimir imágenes antes de agregar
2. **SEO:** Cambiar meta tags en `<head>` del HTML
3. **Analytics:** Agregar Google Analytics en `<head>`
4. **Backup:** Guardar una copia de los archivos originales

---

## 📞 Ejemplo de Mensaje WhatsApp Automatizado

Cuando un cliente llena un formulario, recibirá un mensaje como este:

```
🚗 SOLICITUD DE CITA - Total Car 🚗

👤 Nombre: Carlos Mendoza
📧 Email: carlos@email.com
📱 Teléfono: 8888-8888
📅 Fecha Solicitada: 2025-06-20
🔧 Servicio: Cambio de Aceite
📝 Detalles: Mi auto necesita mantenimiento

_Mensaje automático desde totalcar.com_
```

---

## 🎯 Próximas Mejoras (Opcional)

- [ ] Agregar Google Maps integrado
- [ ] Sistema de turnos/reservas dinámico
- [ ] Blog de consejos automotrices
- [ ] Galería de trabajos realizados
- [ ] Sistema de notificaciones por email
- [ ] Integración con calendario (Google Calendar)

---

## ⚠️ Notas Importantes

- **WhatsApp Business:** Considera crear una cuenta de WhatsApp Business para profesionalismo
- **GDPR/Privacidad:** Agrega términos de uso y política de privacidad si es necesario
- **Certificado SSL:** Si despliegas online, obtén un certificado SSL (HTTPS)
- **Backup Regular:** Realiza copias de seguridad de tus archivos

---

## 📝 Licencia

Libre para usar y modificar. Adaptado específicamente para Total Car Taller Mecánico.

---

## 👨‍💻 Soporte y Preguntas

Para modificaciones adicionales o personalizaciones, consulta con un desarrollador web.

---

**Última actualización:** 2024
**Versión:** 1.0
**Estado:** ✅ Listo para usar

---

## 🌟 ¿Te fue útil?

Si esta landing page te ayudó, considera:
- ⭐ Dejar una reseña positiva
- 📢 Recomendar el proyecto
- 🤝 Colaborar con mejoras

**¡Éxito con Total Car! 🚗**