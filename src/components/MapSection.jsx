export default function MapSection() {
  return (
    <section className='scene'>
      <div className='left'>
        <h2>Angrepene startet lokalt</h2>
        <p>
          På få dager ble det meldt om både digitale og fysiske svindelforsøk i flere kommuner 
          i Østlandsområdet. Svindlerne brukte lokale referanser og kommunespesifikke detaljer 
          for å virke troverdig. Kartet viser hvor hendelsene ble rapportert og spredningen av metodene.
        </p>
        <ul>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Oslo – 27. august:</strong> Falske SMS-er om «energistøtte» fra «Oslo kommune»</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Sarpsborg – 14. september:</strong> E-post om «krisehjelp» med kommunelogo</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Fredrikstad – 29. september:</strong> Falsk søknadsside for strømstøtte med BankID-login</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Halden – 29. september:</strong> Fysiske svindlere utga seg for å være fra helsetjenesten</li>
        </ul>
        <p style={{fontSize: '0.9rem', color: '#888', marginTop: '1rem', fontStyle: 'italic'}}>
          <i className="fas fa-info-circle" style={{marginRight: '5px'}}></i>
          Data basert på rapporter fra kommuner og politiet, høst 2024
        </p>
        <p style={{fontSize: '0.9rem', color: '#888', marginTop: '1rem'}}>
          <i className="fas fa-info-circle" style={{marginRight: '5px'}}></i>
          Kartdata fra Infowiz-visualisering
        </p>
      </div>
      <div className='right sticky'>
        <iframe 
          title='Infowiz Kart - Svindelhendelser' 
          src='about:blank' 
          width='100%' 
          height='70%' 
          style={{
            border: 'none',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.05)',
            minHeight: '400px'
          }} 
        />
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '8px',
          fontSize: '0.8rem',
          color: '#888',
          textAlign: 'center'
        }}>
          <i className="fas fa-map" style={{marginRight: '5px'}}></i>
          Interaktivt kart kommer snart
        </div>
      </div>
    </section>
  );
}