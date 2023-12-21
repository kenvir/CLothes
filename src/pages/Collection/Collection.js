import classNames from 'classnames/bind';
import style from './Collection.module.scss';
import Crumb from '~/components/Crumb/Crumb';
import img from '~/assets/imgs/rectangle.png';

const cx = classNames.bind(style);

function Collection() {
    return (
        <div className={cx('wrapper')}>
            <Crumb title="Collection" />
            <section className={cx('collection-header')}>
                <h2 className={cx('collection-header__title')}>Collection</h2>
                <p className={cx('collection-header__desc')}>
                    Welcome to the Fashi Collection! Check out latest updates and actives here.
                </p>
            </section>
            <section className={cx('collection-intro')}>
                <h3 className={cx('collection-intro__title')}>What to do</h3>
                <div className={cx('collection-intro__list')}>
                    <div className={cx('collection-intro__list-content')}>
                        <img src={img} alt="" />
                        <p>Join our Fashi</p>
                    </div>
                    <div className={cx('collection-intro__list-content')}>
                        <img src={img} alt="" />
                        <p>Get your post to be fav' by the Feelunique</p>
                    </div>
                    <div className={cx('collection-intro__list-content')}>
                        <img src={img} alt="" />
                        <p>Want Free beauty products? Sign up here</p>
                    </div>
                    <div className={cx('collection-intro__list-content')}>
                        <img src={img} alt="" />
                        <p>WIN a free beauty box</p>
                    </div>
                </div>
            </section>
            <section className={cx('collection-list')}></section>
        </div>
    );
}

export default Collection;
