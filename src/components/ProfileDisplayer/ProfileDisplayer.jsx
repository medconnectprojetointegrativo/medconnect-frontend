import style from './ProfileDisplayer.module.css';

import { use, useEffect, useState } from 'react';

import User from '../../assets/icons/User';
import storage from '../../utils/localStorage';
import { useAuth } from '../../contexts/AuthContext';

export default function ProfileDisplayer() {
	const { user } = useAuth();
	const [isProfileOptionsOpen, setIsProfileOptionsOpen] = useState(false);

	function toggleProfileOptions() {
		if (isProfileOptionsOpen) return setIsProfileOptionsOpen(false);
		if (!isProfileOptionsOpen) return setIsProfileOptionsOpen(true);
	}

	return (
		<div
			className={style.profileDisplayer}
			onClick={() => toggleProfileOptions()}
		>
			<p className="kanit-regular text-white text-tiny">
				{user?.nome}
			</p>
			<span>
				<User />
			</span>
		</div>
	);
}
