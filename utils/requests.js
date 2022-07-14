const API_KEY = process.env.API_KEY;

export default {
	fetchTrending: {
		title: "Trending",
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	fetchTopRated: {
		title: "Top-Rated",
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	fetchAction: {
		title: "Action",
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	fetchComedy: {
		title: "Comedy",
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	fetchHorror: {
		title: "Horror",
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
};
