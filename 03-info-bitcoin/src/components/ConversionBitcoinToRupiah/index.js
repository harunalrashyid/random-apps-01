import React, { Component } from 'react';
import styles from './ConversionBitcoinToRupiah.module.css';

class ConversionBitcoinToRupiah extends Component {
	constructor() {
		super();

		this.state = {
			currentInput: '',
			input: '',
			rate: ''
		}
	}

	handleInputChange = e => {
		const inputValue = e.target.value
		this.setState({input: inputValue});
	}

	handleSubmit = e => {
		e.preventDefault();

		let convert = this.state.input * 14000;

		fetch(`https://blockchain.info/tobtc?currency=USD&value=${convert}`)
		.then(res => res.json())
		.then(res => {
			this.setState({
				rate: res.toString().replace(/\D/g,''),
				currentInput: this.state.input
			});
		});
	}

	render() {
		const { currentInput, input, rate } = this.state

		return(
			<div className={styles.conversion}>
				<h1 className={styles.title}>Konversi Bitcoin ke Rupiah</h1>
				<h5 className={styles.subtitle}>Kurs 1 USD = 14.000 IDR</h5>
				<div className={styles.conversion__inputWrapper}>
					<input type="number" className={styles.conversion__input} onChange={this.handleInputChange} value={input}/>
					<input type="submit" onClick={this.handleSubmit} value="Convert"/>
				</div>
				<h3 className={styles.conversion__result}>
					BTC {currentInput} = Rp {rate}
				</h3>
			</div>
		)
	}
}

export default ConversionBitcoinToRupiah;