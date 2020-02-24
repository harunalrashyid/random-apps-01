import React, { Component } from 'react';
import styles from './Conversion.module.css';

class Conversion extends Component {
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

		const convert = this.state.input / 14000;

		fetch(`https://blockchain.info/tobtc?currency=USD&value=${convert}`)
		.then(res => res.json())
		.then(res => {
			this.setState({
				rate: res,
				currentInput: this.state.input
			});
		})
	}

	render() {
		const { currentInput, input, rate } = this.state

		return(
			<div className={styles.conversion}>
				<h1 className={styles.title}>Konversi Rupiah ke Bitcoin</h1>
				<h5 className={styles.subtitle}>Kurs 1 USD = 14.000 IDR</h5>
				<div className={styles.conversion__inputWrapper}>
					<input type="number" className={styles.conversion__input} onChange={this.handleInputChange} value={input}/>
					<input type="submit" onClick={this.handleSubmit} value="Convert"/>
				</div>
				<h3 className={styles.conversion__result}>
					Rp {currentInput} = BTC {rate}
				</h3>
			</div>
		)
	}
}

export default Conversion;