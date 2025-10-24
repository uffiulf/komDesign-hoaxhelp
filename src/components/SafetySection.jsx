export default function SafetySection() {
  return (
    <section className='scene'>
      <div className='left'>
        <h2>Slik unngår du å bli lurt</h2>
        <p>
          Ekspertene sier at svindlerne spiller på følelser og tillit.  
          Her er rådene du bør følge før du trykker på noe – uansett hvor ekte det ser ut:
        </p>
        
        <ul>
          <li><strong>Sjekk alltid avsender</strong> – Offentlige etater sender aldri lenker via SMS.</li>
          <li><strong>Ikke del BankID eller koder</strong> – Uansett hva du blir fortalt.</li>
          <li><strong>Kontakt kommunen direkte</strong> – via offisielle nettsider eller telefon.</li>
          <li><strong>Se etter feil i språk og logo</strong> – Små detaljer avslører ofte falske sider.</li>
        </ul>
        
        <p>
          Denne artikkelen er en del av HoaxHelp-prosjektet, som undersøker hvordan digital og fysisk svindel rammer lokalsamfunn.  
        </p>
      </div>
      <div className='right sticky'>
        <div className='card'>
          <div style={{marginBottom: '1rem'}}>
            <i className="fas fa-shield-alt" style={{fontSize: '3rem', color: '#f59e0b'}}></i>
          </div>
          <h3 style={{marginBottom: '1rem', color: '#e0e0e0'}}>Eksempel på falsk ID</h3>
          
          <div style={{
            padding: '2rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            border: '2px dashed rgba(255,255,255,0.2)',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            <div style={{
              width: '120px',
              height: '80px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#888'
            }}>
              <i className="fas fa-id-card"></i>
            </div>
            <p style={{fontSize: '0.8rem', color: '#888', margin: 0}}>
              Eksempel på falsk kommunal ID
            </p>
          </div>
          
          <div style={{
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px',
            fontSize: '0.8rem',
            color: '#888'
          }}>
            <i className="fas fa-exclamation-triangle" style={{marginRight: '5px', color: '#fbbf24'}}></i>
            Kontroller alltid med offisielle kilder
          </div>
        </div>
      </div>
    </section>
  );
}