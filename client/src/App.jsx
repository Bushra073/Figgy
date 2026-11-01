
import './styles/animations.css'
import './styles/landing.css'

const features = [
  {
    number: '01',
    title: 'Find your way',
    description:
      'Break confusing procedures into clear, manageable steps.',
    symbol: '↗',
  },
  {
    number: '02',
    title: 'Keep things together',
    description:
      'Organize important documents and stay ahead of deadlines.',
    symbol: '▤',
  },
  {
    number: '03',
    title: 'Save what matters',
    description:
      'Keep useful links, guides, and ideas somewhere you can find them.',
    symbol: '⌑',
  },
]

function App() {
  return (
    <main className="landing-page">
      {/* Background atmosphere */}
      <div className="landing-glow landing-glow--one" />
      <div className="landing-glow landing-glow--two" />
      <div className="landing-grain" />

      {/* Header */}
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Uncomplicated home"
        >
          <span className="brand-symbol">u.</span>
          <span className="brand-name">UNCOMPLICATED</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#why">Why Uncomplicated</a>
          <a href="#features">What you can do</a>
        </nav>

        <div className="auth-actions">
          <button
            type="button"
            className="glass-button glass-button--quiet"
            onClick={() => alert('Login will be implemented later.')}
          >
            Log in
          </button>

          <button
            type="button"
            className="glass-button glass-button--primary"
            onClick={() => alert('Sign up will be implemented later.')}
          >
            Sign up <span aria-hidden="true">↗</span>
          </button>
        </div>
      </header>

      {/* Hero / Welcome */}
      <section className="hero-section" id="top">
        <div className="hero-eyebrow">
          <span className="status-dot" />
          A little more clarity, every day
        </div>

        {/* Existing wordmark */}
        <div className="hero-wordmark">
          <div className="wordmark">
            <span className="wordmark__old">complicated</span>
            <span className="wordmark__prefix">un</span>
            <span className="wordmark__final">uncomplicated</span>
          </div>
        </div>

        <h1 className="hero-heading">
          Life is complicated.
          <span>Keeping track shouldn&apos;t be.</span>
        </h1>

        <p className="hero-description">
          Your personal space to navigate unfamiliar procedures,
          organize important documents, and keep useful knowledge close.
          Less searching. Less second-guessing. More peace of mind.
        </p>

        <div className="hero-actions">
          <button
            type="button"
            className="glass-button glass-button--primary glass-button--large"
            onClick={() => alert('The dashboard will be connected later.')}
          >
            Explore your space <span aria-hidden="true">↗</span>
          </button>

          <a className="text-link" href="#features">
            Get to know us <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-note">
          <span className="note-line" />
          One place for the things life asks of you.
        </div>

        {/* Decorative rings */}
        <div className="hero-orbit hero-orbit--one" />
        <div className="hero-orbit hero-orbit--two" />
      </section>

      {/* Features */}
      <section className="features-section" id="features">
        <div className="section-heading">
          <div>
            <p className="section-kicker">
              A calmer way to stay on top of life
            </p>

            <h2>
              Three things.
              <br />
              <em>One less thing to worry about.</em>
            </h2>
          </div>

          <p className="section-intro">
            From figuring out what to do next to remembering where
            you saved that useful guide — it all belongs here.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-card-top">
                <span className="feature-number">
                  {feature.number}
                </span>

                <span className="feature-symbol" aria-hidden="true">
                  {feature.symbol}
                </span>
              </div>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <span className="feature-bottom-line" />
            </article>
          ))}
        </div>
      </section>

      {/* Closing call to action */}
      <section className="closing-section">
        <p className="section-kicker">Your life admin, reimagined</p>

        <h2>
          Make room for
          <br />
          <em>what matters.</em>
        </h2>

        <button
          type="button"
          className="glass-button glass-button--light glass-button--large"
          onClick={() => alert('Getting started will be implemented later.')}
        >
          Let&apos;s get started <span aria-hidden="true">↗</span>
        </button>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <a
          className="brand"
          href="#top"
          aria-label="Back to top"
        >
          <span className="brand-symbol">u.</span>
          <span className="brand-name">UNCOMPLICATED</span>
        </a>

        <span>Less chaos. More clarity.</span>
        <span>Made for real life.</span>
      </footer>
    </main>
  )
}

export default App
