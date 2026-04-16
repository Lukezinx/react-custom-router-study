import { useState } from "react"
import Dropdow from "../components/DropDown"


function DropdownPage() {

    const [selection, setSelection] = useState(null)


    const handleSelect = (option) => {
        setSelection(option)
    }

    const options = [
        {label: "Red", value: "red"},
        {label: "Green", value: "green"},
        {label: "Blue", value: "blue"}
    ]

    return <div className="flex">
        <Dropdow value={selection} onChange={handleSelect} options={options}/>
    </div> 
   
}

export default DropdownPage 