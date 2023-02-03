import Counter from 'container/Counter/Counter'
import ShopPage from 'container/ShopPage/ShopPage'
import { Typography } from '@mui/material'
type Props = {}
const App = (props: Props) => {
    return (
        <>
            <Typography variant="h4" component="h1" align="center">
                Перше завдання
            </Typography>
            <div className="center">
                <Counter textBtn="Change count 1 " />
                <Counter textBtn="Change count 2 " />
                <Counter textBtn="Change count 3 " />
            </div>
            <Typography variant="h4" component="h1" align="center">
                Our shop page
            </Typography>
            <ShopPage />
        </>
    )
}
export default App
