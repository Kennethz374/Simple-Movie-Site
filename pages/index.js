import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Content from "../components/Content";
import requests from "../utils/requests";

export default function Home(props) {
	console.log(props.results);
	return (
		<div>
			<Head>
				<title>K-TV</title>
				<link rel="icon" href="" />
			</Head>

			{/* Header */}
			<Header />
			{/* NAV */}
			<Nav />
			{/* RESULT */}
			<Content results={props.results} />
		</div>
	);
}

//this will get executed first
export async function getServerSideProps(context) {
	const genre = context.query.genre;

	const request = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre]?.url || requests.fetchTrending.url
		}`
	).then((res) => res.json());

	return {
		props: {
			results: request.results,
		},
	};
}
