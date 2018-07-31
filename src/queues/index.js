import jsonQueue from './json'
import pdfQueue from './pdf'
import csvQueue from './csv'

export default () => {
    jsonQueue();
    pdfQueue();
    csvQueue();
}