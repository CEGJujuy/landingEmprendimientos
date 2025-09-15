import './style.css'

// Header con navegación
const header = `
  <header class="header">
    <nav class="nav">
      <div class="nav-brand">
        <img src="/public/logo sin fondo copy.png" alt="CREACTIVO Digital Agency" class="logo" />
      </div>
      <ul class="nav-menu">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#emprendimientos">Emprendimientos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <button class="nav-toggle">☰</button>
    </nav>
  </header>
`;

// Hero Section
const hero = `
  <section id="inicio" class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Transforma tu Idea en un Negocio Exitoso</h1>
      <p class="hero-subtitle">Te ayudamos a desarrollar, lanzar y hacer crecer tu emprendimiento con estrategias probadas y herramientas innovadoras.</p>
      <div class="hero-buttons">
        <button class="btn btn-primary" onclick="scrollToSection('servicios')">Comenzar Ahora</button>
        <button class="btn btn-secondary" onclick="openModal('demo')">Ver Demo</button>
      </div>
    </div>
    <div class="hero-image">
      <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Emprendimiento exitoso" />
    </div>
  </section>
`;

// Servicios Section
const servicios = `
  <section id="servicios" class="services">
    <div class="container">
      <h2 class="section-title">Nuestros Servicios</h2>
      <div class="services-grid">
        <div class="service-card" onclick="selectService('consultoria')">
          <div class="service-icon">💡</div>
          <h3>Consultoría Estratégica</h3>
          <p>Análisis profundo de tu idea de negocio y desarrollo de estrategias personalizadas.</p>
          <div class="service-price">$299/mes</div>
        </div>
        <div class="service-card" onclick="selectService('desarrollo')">
          <div class="service-icon">🛠️</div>
          <h3>Desarrollo de Producto</h3>
          <p>Creamos tu MVP y te ayudamos a iterar hasta encontrar el product-market fit.</p>
          <div class="service-price">$599/mes</div>
        </div>
        <div class="service-card" onclick="selectService('marketing')">
          <div class="service-icon">📈</div>
          <h3>Marketing Digital</h3>
          <p>Estrategias de marketing digital para hacer crecer tu base de clientes.</p>
          <div class="service-price">$399/mes</div>
        </div>
        <div class="service-card" onclick="selectService('financiamiento')">
          <div class="service-icon">💰</div>
          <h3>Financiamiento</h3>
          <p>Te conectamos con inversores y te ayudamos a preparar tu pitch deck.</p>
          <div class="service-price">$199/mes</div>
        </div>
      </div>
    </div>
  </section>
`;

// Emprendimientos Exitosos
const emprendimientos = `
  <section id="emprendimientos" class="success-stories">
    <div class="container">
      <h2 class="section-title">Emprendimientos Exitosos</h2>
      <div class="stories-grid">
        <div class="story-card">
          <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" alt="TechStart" />
          <div class="story-content">
            <h3>TechStart</h3>
            <p>Plataforma SaaS que alcanzó $1M ARR en 18 meses</p>
            <div class="story-metrics">
              <span class="metric">📊 1M+ usuarios</span>
              <span class="metric">💰 $1M ARR</span>
            </div>
          </div>
        </div>
        <div class="story-card">
          <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400" alt="EcoShop" />
          <div class="story-content">
            <h3>EcoShop</h3>
            <p>E-commerce sostenible con 500K+ clientes activos</p>
            <div class="story-metrics">
              <span class="metric">🛒 500K clientes</span>
              <span class="metric">🌱 100% sostenible</span>
            </div>
          </div>
        </div>
        <div class="story-card">
          <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400" alt="HealthApp" />
          <div class="story-content">
            <h3>HealthApp</h3>
            <p>App de salud con 2M+ descargas y $500K funding</p>
            <div class="story-metrics">
              <span class="metric">📱 2M descargas</span>
              <span class="metric">💉 $500K funding</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

// Formulario de Contacto
const contacto = `
  <section id="contacto" class="contact">
    <div class="container">
      <h2 class="section-title">¿Listo para Emprender?</h2>
      <div class="contact-content">
        <div class="contact-info">
          <h3>Contáctanos</h3>
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <span>creactivostudio.geva@gmail.com</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📱</span>
            <span>+54 3883 153-549</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span>San Salvador de Jujuy, Argentina</span>
          </div>
        </div>
        <form class="contact-form" onsubmit="handleSubmit(event)">
          <div class="form-group">
            <input type="text" id="nombre" placeholder="Tu nombre" required />
          </div>
          <div class="form-group">
            <input type="email" id="email" placeholder="Tu email" required />
          </div>
          <div class="form-group">
            <select id="servicio" required>
              <option value="">Selecciona un servicio</option>
              <option value="consultoria">Consultoría Estratégica</option>
              <option value="desarrollo">Desarrollo de Producto</option>
              <option value="marketing">Marketing Digital</option>
              <option value="financiamiento">Financiamiento</option>
            </select>
          </div>
          <div class="form-group">
            <textarea id="mensaje" placeholder="Cuéntanos sobre tu idea..." rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  </section>
