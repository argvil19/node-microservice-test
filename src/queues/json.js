import kue from 'kue'
import generateData from '../mocks/report-data'

const queue = kue.createQueue()

export default () => {
    queue.process('json', 5, (job, done) => {
        done(null, generateData());
    });
}
