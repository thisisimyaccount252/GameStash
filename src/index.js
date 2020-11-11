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
					// TODO: somehow grab the game titles and set them as the alt text
					return <Thumbnail src={'/images/' + src} alt='Game Cover' />
				})}
			</ul>
		);
	}
}

function Thumbnail(props) {
	return <img alt={props.alt} src={props.src} className="thumbnail" />
}

ReactDOM.render(<App />, document.getElementById('app-root'));
