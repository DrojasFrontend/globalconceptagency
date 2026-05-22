export default function Footer() {
  return (
    <footer className="p-lg-5 p-4">
      <div className="container-fluid">
        <div className="row d-flex flex-lg-row flex-column-reverse align-items-center">
          <div className="col-12 col-lg-6">
            <p className="small text-white mb-0">
              2026 © Diseñado y desarrollado con dedicación por Global Concept Agency
            </p>
          </div>
          <div className="col-12 col-lg-6 mb-lg-0 mb-4">
            <div className="d-flex flex-lg-row flex-column justify-content-lg-end justify-content-center align-items-center gap-3">
              <p className="text-white mb-0">Síguenos en</p>
              <div className="d-flex gap-2">
                <a
                  href=""
                  className="d-flex align-items-center justify-content-center fs-5 text-white rounded-pill"
                  style={{ width: '40px', height: '40px' }}
                >
                  <span className="visually-hidden">LinkedIn</span>
                  <i className="bi bi-linkedin text-white opacity-50"></i>
                </a>
                <a
                  href=""
                  className="d-flex align-items-center justify-content-center fs-5 text-white rounded-pill"
                  style={{ width: '40px', height: '40px' }}
                >
                  <span className="visually-hidden">WhatsApp</span>
                  <i className="bi bi-whatsapp text-white opacity-50"></i>
                </a>
                <a
                  href=""
                  className="d-flex align-items-center justify-content-center fs-5 text-white rounded-pill"
                  style={{ width: '40px', height: '40px' }}
                >
                  <span className="visually-hidden">GitHub</span>
                  <i className="bi bi-github text-white opacity-50"></i>
                </a>
                <a
                  href=""
                  className="d-flex align-items-center justify-content-center fs-5 text-white rounded-pill"
                  style={{ width: '40px', height: '40px' }}
                >
                  <span className="visually-hidden">Email</span>
                  <i className="bi bi-at text-white opacity-50"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
