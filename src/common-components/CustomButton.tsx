import { Button, } from "@mui/material"

const CustomButton = (props: any) => {
    const { className, onBtnClick = () => { }, btnText, endIcon, startIcon } = props

    return (
        <Button className={className} onClick={(e) => onBtnClick(e)} variant="contained" endIcon={endIcon} startIcon={startIcon}>
            {btnText}
        </Button>
    )
}

export default CustomButton