export default function SafetySection() {
  return (
    <section className='scene'>
      <div className='left'>
        <h2>Slik unngår du å bli lurt</h2>
        <p>
          Basert på politirapporter og kommunale advarsler fra 2023-2025 har ekspertene identifisert de vanligste svindelmetodene. 
          Her er de viktigste rådene for å beskytte deg mot svindlere som utgir seg for å være autoritetspersoner:
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
              <i className="fas fa-phone-slash" style={{marginRight: '8px'}}></i>
              Politiet og banker ringer aldri om BankID
            </h3>
            <p style={{margin: 0, fontSize: '0.95rem'}}>
              Ekte politi og banker spør aldri om BankID-informasjon over telefon. Hvis noen ringer og ber om dette, 
              er det alltid svindel. Legg på umiddelbart og kontakt politiet på 02800.
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
              <i className="fas fa-id-card" style={{marginRight: '8px'}}></i>
              Krev alltid legitimasjon ved hjemmebesøk
            </h3>
            <p style={{margin: 0, fontSize: '0.95rem'}}>
              Ekte hjemmehjelpere, el-inspektører og kommunale ansatte bærer alltid ID-kort og varsler på forhånd. 
              Krev å se legitimasjon og ring kommunen for å bekrefte identiteten.
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
              <i className="fas fa-exclamation-triangle" style={{marginRight: '8px'}}></i>
              Vær skeptisk til uanmeldte besøk
            </h3>
            <p style={{margin: 0, fontSize: '0.95rem'}}>
              Offentlige etater varsler alltid skriftlig i forkant av besøk. Hvis noen banker på uanmeldt og 
              påstår å være fra kommune eller politi, er det sannsynligvis svindel.
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
              <i className="fas fa-file-invoice" style={{marginRight: '8px'}}></i>
              Sjekk fakturaer og e-poster nøye
            </h3>
            <p style={{margin: 0, fontSize: '0.95rem'}}>
              Ekte kommunale fakturaer sendes som EHF og har riktige kontonummer. Sjekk alltid avsenderadresse 
              og kontakt økonomiavdelingen ved tvil. Falske fakturaer har ofte feil kontonummer.
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
            Denne artikkelen er basert på politirapporter og kommunale advarsler fra 2023-2025.
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