import { Button, } from "@mui/material"

const CustomButton = (props: any) => {
    const { className, onBtnClick = () => { }, btnText, endIcon } = props

    return (
        <Button className={className} onClick={() => onBtnClick()} variant="contained" endIcon={endIcon}>
            {btnText}
        </Button>
    )
}

export default CustomButton