import Link from 'next/link';

const posts = {
  'optimizando-operaciones': {
    title: 'Optimizing Operations to Maximize Performance and Results',
    author: 'Roberto Varela',
    authorImage: '/img/profile-1.webp',
    date: 'May 20, 2026',
    image: '/img/single-post.webp',
    tags: ['Web Development', 'Digital Marketing'],
    metaTitle: 'Optimizando Operaciones para Maximizar Rendimiento | Blog - Global Concept Agency',
    metaDescription:
      'Descubre estrategias y tendencias en transformación digital, GoHighLevel, WordPress y marketing online para tu negocio.',
    content: [
      {
        type: 'intro',
        text: 'The design world is evolving rapidly, influenced by technology, user behavior, and emerging aesthetics. As we move into 2025, new trends are shaping digital and product design. This article explores the key innovations that will define the future of design.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Evolution of Design in 2026',
      },
      {
        type: 'paragraph',
        text: 'The design world is evolving rapidly, influenced by technology, user behavior, and emerging aesthetics. As we move into 2025, new trends are shaping digital and product design. This article explores the key innovations that will define the future of design.',
      },
      {
        type: 'paragraph',
        text: 'The design world is evolving rapidly, influenced by technology, user behavior, and emerging aesthetics. As we move into 2025, new trends are shaping digital and product design. This article explores the key innovations that will define the future of design.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Merging Digital and Physical Experiences',
      },
      {
        type: 'paragraph',
        text: 'The design world is evolving rapidly, influenced by technology, user behavior, and emerging aesthetics. As we move into 2025, new trends are shaping digital and product design. This article explores the key innovations that will define the future of design.',
      },
    ],
    related: [
      {
        slug: 'optimizando-operaciones',
        title: 'Optimizing Operations to Maximize Performance and Results',
        author: 'Roberto Varela',
        authorImage: '/img/profile-1.webp',
        date: 'May 20, 2026',
      },
      {
        slug: 'optimizando-operaciones',
        title: 'Optimizing Operations to Maximize Performance and Results',
        author: 'Roberto Varela',
        authorImage: '/img/profile-1.webp',
        date: 'May 20, 2026',
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return { title: post.metaTitle, description: post.metaDescription };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return <p className="text-white p-5">Post no encontrado.</p>;

  return (
    <main>
      {/* Header */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 position-relative">
              <img
                className="d-block w-100 h-auto rounded-5 mb-3 mb-lg-0"
                src={post.image}
                alt={post.title}
                style={{ filter: 'grayscale(1)' }}
              />
              <div className="position-lg-absolute bottom-0 start-0 p-lg-5">
                <div className="row">
                  <div className="col-12 col-lg-8">
                    <div className="d-flex flex-column align-items-start bg-white rounded-5 p-lg-5 p-3 shadow-lg">
                      <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-start align-items-lg-center gap-2 w-100 mb-3">
                        <span className="d-flex align-items-center gap-2 bg-black-100 rounded-5 border border-black-200 p-1 pe-3">
                          <img
                            width={36}
                            height={36}
                            className="d-block"
                            src={post.authorImage}
                            alt={post.author}
                          />
                          <p className="text-white mb-0">{post.author}</p>
                        </span>
                        <span className="d-flex align-items-center gap-2">
                          <i className="bi bi-calendar-date text-black"></i>
                          <p className="mb-0 small text-black">{post.date}</p>
                        </span>
                      </div>
                      <h1 className="fs-2 text-black fw-semibold mb-4">{post.title}</h1>
                      <div className="d-flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <p key={tag} className="badge bg-gray text-black shadow-lg mb-0">
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
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
            <div className="col-12 col-xl-8 mb-4 mb-xl-0">
              {post.content.map((block, i) => {
                if (block.type === 'intro') {
                  return (
                    <p key={i} className="text-white fs-3 mb-5">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === 'heading') {
                  const Tag = `h${block.level}`;
                  return (
                    <Tag key={i} className="fs-1 fw-semibold text-white mt-5 mb-3">
                      {block.text}
                    </Tag>
                  );
                }
                if (block.type === 'paragraph') {
                  return (
                    <p key={i} className="text-white fs-5">
                      {block.text}
                    </p>
                  );
                }
                return null;
              })}
            </div>
            <div className="col-12 col-xl-4">
              <div className="d-flex flex-column gap-2 position-sticky" style={{ top: '50px' }}>
                <h2 className="fs-1 fw-semibold text-white mb-3">Related News</h2>
                {post.related.map((rel, i) => (
                  <article
                    key={i}
                    className="d-flex flex-column align-items-start gap-3 bg-black-100 rounded-5 p-3 shadow-lg"
                  >
                    <span className="d-flex align-items-center gap-2 bg-black-100 rounded-5 border border-black-200 p-1 pe-3">
                      <img
                        width={36}
                        height={36}
                        className="d-block"
                        src={rel.authorImage}
                        alt={rel.author}
                      />
                      <p className="text-white mb-0">{rel.author}</p>
                    </span>
                    <h3 className="fs-6 fw-semibold mb-0 text-white">{rel.title}</h3>
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <Link
                        href={`/blog/${rel.slug}`}
                        className="d-flex align-items-center gap-2 text-white text-decoration-none"
                      >
                        Learn more
                        <i className="bi bi-arrow-right-short fs-4"></i>
                      </Link>
                      <span className="d-flex align-items-center gap-2">
                        <i className="bi bi-calendar-date text-white"></i>
                        <p className="text-white mb-0 small">{rel.date}</p>
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-lg-5 py-4"></div>
    </main>
  );
}
