import Nav from '../components/Nav'

const NAV_LINKS = [
  { label: 'Research', href: '#research' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'Team', href: '#team' },
]

const TEAM_MEMBERS = [
  {
    name: 'Rauno Arike',
    role: 'Managing Director & Research Scientist',
    img: '/images/rauno-arike.jpeg',
    url: 'https://www.lesswrong.com/users/rauno-arike',
  },
  {
    name: 'Shubhorup Biswas',
    role: 'Research Scientist',
    img: '/images/shubhorup-biswas.jpg',
    url: 'https://www.lesswrong.com/users/shubhorup-biswas',
  },
  {
    name: 'Dennis Akar',
    role: 'Research Scientist',
    img: '/images/dennis.webp',
    url: 'https://www.lesswrong.com/users/dennis-akar',
  },
  {
    name: 'Vladimir Ivanov',
    role: 'Research Scientist',
    img: '/images/vlad.webp',
    url: 'https://www.lesswrong.com/users/vladimir-ivanov',
  },
  {
    name: 'Joey Yudelson',
    role: 'Research Scientist',
    img: '/images/joey.webp',
    url: 'https://www.lesswrong.com/users/joey-yudelson',
  },
]

const ADVISORS = [
  {
    name: 'Rohan Subramani',
    org: 'Founder of Aether; Coefficient Giving',
    img: '/images/rohan-subramani.jpeg',
    url: 'https://rohansubramani.github.io/home/',
  },
  {
    name: 'Seth Herd',
    org: 'Astera Institute',
    img: '/images/seth-herd.jpg',
    url: 'https://www.lesswrong.com/users/seth-herd',
  },
  {
    name: 'Marius Hobbhahn',
    org: 'Apollo Research',
    img: '/images/marius-hobbhahn.jpeg',
    url: 'https://www.mariushobbhahn.com/',
  },
  {
    name: 'Erik Jenner',
    org: 'Google DeepMind',
    img: '/images/erik-jenner.png',
    url: 'https://ejenner.com/',
  },
  {
    name: 'Zhijing Jin',
    org: 'University of Toronto',
    img: '/images/zhijing-jin.webp',
    url: 'https://www.zhijing-jin.com/',
  },
  {
    name: 'Francis Rhys Ward',
    org: 'Independent',
    img: '/images/francis-rhys-ward.webp',
    url: 'https://francisrhysward.wordpress.com/',
  },
]

