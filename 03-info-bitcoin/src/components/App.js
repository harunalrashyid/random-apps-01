import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Styles from './App.module.css'

const App = props => {
  return (
    <div className="App">
      <Header />
      <main className={Styles.main}>
      	<div className={Styles.sidebar}>
      		<ul className={Styles.sidebar__list}>
				<li className={Styles.sidebar__item}>
					<Link to="/">Home</Link>
				</li>
				<li className={Styles.sidebar__item}>
					<Link to="/conversion-rupiah">Conversion</Link>
				</li>
				<li className={Styles.sidebar__item}>
					<Link to="/conversion-bitcoin">Conversion Rupiah</Link>
				</li>
      		</ul>
      	</div>
      	<div className={Styles.content}>
			{props.children}
      	</div>
      </main>
    </div>
  );
}

export default App;
