import classNames from 'classnames';
import React from 'react';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slide/Slider';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div>
            <Slider />
            <FeaturedProducts type="featured" />
            <Categories />
            <FeaturedProducts type="trending" />
            <Contact />
        </div>
    );
};

export default Home;
