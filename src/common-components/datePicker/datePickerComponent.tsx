import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
    DatePickerProps as DatePickerCompProps,
} from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { DesktopDatePicker } from "@mui/x-date-pickers";

interface DatePickerProps extends DatePickerCompProps<any> {
    labelText: string;
    value?: string;
    onChange: (value: any) => void;
    onClick?: () => void;
    minDate?: any;
    maxDate?: any;
}

const DatePickerComponent: React.FC<DatePickerProps> = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box display={"flex"} flexDirection={"column"}>
                {props.labelText ? (
                    <label className='input-label'>{props.labelText}</label>
                ) : null}

                <DesktopDatePicker
                 className='input-date-picker'
                    slots={{
                        openPickerIcon: CalendarTodayOutlinedIcon,
                    }}
                    format={"DD/MM/YYYY"}
                    {...props}
                    slotProps={{
                        ...props.slotProps,
                        textField: {
                            ...props.slotProps?.textField,
                            placeholder: "",
                        },
                        field: {
                            readOnly: true,
                            ...props.slotProps?.field,
                        },
                    }}
                />
            </Box>
        </LocalizationProvider>
    );
};

export default DatePickerComponent;
