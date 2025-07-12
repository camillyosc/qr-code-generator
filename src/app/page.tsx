
export default function Home() {
  return (
    <main className="container">
      <section className="title-container">
        <h1 className="page-title">Gere e customize QR Codes <span>dinâmicos</span></h1>

        <img src="/arrow.svg" alt="detail" className="arrow-detail" />
      </section>

      <section className="qr-code-container">
        <div className="qr-code">
          <div className="link-input">
            <label htmlFor="link">
              Digite seu link:
            </label>
          </div>
        </div>

        <div className="qr-code-customization">

        </div>
      </section>
    </main>
    
  );
}
