import Link from 'next/link';
import Header from '@/components/Header';
import ContactBanner from '@/components/ContactBanner';
import ProjectsSwiper from '@/components/ProjectsSwiper';
import CurvedLoop from '@/components/CurvedLoop';

const projects = [
  {
    title: 'Global Concept Agency',
    category: 'Desarrollo Web',
    image: '/img/globalconceptagency-hero.webp',
    url: '#',
  },
  {
    title: 'Cuatro Bistro',
    category: 'Desarrollo Web',
    image: '/img/globalconceptagency-hero.webp',
    url: '#',
  },
  {
    title: 'Global Concept Agency',
    category: 'Marketing Digital',
    image: '/img/globalconceptagency-hero.webp',
    url: '#',
  },
  {
    title: 'Global Concept Agency',
    category: 'GoHighLevel CRM',
    image: '/img/globalconceptagency-hero.webp',
    url: '#',
  },
];

const posts = [
  {
    title: 'Optimizando Operaciones para Maximizar Rendimiento y Resultados',
    author: 'Roberto Varela',
    date: '21 de Mayo, 2026',
    image: '/img/globalconceptagency-blog-1.webp',
    authorImage: '/img/profile-1.webp',
    slug: 'optimizando-operaciones',
  },
  {
    title: 'Optimizando Operaciones para Maximizar Rendimiento y Resultados',
    author: 'Roberto Varela',
    date: '21 de Mayo, 2026',
    image: '/img/globalconceptagency-blog-1.webp',
    authorImage: '/img/profile-1.webp',
    slug: 'optimizando-operaciones',
  },
  {
    title: 'Optimizando Operaciones para Maximizar Rendimiento y Resultados',
    author: 'Roberto Varela',
    date: '21 de Mayo, 2026',
    image: '/img/globalconceptagency-blog-1.webp',
    authorImage: '/img/profile-1.webp',
    slug: 'optimizando-operaciones',
  },
];

