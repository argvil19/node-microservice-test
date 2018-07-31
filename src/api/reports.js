const reportHandler = (req, res, next) => {
    const reportType = req.query.type;
    
    if (reportType === 'json') {
        req.queue.create('json')
            .priority('high')
            .on('complete', (result) => {
                return res.json(result);
            })
            .save();
    } else if (reportType === 'pdf') {
        req.queue.create('pdf')
            .priority('high')
            .on('complete', (result) => {
                res.set({
                    'Content-type': 'application/pdf'
                });

                res.send(Buffer.from(result, 'base64'));
            })
            .save();
    } else if (reportType === 'csv') {
        req.queue.create('csv')
            .priority('high')
            .on('complete', (result) => {
                res.set({
                    'Content-type': 'application/csv'
                });

                res.write(result);
                res.end();
            })
            .save();

    } else {
        return res.status(422).json({
            message: 'Invalid type'
        })
    }
};

export default reportHandler;