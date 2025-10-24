export default function TimelineSection() {
  return (
    <section className='scene'>
      <div className='left'>
        <h2>En svindel sprer seg som ild</h2>
        <p>
          Etter den første hendelsen i Oslo spredte metodene seg raskt til nabokommuner.  
          Innen to uker ble det registrert over tretti ulike forsøk – mange med identisk språk og logoer.  
          Politiet beskriver kampanjen som koordinert og profesjonell.
        </p>
        
        <ul>
          <li><strong>27. august:</strong> Oslo – Første falske SMS sendt ut</li>
          <li><strong>29. august:</strong> Fredrikstad – Lik variant oppdaget</li>
          <li><strong>14. september:</strong> Sarpsborg – E-postkampanje</li>
          <li><strong>29. september:</strong> Halden – Fysiske svindlere utga seg for å være helsepersonell</li>
        </ul>
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