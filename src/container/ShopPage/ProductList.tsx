import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'
import './ShopPage.css'
import { useState } from 'react'
import { Button } from '@mui/material'

type ProductProps = {
    id: number
    title: string
    desc: string
    price: number
}

type Props = {}
const ProductList = (props: Props) => {
    const [countSum, setCountSum] = useState<number>(0)
    // const coefMoney = {
    //     EUR: 1,
    //     USD: 1.08,
    //     UAH: 40,
    //     PLN: 4.71,
    // }

    const [modifiedSum, setModifiedSum] = useState<number>(countSum)

    return (
        <>
            <div className="center">
                <Button
                    variant="outlined"
                    onClick={() => setModifiedSum(countSum * 1.08)}
                >
                    USD
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setModifiedSum(countSum * 1)}
                >
                    EUR
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setModifiedSum(countSum * 40)}
                >
                    UAH
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setModifiedSum(countSum * 4.71)}
                >
                    PLN
                </Button>
            </div>
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
            <div className="center">total: {countSum}</div>
            <div className="center">
                total in selected currency: {modifiedSum}
            </div>
        </>
    )
}
export default ProductList
