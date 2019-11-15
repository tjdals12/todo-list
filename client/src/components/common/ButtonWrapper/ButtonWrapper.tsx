import React, { CSSProperties } from 'react';
import classNames from 'classnames/bind';
import styles from './ButtonWrapper.scss';

const cx = classNames.bind(styles);

type ButtonWrapperProps = {
    className?: string;
    style?: CSSProperties;
};

export default function ButtonWrapper({
    className,
    style,
    children,
}: React.PropsWithChildren<ButtonWrapperProps>): React.ReactElement {
    return (
        <div className={cx(className, 'button-wrapper')} style={style}>
            {children}
        </div>
    );
}
