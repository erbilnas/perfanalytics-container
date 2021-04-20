const request = require('supertest')
const app = require('../server')
const mongoose = require('mongoose')

describe("Get metrics from library", () => {
    test("It should get response from /metrics API", () => {
        const metrics = {
            url: "test",
            date: 1,
            ttfb: 1,
            fcp: 1,
            domLoad: 1,
            windowLoad: 1,
        }

        return request(app).post('/metrics').send(metrics).expect(200)
    })
})

describe("Send measures to the frontend", () => {
    test("It should get response from /measures API", () => {
        const params = {
            startDate: 1,
            enDate: 2,
        }

        return request(app).get('/measures').send(params).expect(200)
    })
})

afterAll(() => {
    mongoose.disconnect()
})