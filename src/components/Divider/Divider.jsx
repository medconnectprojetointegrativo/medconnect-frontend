export default function Divider({direction, size = '80%', margin = '15px', className = {}}) {

    let style = {
        justifySelf: 'center',
        alignSelf: 'center',
        backgroundColor: '#0000007a',
    }

    let directionStyle;
    if (direction === 'vertical') {
        directionStyle = {
			height: size,
			width: '2px',
			margin: `0 ${margin}`,
            ...style
		};
    }

    if (direction === 'horizontal') {
        directionStyle = {
			height: '2px',
			width: size,
			margin: `${margin} 0`,
            ...style
		};
    }

    return <div style={directionStyle} className={className}></div>;
}