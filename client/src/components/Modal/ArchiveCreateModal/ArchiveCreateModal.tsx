import React, { useState } from 'react';
import classNames from 'classnames/bind';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    Label,
    Input,
} from 'reactstrap';
import { useModal, useModalClose } from 'hooks/modal';
import { useCreateArchive } from 'hooks/archives';
import styles from './ArchiveCreateModal.scss';

const cx = classNames.bind(styles);

export default function ArchiveCreateModal(): React.ReactElement {
    const [title, setTitle] = useState('');
    const isOpen = useModal('archiveCreateModal');
    const onClose = useModalClose();
    const onCreate = useCreateArchive();

    return (
        <Modal centered isOpen={isOpen} className={cx('archive-create-modal')}>
            <ModalHeader
                className="bg-light"
                toggle={() => onClose('archiveCreateModal')}
            >
                Archive 추가
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={(e): void => e.preventDefault()}>
                    <Label for="title">Archive 명: </Label>
                    <Input
                        id="titile"
                        name="title"
                        placeholder="Archive Title.."
                        onChange={(e): void => setTitle(e.target.value)}
                    />
                </Form>
            </ModalBody>
            <ModalFooter className="bg-light">
                <Button
                    color="primary"
                    onClick={() => {
                        onCreate(title);
                        onClose('archiveCreateModal');
                    }}
                >
                    추가
                </Button>
                <Button
                    color="secondary"
                    onClick={() => onClose('archiveCreateModal')}
                >
                    닫기
                </Button>
            </ModalFooter>
        </Modal>
    );
}
