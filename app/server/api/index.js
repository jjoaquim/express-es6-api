import { Router } from 'express';

export default function() {
	var api = Router();

	// API root. Just show the version and description
	api.get('/', (req, res) => {
		res.json({
			description: "Small Express ES6 API project",
			version : '1.0'
		});
	});

	return api;
}
