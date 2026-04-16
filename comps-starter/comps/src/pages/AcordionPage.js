import Accordion from "../components/Acordion"

function AcordionPage() {
    const items = [
        {
            id: "dasjdias",
            label: 'can i use react',
            content:'you can use react any project you want'
        },

        {
            id: "dasjdia111s",
            label: 'can i use javaScript on a project',
            content:'you can use react any project you want'
        },

        {
            id: "dasjdias3123",
            label: 'can i use CSS on a project',
            content:'you can use react any project you want'
        }
    ]

    return <Accordion items={items}/>
}

export default AcordionPage 