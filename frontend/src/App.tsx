import './App.css'


type ReportKind = 'bug' | 'feature'

type Report = {
  id: string
  text: string
  kind: ReportKind
}

function App() {
  const sampleReport: Report = {
    id: '1',
    text: 'Navigation link is broken',
    kind: 'bug',
  }


  return (
    <main>
      <section>
        <div className="avatar" aria-hidden="true" />
        <h1>Ina Tang</h1>
        <p className="role">Computer Science &amp; Mathematics · AI/ML</p>
        <p>
          Senior at Grove City College. Amateur mathematician and computer scientists. 
        </p>
        <p className="meta">COMP 451 Senior Capstone, Fall 2026–Spring 2027</p>
      </section>

      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
        <p>{sampleReport.text} ({sampleReport.kind})</p>
      </section>

    </main>
  )
}

export default App
