import React from 'react';
import { Container, ContainerProps } from 'reactstrap';

type ContentProps = {
    className: string;
} & ContainerProps;

export default function Content({
    className,
    ...rest
}: ContentProps): React.ReactElement {
    return <Container className={className} {...rest} />;
}
