import React from 'react';
import { Container, Row, Column, Link, Title, Break, Text } from './styles/footer';

export default function Footer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Row = function FooteRow({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooteColumn({children, ...restProps}) {
    return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooteLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooteTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Footer.Break = function FooteBreak({children, ...restProps}) {
    return <Break {...restProps}>{children}</Break>
}

Footer.Text = function FooteText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}