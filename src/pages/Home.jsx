const reviews = [
  ['"Anak nako ang tagiya!"', 'Juvy-len Gozum'],
  ['"Amazing food and excellent service."', 'Jeysi'],
  ['"The ambiance is so cozy and intimate."', 'Reanna'],
  ['"The staff are friendly and attentive."', 'EricaB'],
  [
    '"i love the variety of the dishes they offer and especially the owner."',
    'AJ'
  ],
  ['"Ang sarap 100% dili nako balikan."', 'joben'],
  ['"MIA UY!."', 'GWAPALYKA'],
  ['"Gamay lagi sa personal dako sa picture."', 'jp'],
  ['"ANGA! MIA GID UYYY!."', 'Jaijai']
]

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-copy">
          <h1>WELCOME TO MISHEL RESTAURANT</h1>
          <p>
            Experience the best cuisine in the city.Enjoy our signature dishes
            and cozy ambiance.
          </p>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>Customer testimonials</h2>

          <div className="review-grid">
            {reviews.map(([quote, author]) => (
              <article className="testimonial" key={author}>
                <p>{quote}</p>
                <span> - {author}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
