import Utilities from "./sections/utilities.section";
import About from "./sections/about.section";
export default function Home() {
  return (
    <div>
      {/* Sección 1 */}
      <section className="relative " id="home">

        <div className="relative z-10 flex flex-col items-start  justify-center h-screen text-slate-200">
          {/* Título */}
          <h1 className="text-3xl sm:text-4x1 md:text-6xl sm:px-6 mx-auto font-bold mb-4">Card Verifications</h1>
          {/* Descripción */}
          <div className="max-w-7xl mx-auto sm:px-6 justify-between p-5">
            <p className="text-lg  md:text-xl text-justify">
              In credit card verifications, the Luhn algorithm and Bin numbers plays crucial roles. The Luhn algorithm validates credit card numbers, while the BIN number identifies the issuing institution. Incorporating these processes ensures data accuracy and security credit card transactions.
            </p>
            <br />
            <p className="text-lg  md:text-xl text-justify">
              Explore this site for utilities leveraging the Luhn algorithm and a database containing information on banking entities linked to credit card numbers. Easily query data for a BIN or credit card number, or generate validated credit card numbers using the Luhn algorithm.
            </p>
          </div>
        </div>


      </section>
    <Utilities />
    <About />
    </div>
  );
}
