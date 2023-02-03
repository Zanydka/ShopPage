import React, { useState } from 'react'
import { Button } from '@mui/material'
type CounterProps = {
    textBtn: string
}
const Counter = (props: CounterProps) => {
    const [count, setCounter] = useState<number>(0)
    return (
        <Button
            variant="outlined"
            style={{ color: 'black' }}
            onClick={() => setCounter(count + 1)}
        >
            {props.textBtn}({count})
        </Button>
    )
}
export default Counter
