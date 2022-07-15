import Thumbnail from "../components/Thumbnail";

function Content({ results }) {
	return (
		<div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-wrap justify-center">
			{results.map((result) => {
				return <Thumbnail result={result} key={result.id} />;
			})}
		</div>
	);
}

export default Content;
