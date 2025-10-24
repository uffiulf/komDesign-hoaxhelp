export default function SafetySection() {
  return (
    <section className='scene'>
      <div className='left'>
        <h2>Slik unngår du å bli lurt</h2>
        <p>
          Ekspertene sier at svindlerne spiller på følelser og tillit.  
          Her er rådene du bør følge før du trykker på noe – uansett hvor ekte det ser ut:
        </p>
        
        <div style={{marginTop: '2rem'}}>
          <div style={{
            marginBottom: '1.5rem',
            padding: '1.5rem',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '12px'
          }}>
            <h3 style={{color: '#10b981', marginBottom: '1rem', fontSize: '1.2rem'}}>
              <i className="fas fa-search" style={{marginRight: '8px'}}></i>
              Sjekk alltid avsender
            </h3>
            <p style={{margin: 0, fontSize: '0.95rem'}}>
              Offentlige etater sender aldri lenker via SMS. Kontroller alltid avsenderadressen 
              og sammenlign med offisielle nettsider.
            </p>
          </div>
          
          <div style={{
            marginBottom: '1.5rem',
            padding: '1.5rem',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '12px'
          }}>
            <h3 style={{color: '#ef4444', marginBottom: '1rem', fontSize: '1.2rem'}}>
              <i className="fas fa-ban" style={{marginRight: '8px'}}></i>
              Ikke del BankID eller koder
            </h3>
            <p style={{margin: 0, fontSize: '0.95rem'}}>
              Uansett hva du blir fortalt. Legitime organisasjoner vil aldri be om 
              BankID-informasjon via telefon eller e-post.
            </p>
          </div>
          
          <div style={{
            marginBottom: '1.5rem',
            padding: '1.5rem',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '12px'
          }}>
            <h3 style={{color: '#3b82f6', marginBottom: '1rem', fontSize: '1.2rem'}}>
              <i className="fas fa-phone" style={{marginRight: '8px'}}></i>
              Kontakt kommunen direkte
            </h3>
            <p style={{margin: 0, fontSize: '0.95rem'}}>
              Via offisielle nettsider eller telefon. Ring tilbake på offisielle numre 
              fra kommunens hjemmeside hvis du er i tvil.
            </p>
          </div>

          <div style={{
            marginBottom: '1.5rem',
            padding: '1.5rem',
            background: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '12px'
          }}>
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontSize: '1.2rem'}}>
              <i className="fas fa-eye" style={{marginRight: '8px'}}></i>
              Se etter feil i språk og logo
            </h3>
            <p style={{margin: 0, fontSize: '0.95rem'}}>
              Små detaljer avslører ofte falske sider. Sjekk stavemåter, logoer og 
              generell kvalitet på nettsiden.
            </p>
          </div>
        </div>
        
        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{margin: 0, fontSize: '0.9rem', color: '#888'}}>
            <i className="fas fa-info-circle" style={{marginRight: '5px'}}></i>
            Denne artikkelen er en del av HoaxHelp-prosjektet, som undersøker hvordan digital svindel rammer lokalsamfunn.
          </p>
        </div>
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