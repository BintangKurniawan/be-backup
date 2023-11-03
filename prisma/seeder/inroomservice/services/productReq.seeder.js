const { prisma } = require("../../config");

const productReqs = [
    {
        title: "CHOCOPIE",
        typeId: 2,
        desc: "Chocolate yang dicampur dengan durian",
        price: 2000,
        picture: "https://i.pravatar.cc/300",
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        title: "Nipis Madu",
        typeId: 1,
        desc: "Cairan berwarna hijau",
        price: 4000,
        picture: "https://i.pravatar.cc/300",
        created_at: new Date(),
        updated_at: new Date(),
    },
];

async function productReqSeed() {
    for (let productReq of productReqs) {
        await prisma.productReq.create({
            data: productReq,
        });
    }
}

module.exports = { productReqSeed };