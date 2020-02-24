import React, { Component } from 'react';
import styles from './Bitcoin.module.css';

class Bitcoin extends Component {
	constructor() {
		super();

		this.state = {
			bitcoins: [],
			complete: false
		}
	}

	componentDidMount() {
		fetch('https://blockchain.info/ticker')
		.then(res => res.json())
		.then(res => {
			this.setState({
				bitcoins: res,
				complete: true
			});
		})
	}

	render() {
		const { bitcoins, complete } = this.state;

		return(
			<div className="coins">
				<h1 className={styles.title}>Info Bitcoin Hari Ini</h1>
				{complete ? (
					<div className={styles.bitcoin__wrapper}>
						<div className={styles.bitcoin__innerWrapper}>
							<h4 className="bitcoin__title">Mata Uang</h4>
							<p className="bitcoin__currency">{bitcoins.AUD.symbol} Dollar Australia</p>
							<p className="bitcoin__currency">{bitcoins.EUR.symbol} Euro Eropa</p>
							<p className="bitcoin__currency">{bitcoins.GBP.symbol} Poundstreling Inggris</p>
							<p className="bitcoin__currency">{bitcoins.JPY.symbol} Yen Jepang</p>
							<p className="bitcoin__currency">{bitcoins.USD.symbol} Dollar Amerika</p>							
						</div>
						<div className={styles.bitcoin__innerWrapper}>
							<h4 className="bitcoin__title">Harga Beli Bitcoin</h4>
							<p className="bitcoin__buy">{bitcoins.AUD.buy}</p>
							<p className="bitcoin__buy">{bitcoins.EUR.buy}</p>
							<p className="bitcoin__buy">{bitcoins.GBP.buy}</p>
							<p className="bitcoin__buy">{bitcoins.JPY.buy}</p>
							<p className="bitcoin__buy">{bitcoins.USD.buy}</p>							
						</div>
						<div className={styles.bitcoin__innerWrapper}>
							<h4 className="bitcoin__title">Harga Jual Bitcoin</h4>
							<p className="bitcoin__sell">{bitcoins.AUD.sell}</p>
							<p className="bitcoin__sell">{bitcoins.EUR.sell}</p>
							<p className="bitcoin__sell">{bitcoins.GBP.sell}</p>
							<p className="bitcoin__sell">{bitcoins.JPY.sell}</p>
							<p className="bitcoin__sell">{bitcoins.USD.sell}</p>
						</div>
					</div>
				) : (
					<div className={styles.bitcoin__innerWrapper}>
						<p>Loading . . .</p>
					</div>					
				)}						
			</div>
		);
	}
}

export default Bitcoin;