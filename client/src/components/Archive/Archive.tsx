import React from 'react';
import classNames from 'classnames/bind';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import { FaPlus, FaEllipsisH } from 'react-icons/fa';
import TodoItem from 'components/TodoItem';
import { Archive as ArchiveType } from 'store/modules/archives';
import { useModalOpen } from 'hooks/modals';
import { useTododActions } from 'hooks/todos';
import styles from './Archive.scss';

const cx = classNames.bind(styles);

type ArchiveProps = {
    archive: ArchiveType;
    className?: string;
};

export default function Archive({
    archive,
    className,
}: ArchiveProps): React.ReactElement {
    const onOpen = useModalOpen();
    const { onTarget } = useTododActions();

    return (
        <Card className={cx(className, 'archive mr-4')}>
            <CardHeader
                className={cx('archive__header', 'bg-light', 'border-0')}
            >
                <h2 className="title text-overflow-hidden w-75">
                    {archive.title}
                </h2>
                <div className="buttons">
                    <Button
                        color="primary"
                        className="mr-2"
                        onClick={() => {
                            onTarget(archive._id);
                            onOpen('todoAddModal');
                        }}
                    >
                        <FaPlus size={15} />
                    </Button>
                    <Button color="secondary" className="text-white">
                        <FaEllipsisH size={15} />
                    </Button>
                </div>
            </CardHeader>
            <CardBody className={cx('archive__body', 'bg-light m-0')} tag="ul">
                {archive.todos.map(todo => (
                    <TodoItem key={todo._id} todo={todo} />
                ))}
            </CardBody>
            <CardFooter className="text-right">
                <small>{archive.timestamp.regDt}</small>
            </CardFooter>
        </Card>
    );
}
