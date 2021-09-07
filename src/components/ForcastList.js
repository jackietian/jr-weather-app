import React from 'react';
import ForcastListItem from './ForcastListItem';
import {
	Sun,
	Rain,
	Cloud,
	Storm
} from './Icons';

const ForcastList = () => {
	const items = [{
		weekday: 'mon',
		temperature: '9°',
		icon: Rain,
		description: 'raining'
	}, {
		weekday: 'tue',
		temperature: '9°',
		icon: Sun,
		description: 'sunny'
	}, {
		weekday: 'wed',
		temperature: '9°',
		icon: Storm,
		description: 'storm'
	}, {
		weekday: 'thu',
		temperature: '9°',
		icon: Cloud,
		description: 'cloudy'
	}, {
		weekday: 'fri',
		temperature: '9°',
		icon: Sun,
		description: 'sunny'
	}];

	return <ul>
		{items.map((item, index) => <li key={index}><ForcastListItem {...item} /></li>)}
	</ul>;
}

export default ForcastList;