import Nav from '../components/Nav'

export default function PastHiring() {
  return (
    <>
      <Nav />

      <section className="hiring">
        <div className="container">
          <h2 className="section-title section-title-only">Past Hiring Round (Closed)</h2>

          <p className="closed-notice">
            This hiring round has closed. The details below are preserved for reference.
          </p>

          <div className="hiring-list">
            <div className="hiring-item">
              <h3>Position Details</h3>
              <ul>
                <li><strong>Openings:</strong> 1-2 researchers</li>
                <li><strong>Start Date:</strong> Between February and May 2026</li>
                <li><strong>Duration:</strong> Through end of 2026, with possibility of extension</li>
                <li><strong>Compensation:</strong> ~$100k USD/year (prorated based on start date)</li>
                <li><strong>Apply by:</strong> Saturday, January 17th EOD AoE (extended from original deadline of January 3rd)</li>
                <li><strong>Location:</strong> Trajectory Labs, Toronto (in-person expected, visa sponsorship available)</li>
              </ul>
            </div>

            <div className="hiring-item">
              <h3>What you'd be working on</h3>
              <p>
                So far, we have focused on chain-of-thought monitoring. See our{' '}
                <a href="/#research">Research</a> section for details on our work, including
                our paper{' '}
                <a
                  href="https://drive.google.com/file/d/1DLJfUp86NvORJiQx1NJf0a1MJcVcaL_e/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How does information access affect LLM monitors' ability to detect sabotage?
                </a>{' '}
                and our post{' '}
                <a
                  href="https://www.lesswrong.com/posts/ZrgFfeWuckpwK5Lyi/hidden-reasoning-in-llms-a-taxonomy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hidden Reasoning in LLMs: A Taxonomy
                </a>
                .
              </p>
              <p>
                We are not committed to a specific research agenda for the upcoming year
                yet. Topics we're exploring include shaping the generalization of LLM
                personas, interpretable continual learning, and pretraining data filtering.
                We plan to always work on whatever seems most impactful to us.
              </p>
            </div>

            <div className="hiring-item">
              <h3>We're looking for:</h3>
              <ul>
                <li>Experience working with LLMs and executing empirical ML research projects</li>
                <li>Agency and general intelligence</li>
                <li>Strong motivation and clear thinking about AI safety</li>
                <li>Good written and verbal communication</li>
              </ul>
            </div>

            <div className="hiring-item">
              <h3>A great hire could help us:</h3>
              <ul>
                <li>Become a more established org, like Apollo or Redwood</li>
                <li>Identify and push on relevant levers to positively influence AGI companies, governments, and the AI safety field</li>
                <li>Shape a research agenda and focus on more impactful projects</li>
                <li>Accelerate our experiment velocity and develop a fast-paced, effective research engineering culture</li>
                <li>Publish more papers in top conferences</li>
              </ul>
            </div>

            <div className="hiring-item">
              <h3>Application Process</h3>
              <p>
                We prefer that candidates join us for a short-term collaboration (1-3 months
                part-time) to establish mutual fit before transitioning to a long-term
                position. However, if you have AI safety experience equivalent to having
                completed the MATS extension, we are happy to interview you for a long-term
                position directly. The interview process involves at least two interviews: a
                coding interview and a conceptual interview where we'll discuss your research
                interests. The expected starting date for long-term researchers is Feb-May;
                we're happy to start short-term collaborations ASAP.
              </p>
              <p style={{ marginTop: 12 }}>
                If you are only interested in short-term collaborations, you can fill out{' '}
                <a
                  href="https://forms.gle/na6mxmun5D6HX16z6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this form
                </a>{' '}
                instead.
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center' }}>
            <a href="/#get-involved" className="back-link">← Back to Get Involved</a>
          </p>
        </div>
      </section>
    </>
  )
}
