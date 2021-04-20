import React from 'react'
import { Spin } from 'antd'
import PropTypes from 'prop-types'

const Loader = (props) => {
    const { size } = props

    return (
        <Spin
            size={size}
        />
    )
}

Loader.propTypes = {
    size: PropTypes.string,
}

export default Loader