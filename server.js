const express = require('express');
const app = express();

const apps = [
    { id: 1, name: 'my-app-001' },
    { id: 2, name: 'my-app-002' },
    { id: 3, name: 'my-app-003' },
    { id: 4, name: 'my-app-004' },
    { id: 5, name: 'my-app-005' },
    { id: 6, name: 'my-app-006' },
    { id: 7, name: 'my-app-007' },
    { id: 8, name: 'my-app-008' },
    { id: 9, name: 'my-app-009' },
    { id: 10, name: 'my-app-010' },
]

app.get('/apps', (req, res) => {
    const start = parseInt(req.query.start)
    const max = parseInt(req.query.max)

    const startIndex = (start - 1) * max
    const endIndex = start * max

    const results = {}

    if (endIndex < apps.length) {
        results.next = {
            start: start - 1,
            max: max
        }
    }



    if (startIndex > 0) {
        results.previous = {
            start: start - 1,
            max: max
        }
    }



    results.results = apps.slice(startIndex, endIndex)


    res.json(results)
})


app.listen(3000)