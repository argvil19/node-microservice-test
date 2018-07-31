import kue from 'kue'
import generateData from '../mocks/report-data';
import PDFDocument from 'pdfkit'

const queue = kue.createQueue()

export default () => {
    queue.process('pdf', 5, (job, done) => {
        const doc = new PDFDocument({
            size: 'A4',
            info: {
                Title: 'Test report',
                Author: 'Test Author'
            }
        })

        let buffers = [];

        doc.on('data', chunk => buffers.push(chunk));
        doc.on('end', () => {
            done(null, Buffer.concat(buffers).toString('base64'));
        });

        doc.text(JSON.stringify(generateData()));
        doc.end();
    });
}
