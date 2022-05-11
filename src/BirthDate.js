import React from "react";
import DatePicker from "react-date-picker";

const BirthDate = ({dob, setDate}) => {

    return(
    <DatePicker onChange={(dateEvent) => setDate(dateEvent)} value={dob}/>
    )
}

export default BirthDate;