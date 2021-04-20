import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { ChartLabel } from '../../styles/'

const Chart = (props) => {
    const { data, label } = props

    return (
        <>
            <ChartLabel>{label}</ChartLabel>
            <LineChart width={350} height={300} margin={{ top: 5, right: 5, bottom: 55, left: 25 }} data={data}>
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
    data: PropTypes.object,
    label: PropTypes.string,
}

export default Chart