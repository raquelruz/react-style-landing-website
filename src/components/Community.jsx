export const Community = () => {
	return (
		<div className="text-center py-10 p-5">
			<div>
				<h2 className="text-3xl font-semibold mb-2">Manage your entire community in a single system</h2>
				<p className="text-gray-600 mb-8 text-sm">Who is Nextcent suitable for?</p>
			</div>

			<div className="flex flex-wrap justify-center items-center gap-20">
				<div className="flex flex-col items-center text-center max-w-xs">
					<img
						src="/src/media/icons/community-icons.png"
						alt=""
						className="h-12 mb-4 transition-transform duration-300 hover:scale-110"
					/>
					<h4 className="text-2xl font-semibold mb-2">Membership Organisations</h4>
					<p className="text-gray-600 text-sm">
						Our membership management software provides full automation of membership renewals and payments.
					</p>
				</div>

				<div className="flex flex-col items-center text-center max-w-xs">
					<img
						src="/src/media/icons/associations-icon.png"
						alt=""
						className="h-12 mb-4 transition-transform duration-300 hover:scale-110"
					/>
					<h4 className="text-2xl font-semibold mb-2">National Associations</h4>
					<p className="text-gray-600 text-sm">
						Our membership management software provides full automation of membership renewals and payments.
					</p>
				</div>

				<div className="flex flex-col items-center text-center max-w-xs">
					<img
						src="/src/media/icons/clubs-icon.png"
						alt=""
						className="h-12 mb-4 transition-transform duration-300 hover:scale-110"
					/>
					<h4 className="text-2xl font-semibold mb-2">Clubs And Groups</h4>
					<p className="text-gray-600 text-sm">
						Our membership management software provides full automation of membership renewals and payments.
					</p>
				</div>
			</div>
		</div>
	);
};
