import './Notification.module.css';

import ErrorFull from '../../assets/icons/ErrorFull'
import Check from '../../assets/icons/Check';
import Information from '../../assets/icons/Information';
import { Check, Info, X } from 'lucide-react';

function Notification({ variant, message, visible = false, duration }) {
	const icons = {
		success: <Check/>,
		error: <ErroFull />,
		information: <Information/>,
	};

	return (
		<div className={`${style.notification} ${visible ? style.visible : style.hidden}`}>
			<div className={style.notificationContent}>
				<span>{icons[type]}</span>
				<p>{message}</p>
			</div>
			<div
				className={style.notificationTimer}
				style={{
					animation: `${visible === 'show' ? `notificationTimer ${duration}s ease-in-out` : ''}`,
				}}
			></div>
		</div>
	);
}

export default Notification;
