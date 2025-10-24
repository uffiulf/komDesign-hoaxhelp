export default function Hero() {
  return (
    <section className='scene'>
      <div className='left'>
        <h1>Når hjelpen ikke er ekte</h1>
        <p>
          En ny bølge av svindelforsøk rammer folk i hele Norge – både digitalt og fysisk. 
          Noen får e-poster eller SMS fra det som ser ut som kommunen, NAV eller helsevesenet. 
          Andre får uventet besøk av personer som utgir seg for å være hjemmehjelpere eller inspektører. 
          Felles for dem alle er at svindlerne spiller på tillit – og mange lar seg lure. 
          <br/><br/>
          I løpet av sensommeren ble flere kommuner kontaktet av innbyggere som trodde de hadde fått hjelp. 
          I virkeligheten ble både personopplysninger og BankID-informasjon stjålet. 
          <br/><br/>
          Denne undersøkelsen avslører hvordan svindelen fungerer – og hvordan du kan beskytte deg selv.
        </p>
      </div>
      <div className='right sticky'>
        <div className='card'>
          <div style={{marginBottom: '1rem'}}>
            <i className="fas fa-play-circle" style={{fontSize: '3rem', color: '#4ade80'}}></i>
          </div>
          <h3 style={{marginBottom: '1rem', color: '#e0e0e0'}}>Bakgrunnsvideo</h3>
          <p style={{fontSize: '0.9rem', color: '#a0a0a0'}}>
            Dempet videoklipp av bymiljø<br/>
            <em>/assets/hero-bg.mp4</em>
          </p>
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '8px',
            fontSize: '0.8rem',
            color: '#888'
          }}>
            <i className="fas fa-video" style={{marginRight: '5px'}}></i>
            Video-integrasjon kommer snart
          </div>
        </div>
      </div>
    </section>
  );
}