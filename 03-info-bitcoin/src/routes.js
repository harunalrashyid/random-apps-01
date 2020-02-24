import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Bitcoin from './components/Bitcoin';
import Conversion from './components/Conversion';
import ConversionBitcoinToRupiah from './components/ConversionBitcoinToRupiah';

const Routes = () => (
	<App>
		<Switch>
			<Route path="/" component={Bitcoin} exact />
			<Route path="/conversion-rupiah" component={Conversion} />
			<Route path="/conversion-bitcoin" component={ConversionBitcoinToRupiah} />
		</Switch>
	</App>
)

export default Routes;