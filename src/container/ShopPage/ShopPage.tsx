import { Button } from '@mui/material'
import ProductList from './ProductList'
import './ShopPage.css'

type Props = {}

const ShopPage = (props: Props) => {
    return (
        <>
            <div className="center">
                <Button variant="outlined">USD</Button>
                <Button variant="outlined">EUR</Button>
                <Button variant="outlined">UAH</Button>
                <Button variant="outlined">PLN</Button>
            </div>
            <ProductList />
        </>
    )
}
export default ShopPage
