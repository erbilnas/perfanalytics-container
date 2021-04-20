import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'antd'
import { DatetimePickerLabel } from '../../styles'

const { RangePicker } = DatePicker;

const DatetimePicker = (props) => {
    const { disabledDate, handler, datetimeFormat, showTime, label } = props

    return (
        <>
            <DatetimePickerLabel>{label}</DatetimePickerLabel>
            <RangePicker
                showTime={showTime}
                disabledDate={disabledDate}
                format={datetimeFormat}
                onCalendarChange={(dates, dateStrings, info) => { handler(dates, dateStrings, info) }}
            />
        </>
    )
}

DatetimePicker.propTypes = {
    showTime: PropTypes.bool,
    datetimeFormat: PropTypes.string,
    handler: PropTypes.func,
    disabledDate: PropTypes.func,
    label: PropTypes.string,
}

export default DatetimePicker