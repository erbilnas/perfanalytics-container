import React from 'react'
import PropTypes from 'prop-types'
import { Empty } from 'antd'

const NoData = (props) => {
    const { description } = props
    return (
        <Empty
            description={<span>{description}</span>}
        />
    )
}

NoData.propTypes = {
    description: PropTypes.string,
}

export default NoData