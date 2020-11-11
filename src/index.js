import './style/style.scss';
import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			images: []
		}
	}

	async componentDidMount() {
		const images = await fetch('/images/list')
			.then(res => res.json());

		this.setState({ 
			images
		});
	}

	render() {
		return (
			<ul>
				{this.state.images.map(src => {
					return <Thumbnail src={'/images/' + src} />
				})}
			</ul>
		);
	}
}

function Thumbnail(props) {
	return <img src={props.src} />
}

ReactDOM.render(<App />, document.getElementById('app-root'));
