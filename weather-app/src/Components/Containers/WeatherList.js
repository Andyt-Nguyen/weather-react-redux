import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartItem from '../ChartItem';

class WeatherList extends Component {

	renderWeather(cityData) {
		const temps = cityData.list.map(temp => temp.main.temp);
		const pressures = cityData.list.map(pressure => pressure.main.pressure);
		const humiditys = cityData.list.map(humidity => humidity.main.humidity);
		return (
			<tr key={cityData.city.name}>
				<td>{cityData.city.name}</td>
				<td><ChartItem data={temps} color={'orange'} /></td>
				<td><ChartItem data={pressures} color={'blue'} /></td>
				<td><ChartItem data={humiditys} color={'green'} /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>

				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}

const mapStateToProps = state => {
	return {
		weather: state.weather
	}
}

export default connect(mapStateToProps, {})(WeatherList);
