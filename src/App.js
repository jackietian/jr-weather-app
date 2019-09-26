import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faBars,
	faCloudSun,
	faCloudSunRain,
	faPooStorm,
	faSun
} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
		<div className="container">
			<header><FontAwesomeIcon icon={faBars} /></header>
			<main>
				<div className="card">
					<div className="card__main">
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
					</div>
					<div className="card__details">
						<div className="card__details__left">
							<h1>
								twitter feed <small>#france</small></h1>
							<ul>
								<li>
									<div className="avatar"></div>
									<p>some text here</p>
								</li>
								<li>
									<div className="avatar"></div>
									<p>some text here</p>
								</li>
							</ul>
						</div>
						<div className="card__details__right">
							<ul>
								<li>
									<h1>mon</h1>
									<p><FontAwesomeIcon icon={faCloudSunRain} /></p>
									<p>9°</p>
									<p><small>raininig</small></p>
								</li>
								<li>
									<h1>tue</h1>
									<p><FontAwesomeIcon icon={faSun} /></p>
									<p>15°</p>
									<p><small>sunny</small></p>
								</li>
								<li>
									<h1>wed</h1>
									<p><FontAwesomeIcon icon={faCloudSun} /></p>
									<p>11°</p>
									<p><small>cloudy</small></p>
								</li>
								<li>
									<h1>thu</h1>
									<p><FontAwesomeIcon icon={faPooStorm} /></p>
									<p>7°</p>
									<p><small>storm</small></p>
								</li>
								<li>
									<h1>fri</h1>
									<p><FontAwesomeIcon icon={faSun} /></p>
									<p>18°</p>
									<p><small>sunny</small></p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
		</div>
  );
}

export default App;
