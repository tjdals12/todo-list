import React from 'react';
import classNames from 'classnames/bind';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useModal, useModalClose } from 'hooks/modals';
import { useDeleteTodo } from 'hooks/archives';
import { TiDelete } from 'react-icons/ti';
import styles from './TodoDeleteModal.scss';

const cx = classNames.bind(styles);

type TodoDeleteModalProps = {
    className?: string;
};

export default function TodoDeleteModal({
    className,
}: TodoDeleteModalProps): React.ReactElement {
    const isOpen = useModal('todoDeleteModal');
    const onClose = useModalClose();
    const onDeleteTodo = useDeleteTodo();

    return (
        <Modal
            centered
            isOpen={isOpen}
            className={cx('todo-delete-modal', className)}
        >
            <ModalBody>
                <TiDelete className="text-danger" size={50} />
                <span className="pl-2 font-weight-bold">삭제하시겠습니까?</span>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="danger"
                    onClick={() => {
                        onDeleteTodo();
                        onClose('todoDeleteModal');
                    }}
                >
                    삭제
                </Button>
                <Button
                    color="secondary"
                    onClick={() => onClose('todoDeleteModal')}
                >
                    취소
                </Button>
            </ModalFooter>
        </Modal>
    );
}
