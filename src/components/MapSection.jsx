export default function MapSection() {
  return (
    <section className='scene'>
      <div className='left'>
        <h2>Angrepene startet lokalt</h2>
        <p>
          På få dager ble lignende hendelser rapportert i flere kommuner i Østlandsområdet.  
          Kartet viser stedene hvor svindlerne utga seg for å være offentlige aktører.
        </p>
        <p>
          <strong>Registrerte hendelser:</strong>
        </p>
        <ul>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i>Oslo – 27. august: Falske SMS-er fra "Oslo Kommune"</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i>Sarpsborg – 14. september: "Krisehjelp" via e-post</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i>Fredrikstad – 29. september: Falsk søknadsside for strømstøtte</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i>Halden – 29. september: Svindlere utga seg for å være fra helsetjenesten</li>
        </ul>
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