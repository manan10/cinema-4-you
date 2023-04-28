import { useState } from "react"

const useInput = (defValue) => {
    const [ value, setValue ] = useState(defValue ? defValue : "")

    const onChangeValue = (event) => {
        setValue(event.target.value)
    }

    const onSetValue = (val) => {
        setValue(val)
    }

    return { value, onChangeValue, onSetValue }
}

export default useInput