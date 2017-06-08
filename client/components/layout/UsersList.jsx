
	const UsersList = ( users ) => (
		<div>
			{ users.map( ( user ) => <div>{ user.id }, { user.name }, { user.emailHash }</div> }
		</div>
	);

	export default UsersList;
