import React from 'react';
import classNames from 'classnames/bind';
import style from './Shop.module.scss';

import Filter from '~/components/Filter/Filter';

const cx = classNames.bind(style);

function Shop() {
    return (
        <div>
            <Filter />
            Hi
        </div>
    );
}

export default Shop;
