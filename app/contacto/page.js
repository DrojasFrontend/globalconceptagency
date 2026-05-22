import Header from '@/components/Header';
import ContactBanner from '@/components/ContactBanner';
export const metadata = {
  title: 'Contacto - Global Concept Agency | Agencia Digital Colombia',
  description:
    'Ponte en contacto con nosotros para discutir tu proyecto. Especialistas en GoHighLevel, WordPress y Marketing Digital.',
};

export default function ContactoPage() {
  return (
    <main>
      <Header />
      {/* Hero con formulario */}
      <section>
        <div className="py-5"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 position-relative">
              <img
                className="d-block w-100 h-auto rounded-5 mb-3 mb-lg-0"
                src="/img/single-post.webp"
                alt="Contacto Global Concept Agency"
                style={{ filter: 'grayscale(1)' }}
              />
              <div className="position-lg-absolute bottom-0 start-0 p-lg-5">
                <div className="row">
                  <div className="col-12 col-lg-8">
                    <div className="d-flex flex-column align-items-start bg-white rounded-5 pt-4 p-3 p-lg-5 shadow-lg">
                      <h1 className="fs-2 text-black fw-semibold">Hablemos de tu proyecto</h1>
                      <p className="mb-3">
                        Cuéntanos sobre tu negocio y cómo podemos ayudarte a crecer. Nos encantaría
                        conocer tus objetivos y crear una estrategia personalizada.
                      </p>
                      <form action="#" className="w-100" method="POST">
                        <div className="row g-2">
                          <div className="col-12 col-lg-6">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control bg-gray border-0"
                                id="floatingName"
                                placeholder="Nombre"
                                name="nombre"
                                required
                              />
                              <label htmlFor="floatingName">Nombre</label>
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control bg-gray border-0"
                                id="floatingLastname"
                                placeholder="Apellido"
                                name="apellido"
                                required
                              />
                              <label htmlFor="floatingLastname">Apellido</label>
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="form-floating">
                              <input
                                type="email"
                                className="form-control bg-gray border-0"
                                id="floatingInput"
                                placeholder="correo@ejemplo.com"
                                name="email"
                                required
                              />
                              <label htmlFor="floatingInput">Correo electrónico</label>
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="form-floating">
                              <input
                                type="tel"
                                className="form-control bg-gray border-0"
                                id="floatingPhone"
                                placeholder="Número de teléfono"
                                name="telefono"
                              />
                              <label htmlFor="floatingPhone">Número de teléfono</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <select
                                className="form-control bg-gray border-0"
                                id="floatingService"
                                name="servicio"
                              >
                                <option value="">Selecciona un servicio</option>
                                <option value="gohighlevel">GoHighLevel CRM</option>
                                <option value="wordpress">Desarrollo WordPress</option>
                                <option value="marketing">Marketing Digital</option>
                                <option value="otro">Otro</option>
                              </select>
                              <label htmlFor="floatingService">
                                ¿En qué servicio estás interesado?
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <textarea
                                className="form-control bg-gray border-0"
                                placeholder="Cuéntanos sobre tu proyecto"
                                id="floatingTextarea"
                                name="mensaje"
                              ></textarea>
                              <label htmlFor="floatingTextarea">
                                Cuéntanos sobre tu proyecto
                              </label>
                            </div>
                          </div>
                          <div className="col-12 mt-3">
                            <button type="submit" className="btn btn-black py-1">
                              Enviar mensaje
                              <span
                                className="d-flex align-items-center justify-content-center bg-white rounded-pill"
                                style={{
                                  transform: 'rotate(45deg)',
                                  width: '36px',
                                  height: '36px',
                                }}
                              >
                                <i className="bi bi-arrow-up-short text-black fs-4"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-lg-5 py-4"></div>

      {/* Info de contacto */}
      <section className="px-lg-5">
        <div className="container-fluid">
          <div className="row g-2">
            <div className="col-12 col-lg-4">
              <div className="d-flex flex-column align-items-start bg-black-100 rounded-5 p-4 border border-black-200">
                <span
                  className="d-flex align-items-center justify-content-center bg-white rounded-pill mb-4"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className="bi bi-envelope text-black fs-3"></i>
                </span>
                <h3 className="text-white fw-semibold mb-2">Correo Electrónico</h3>
                <p className="text-white fw-light mb-0">Te responderemos en las próximas 24 horas</p>
                <a
                  href="mailto:hola@globalconceptagency.com"
                  className="text-white fw-semibold mt-3"
                >
                  hola@globalconceptagency.com
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="d-flex flex-column align-items-start bg-black-100 rounded-5 p-4 border border-black-200">
                <span
                  className="d-flex align-items-center justify-content-center bg-white rounded-pill mb-4"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className="bi bi-whatsapp text-black fs-3"></i>
                </span>
                <h3 className="text-white fw-semibold mb-2">WhatsApp</h3>
                <p className="text-white fw-light mb-0">Respuesta rápida para consultas urgentes</p>
                <a
                  href="https://wa.me/573001234567"
                  className="text-white fw-semibold mt-3"
                >
                  +57 300 123 4567
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="d-flex flex-column align-items-start bg-black-100 rounded-5 p-4 border border-black-200">
                <span
                  className="d-flex align-items-center justify-content-center bg-white rounded-pill mb-4"
                  style={{ width: '50px', height: '50px' }}
                >
                  <i className="bi bi-telephone text-black fs-3"></i>
                </span>
                <h3 className="text-white fw-semibold mb-2">Teléfono</h3>
                <p className="text-white fw-light mb-0">
                  Llamadas de lunes a viernes, 9 AM - 6 PM
                </p>
                <a href="tel:+573001234567" className="text-white fw-semibold mt-3">
                  +57 300 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-lg-5 py-4"></div>

      <ContactBanner
        subtitle="¿Listo para transformar tu negocio?"
        title="Empecemos hoy."
        buttonText="Agenda una llamada"
      />

      <div className="py-lg-5 py-4"></div>
    </main>
  );
}
