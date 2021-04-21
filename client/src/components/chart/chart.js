import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { ChartLabel } from '../../styles/'

const Chart = (props) => {
    const { data, label, width, height, margin } = props

    return (
        <>
            <ChartLabel>{label}</ChartLabel>
            <LineChart width={width} height={height} margin={margin} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend iconType="square" />
                <Line type="monotone" name="FCP" dataKey="fcp" stroke="#bf1b1b" />
                <Line type="monotone" name="TTFB" dataKey="ttfb" stroke="#11910f" />
                <Line type="monotone" name="Dom Load" dataKey="domLoad" stroke="#0f3d7d" />
                <Line type="monotone" name="Window Load" dataKey="windowLoad" stroke="#9c18c4" />
            </LineChart>
        </>
    )
}

Chart.propTypes = {
    data: PropTypes.object || PropTypes.array,
    label: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.object,
}

export default Chart