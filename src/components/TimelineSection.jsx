export default function TimelineSection() {
  return (
    <section className='scene'>
      <div className='left'>
        <h2>En svindel sprer seg som ild</h2>
        <p>
          Etter den første hendelsen i Oslo spredte metodene seg raskt til nabokommuner.  
          Innen to uker ble det registrert over tretti ulike forsøk – mange med identisk språk og logoer.  
          Politiet beskriver kampanjen som koordinert og profesjonell, med tydelige tegn på organisert kriminalitet.
        </p>
        
        <div style={{marginTop: '2rem'}}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            borderLeft: '4px solid #ef4444'
          }}>
            <div style={{marginRight: '1rem'}}>
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#ef4444'}}>27. august</div>
            </div>
            <div>
              <strong>Oslo – Første melding sendt ut</strong>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#a0a0a0'}}>
                SMS-kampanje som etterlignet kommunens offisielle meldinger om energistøtte
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            borderLeft: '4px solid #f59e0b'
          }}>
            <div style={{marginRight: '1rem'}}>
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#f59e0b'}}>29. august</div>
            </div>
            <div>
              <strong>Fredrikstad – Lik SMS-variant oppdaget</strong>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#a0a0a0'}}>
                Identisk tekst og design, men med lokal kommunelogo og referanser
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            borderLeft: '4px solid #10b981'
          }}>
            <div style={{marginRight: '1rem'}}>
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#10b981'}}>14. september</div>
            </div>
            <div>
              <strong>Sarpsborg – E-postkampanje</strong>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#a0a0a0'}}>
                Falske e-poster med «krisehjelp» som påskudd for å stjele personopplysninger
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1.5rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            borderLeft: '4px solid #8b5cf6'
          }}>
            <div style={{marginRight: '1rem'}}>
              <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#8b5cf6'}}>29. september</div>
            </div>
            <div>
              <strong>Halden – Angrep rettet mot eldre</strong>
              <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#a0a0a0'}}>
                Svindlere utga seg for å være fra helsetjenesten og forsøkte å få tilgang til boliger
              </p>
            </div>
          </div>
        </div>

        <p style={{
          marginTop: '2rem',
          padding: '1rem',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '8px',
          fontSize: '0.95rem',
          color: '#e0e0e0'
        }}>
          <i className="fas fa-exclamation-triangle" style={{marginRight: '8px', color: '#ef4444'}}></i>
          <strong>Politiet beskriver kampanjen som koordinert og profesjonell.</strong>
        </p>
      </div>
      <div className='right sticky'>
        <div className='card'>
          <div style={{marginBottom: '1rem'}}>
            <i className="fas fa-clock" style={{fontSize: '3rem', color: '#8b5cf6'}}></i>
          </div>
          <h3 style={{marginBottom: '1rem', color: '#e0e0e0'}}>Tidslinje-visualisering</h3>
          <p style={{fontSize: '0.9rem', color: '#a0a0a0', marginBottom: '1rem'}}>
            Interaktiv tidslinje som viser spredningen av svindelen
          </p>
          <div style={{
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px',
            fontSize: '0.8rem',
            color: '#888'
          }}>
            <i className="fas fa-chart-line" style={{marginRight: '5px'}}></i>
            Tidslinje-graf kommer snart
          </div>
        </div>
      </div>
    </section>
  );
}