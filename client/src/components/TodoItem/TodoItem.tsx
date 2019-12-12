import React from 'react';
import { Card, CardSubtitle, CardText, Badge, Button } from 'reactstrap';
import { FaHeart, FaStar, FaTrash } from 'react-icons/fa';
import classNames from 'classnames/bind';
import { ButtonWrapper } from 'components/common';
import { useModalOpen } from 'hooks/modals';
import { useSetTarget } from 'hooks/archives';
import styles from './TodoItem.scss';

const cx = classNames.bind(styles);

type Todo = {
    _id: string;
    text: string;
    tags: Array<string>;
    effStaDt: string;
    effEndDt: string;
};

type TodoItemProps = {
    archive: string;
    todo: Todo;
    className?: string;
};

export default function TodoItem({
    archive,
    todo,
    className,
}: TodoItemProps): React.ReactElement {
    const onOpen = useModalOpen();
    const onSetTarget = useSetTarget();

    return (
        <Card
            className={cx(
                className,
                'todo-item mb-3 rounded-lg position-relative',
            )}
            body
            tag="li"
        >
            <CardText className="text-muted font-italic mb-2" tag="small">
                {todo.effStaDt} ~ {todo.effEndDt}
            </CardText>
            <CardText>{todo.text}</CardText>
            <CardSubtitle className="mt-auto">
                {todo.tags.map((tag, index) => (
                    <Badge
                        key={index}
                        className="px-2 py-1 mr-2"
                        color="primary"
                    >
                        {tag}
                    </Badge>
                ))}
            </CardSubtitle>

            <ButtonWrapper
                className="position-absolute"
                style={{ top: '10px', right: '10px' }}
            >
                <Button
                    size="sm"
                    outline
                    className="border-0 rounded-circle"
                    onClick={() => {
                        onOpen('todoDeleteModal');
                        onSetTarget({ name: 'archiveId', value: archive });
                        onSetTarget({ name: 'todoId', value: todo._id });
                    }}
                >
                    <FaTrash />
                </Button>
            </ButtonWrapper>

            <ButtonWrapper
                className="position-absolute"
                style={{ bottom: '10px', right: '10px' }}
            >
                <Button
                    size="sm"
                    color="danger"
                    className="mr-2 rounded-circle"
                >
                    <FaHeart />
                </Button>
                <Button
                    size="sm"
                    color="warning"
                    className="text-white rounded-circle"
                >
                    <FaStar />
                </Button>
            </ButtonWrapper>
        </Card>
    );
}
