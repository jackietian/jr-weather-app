import React from 'react';

const ForcastListItem = (props) => {
	const { weekday, icon, temperature, description } = props;
	return <>
		<h1>{weekday}</h1>
		<p>{icon}</p>
		<p>{temperature}</p>
		<p><small>{description}</small></p>
	</>;
}

export default ForcastListItem;