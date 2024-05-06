'use client'
import DropdownMenu from "@/components/dropdownMenu";
import { apiGet,apiGetBanks } from "@/functions/api";
import { useEffect, useState } from "react";

export default function Utilities() {
  const [countries,setCountries] = useState([])
  const [selectedCountry,setSelectedCountry] = useState(null)
  const [banks,setBanks] = useState([])
  const [selectedBank, setSelectedBank] = useState(null)

  const handleCountryChange = (country) =>{
    setSelectedCountry(country)
    apiGet(`getbanks/${country}`)
    .then(data => {
      data?setBanks(data):setBanks(["no banks"])
    })
    .catch(error =>{
      console.error("Webpage Error:", error)
    })
    .finally(()=> console.log(banks))
  }

  const handleBankChange = (bank) => {
    setSelectedBank(bank)
  }

  
  const fetchData = () =>{
    apiGet("getcountries")
    .then(data => {
      data?setCountries(data):setCountries(["no countries"])
    })
    .catch(error => {
      console.error("Webpage Error:", error)
    })

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {/* Sección 2 */}
      <section id="utilities">

        <div className="bg-gradient-to-b from-blue-800  to-indigo-950">
          {/* Contenido de la segunda sección */}
          <div className="max-w-7xl sm:space-x-[16px] mx-auto  flex flex-col text-center justify-center  sm:px-[36px] text-slate-200 sm:p-[16px]">
            <h1 className=" mt-10 text-3xl sm:text-4x1 md:text-6xl font-bold mb-4">Utilities</h1>
          </div>

          <div className="max-w-7xl mx-auto sm:px-6 text-slate-200 justify-between p-5">
            <h2 className="text-2xl sm:text-4x1 md:text-4xl font-bold mb-4">Credit Card Info</h2>

            <p className="text-lg  md:text-xl text-justify">
              This tool will provide you with information about the origin of the credit card number.
            </p>
            <p className="text-lg text-bold md:text-xl text-justify">
              This tool does not store the entered numbers.
            </p>
          </div>
          <form className="max-w-2xl mx-auto sm:px-6 pb-[100px] flex sm:flex-row flex-col justify-center items-center p-5">
            <label htmlFor="number" className="block text-slate-200  font-semibold"></label>
            <input type="text" id="number" name="number" className="w-[300px] px-3 py-2 border rounded-md focus:outline-none focus:ring text-slate-950 focus:border-blue-300 m-3 shadow-lg" placeholder="insert a card number" required />
            <button type="submit" className="bg-blue-700 text-slate-200 px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 m-3 shadow-lg">Get Data</button>

          </form>
          <div className="flex items-center pb-5 justify-center">
            <hr className="sm:w-[1200px] w-[200px]" />
          </div>

          <div className="max-w-7xl mx-auto sm:px-6 text-slate-200 justify-between p-5">
            <h2 className="text-2xl sm:text-4x1 md:text-4xl font-bold mb-4">BIN data</h2>

            <p className="text-lg  md:text-xl text-justify">
              This tool will provide you with information about the origin of a BIN number.
            </p>
            <p className="text-lg text-bold md:text-xl text-justify">

            </p>
          </div>
          <form className="max-w-2xl mx-auto sm:px-6  pb-[100px]  flex sm:flex-row flex-col justify-center items-center p-5">
            <label htmlFor="number" className="block text-slate-200  font-semibold"></label>
            <input type="text" id="number" name="number" className="w-[300px] px-3 py-2 border rounded-md focus:outline-none focus:ring text-slate-950 focus:border-blue-300 m-3 shadow-lg" placeholder="insert a BIN number" required />
            <button type="submit" className="bg-blue-700 text-slate-200 px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 m-3 shadow-lg">Get Data</button>
          </form>
          <div className="flex items-center pb-5 justify-center">
            <hr className="sm:w-[1200px] w-[200px]" />
          </div>
          <div className="max-w-7xl mx-auto sm:px-6 text-slate-200 justify-between p-5">
            <h2 className="text-2xl sm:text-4x1 md:text-4xl font-bold mb-4">Generate Credit Card</h2>

            <p className="text-lg  md:text-xl text-justify">
              This tool will generate a required quantity of credit card numbers for a selected combination
            </p>
            <p>Selected Country: {selectedCountry} </p>
            <p>Selected Bank: {selectedBank} </p>
            <div className="space-x-5 justify-center items-center flex">
              <DropdownMenu className="w-60" name="Country" content={countries} onSelect={handleCountryChange}/>
              <DropdownMenu className="w-60" name="Bank" content={banks} onSelect={handleBankChange}/>
              <DropdownMenu className="w-60" name="Red"/>
            </div>

          </div>
          <form className="max-w-2xl space-x-5 mx-auto sm:px-6  pb-[100px]  flex sm:flex-row fle justify-center items-center p-5">
            <button type="submit" className="bg-blue-700 text-slate-200 px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 shadow-lg">Generate</button>
          </form>
          <div className="flex items-center pb-5 justify-center">
            <hr className="sm:w-[1200px] w-[200px]" />
          </div>


        </div>
      </section>
    </div>
  );
}
