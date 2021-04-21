import axios from 'axios'

const getMeasures = async (startDate, endDate) => {
    const options = {
        "url": "https://perfapp-api.herokuapp.com/measures",
        "method": "GET",
        "params": {
            "startDate": startDate,
            "endDate": endDate,
        },
    }

    return await axios(options).then((response) => { return response.data.measures })
}

export { getMeasures }