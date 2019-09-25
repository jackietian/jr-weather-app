import React from 'react';
import './App.scss';

function App() {
  return (
		<div className="container">
			<header>header</header>
			<main>
				<div className="card">
					<div className="card__main">
						<h1>france</h1>
						<div className="card__main__left">
							<h1>12</h1>
							<div className="card__main__left__icon"></div>
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
							<h1>twitter feed <small>#france</small></h1>
						</div>
						<div className="card__details__right">
							<ul>
								<li>
									<h1>mon</h1>
									<p>cloudy</p>
									<p>9°C</p>
									<p><small>raininig</small></p>
								</li>
								<li>
									<h1>tue</h1>
									<p>cloudy</p>
									<p>9°C</p>
									<p><small>sunny</small></p>
								</li>
								<li>
									<h1>wed</h1>
									<p>cloudy</p>
									<p>9°C</p>
									<p><small>cloudy</small></p>
								</li>
								<li>
									<h1>thu</h1>
									<p>cloudy</p>
									<p>9°C</p>
									<p><small>storm</small></p>
								</li>
								<li>
									<h1>fri</h1>
									<p>cloudy</p>
									<p>9°C</p>
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
