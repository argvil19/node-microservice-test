import kue from 'kue'
import generateData from '../mocks/report-data'
import { Parser } from 'json2csv'


const queue = kue.createQueue()

export default () => {
    queue.process('csv', 5, (job, done) => {
        const fields = ['name', 'email', 'city'];

        const csv = new Parser({ fields }).parse(generateData());

        console.log(csv)

        done(null, csv);
    });
}
