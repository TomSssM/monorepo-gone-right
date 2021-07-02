import React, { FC } from 'react';
import './Link.css';

export const Link: FC<{
    to: string;
}> = ({ to }) => (
    <a href={to} className="Link" target="_blank">link</a>
);
