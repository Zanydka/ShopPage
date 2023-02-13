import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'
import './ShopPage.css'
import { useState, useEffect } from 'react'
import { Button } from '@mui/material'

type ProductProps = {
    id: number
    title: string
    desc: string
    price: number
}

const CoefMoneyProps = {
    EUR: 1,
    USD: 1.08,
    UAH: 40,
    PLN: 4.71,
}

type Props = {}
const ProductList = (props: Props) => {
    const [countSum, setCountSum] = useState<number>(0)

    const [modifiedSum, setModifiedSum] = useState<number>(countSum)
    const [coefMoney, setcoefMoney] = useState<number>(CoefMoneyProps.EUR)

    useEffect(() => {
        setModifiedSum(countSum * coefMoney)
    }, [setModifiedSum, countSum, coefMoney])

    return (
        <>
            <div className="center">
                <Button
                    variant="outlined"
                    onClick={() => setcoefMoney(CoefMoneyProps.USD)}
                >
                    USD
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setcoefMoney(CoefMoneyProps.EUR)}
                >
                    EUR
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setcoefMoney(CoefMoneyProps.UAH)}
                >
                    UAH
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => setcoefMoney(CoefMoneyProps.PLN)}
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
