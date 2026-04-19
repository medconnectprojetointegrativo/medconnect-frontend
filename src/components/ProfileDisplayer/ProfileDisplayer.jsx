import style from './ProfileDisplayer.module.css';

import { useEffect, useState } from 'react';

import User from '../../assets/icons/User'
import storage from '../../utils/localStorage';

export default function ProfileDisplayer() {
	const [userData, setUserData] = useState({ first_name: 'Usuário' });
	const [isProfileOptionsOpen, setIsProfileOptionsOpen] = useState(false);

	function toggleProfileOptions() {
		if (isProfileOptionsOpen) return setIsProfileOptionsOpen(false);
		if (!isProfileOptionsOpen) return setIsProfileOptionsOpen(true);
	}

	useEffect(() => {
		storage.save('user-info', userData);
	})

	return (
			<div
				className={style.profileDisplayer}
				onClick={() => toggleProfileOptions()}
			>
				<p className="kanit-regular text-white text-tiny">{userData.first_name}</p>
				<span>
					<User />
				</span>
			</div>
	);
}
