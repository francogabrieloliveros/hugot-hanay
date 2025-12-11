import Header from "../assets/Header.jsx";

function AboutPage() {
  return (
    <>
      <Header />

      <div className="mx-auto mb-20 w-[90dvw] max-w-[660px] rounded-4xl bg-white p-8">
        <h1 className="oleo mb-2 text-3xl">hugot hanay</h1>
        <p className="text-justify indent-10">
          Ang Hugot Hanay ay isang larong palaisipan, hango sa “Minute Cryptic”,
          kung saan hindi agad nahahanap ang tamang sagot batay lamang sa
          pahiwatig na pangungusap. Gamit ang mga indikador, pinagmulan, at
          kahulugan, susubukin nito ang iyong talas ng isip at abstraktong
          imahinasyon upang matuklasan ang nawawalang salita. Sa ganitong
          paraan, layunin ng proyektong ito na makatulong sa pag-uswag ng
          paggamit ng wikang Filipino sa iba’t ibang larangan.
        </p>
        <h3 className="oleo mt-4 mb-2 text-center text-2xl">mga katuwang</h3>
        <p className="text-center">Chelzea Rein Regala</p>
        <p className="text-center">Franco Gabriel Oliveros</p>
        <p className="text-center">Gelaiza Villaflores</p>
        <p className="text-center">Vince Jermaine Ilagan</p>
        <h2 className="oleo mt-8 mb-2 text-3xl">paano laruin</h2>

        <h3 className="oleo mb-2 text-2xl">bahagi ng isang pahiwatig</h3>
        <div className="ml-8">
          <h4 className="oleo mb-2 text-xl">1. indikador</h4>
          <p className="mb-5 ml-8">
            Isang salita o pariralang nagsasabi kung anong klaseng paglalaro ng
            salita ang ginagamit. Halimbawa ng indikador: halo, baligtad,
            tinanggal, tunog-katulad etc.
          </p>
          <h4 className="oleo mb-2 text-xl">2. pinagmulan</h4>
          <p className="mb-5 ml-8">
            Ito ang mismong salita o pariralang pinag-lalaruan para makuha ang
            sagot.
          </p>
          <h4 className="oleo mb-2 text-xl">3. kahulugan</h4>
          <p className="mb-5 ml-8">
            Ito ang direktang ibig sabihin ng sagot – kadalasan nasa unahan o
            hulihan ng pahiwatig.
          </p>
        </div>

        <h3 className="oleo mt-4 mb-2 text-2xl">paano malalaman ang sagot?</h3>
        <div className="ml-8">
          <h4 className="oleo mb-2 text-xl">1. Hanapin muna ang kahulugan</h4>
          <p className="mb-5 ml-8">
            Karaniwang nasa simula o dulo ng pahiwatig.
          </p>
          <h4 className="oleo mb-2 text-xl">2. Kilalanin ang indikador</h4>
          <p className="ml-8">
            Ito ang magsasabi kung anong operasyon ang gagawin mo. Halimbawa:
          </p>
          <ul className="mb-5 ml-20 list-disc">
            <li>“baligtad” → baliktarin ang salita</li>
            <li>“halo” → haluin ang letra</li>
            <li>“tunog-katulad” → katunog</li>
          </ul>
          <h4 className="oleo mb-2 text-xl">
            3. Gamiting ang paglalaro ng salita
          </h4>
          <p className="mb-5 ml-8">
            Gamitin ang pinagmulang salita at sundin ang operasyon na sinasabi
            ng indikator.
          </p>
          <h4 className="oleo mb-2 text-xl">
            4. Ikumpara ang nabuong salita sa kahulugan
          </h4>
          <p className="mb-5 ml-8">Kung tumutugma, iyon ang sagot!</p>
        </div>

        <h3 className="oleo mt-4 mb-2 text-2xl">halimbawa</h3>
        <div className="ml-8">
          <h4 className="oleo mb-2 text-xl">pahiwatig</h4>
          <p className="ml-8">“Lumindol sa magulo kong kwarto!”</p>
          <ul className="mb-5 ml-20 list-disc">
            <li>Indikador: “magulo”</li>
            <li>Pinagmulan: “magulo”</li>
            <li>Kahulugan: “lumindol”</li>
          </ul>
          <h4 className="oleo mb-2 text-xl">solusyon</h4>
          <p className="ml-8">
            Guluhin ang “magulo” → guloma, olugam, umagol, umalog
          </p>
          <p className="mb-5 ml-8">Ang tumutugma sa “lumindol” ay “umalog.”</p>
          <h4 className="oleo mb-2 text-xl">sagot: umalog</h4>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
