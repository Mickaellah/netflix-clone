import React from 'react';
import {Item, Inner, Container, Title, SubTitle, Image, Pane} from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotonContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Title = function JumbotonTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotonSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotonImage({children, ...restProps}) {
    return <Image {...restProps} />
}

Jumbotron.Pane = function JumbotonPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}