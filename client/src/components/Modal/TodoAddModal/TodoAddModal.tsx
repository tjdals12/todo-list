import React, { useReducer } from 'react';
import classNames from 'classnames/bind';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Col,
    Label,
    Input,
} from 'reactstrap';
import { useModal, useModalClose } from 'hooks/modals';
import { useAddTodo, useTodoTarget } from 'hooks/todos';
import { TodoParameter } from 'store/modules/todos';
import styles from './TodoAddModal.scss';

const cx = classNames.bind(styles);

type TodoAddModalProps = {
    className?: string;
};

function reducer(
    state: TodoParameter,
    payload: { name: string; value: string },
): TodoParameter {
    return {
        ...state,
        [payload.name]: payload.value,
    };
}

export default function TodoAddModal({
    className,
}: TodoAddModalProps): React.ReactElement {
    const isOpen = useModal('todoAddModal');
    const onClose = useModalClose();
    const onAddTodo = useAddTodo();
    const target = useTodoTarget();
    const [state, dispatch] = useReducer(reducer, {
        text: '',
        tags: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        dispatch({ name, value });
    };

    const onSubmit = (): void => {
        onAddTodo(target, state);
        onClose('todoAddModal');
    };

    return (
        <Modal
            centered
            isOpen={isOpen}
            className={cx(className, 'todo-add-modal')}
        >
            <ModalHeader toggle={() => onClose('todoAddModal')}>
                Todo 추가
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={(e): void => e.preventDefault()}>
                    <FormGroup row>
                        <Col md={12}>
                            <Label for="text">Todo:</Label>
                            <Input
                                id="text"
                                name="text"
                                placeholder="Todo.."
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col md={12}>
                            <Label for="tags">Tag:</Label>
                            <Input
                                id="tags"
                                name="tags"
                                placeholder="콤마(,)로 구분"
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col md={6}>
                            <Label for="effStaDt">시작일:</Label>
                            <Input
                                type="date"
                                id="effStaDt"
                                name="effStaDt"
                                onChange={handleChange}
                            />
                        </Col>

                        <Col md={6}>
                            <Label for="effEndDt">종료일:</Label>
                            <Input
                                type="date"
                                id="effEndDt"
                                name="effEndDt"
                                onChange={handleChange}
                            />
                        </Col>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={onSubmit}>
                    추가
                </Button>
                <Button
                    color="secondary"
                    onClick={() => onClose('todoAddModal')}
                >
                    닫기
                </Button>
            </ModalFooter>
        </Modal>
    );
}
