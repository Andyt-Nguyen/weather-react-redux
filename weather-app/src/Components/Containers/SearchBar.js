import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions';

class SearchBar extends Component {
	constructor() {
		super();
		this.state = {
			term: ''
		}
	}

	onInputChange(e) {
		this.setState({
			term: e.target.value
		})
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term:''})
	}

	render() {
		return (
			<form onSubmit={this.onSubmit.bind(this)} className="input-group">
				<input
					placeholder="Get a 5 day forcast in your favorite cities"
					type="text"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange.bind(this)}/>
				<span className="input-group-btn">
					<button
						type="submit"
						className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		weather: state.weather
	}
}
export default connect(mapStateToProps, { fetchWeather })(SearchBar);
