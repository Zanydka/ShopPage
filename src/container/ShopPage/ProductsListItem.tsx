import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ShopPage.css'
import './ProductsListItem.scss'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
type Props = {
    title: string
    desc: string
    price: number
    setCountSum: Dispatch<SetStateAction<number>>
}
type CartData = {
    totalPrice: number
}
const ProductsListItem: FC<Props> = ({ title, desc, price, setCountSum }) => {
    const [cartData, setCartData] = useState<CartData>({
        totalPrice: 0,
    })

    const addTotalPrice = (price: number) => {
        setCartData((prevState: CartData) => ({
            totalPrice: prevState.totalPrice + price,
        }))
    }
    useEffect(() => {
        setCountSum((prevState: number) => prevState + cartData.totalPrice)
    }, [setCountSum, cartData.totalPrice])
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <h1 className="product-title center">{title}</h1>
                <div className="product-dec center">{desc}</div>
                <div className="product-price center">EUR: {price}</div>
            </CardContent>
            <CardActions className="btnCenter">
                <Button variant="outlined" onClick={() => addTotalPrice(price)}>
                    Buy
                </Button>
            </CardActions>
            <div className="center">total: {cartData.totalPrice}</div>
        </Card>
    )
}
export default ProductsListItem
