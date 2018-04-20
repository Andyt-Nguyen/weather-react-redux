import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (data) => {
	return _.round(_.sum(data)/data.length);
}
const ChartItem = ({data,color}) => (
	<div>
		<Sparklines height={120} width={180} data={data}>
			<SparklinesLine color={color} />
			<SparklinesReferenceLine type="avg"/>
		</Sparklines>
		<div>{average(data)}</div>
	</div>
);

export default ChartItem;
