import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '@tomsssm/ui/components/Button';
import { Link } from '@tomsssm/ui/components/Link';
import { Page } from '@tomsssm/ui/components/Page';

export const App = () => (
    <BrowserRouter>
        <h1>Hello World!</h1>
        <Button />
        <Link to="https://yandex.ru" />
        <br />
        <Page />
    </BrowserRouter>
);
