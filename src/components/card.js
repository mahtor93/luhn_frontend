'use client'
import { useState } from "react"
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";


export default function Card({cardData, isJson}){
    const [cardNumber,setCardNumber] = useState(cardData.cardNumber || "")
    const [country,setCountry] = useState(cardData.country || "Country_name_full")
    const [network,setNetwork] = useState(cardData.network || "Network")
    const [bank,setBank] = useState(cardData.bank || "Bank_name_long_characters_etc_etc")
    const [type,setType] = useState(cardData.type || "type_Card")
    const [level,setLevel] = useState(cardData.level || "")
    const [bin,setBin] = useState(cardData.bin || "")

    const first = cardNumber.substring(0,4)
    const second = cardNumber.substring(4,8)
    const third = cardNumber.substring(8,12)
    const last = cardNumber.substring(12,16)


    return(
        <>
            <div className="flex flex-col sm:w-[110mm] w-[88mm] h-[55mm] sm:h-[60mm] bg-slate-400 rounded-lg">
                <div className="sm:pt-10 pt-5 text-between ml-6">
                    <p>{bank}</p>
                </div>
                <div className="flex justify-end mr-5 text-4xl">
                    { network === "VISA" && <RiVisaFill/> }
                    { network === "MASTERCARD" && <FaCcMastercard /> }
                    { network === "AMERICAN EXPRESS" && <SiAmericanexpress /> }

                </div>
                <div className="text-center sm:mt-auto mt-3 bg-slate-100 text-slate-950">
                    <p> {first} - {second} - {third} - {last} </p>
                </div>
                <div className="flex justify-center">
                <div className="sm:p-5 p-3 ml-3 text-center">
                        <p>{country}</p>
                    </div>
                <div className="sm:p-5 pt-3 ml-5 flex justify-end">
                    <p className="">{level} {type}</p>
                </div>
                </div>

            </div>
        </>
    )
}