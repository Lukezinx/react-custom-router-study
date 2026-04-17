import { useState } from "react"
import Modal from "../components/Modal"
import Button from "../components/Button"

function ModalPage() {

    const [showModal, setShowmodal] = useState(false)

    const handleCLick = () => {
        setShowmodal(true)
    }

    const handleClose = () => {
        setShowmodal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>i Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>here is an important agreement for you accept</p>
    </Modal>

    return <div>
        <Button onClick={handleCLick} primary>Open modal</Button>
        {showModal && modal}
    </div>
}

export default ModalPage