`;

// Footer
const footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <img src="/public/logo sin fondo copy.png" alt="CREACTIVO Digital Agency" class="footer-logo" />
          <p>Transformando ideas en negocios exitosos desde San Salvador de Jujuy, Argentina.</p>
        </div>
        <div class="footer-section">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#servicios">Consultoría</a></li>
            <li><a href="#servicios">Desarrollo</a></li>
            <li><a href="#servicios">Marketing</a></li>
            <li><a href="#servicios">Financiamiento</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Síguenos</h4>
          <div class="social-links">
            <a href="#" onclick="openSocial('twitter')">🐦 Twitter</a>
            <a href="#" onclick="openSocial('linkedin')">💼 LinkedIn</a>
            <a href="#" onclick="openSocial('instagram')">📸 Instagram</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 CREACTIVO Digital Agency. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
`;

// Modal
const modal = `
  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="modal-close" onclick="closeModal()">&times;</span>
      <div id="modal-body">
        <h3>🎯 Demo Interactivo</h3>
        <p>Descubre cómo nuestras herramientas pueden transformar tu emprendimiento:</p>
        <div class="demo-features">
          <div class="demo-item" onclick="runDemo('analytics')">
            <span class="demo-icon">📊</span>
            <span>Analytics en Tiempo Real</span>
          </div>
          <div class="demo-item" onclick="runDemo('automation')">
            <span class="demo-icon">🤖</span>
            <span>Automatización de Procesos</span>
          </div>
          <div class="demo-item" onclick="runDemo('insights')">
            <span class="demo-icon">💡</span>
            <span>Insights Inteligentes</span>
          </div>
        </div>
        <div id="demo-result"></div>
      </div>
    </div>
  </div>
`;

// Renderizar la página completa
document.querySelector('#app').innerHTML = `
  ${header}
  ${hero}
  ${servicios}
  ${emprendimientos}
  ${contacto}
  ${footer}
  ${modal}
`;

// Funciones interactivas
window.scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  console.log(`📍 Navegando a sección: ${sectionId}`);
};

window.selectService = (service) => {
  const services = {
    consultoria: 'Consultoría Estratégica seleccionada - $299/mes',
    desarrollo: 'Desarrollo de Producto seleccionado - $599/mes',
    marketing: 'Marketing Digital seleccionado - $399/mes',
    financiamiento: 'Financiamiento seleccionado - $199/mes'
  };
  
  // Remover selección previa
  document.querySelectorAll('.service-card').forEach(card => {
    card.classList.remove('selected');
  });
  
  // Agregar selección actual
  event.target.closest('.service-card').classList.add('selected');
  
  console.log(`✅ ${services[service]}`);
  
  // Mostrar notificación
  showNotification(`${services[service]} - ¡Contáctanos para más información!`);
};

window.openModal = (type) => {
  document.getElementById('modal').style.display = 'flex';
  console.log(`🎯 Modal abierto: ${type}`);
};

window.closeModal = () => {
  document.getElementById('modal').style.display = 'none';
  console.log('❌ Modal cerrado');
};

window.runDemo = (feature) => {
  const demos = {
    analytics: {
      title: '📊 Analytics Demo',
      content: 'Usuarios activos: 15,847 | Conversión: 3.2% | Revenue: $45,230'
    },
    automation: {
      title: '🤖 Automation Demo',
      content: 'Emails enviados: 2,340 | Leads calificados: 156 | Tiempo ahorrado: 40h/semana'
    },
    insights: {
      title: '💡 Insights Demo',
      content: 'Mejor hora para publicar: 2PM | Audiencia principal: 25-34 años | Tendencia: +23%'
    }
  };
  
  const demo = demos[feature];
  document.getElementById('demo-result').innerHTML = `
    <div class="demo-result">
      <h4>${demo.title}</h4>
      <p>${demo.content}</p>
      <div class="demo-chart">
        <div class="chart-bar" style="height: ${Math.random() * 100}%"></div>
        <div class="chart-bar" style="height: ${Math.random() * 100}%"></div>
        <div class="chart-bar" style="height: ${Math.random() * 100}%"></div>
        <div class="chart-bar" style="height: ${Math.random() * 100}%"></div>
      </div>
    </div>
  `;
  
  console.log(`🎯 Demo ejecutado: ${feature}`);
};

window.handleSubmit = (event) => {
  event.preventDefault();
  
  const formData = {
    nombre: document.getElementById('nombre').value,
    email: document.getElementById('email').value,
    servicio: document.getElementById('servicio').value,
    mensaje: document.getElementById('mensaje').value
  };
  
  console.log('📧 Formulario enviado:', formData);
  
  // Simular envío
  showNotification('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
  
  // Limpiar formulario
  event.target.reset();
};

window.openSocial = (platform) => {
  const urls = {
    twitter: 'https://twitter.com/creactivostudio',
    linkedin: 'https://linkedin.com/company/creactivostudio',
    instagram: 'https://instagram.com/creactivostudio'
  };
  
  console.log(`🔗 Abriendo ${platform}: ${urls[platform]}`);
  showNotification(`Redirigiendo a ${platform}...`);
};

// Función para mostrar notificaciones
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Navegación móvil
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    console.log('📱 Menú móvil toggled');
  });
  
  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
});

// Efectos de scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

console.log('🚀 CREACTIVO Digital Agency - Página cargada exitosamente!');
console.log('📊 Funcionalidades disponibles: Navegación, Formularios, Modales, Demos interactivos');