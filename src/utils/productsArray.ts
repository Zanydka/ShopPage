type ProductProps = {
    id: number
    title: string
    desc: string
    price: number

}

const productsArray:ProductProps[] = [
    {
        id:1,
        title:"IPhone 12",
        desc:"This is IPhone 12 ...",
        price:750,
   
    },
    {
        id:2,
        title:"IPhone 8",
        desc:"This is IPhone 8 ...",
        price:850,

    },
    {
        id:3,
        title:"IPhone X",
        desc:"This is IPhone X ...",
        price:1250,

    },
]
export default productsArray