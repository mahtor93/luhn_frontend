'use client'
import { useState } from "react"

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
            <div className="flex flex-col w-[110mm] h-[60mm] bg-slate-400 rounded-lg">
                <div className="pt-10 text-center">
                    <p>{bank}</p>
                </div>
                <div className="text-center mt-auto">
                    <p> {first} - {second} - {third} - {last} </p>
                </div>
                <div className="flex justify-center">
                <div className="p-5 text-center">
                        <p>{country}</p>
                    </div>
                <div className="p-5 flex justify-end">
                    <p>{level} {network} {type}</p>
                </div>
                </div>

            </div>
        </>
    )
}