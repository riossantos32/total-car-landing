// ==========================================
// TOTAL CAR LANDING PAGE - JAVASCRIPT
// ==========================================

// Cerrar modal al hacer click fuera
window.onclick = function(event) {
    let modalCita = document.getElementById('modalCita');
    let modalCotizacion = document.getElementById('modalCotizacion');
    
    if (event.target == modalCita) {
        modalCita.style.display = 'none';
    }
    if (event.target == modalCotizacion) {
        modalCotizacion.style.display = 'none';
    }
}

// Función para enviar formulario
function enviarFormulario(event, tipo) {
    event.preventDefault();

    const form = event.target.closest('form');
    const formData = new FormData(form);
    
    // Obtener datos del formulario
    const nombre = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const telefono = form.querySelector('input[type="tel"]').value;
    
    // Construir mensaje para WhatsApp
    let mensaje = '';
    
    if (tipo === 'cita') {
        const fecha = form.querySelector('input[type="date"]').value;
        const servicio = form.querySelector('select').value;
        const descripcion = form.querySelector('textarea').value;
        
        mensaje = `🚗 *SOLICITUD DE CITA - Total Car* 🚗\n\n`;
        mensaje += `👤 *Nombre:* ${nombre}\n`;
        mensaje += `📧 *Email:* ${email}\n`;
        mensaje += `📱 *Teléfono:* ${telefono}\n`;
        mensaje += `📅 *Fecha Solicitada:* ${fecha}\n`;
        mensaje += `🔧 *Servicio:* ${servicio}\n`;
        mensaje += `📝 *Detalles:* ${descripcion}\n\n`;
        mensaje += `_Mensaje automático desde totalcar.com_`;
        
    } else if (tipo === 'cotizacion') {
        const inputs = form.querySelectorAll('input[type="text"]');
        const marca = inputs[1] ? inputs[1].value : 'No especificado';
        const año = inputs[2] ? inputs[2].value : 'No especificado';
        const servicio = form.querySelector('select').value;
        const descripcion = form.querySelector('textarea').value;
        
        mensaje = `💰 *SOLICITUD DE COTIZACIÓN - Total Car* 💰\n\n`;
        mensaje += `👤 *Nombre:* ${nombre}\n`;
        mensaje += `📧 *Email:* ${email}\n`;
        mensaje += `📱 *Teléfono:* ${telefono}\n`;
        mensaje += `🚗 *Vehículo:* ${marca} (${año})\n`;
        mensaje += `🔧 *Tipo de Servicio:* ${servicio}\n`;
        mensaje += `📝 *Descripción:* ${descripcion}\n\n`;
        mensaje += `_Mensaje automático desde totalcar.com_`;
    }
    
    // Enviar por WhatsApp
    abrirWhatsAppConMensaje(mensaje);
    
    // Cerrar modal
    setTimeout(() => {
        document.getElementById('modalCita').style.display = 'none';
        document.getElementById('modalCotizacion').style.display = 'none';
    }, 500);
    
    // Mostrar confirmación
    mostrarAlerta('¡Se envió tu solicitud por WhatsApp! Pronto nos comunicaremos contigo.');
}

// Función para abrir WhatsApp con mensaje
function abrirWhatsAppConMensaje(mensaje) {
    const numeroWhatsApp = '50588888888'; // ⚠️ CAMBIAR ESTE NÚMERO
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
}

// Función para abrir WhatsApp directo
function abrirWhatsApp() {
    const numeroWhatsApp = '50588888888'; // ⚠️ CAMBIAR ESTE NÚMERO
    const mensaje = encodeURIComponent('Hola Total Car, quisiera obtener información sobre sus servicios. 🚗');
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(urlWhatsApp, '_blank');
}

// Función para mostrar alerta personalizada
function mostrarAlerta(mensaje) {
    const alerta = document.createElement('div');
    alerta.className = 'alerta-custom';
    alerta.innerHTML = `
        <div class="alerta-contenido">
            <p>✅ ${mensaje}</p>
        </div>
    `;
    alerta.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10B981;
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
    `;
    
    document.body.appendChild(alerta);
    
    setTimeout(() => {
        alerta.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            alerta.remove();
        }, 300);
    }, 4000);
}

// Agregar animaciones globales
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to top button
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Log de carga
console.log('✅ Total Car Landing Page - JavaScript cargado correctamente');
console.log('📱 WhatsApp: Cambiar número en script.js (líneas 68 y 80)');
console.log('🎨 Colores: Modificar en styles.css (líneas 9-17)');