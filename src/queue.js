import kue from 'kue';

const queue = kue.createQueue({
	redis: {
		port: 6379,
		host: 'redis'
	}
});

export default (req, res, next) => {
	// connect to a database if needed, then pass it to `callback`:
	req.queue = queue;

	next();
}
