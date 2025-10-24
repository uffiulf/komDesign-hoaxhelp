export default function MapSection() {

  return (
    <section className='scene'>
      <div className='left'>
        <h2>Svindelen sprer seg over hele Norge</h2>
        <p>
          Fra januar 2023 til februar 2025 har politiet registrert svindelsaker i hele Norge, med konsentrasjon i Østfold, Viken og Oslo-området. 
          Svindlerne har utviklet nye metoder som kombinerer telefonbedrageri med fysiske besøk, og de fleste ofre er eldre kvinner.
        </p>
        <ul>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Drammen – 21. feb 2025:</strong> Falsk hjemmehjelper stjal kontanter og smykker fra 80-årig kvinne</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Drøbak – 19. jun 2025:</strong> Falske håndverkere lurte ektepar for 32 millioner kroner</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Hamar – aug 2024:</strong> «Olga-svindel» med falske politi som sendte patruljer</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Fredrikstad – 8. des 2023:</strong> Ny metode med kombinert telefon- og besøksmetode</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Bjørkelangen – jan 2023:</strong> Falsk el-inspektør fra «Lillestrøm elverk»</li>
          <li><i className="fas fa-map-marker-alt" style={{color: '#ef4444', marginRight: '8px'}}></i><strong>Risør – 31. okt 2024:</strong> Falske kommunale fakturaer med feil kontonummer</li>
        </ul>
        <p style={{fontSize: '0.9rem', color: '#888', marginTop: '1rem', fontStyle: 'italic'}}>
          <i className="fas fa-info-circle" style={{marginRight: '5px'}}></i>
          Data basert på politirapporter og kommunale advarsler, 2023-2025
        </p>
      </div>
      <div className='right sticky'>
        <div className="map-embed" role="region" aria-label="Interaktivt kart over rapporterte svindelhendelser">
          <iframe
            src="https://infowiz.no/embed/svindel-kart-2023-2025"
            title="Interaktivt kart – Svindelhendelser"
            loading="lazy"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            referrerPolicy="no-referrer-when-downgrade"
          />
          <noscript>
            <p>Interaktivt kart krever JavaScript. Aktiver JavaScript eller se stillbildet nedenfor.</p>
            <img src="/map-placeholder.jpg" alt="Kart over svindelhendelser" style={{width:"100%", borderRadius:"14px"}}/>
          </noscript>
        </div>
        <p className="caption">Kilde: Kommunale varsler og NSM. Noen hendelser er digitale, andre fysiske.</p>
      </div>
    </section>
  );
}