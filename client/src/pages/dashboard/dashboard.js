import React, { useEffect, useState, useCallback } from 'react'
import { DatetimePickerContainer, ChartContainer, LoaderSpan } from '../../styles'
import { Space, Layout } from 'antd'
import Chart from '../../components/chart'
import DatetimePicker from '../../components/datetimepicker'
import NoData from '../../components/nodata'
import Loader from '../../components/loader'
import { getMeasures } from '../../services'
import moment from 'moment'
import _ from 'lodash'

const Dashboard = () => {
    const [date, setDate] = useState({ startDate: null, endDate: null })
    const [measures, setMeasures] = useState(null)
    const [loader, setLoader] = useState(false)

    const chartMargin = { top: 5, right: 5, bottom: 55, left: 25 }

    useEffect(() => {
        if (date.endDate) {
            getMeasures(date.startDate, date.endDate).then((measure) => {
                setMeasures(measure)
                setLoader(false)
            })
        }
    }, [date.endDate])

    const datetimeHandler = useCallback((dates, datesAsString, info) => { // A handler function to get dates from component
        if (info.range === 'end' && dates !== null) {
            let startDate = moment(dates[0]).valueOf()
            let endDate = moment(dates[1]).valueOf()

            setDate({ startDate: startDate, endDate: endDate })
            setLoader(true)
        }
    }, [])


    const disabledDate = (current) => {
        return current > moment().endOf('day') // Days after today are prevented from being selected
    }

    const showCharts = (
        measures
            ? (
                measures.length !== 0
                    ? (
                        // In here, I chose to group measures by URLs, because the charts should be created
                        // according to individual URLs. Must be refactored in the near future.
                        Object.keys(Object.keys(_.groupBy(measures, 'url'))).map(index => {
                            return (
                                <Chart
                                    key={index}
                                    label={Object.keys(_.groupBy(measures, 'url'))[index]}
                                    data={Object.values(_.groupBy(measures, 'url'))[index]}
                                    width={350}
                                    height={350}
                                    margin={chartMargin}
                                />
                            )
                        })
                    )
                    : (<NoData description="No data found!" />)
            )
            : (<NoData description="Waiting for start and end date..." />)
    )

    const showLoader = (
        loader
            ? (
                <LoaderSpan>
                    <Loader size="medium" />
                </LoaderSpan>
            )
            : null
    )

    return (
        <>
            <DatetimePickerContainer>
                <DatetimePicker
                    showTime={true}
                    datetimeFormat="DD-MM-YYYY HH:mm:ss"
                    disabledDate={disabledDate}
                    handler={datetimeHandler}
                    label="Please, select start and end date to view related chart(s)."
                />
                {showLoader}
            </DatetimePickerContainer>
            <ChartContainer>
                <Layout>
                    <Space wrap>
                        {showCharts}
                    </Space>
                </Layout>
            </ChartContainer>
        </>
    )
}

export default Dashboard