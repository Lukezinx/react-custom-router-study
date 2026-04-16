import Button from "../components/Button"
import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/go"

function ButtonPage() {
    


    return <div>
        <div>
            <Button className="mb-5" success rounded> <GoBell/> click here</Button>
        </div>
        <div>
            <Button danger outline> <GoDatabase/> by name</Button>
        </div>
        <div>
            <Button primary> <GoCloudDownload/> hide ads!</Button>
        </div>
        <div>
            <Button warning >hide ads!</Button>
        </div>
        <div>
            <Button secondary >hide ads!</Button>
        </div>

       
        

    </div>
}

export default ButtonPage 