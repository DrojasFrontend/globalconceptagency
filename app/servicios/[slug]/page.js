import Link from 'next/link';
import ContactBanner from '@/components/ContactBanner';

const services = {
  gohighlevel: {
    metaTitle: 'GoHighLevel CRM - Automatización y Ventas | Global Concept Agency',
    metaDescription:
      'Implementación completa de GoHighLevel CRM. Automatiza tu gestión de ventas, marketing y clientes. Especialistas en Colombia y USA.',
    heroTitle: 'GoHighLevel CRM',
    sidebarTitle: 'GoHighLevel CRM',
    sidebarDescription:
      'La plataforma más potente para automatizar tu gestión de ventas, marketing y atención al cliente. Centraliza todas tus operaciones en un solo lugar.',
    mainTitle: 'Impulsa tu Negocio con Automatización Inteligente',
    features: [
      {
        title: 'CRM Integrado',
        description:
          'Gestiona todos tus contactos y clientes en una plataforma centralizada. Seguimiento automático de oportunidades de venta, historial completo de interacciones y predicción de cierre de tratos con inteligencia artificial.',
      },
      {
        title: 'Automatización de Marketing',
        description:
          'Crea campañas de email marketing automatizadas, seguimiento de leads y secuencias de venta. Aumenta conversiones sin aumentar tu equipo. Segmentación avanzada para mensajes personalizados que realmente funcionan.',
      },
      {
        title: 'Facturación y Pagos',
        description:
          'Genera facturas automáticas, procesa pagos en línea y realiza un seguimiento de tus ingresos. Sistema completo de facturación integrado para que no tengas que salir de la plataforma. Múltiples métodos de pago y reportes en tiempo real.',
      },
    ],
    banner: {
      subtitle: 'Listo para automatizar tu negocio',
      title: 'Implementemos GoHighLevel hoy.',
      buttonText: 'Agendar llamada',
    },
  },
  wordpress: {
    metaTitle: 'Desarrollo WordPress | Sitios Optimizados para SEO | Global Concept Agency',
    metaDescription:
      'Desarrollo de sitios WordPress profesionales, responsivos y optimizados para SEO. Soluciones personalizadas para tu negocio.',
    heroTitle: 'Desarrollo WordPress',
    sidebarTitle: 'Desarrollo WordPress',
    sidebarDescription:
      'Sitios web profesionales, escalables y optimizados para SEO. WordPress te da el control total y nosotros creamos soluciones personalizadas que crecen con tu negocio.',
    mainTitle: 'Sitios Web que Potencian tu Negocio',
    features: [
      {
        title: 'Diseño Personalizado',
        description:
          'Creamos diseños únicos que reflejan la identidad de tu marca. Temas personalizados desarrollados desde cero, optimizados para todos los dispositivos y con una experiencia de usuario excepcional.',
      },
      {
        title: 'Optimización SEO',
        description:
          'Cada sitio que construimos está optimizado técnicamente para los motores de búsqueda. Velocidad de carga, estructura semántica correcta, metadatos optimizados y URLs amigables para maximizar tu visibilidad.',
      },
      {
        title: 'Integración y Escalabilidad',
        description:
          'Integramos las herramientas que tu negocio necesita: CRMs, pasarelas de pago, formularios avanzados y más. Arquitectura escalable que crece con tu empresa sin necesidad de migraciones costosas.',
      },
    ],
    banner: {
      subtitle: 'Transforma tu presencia digital',
      title: 'Construyamos tu sitio WordPress hoy.',
      buttonText: 'Hablemos',
    },
  },
  'marketing-digital': {
    metaTitle: 'Marketing Digital | SEO y Publicidad | Global Concept Agency',
    metaDescription:
      'Estrategias de marketing digital integrales. SEO, publicidad digital, email marketing y content marketing. Resultados medibles.',
    heroTitle: 'Marketing Digital',
    sidebarTitle: 'Marketing Digital',
    sidebarDescription:
      'Estrategias integrales que atraen, convierten y retienen clientes. SEO, publicidad digital, email marketing y content marketing trabajando juntos para tu crecimiento.',
    mainTitle: 'Estrategias Digitales que Generan Resultados',
    features: [
      {
        title: 'SEO y Posicionamiento',
        description:
          'Optimizamos tu presencia orgánica en Google y otros buscadores. Investigación de palabras clave, optimización on-page, link building y SEO técnico para que tus clientes potenciales te encuentren primero.',
      },
      {
        title: 'Publicidad Digital',
        description:
          'Campañas de Google Ads, Meta Ads y LinkedIn Ads con segmentación precisa. Maximizamos tu ROI con estrategias basadas en datos, pruebas A/B constantes y optimización continua de presupuesto.',
      },
      {
        title: 'Email y Content Marketing',
        description:
          'Creamos contenido que educa, entretiene y convierte. Estrategias de email marketing automatizado, blogs, videos y redes sociales que construyen comunidad y generan leads calificados para tu negocio.',
      },
    ],
    banner: {
      subtitle: 'Crece con marketing inteligente',
      title: 'Diseñemos tu estrategia digital.',
      buttonText: 'Hablemos',
    },
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return { title: service.metaTitle, description: service.metaDescription };
}

export default async function ServicioPage({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return <p className="text-white p-5">Servicio no encontrado.</p>;

  return (
    <main>
      {/* Hero */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="position-relative overflow-hidden">
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-black-100 opacity-50 z-1"></span>
                <img
                  className="d-block position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded-5"
                  src="/img/single-servicio.webp"
                  alt={service.heroTitle}
                />
                <div className="position-relative text-center z-1">
                  <div className="py-5"></div>
                  <h1 className="display-1 text-white">{service.heroTitle}</h1>
                  <div className="py-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-lg-5 py-4"></div>

      {/* Contenido */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-4 mb-4 mb-xl-0">
              <div className="d-flex flex-column gap-2 position-sticky" style={{ top: '50px' }}>
                <div className="d-flex flex-column align-items-start bg-black-100 rounded-5 p-3 p-xl-5 shadow-lg">
                  <h2 className="fs-1 fw-semibold mb-3 text-white">{service.sidebarTitle}</h2>
                  <p className="text-white mb-4">{service.sidebarDescription}</p>
                  <Link href="/contacto" className="btn btn-secondary">
                    Contáctanos
                    <span
                      className="d-flex align-items-center justify-content-center bg-black rounded-pill"
                      style={{ transform: 'rotate(45deg)', width: '36px', height: '36px' }}
                    >
                      <i className="bi bi-arrow-up-short text-white fs-4"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8">
              <img
                className="d-block w-100 h-auto rounded-5 mb-5"
                src="/img/globalconceptagency-proyecto-1.webp"
                alt={service.mainTitle}
              />
              <h2 className="fs-2 text-white fw-semibold m-0">{service.mainTitle}</h2>
              <div className="pt-5">
                {service.features.map((feature, index) => (
                  <div key={index}>
                    <div className="row">
                      <div className="col-12 col-lg-4">
                        <h3 className="fs-4 text-white m-0">{feature.title}</h3>
                      </div>
                      <div className="col-12 col-lg-8">
                        <p className="text-white mb-0">{feature.description}</p>
                      </div>
                    </div>
                    {index < service.features.length - 1 && (
                      <div className="pt-4 pt-lg-5 mt-4 mt-lg-5 border-top border-white-100"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-lg-5 py-4"></div>

      <ContactBanner
        subtitle={service.banner.subtitle}
        title={service.banner.title}
        buttonText={service.banner.buttonText}
      />

      <div className="py-lg-5 py-4"></div>
    </main>
  );
}
