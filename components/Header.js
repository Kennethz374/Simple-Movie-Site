import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";

function Header() {
	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
			<div className="flex flex-grow justify-evenly max-w-2xl pt-5">
				<HeaderIcon title="Home" Icon={HomeIcon} />
				<HeaderIcon title="Collection" Icon={CollectionIcon} />
				<HeaderIcon title="Verified" Icon={BadgeCheckIcon} />
				<HeaderIcon title="Trending" Icon={LightningBoltIcon} />
				<HeaderIcon title="Search" Icon={SearchIcon} />
				<HeaderIcon title="Account" Icon={UserIcon} />
			</div>

			{/* Website Logo */}
			<Image
				className="object-contain"
				src="https://links.papareact.com/ua6"
				width={200}
				height={100}
			/>
		</header>
	);
}

export default Header;
