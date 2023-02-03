import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ShopPage.css'
import './ProductsListItem.scss'
import { useState } from 'react'

type Props = {
    title: string
    desc: string
    price: number
}
type CartData = {
    totalPrice: number
}
const ProductsListItem = (props: Props) => {
    const [cartData, setCartData] = useState<CartData>({
        totalPrice: 0,
    })

    const addTotalPrice = (price: number) => {
        setCartData((prevState: CartData) => ({
            totalPrice: prevState.totalPrice + price,
        }))
    }

    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <h1 className="product-title center">{props.title}</h1>
                <div className="product-dec center">{props.desc}</div>
                <div className="product-price center">EUR: {props.price}</div>
            </CardContent>
            <CardActions className="btnCenter">
                <Button
                    variant="outlined"
                    onClick={() => addTotalPrice(props.price)}
                >
                    Buy
                </Button>
            </CardActions>
            <div className="center">total: {cartData.totalPrice}</div>
        </Card>
    )
}
export default ProductsListItem
