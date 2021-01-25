const express = require('express');
const app = express();


const products = [
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
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const apps = {}


    if (endIndex < products.length) {
        apps.next = {
            page: page + 1,
            limit: limit,
        }
    }


    if (startIndex > 0) {
        apps.previous = {
            page: page - 1,
            limit: limit,
        }
    }


    apps.apps = products.slice(startIndex, endIndex)



    res.json(apps)
})


app.listen(3000)