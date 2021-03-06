import { version } from '../../package.json';
import { Router } from 'express';
import reportHandler from './reports'

export default ({ config }) => {
	let api = Router();

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.get('/reports', reportHandler);

	return api;
}
