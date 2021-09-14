import React, { Component } from "react";

export default class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "Guilty",
			text: "javaScript is awesome",
			selected: "rafi",
			isTrue: true,
		};
	}

	handleChange = (event) => {
		if (event.target.type === "text") {
			this.setState({
				title: event.target.value,
			});
		} else if (event.target.type === "textarea") {
			this.setState({
				text: event.target.value,
			});
		} else if (event.target.type === "select-one") {
			this.setState({
				selected: event.target.value,
			});
		} else if (event.target.type === "checkbox") {
			this.setState({
				isTrue: event.target.checked,
			});
		}
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	render() {
		const { title, text, selected, isTrue } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Input name"
						value={title}
						onChange={this.handleChange}
					/>
					<br />
					<br />
					<textarea
						name="text"
						value={text}
						onChange={this.handleChange}
					/>
					<br />
					<br />
					<select value={selected} onChange={this.handleChange}>
						<option value="rafi">rafi</option>
						<option value="cinnamon">cinnamon</option>
					</select>
					<br />
					<br />
					<input
						type="checkbox"
						onChange={this.handleChange}
						checked={isTrue}
					/>
					<br />
					<br />
					<input type="submit" />
				</form>
			</div>
		);
	}
}
