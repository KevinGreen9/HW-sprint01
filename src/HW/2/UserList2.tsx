import {CurrentUser} from './CurrentUser';
import {UsersObjectType, UserType} from './HW2';

type UserList2PropsType = {
	users: UsersObjectType
	filterUsers:  (myFriends: Array<UserType>) => void
};

export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => props.filterUsers(props.users.myFriends)}>SHOW ME FRIENDS FROM LA</button>

			<ul>
			  {props.users.myFriends.map(u =>
				  <CurrentUser  key={u.id} user={u}/>
			  )}
			</ul>
		</div>
	);
};
