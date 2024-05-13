export default function About() {
  return (
    <div>
      <section className="relative p-[16px] " id="about">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/background_home.jpg')" }}></div>
        <div className="absolute inset-0  backdrop-blur-sm bg-black  opacity-80 z-1"></div>
        <div className="relative z-10 flex flex-col items-start  justify-center h-screen text-slate-200">
          {/* Título */}
          <h1 className="text-3xl sm:text-4x1 md:text-6xl sm:px-6 mx-auto font-bold mb-4">About this project</h1>

          {/* Descripción */}
          <div className="max-w-7xl mx-auto sm:px-6 justify-between p-5">
            <h2 className="text-3xl pb-5">This project consists of two core components: </h2>
            <div className="text-lg  md:text-xl text-justify pb-5">
              <ul className="list-disc list-inside space-y-5">
                <li>A Python script designed for web scraping.</li>
                <li>A backend and frontend system to interact with the data.</li>
              </ul>
            </div>

            <p className="text-lg  md:text-xl text-justify">
              Working on this project has provided invaluable experience in web scraping techniques, database management, and frontend and backend development using the MERN stack. It has also highlighted the significance of Bank Identification Numbers (BINs) in financial transactions, essential for accurately categorizing and processing financial data. Moreover, the project delves into Luhn verification, an algorithm crucial for validating credit card numbers. Understanding the mathematical principles behind Luhn verification has illuminated how these concepts translate into code components, empowering developers to implement robust validation mechanisms. This comprehension enhances data processing accuracy and reliability, underscoring the intrinsic relationship between mathematics and software development.
            </p>

          </div>
        </div>

      </section>
    </div>
  );
}
