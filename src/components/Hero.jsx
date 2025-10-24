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
                <div className='card' style={{padding: '0', overflow: 'hidden'}}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '20px 20px 0 0'
                    }}
                  >
                    <source src="/assets/hero-bg.mp4" type="video/mp4" />
                    Din nettleser støtter ikke video-elementet.
                  </video>
                  <div style={{
                    padding: '1.5rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '0 0 20px 20px'
                  }}>
                    <h3 style={{marginBottom: '0.5rem', color: '#e0e0e0', fontSize: '1.1rem'}}>
                      <i className="fas fa-video" style={{marginRight: '8px', color: '#4ade80'}}></i>
                      Bakgrunnsvideo
                    </h3>
                    <p style={{fontSize: '0.8rem', color: '#888', margin: 0}}>
                      Kilde: <a href="https://pixabay.com/videos/people-commerce-shop-busy-mall-6387" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={{color: '#4ade80', textDecoration: 'none'}}>
                        Pixabay - People Commerce Shop
                      </a>
                    </p>
                  </div>
                </div>
              </div>
    </section>
  );
}