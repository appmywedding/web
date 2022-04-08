import React from 'react';
import Admin from '../containers/Admin/';
import PagesWrapper from '../containers/PagesWrapper';

export default function AdminRoute() {
    return (
        <PagesWrapper>
            <Admin />
        </PagesWrapper>
    );
}