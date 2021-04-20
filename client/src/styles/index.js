import styled from 'styled-components'

const DatetimePickerContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 10%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    @media screen and (max-width: 528px) {
        width: 90%;
    }
`
const DatetimePickerLabel = styled.p`
    margin: 0 0 10px 10px;
`

const ChartContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 15%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, 0%);
`

const ChartLabel = styled.span`
    margin: 0 0 0 45%;
`

const LoaderSpan = styled.span`
    margin: 0 0 0 15px;
`

export { DatetimePickerContainer, DatetimePickerLabel, ChartContainer, ChartLabel, LoaderSpan }