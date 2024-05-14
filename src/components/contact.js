'use client'

export default function ContactCard({ closeModal }) {

    return (
        <>
            <div className="bg-slate-100 sm:h-[440px] rounded-lg sm:w-[512px]">
                <h2 className="m-3 text-2xl text-slate-950" >
                    Lets Talk!
                </h2>
                <form className="flex flex-col">
                    <input type="text" id="email" name="number" className="w-[300px] px-3 py-2 border rounded-md focus:outline-none focus:ring text-slate-950 focus:border-blue-300 m-3 shadow-lg" placeholder="Insert your Email" />
                    <textarea className="px-3 py-2 m-3  placeholder-gray-400 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-lg" rows="8" placeholder="Writte a Message"/>
                    <div className="flex items-center justify-center">
                        <button className="bg-blue-700 text-slate-200 px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 m-3 shadow-lg">
                            Send Message
                        </button>

                        <button className="bg-blue-700 text-slate-200 px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700 m-3 shadow-lg" onClick={closeModal}>
                            Close
                        </button>

                    </div>

                </form>
            </div>
        </>
    )
}

