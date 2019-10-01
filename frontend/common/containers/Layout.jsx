import React from 'react';
import connect from 'react-redux/lib/connect/connect';
//Components
import Header from '../components/Header';
import Footer from '../components/Footer';

class Layout extends React.Component {
	render() {
		const { user } = this.props
		console.log('RENDER <Layout>')

		const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child));
		return <div>
            <Header />
						{childrenWithProps}
						<Footer />
        </div>
	}
}

function mapStateToProps (state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Layout)
