import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Input,
    Form,
    Button,
} from 'reactstrap';
import { useModal, useModalClose } from 'hooks/modals';
import { useArchive, useEditArchive } from 'hooks/archives';
import styles from './ArchiveEditModal.scss';

const cx = classNames.bind(styles);

export default function ArchiveEditModal(): React.ReactElement {
    const { archive } = useArchive();
    const [title, setTitle] = useState('');

    const isOpen = useModal('archiveEditModal');
    const onClose = useModalClose();
    const onEdit = useEditArchive();

    useEffect(() => {
        setTitle(archive.title);
    }, [archive]);

    return (
        <Modal
            centered
            isOpen={isOpen}
            toggle={() => onClose('archiveEditModal')}
            className={cx('archive-edit-modal')}
        >
            <ModalHeader className="bg-light">Archive 수정</ModalHeader>
            <ModalBody>
                <Form onSubmit={(e): void => e.preventDefault()}>
                    <Label for="title">Archive 명: </Label>
                    <Input
                        id="titile"
                        name="title"
                        placeholder="Archive Title.."
                        value={title}
                        onChange={(e): void => setTitle(e.target.value)}
                    />
                </Form>
            </ModalBody>
            <ModalFooter className="bg-light">
                <Button
                    color="primary"
                    onClick={(): void => {
                        onEdit(archive._id, title);
                        onClose('archiveEditModal');
                    }}
                >
                    수정
                </Button>
                <Button
                    color="secondary"
                    onClick={(): void => {
                        onClose('archiveEditModal');
                    }}
                >
                    닫기
                </Button>
            </ModalFooter>
        </Modal>
    );
}
