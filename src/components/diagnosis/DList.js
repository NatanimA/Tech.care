const DList = ({patient}) => {
    return (

        <div className="bg-white bg-no-repeat bg-padding-box rounded-xl h-2/6 w-full">
            <p className="font-extrabold text-2xl leading-9 font-manrope tracking-normal text-blue-dark text-left p-4 mx-5 my-5">Diagnostic List</p>

            <div className="bg-gray-100 bg-no-repeat bg-padding-box rounded-3xl flex flex-row h-1/6 mx-5 justify-between">
                <p className="font-bold text-sm leading-5 font-manrope tracking-normal text-blue-dark p-4">Problem/Diagnosis</p>
                <p className="font-bold text-sm leading-5 font-manrope tracking-normal text-blue-dark p-4">Description</p>
                <p className="font-bold text-sm leading-5 font-manrope tracking-normal text-blue-dark p-4">Status</p>
            </div>

            <div className="overflow-y-auto my-4 relative h-32 flex flex-col">
                {patient.diagnostic_list.map((lab ,index)=> (
                    <div key={index} className="bg-white bg-no-repeat bg-padding-box opacity-100 flex flex-row justify-between mx-6 my-2 p-4 border-b-1">

                        <p className="font-manrope text-sm leading-normal tracking-normal  text-left opacity-100">{lab.name}</p>
                        <p className="font-manrope text-sm leading-normal tracking-normal text-center opacity-100 w-2/3">{lab.description}</p>
                        <p className="font-manrope text-sm leading-normal tracking-normal  text-right opacity-100">{lab.status}</p>
                    </div>

                    
                ))}
                
            </div>
        </div>
    )
}
export default DList