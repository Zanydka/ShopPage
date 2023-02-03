import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'
import './ShopPage.css'

type ProductProps = {
    id: number
    title: string
    desc: string
    price: number
}

type Props = {}
const ProductList = (props: Props) => {
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
                            />
                        </Grid>
                    )
                )}
            </Grid>
            <div className="center">total: </div>
        </>
    )
}
export default ProductList
