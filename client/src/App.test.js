import 'regenerator-runtime'
import { configure, mount, shallow } from 'enzyme'
import 'jest-styled-components'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import React from 'react'
import renderer from 'react-test-renderer'
import { getMeasures } from './services'
import { DatetimePickerContainer, DatetimePickerLabel, ChartContainer, ChartLabel, LoaderSpan } from './styles'
import DatetimePicker from './components/datetimepicker'
import Chart from './components/chart'
import Loader from './components/loader'
import NoData from './components/nodata'

configure({ adapter: new Adapter() });

describe('Get measures from API', () => {
  test('It should get response from /measures API', async () => {
    const [startDate, endDate] = [1, 2]

    return await getMeasures(startDate, endDate).then((response) => expect(response))
  })
})

describe('Get styles', () => {
  test('It should have style rules like position, margin, etc.', () => {
    const containers = shallow(
      <DatetimePickerContainer />,
      <ChartContainer />,
    )

    const datetimePickerLabel = shallow(
      <DatetimePickerLabel />,
    )

    const chartLabel = shallow(
      <ChartLabel />
    )

    const loaderSpan = shallow(
      <LoaderSpan />
    )

    expect(containers).toHaveStyleRule('position', 'absolute')
    expect(datetimePickerLabel).toHaveStyleRule('margin', '0 0 10px 10px')
    expect(chartLabel).toHaveStyleRule('display', 'flex')
    expect(loaderSpan).toHaveStyleRule('margin', '0 0 0 15px')
  })
})

describe('Component: DatetimePicker', () => {
  test('It should render DatetimePicker component', () => {
    const props = { disabledDate: jest.fn(), handler: jest.fn(), showTime: true, datetimeFormat: "string", label: "label" }
    const component = (
      <DatetimePicker
        showTime={props.showTime}
        datetimeFormat={props.datetimeFormat}
        disabledDate={props.disabledDate}
        handler={props.handler}
        label={props.label}
      />
    )

    expect(renderer.create(component).toJSON()).toMatchSnapshot()
  })
})

describe('Component: Chart', () => {
  test('It should render Chart component', () => {
    const props = { data: { a: 1, b: 2 } }
    const component = mount(
      <Chart {...props} />
    )

    expect((component).prop('data')).toEqual({ a: 1, b: 2 })
  })
})

describe('Component: Loader', () => {
  test('It should render Loader component', () => {
    const props = { size: "large" }
    const component = mount(
      <Loader {...props} />
    )

    expect((component).prop('size')).toEqual("large")
  })
})

describe('Component: NoData', () => {
  test('It should render NoData component', () => {
    const props = { description: "desc" }
    const component = mount(
      <NoData {...props} />
    )

    expect((component).prop('description')).toEqual("desc")
  })
})