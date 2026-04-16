import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({items}) {
    const [expandIndex, setExpandedIndex] = useState(-1)

    const handleClick = (index) => {
            if(expandIndex === index) {
                setExpandedIndex(-1)
            } else {
                setExpandedIndex(index)
            }
    }
     
    const renderItems = items.map((items,index) => {

        const isExpanded =  index === expandIndex

       

        const icon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>
       

        return (
            <div key={items.id}>
                <div className="flex justify-between p-3 bg-gray-50 items-center cursor-pointer" onClick={() => {handleClick(index)}}>
                    {items.label}
                    {icon}
                    </div>
                {isExpanded && <div className="border-b p-5">{items.content}</div>}
            </div>
        );
    });


    return <div className="border-x border-t rounded">{renderItems}</div>
}


export default Accordion