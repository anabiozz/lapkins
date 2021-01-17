import React, {Component} from 'react';
import Loader from '../../common/Loader';
import { Link } from 'react-router-dom';
import Layout from '../../layout/containers/Layout';
import { fetchSuperordinateCategories } from '../../../actions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Superordinate extends Component {
    componentDidMount() {
        this.props.fetchSuperordinateCategories(this.props.match.params.superordinate);
    }

    componentDidUpdate(prevProps) {
        let superordinate = this.props.match.params.superordinate;
        if (prevProps.match.params.superordinate !== superordinate) {
            this.props.fetchSuperordinateCategories(this.props.match.params.superordinate);
        }
    }

    render() {

        console.log('RENDER <Category>');

        const { superordinates, fetching } = this.props;

        return (
            <Layout>
                <div className="category">
                    <div className="category-content">
                        {
                            fetching && <Loader />
                        }
                        {
                            !fetching && superordinates && superordinates.length === 0 && (
                                <span>Данная категория товара на данный момент отсутствует</span>
                            )
                        }
                        {
                            !fetching && superordinates && superordinates.map((subcategory, i) => (
                                <Link key={i} className="subcategory" to={ `${this.props.match.params.superordinate}/${subcategory.name}` }>
                                    <div className="subcategory-content" key={i}>
                                        <h2 className="subcategory-title">{subcategory.name}</h2>
                                        <h2 className="subcategory-description">{subcategory.description}</h2>
                                    </div>
                                    <img src="https://cdn.shopify.com/s/files/1/0077/8718/4241/files/Set_028_1950x.jpeg?v=1550063217" alt="Новое" />
                                </Link>

                            ))
                        }
                    </div>
                </div>
            </Layout>
        );
    }
}

Superordinate.propTypes = {
    superordinates: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetchSuperordinateCategories: PropTypes.func.isRequired,
    match: PropTypes.any,
};

const mapDispatchToProps = {
    fetchSuperordinateCategories,
};

const mapStateToProps = (state, ownProps) => ({
    fetching: state.superordinates.fetching,
    errors: state.superordinates.errors,
    superordinates: state.superordinates.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Superordinate);