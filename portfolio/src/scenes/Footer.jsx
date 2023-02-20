import SocialMediaIcons from "../components/SocialMediaIcons";

function Footer() {
	return (
		<footer className="h-64 bg-red pt-10">
			<div className="w-5/6 mx-auto">
				<SocialMediaIcons />
				<div className="md:flex justify-center md:justify-between text-center">
					<p className="font-playfair font-semibold text-2xl text-yellow">
						NURUL ISLAM
					</p>
					<p className="font-playfair text-md text-yellow">
						© 2022 ESPER. ALL Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
