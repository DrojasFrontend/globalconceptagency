import Link from 'next/link';

export default function ContactBanner({ subtitle, title, buttonText = 'Hablemos' }) {
  return (
    <section className="px-lg-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="bg-green p-lg-5 p-4 rounded-5">
              <div className="row">
                <div className="col-12 col-xl-9 mb-4 mb-xl-0">
                  {subtitle && <h2 className="fs-3">{subtitle}</h2>}
                  <h3 className="display-1 mb-0">{title}</h3>
                </div>
                <div className="col-12 col-xl-3">
                  <div className="d-flex align-items-end justify-content-end h-100">
                    <Link href="/contacto" className="btn btn-black">
                      {buttonText}
                      <span
                        className="d-flex align-items-center justify-content-center bg-white rounded-pill"
                        style={{ transform: 'rotate(45deg)', width: '36px', height: '36px' }}
                      >
                        <i className="bi bi-arrow-up-short text-black fs-4"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
