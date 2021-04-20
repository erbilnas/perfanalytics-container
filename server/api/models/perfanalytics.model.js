const mongoose = require('mongoose');

const PerfanalyticsSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    },
    ttfb: {
        type: Number,
    },
    fcp: {
        type: Number,
    },
    domLoad: {
        type: Number,
    },
    windowLoad: {
        type: Number,
    }
});

module.exports = mongoose.model('Perfanalytics', PerfanalyticsSchema);