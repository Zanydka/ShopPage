import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'
import './ShopPage.css'
import { useState } from 'react'

type ProductProps = {
    id: number
    title: string
    desc: string
    price: number
}

type Props = {}
const ProductList = (props: Props) => {
    const [countSum, setCountSum] = useState<number>(0)
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({ id, title, desc, price }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                title={title}
                                desc={desc}
                                price={price}
                                setCountSum={setCountSum}
                            />
                        </Grid>
                    )
                )}
            </Grid>
            <div className="center">total: {countSum} </div>
        </>
    )
}
export default ProductList