export default function HomePage() {
  return (
    <main>
      <Header />
      {/* Hero */}
      <section
        className="position-relative vh-100 overflow-hidden"
        style={{ filter: 'brightness(.7) contrast(2)' }}
      >
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-12">
              <div className="position-absolute top-0 start-0 w-100 h-100">
                <video className="w-100" src="/video.mp4" autoPlay muted loop />
              </div>
              <div className="position-relative d-flex flex-column align-items-center justify-content-end w-100 h-100 text-center">
                <div className="row">
                  <div className="col-12 col-lg-7 mx-auto">
                    <h1 className="display-4 text-white fw-semibold">
                      Impulsa tu negocio con soluciones digitales estratégicas
                    </h1>
                    <p className="text-white fs-5 mb-4">
                      En Global Concept Agency transformamos ideas en resultados medibles.
                      Especialistas en GoHighLevel CRM, desarrollo WordPress personalizado y
                      estrategias de marketing digital para empresas en crecimiento.
                    </p>
                    <div className="d-flex flex-column flex-lg-row justify-content-center gap-3">
                      <Link href="/contacto" className="btn btn-primary border-0">
                        Agendar llamada
                        <span
                          className="d-flex align-items-center justify-content-center bg-white rounded-pill"
                          style={{ transform: 'rotate(45deg)', width: '36px', height: '36px' }}
                        >
                          <i className="bi bi-arrow-up-short text-black fs-4"></i>
                        </span>
                      </Link>
                      <a href="#servicios" className="btn btn-secondary">
                        Ver servicios
                        <span
                          className="d-flex align-items-center justify-content-center rounded-pill bg-black"
                          style={{ width: '36px', height: '36px' }}
                        >
                          <i className="bi bi-code-slash text-white"></i>
                        </span>
                      </a>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Servicios */}
      <section className="px-lg-5" id="servicios">
        <div className="py-lg-5 py-4"></div>

        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-12 col-lg-5">
              <h2 className="fs-1 fw-semibold text-white mb-4 mb-lg-0">
                Soluciones digitales completas para tu empresa
              </h2>
            </div>
            <div className="col-12 col-lg-7">
              <p className="text-white fs-5 mb-0">
                Ofrecemos servicios integrados de GoHighLevel CRM, desarrollo web con WordPress y
                estrategias de marketing digital que generan crecimiento real. Con más de 2 años de
                experiencia en el mercado, entendemos los desafíos de las empresas en Colombia y
                Estados Unidos.
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-12 col-lg-7 pe-lg-2 mb-2 mb-lg-0">
              <Link href="/servicios/gohighlevel" className="text-decoration-none d-block h-100">
                <div
                  className="position-relative d-flex flex-column justify-content-center bg-black-100 rounded-5 border border-black-200 h-100 overflow-hidden"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <div className="p-4 position-relative z-1">
                    <span
                      className="d-flex align-items-center justify-content-center bg-white rounded-pill mb-4"
                      style={{ width: '50px', height: '50px' }}
                    >
                      <i className="bi bi-rocket-takeoff text-black fs-3"></i>
                    </span>
                    <h3 className="text-white fw-semibold">GoHighLevel CRM</h3>
                    <p className="fs-5 text-white fw-light mb-0">
                      Automatiza tu gestión de ventas y clientes. Integra toda tu operación en una
                      plataforma potente: CRM, marketing automation, facturación y más.
                      Implementamos GoHighLevel para que tu equipo cierre más ventas en menos tiempo.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-lg-5">
              <div className="row">
                <div className="col-12 mb-2">
                  <Link href="/servicios/wordpress" className="text-decoration-none d-block">
                    <div
                      className="position-relative bg-black-100 rounded-5 border border-black-200 p-4"
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      <span
                        className="d-flex align-items-center justify-content-center bg-white rounded-pill mb-4"
                        style={{ width: '50px', height: '50px' }}
                      >
                        <i className="bi bi-code-slash text-black fs-3"></i>
                      </span>
                      <h3 className="text-white fw-semibold">Desarrollo WordPress</h3>
                      <p className="text-white fw-light mb-0">
                        Sitios web profesionales y escalables. WordPress es la plataforma ideal para
                        empresas que necesitan control total. Creamos soluciones personalizadas,
                        optimizadas para SEO y velocidad, que se adaptan a tu negocio.
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-12">
                  <Link href="/servicios/marketing-digital" className="text-decoration-none d-block">
                    <div
                      className="position-relative bg-black-100 rounded-5 border border-black-200 p-4"
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      <span
                        className="d-flex align-items-center justify-content-center bg-white rounded-pill mb-4"
                        style={{ width: '50px', height: '50px' }}
                      >
                        <i className="bi bi-clipboard-data text-black fs-3"></i>
                      </span>
                      <h3 className="text-white fw-semibold">Marketing Digital</h3>
                      <p className="text-white fw-light mb-0">
                        Estrategias que generan resultados. SEO, publicidad digital, content
                        marketing y email marketing. Posicionamos tu marca en línea y atraemos
                        clientes calificados que convierten en ventas.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-lg-5 py-4"></div>
      {/* Proyectos */}
      <section id="proyectos">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 col-lg-7 mx-auto text-center">
              <h2 className="fs-1 fw-semibold text-white">Nuestros Proyectos</h2>
              <p className="text-white fs-5 mb-0">
                Trabajamos con empresas de diversos sectores, entregando soluciones digitales que
                generan impacto real en sus resultados y crecimiento.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-12">
              <ProjectsSwiper projects={projects} />
            </div>
          </div>
        </div>
      </section>
      <div className="py-lg-5 py-4"></div>
      {/* Blog */}
      <section className="px-lg-5">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 col-xl-6">
              <h2 className="fs-1 fw-semibold text-white">Últimas Noticias</h2>
              <p className="text-white fs-5 mb-0">
                Mantente actualizado con las tendencias y estrategias más efectivas en
                transformación digital, GoHighLevel, WordPress y marketing online.
              </p>
            </div>
          </div>
          <div className="row">
            {posts.map((post, index) => (
              <div key={index} className="col-12 col-lg-4">
                <div className="position-relative">
                  <div className="position-relative">
                    <img
                      className="d-block w-100 h-auto mb-3 rounded-5"
                      src={post.image}
                      alt={post.title}
                      style={{ filter: 'grayscale(1)' }}
                    />
                    <span className="position-absolute bottom-0 start-0 m-2 d-flex align-items-center gap-2 bg-black-100 rounded-5 border border-black-200 p-1 pe-3">
                      <img
                        width={36}
                        height={36}
                        className="d-block"
                        src={post.authorImage}
                        alt={post.author}
                      />
                      <p className="text-white mb-0">{post.author}</p>
                    </span>
                  </div>
                  <h3 className="fs-6 fw-semibold mb-0 text-white">{post.title}</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="d-flex align-items-center gap-2 text-white text-decoration-none"
                    >
                      Leer más
                      <i className="bi bi-arrow-right-short fs-4"></i>
                    </Link>
                    <span className="d-flex align-items-center gap-2">
                      <i className="bi bi-calendar-date text-white"></i>
                      <p className="text-white mb-0 small">{post.date}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-lg-5 py-4"></div>
      {/* CurvedLoop marquee */}
      <CurvedLoop
        marqueeText="GoHighLevel ✦ WordPress ✦ Marketing Digital ✦ Global Concept Agency ✦"
        speed={2}
        curveAmount={0}
        direction="left"
        interactive={true}
        className="font-chillax fill-green fw-normal"
      />

      <ContactBanner
        subtitle="Contacto"
        title="Hagamos brillar tu presencia digital."
        buttonText="Hablemos"
      />

      <div className="py-lg-5 py-4"></div>
    </main>
  );
}