export default function Home() {
  return (
    <>
      <Nav links={NAV_LINKS} />

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Aether</h1>
            <p className="tagline">AI Safety Research</p>
            <p className="mission-text">
              Aether is an AI safety research group working on ensuring the responsible development of AI technologies. We have mainly focused on chain-of-thought monitorability research in the past, but are open to various other research directions that can positively influence AGI companies, governments, and the broader AI safety field. We are funded by Coefficient Giving.
            </p>
          </div>
          <div className="hero-cta">
            <a
              href="https://discord.gg/5WjVBtgAhB"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Join our Discord
            </a>
          </div>
        </div>
      </section>

      <section id="research" className="research">
        <div className="container">
          <h2 className="section-title section-title-only">Research</h2>

          <div className="research-list">
            <div className="research-item">
              <div className="research-content">
                <h3>Chain-of-Thought Monitoring & Hidden Reasoning</h3>
                <p>
                  Our primary research focus has been on chain-of-thought monitoring. We
                  investigate how information access affects LLM monitors' ability to detect
                  sabotage and other safety-critical behaviors. We've also developed a
                  taxonomy for understanding hidden reasoning processes within LLMs,
                  providing a structured framework for analyzing covert reasoning mechanisms.
                </p>

                <div className="pub-group">
                  <h4 className="pub-group-label">Papers</h4>
                  <ul className="pub-list">
                    <li>
                      <a href="https://arxiv.org/abs/2601.21112" target="_blank" rel="noopener noreferrer">
                        How does information access affect LLM monitors' ability to detect sabotage?
                      </a>
                    </li>
                    <li>
                      Think Fast: Estimating No-CoT Task-Completion Time Horizons of Frontier AI Models{' '}
                      <span className="forthcoming">(forthcoming)</span>
                    </li>
                  </ul>
                </div>

                <div className="pub-group">
                  <h4 className="pub-group-label">Blog posts</h4>
                  <ul className="pub-list">
                    <li>
                      <a href="https://www.lesswrong.com/posts/ZrgFfeWuckpwK5Lyi/hidden-reasoning-in-llms-a-taxonomy" target="_blank" rel="noopener noreferrer">
                        Hidden Reasoning in LLMs: A Taxonomy
                      </a>
                    </li>
                    <li>
                      <a href="https://www.lesswrong.com/posts/zkccztuSjLshffrNr/13-arguments-about-a-transition-to-neuralese-ais" target="_blank" rel="noopener noreferrer">
                        13 Arguments About a Transition to Neuralese AIs
                      </a>
                    </li>
                    <li>
                      <a href="https://www.lesswrong.com/posts/g8by3avjatXnpvM4A/should-we-train-against-cot-monitors-1" target="_blank" rel="noopener noreferrer">
                        Should We Train Against (CoT) Monitors?
                      </a>
                    </li>
                    <li>
                      <a href="https://www.lesswrong.com/posts/9z6TuKEgZNsmqdfy6/exploring-reinforcement-learning-effects-on-chain-of-thought" target="_blank" rel="noopener noreferrer">
                        Exploring Reinforcement Learning Effects on Chain-of-Thought Legibility
                      </a>
                    </li>
                    <li>
                      <a href="https://www.lesswrong.com/posts/QdQnM4v8KbLZZdjH5/efficiently-detecting-hidden-reasoning-with-a-small" target="_blank" rel="noopener noreferrer">
                        Efficiently Detecting Hidden Reasoning with a Small Predictor Model
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="research-figure">
                <img src="/images/info_access.png" alt="Information Access Research" />
              </div>
            </div>

            <div className="research-item">
              <div className="research-content">
                <h3>Emerging Research Areas</h3>
                <p>
                  We're exploring topics including shaping the generalization of LLM
                  personas, interpretable continual learning, and pretraining data
                  filtering. Our research agenda remains flexible to focus on the most
                  impactful projects.
                </p>

                <div className="pub-group">
                  <ul className="pub-list">
                    <li>
                      <a href="https://static1.squarespace.com/static/68c0e2a71bf8b3372a371105/t/69fc5a58aa38606b69ae9b02/1778145880719/Continual_Learning_camera_ready.pdf" target="_blank" rel="noopener noreferrer">
                        Continual Learning in LLM Agents: Capabilities, Risks, and Research Directions
                      </a>
                    </li>
                    <li>
                      <a href="https://www.lesswrong.com/posts/6EwuCH3vZ7qvPt82k/a-list-of-research-directions-in-character-training" target="_blank" rel="noopener noreferrer">
                        A List of Research Directions in Character Training
                      </a>
                    </li>
                    <li>
                      Tentative Recommendations for Pretraining Data Filtering{' '}
                      <span className="forthcoming">(forthcoming)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="research-figure">
                <img src="/images/CL_robot.png" alt="CL Robot" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="get-involved" className="hiring">
        <div className="container">
          <h2 className="section-title section-title-only">Get Involved</h2>

          <div className="get-involved-content" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 17, color: 'var(--text-light)', lineHeight: 1.7 }}>
              We are not accepting applications right now, but people who are interested in
              positions can view details about our last hiring round{' '}
              <a href="/past-hiring">here</a>.
            </p>
            <div className="hero-cta" style={{ marginTop: 24 }}>
              <a
                href="https://discord.gg/5WjVBtgAhB"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container">
          <h2 className="section-title section-title-only">Our Team</h2>

          <div className="team-grid">
            {TEAM_MEMBERS.map(({ name, role, img, url }) => (
              <div key={name} className="team-member">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <div className="team-member-avatar">
                    {img && <img src={img} alt={name} />}
                  </div>
                </a>
                <h3>
                  <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                </h3>
                <p>{role}</p>
              </div>
            ))}
          </div>

          <div className="advisors">
            <h2 className="section-title" style={{ fontSize: 36 }}>Advisors</h2>
            <div className="advisors-grid">
              {ADVISORS.map(({ name, org, img, url }) => (
                <div key={name} className="advisor">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <div className="advisor-avatar">
                      <img src={img} alt={name} />
                    </div>
                  </a>
                  <h4>
                    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
                  </h4>
                  <p>{org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
