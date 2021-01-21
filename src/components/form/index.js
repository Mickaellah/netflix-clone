import React from 'react';

import {
    Container,
    Base, 
    Input, 
    Link, 
    Submit, 
    Text, 
    TextSmall, 
    Title, 
    Error
} from './styles/form';

export default function Form({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Form.Base = function FormBase({children, ...restProps}) {
    return <Base {...restProps}>{children}</Base>
}

Form.Input = function FormInput({children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>
}

Form.Link = function FormLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Form.Submit = function FormSubmit ({children, ...restProps}) {
    return <Submit {...restProps}>{children}</Submit>
}

Form.Text = function FormText ({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function FormTextSmall ({children, ...restProps}) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Title = function FormTitle ({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Form.Error = function FormError ({children, ...restProps}) {
    return <Error {...restProps}>{children}</Error>
}