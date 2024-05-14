'use client'
import DropdownMenu from "@/components/dropdownMenu";
import Card from "@/components/card";
import { apiGet, apiGetJson } from "@/functions/api";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
export default function Utilities() {
  const [cardNumber, setCardNumber] = useState("")
  const [binNumber, setBinNumber] = useState("")
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [banks, setBanks] = useState(["Select a Country"])
  const [selectedBank, setSelectedBank] = useState(null)
  const [networks, setNetworks] = useState(["Select a Bank"])
  const [selectedNetwork, setSelectedNetwork] = useState([])
  const [visibleCard, setVisibleCard] = useState(false)
  const [cardData, setCardData] = useState([])
  const [showCardInfo, setShowCardInfo] = useState(false)
  const [showBinInfo, setShowBinInfo] = useState(false)
  const [cardInfo, setCardInfo] = useState(null)
  const [binInfo, setBinInfo] = useState(null)

  const handleCountryChange = (country) => {
    setSelectedCountry(country)

    apiGet(`getbanks/${country}`)
      .then(data => {
        data ? setBanks(data) : setBanks(["no banks"])
      })
      .catch(error => {
        console.error("Webpage Error:", error)
      })
      .finally(() => console.log(banks))
  }

  const handleBankChange = (bank) => {
    setSelectedBank(bank)
    const bank_query = bank.replace(/ /g, "_")
    apiGet(`getnetworks/${bank_query}`)
      .then(data => {
        data ? setNetworks(data) : setNetworks(["No networks"])
      })
      .catch(error => {
        console.error("Webpage error", error)
      })
      .finally(() => console.log(networks))
  }

  const handleNetworkChange = (network) => {
    setSelectedNetwork(network)
  }

  const handleCardNumberChange = (event) => {
    const formattedCardNumber = event.target.value.replace(/\s|-/g, "")
    setCardNumber(formattedCardNumber)
  }

  const handleCardNumberSearch = (e) => {
    e.preventDefault()
    setShowCardInfo(true)
    apiGet(`card/${cardNumber}`)
      .then(data => {
        data ? setCardInfo(data) : console.log("No Card Data")
      })
      .catch(error => {
        console.error("Webpage Error:", error)
      })
  }
  const handleBinNumberChange = (e) => {
    setBinNumber(e.target.value)
  }

  const handleBinSearch = (e) => {
    e.preventDefault()
    setShowBinInfo(true)
    apiGet(`card/bin/${binNumber}`)
      .then(data => {
        data ? setBinInfo(data) : console.log(' No Bin Data ')
      })
      .catch(error => {
        console.error("Bin catch data error: ", error)
      })
      .finally((e) => { console.log(binInfo) })
  }

  const fetchData = () => {
    apiGet("getcountries")
      .then(data => {
        data ? setCountries(data) : setCountries([])
      })
      .catch(error => {
        console.error("Webpage Error:", error)
      }).finally((e)=> {console.log(countries)})
  }

  const handleNewNumbersRequest = (event) => {
    event.preventDefault();
    if (cardData) {
      setCardData([])
    }
    if (selectedCountry && selectedBank && selectedNetwork) {
      const cardReq = {
        "country": selectedCountry,
        "bank": selectedBank,
        "network": selectedNetwork
      }
      apiGetJson('generate/', cardReq)
        .then(data => {
          data ? setCardData(data.data) : console.log("No Data for Create Cards")
        })
        .catch(error => {
          console.error("Create Card Error:", error)
        }).finally(() => { setVisibleCard(true) })
    } else {
      console.error("No data defined to request new card")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
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

            <form className="max-w-2xl mx-auto sm:px-6  flex sm:flex-row flex-col justify-center items-center p-5">
              <label htmlFor="number" className="block text-slate-200  font-semibold"></label>
              <input type="text" id="number" name="number" className="w-[300px] px-3 py-2 border rounded-md focus:outline-none focus:ring text-slate-950 focus:border-blue-300 m-3 shadow-lg" placeholder="insert a card number" onChange={handleCardNumberChange} required />
              <button type="submit" className="bg-blue-700 text-slate-200 px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 m-3 shadow-lg" onClick={(e) => handleCardNumberSearch(e)}>Get Data</button>

            </form>
            {
              showCardInfo && (
                <div className="flex justify-center items-between pb-[50px]">
                  {
                    cardInfo ? (
                      <div>
                        <p>BIN: {cardInfo.bin}</p>
                        <p>Country: {cardInfo.country}</p>
                        <p>Bank: {cardInfo.bank}</p>
                        <p>Network: {cardInfo.network}</p>
                        <p>Type: {cardInfo.type}</p>
                        <p>Level: {cardInfo.level ? cardInfo.level : "No Data"}</p>
                      </div>
                    ) : (
                      <>
                        <FaSpinner className="w-40 h-40  animate-spin" />
                      </>
                    )
                  }

                </div>
              )
            }
          </div>
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
          
          <form className="max-w-2xl mx-auto sm:px-6  pb-[25px]  flex sm:flex-row flex-col justify-center items-center p-5">
            <label htmlFor="number" className="block text-slate-200  font-semibold"></label>
            <input type="text" id="number" name="number" className="w-[300px] px-3 py-2 border rounded-md focus:outline-none focus:ring text-slate-950 focus:border-blue-300 m-3 shadow-lg" placeholder="insert a BIN number" onChange={handleBinNumberChange} required />
            <button type="submit" className="bg-blue-700 text-slate-200 px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 m-3 shadow-lg" onClick={(e) => handleBinSearch(e)}>Get Data</button>
          </form>
          {
            showBinInfo && (
              <div className="flex justify-center items-between pb-[50px]">
                {
                  binInfo ? (
                    <div>
                      <p>Country: {binInfo.country}</p>
                      <p>Bank: {binInfo.bank}</p>
                      <p>Network: {binInfo.network}</p>
                      <p>Type: {binInfo.type}</p>
                      <p>Level: {binInfo.level ? binInfo.level : "No Data"}</p>
                    </div>
                  ) : (
                    <>
                      <FaSpinner className="w-40 h-40  animate-spin" />
                    </>
                  )
                }
              </div>
            )
          }
          </div>
          <div className="flex items-center pb-5 justify-center">
            <hr className="sm:w-[1200px] w-[200px]" />
          </div>
          <div className="max-w-7xl mx-auto sm:px-6 text-slate-200 justify-between p-5">
            <h2 className="text-2xl sm:text-4x1 md:text-4xl font-bold mb-4">Generate Credit Card</h2>

            <p className="text-lg  md:text-xl text-justify">
              This tool will generate a required quantity of credit card numbers for a selected combination
            </p>
            {
              countries ? (
                <>
                  <div className="sm:space-x-5 sm:justify-center py-5 sm:items-center sm:flex sm:flex-row grid space-y-5 sm:space-y-0">
                    
                    <DropdownMenu className="sm:w-60" name="Country" content={countries} isShort={false} onSelect={handleCountryChange} />
                    <DropdownMenu className="sm:w-60" name="Bank" content={banks} isShort={false} onSelect={handleBankChange} />
                    <DropdownMenu className="sm:w-60" name="Network" content={networks} isShort={true} onSelect={handleNetworkChange} />
                  </div>
                  <div className="space-y-5">
                    <p>Selected Country: {selectedCountry} </p>
                    <p>Selected Bank: {selectedBank} </p>
                    <p>Selected Network: {selectedNetwork} </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center items-center">
                    <FaSpinner className="w-40 h-40  animate-spin" />
                  </div>
                </>
              )
            }

          </div>
          <form className="max-w-2xl space-x-5 mx-auto sm:px-6  pb-[50px]  flex sm:flex-row fle justify-center items-center p-5">
            <button type="submit" className="bg-blue-700 text-slate-200 px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 shadow-lg" onClick={(event) => handleNewNumbersRequest(event)}>Generate</button>
          </form>

          <div className="sm:flex sm:items-center sm:flex-col sm:justify-center sm:align-middle">
            {visibleCard && (
              <div className="flex-col p-5 space-y-5 mb-10 max-h-[450px] w-[500px] overflow-y-auto">
                <p className="text-center">Generated Cards: {cardData.length}</p>
                <div className="space-y-5 flex flex-col">
                {cardData.map((data, index) => (
                  <Card key={index} cardData={data} />
                ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center pb-5 justify-center ">
            <hr className="sm:w-[1200px] w-[200px]" />
          </div>


        </div>
      </section>
    </>
  );
}
