import React from 'react';

const CityWeather = () => {
	return <>
		<h1>france</h1>
		<div className="card__main__left">
			<h1>12</h1>
			<div className="celsius"></div>
			<p>cloudy</p>
			<ul>
				<li>
					<h1>humidity</h1>
					<p>64%</p>
				</li>
				<li>
					<h1>wind</h1>
					<p>12 k/m</p>
				</li>
			</ul>
		</div>
	</>;
}

export default CityWeather;