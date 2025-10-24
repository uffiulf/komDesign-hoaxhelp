export default function DataVizSection() {
  return (
    <section className='scene'>
      <div className='left'>
        <h2>Slik ble folk forsøkt lurt</h2>
        <p>
          De fleste forsøkene etterlignet tjenester fra kommune eller NAV.  
          Svindlerne utnytter folks ønske om å få hjelp i vanskelige tider, spesielt med energikostnader og økonomisk støtte.  
          Tallene er hentet fra Nasjonal sikkerhetsmyndighet (NSM) og politiet, september 2024.
        </p>
        
        <div style={{marginTop: '2rem'}}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '0.8rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px'
          }}>
            <span><i className="fas fa-bolt" style={{color: '#ef4444', marginRight: '8px'}}></i>Falsk energistøtte</span>
            <span style={{fontWeight: 'bold', color: '#ef4444'}}>40%</span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '0.8rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px'
          }}>
            <span><i className="fas fa-heartbeat" style={{color: '#f59e0b', marginRight: '8px'}}></i>Helse- og omsorg</span>
            <span style={{fontWeight: 'bold', color: '#f59e0b'}}>25%</span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '0.8rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px'
          }}>
            <span><i className="fas fa-id-card" style={{color: '#10b981', marginRight: '8px'}}></i>BankID-tyveri</span>
            <span style={{fontWeight: 'bold', color: '#10b981'}}>20%</span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '0.8rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px'
          }}>
            <span><i className="fas fa-ellipsis-h" style={{color: '#8b5cf6', marginRight: '8px'}}></i>Andre metoder</span>
            <span style={{fontWeight: 'bold', color: '#8b5cf6'}}>15%</span>
          </div>
        </div>

        <p style={{
          marginTop: '2rem',
          padding: '1rem',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '8px',
          fontSize: '0.9rem',
          color: '#888',
          fontStyle: 'italic'
        }}>
          <i className="fas fa-chart-bar" style={{marginRight: '5px'}}></i>
          Tallene er hentet fra Nasjonal sikkerhetsmyndighets oversikt (NSM, september 2024).
        </p>
      </div>
      <div className='right sticky'>
        <div className='card'>
          <div style={{marginBottom: '1rem'}}>
            <i className="fas fa-chart-pie" style={{fontSize: '3rem', color: '#06b6d4'}}></i>
          </div>
          <h3 style={{marginBottom: '1rem', color: '#e0e0e0'}}>Svindel-fordeling</h3>
          
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <thead>
              <tr style={{background: 'rgba(255,255,255,0.1)'}}>
                <th style={{padding: '1rem', textAlign: 'left', color: '#e0e0e0', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>Kategori</th>
                <th style={{padding: '1rem', textAlign: 'right', color: '#e0e0e0', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>Andel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding: '0.8rem 1rem', color: '#c0c0c0', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>Falsk støtteordning</td>
                <td style={{padding: '0.8rem 1rem', textAlign: 'right', color: '#ef4444', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>40 %</td>
              </tr>
              <tr>
                <td style={{padding: '0.8rem 1rem', color: '#c0c0c0', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>Helse- og omsorg</td>
                <td style={{padding: '0.8rem 1rem', textAlign: 'right', color: '#f59e0b', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>25 %</td>
              </tr>
              <tr>
                <td style={{padding: '0.8rem 1rem', color: '#c0c0c0', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>BankID</td>
                <td style={{padding: '0.8rem 1rem', textAlign: 'right', color: '#10b981', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>20 %</td>
              </tr>
              <tr>
                <td style={{padding: '0.8rem 1rem', color: '#c0c0c0'}}>Andre</td>
                <td style={{padding: '0.8rem 1rem', textAlign: 'right', color: '#8b5cf6', fontWeight: 'bold'}}>15 %</td>
              </tr>
            </tbody>
          </table>
          
          <div style={{
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px',
            fontSize: '0.8rem',
            color: '#888'
          }}>
            <i className="fas fa-chart-bar" style={{marginRight: '5px'}}></i>
            Interaktiv graf med Chart.js
          </div>
        </div>
      </div>
    </section>
  );
}