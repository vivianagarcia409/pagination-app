const express = require('express');
const app = express();

const apps = []

for (let i = 0; i < 100; i++) {
    apps.push({
        id: i,
        name: `my-app-${i}`
    })
}

function paginate (apps, start, max) {
    const sum = apps.slice(start, start + max)

    return sum
}



app.get('/apps', (req, res) => {
    const by = req.query.range.id
    const start = parseInt(req.query.range.start)
    const end = parseInt(req.query.range.end)
    const max = parseInt(req.query.range.max)
    const order = req.query.range.asc


    let data = paginate(apps, start, max)


    res.json({
        data,
        start,
        max,
        params: req.query
    })
})




app.listen(3000)