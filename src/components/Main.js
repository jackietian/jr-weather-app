import React from 'react';
import ForcastList from './ForcastList';
import Twitter from './Twitter';
import CityWeather from './CityWeather';

const Main = () => {
	return <main>
		<div className="card">
			<div className="card__main">
				<CityWeather />
			</div>
			<div className="card__details">
				<div className="card__details__left">
					<Twitter />
				</div>
				<div className="card__details__right">
					<ForcastList />
				</div>
			</div>
		</div>
	</main>;
}

export default Main;