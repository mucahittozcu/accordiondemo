const { default: LoremIpsum } = require("react-lorem-ipsum");

const data = [
    {
        id:crypto.randomUUID(),
        question:"Ürün kaliteli mi?",
        answer:<LoremIpsum p={1} />
    },
    {
        id:crypto.randomUUID(),
        question:"Fiyatı ne kadar?",
        answer:<LoremIpsum p={1} />
    },
    {
        id:crypto.randomUUID(),
        question:"Ne zaman ulaşır?",
        answer:<LoremIpsum p={1} />
    }
]
export default data