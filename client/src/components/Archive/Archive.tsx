import React, { useState } from 'react';
import classNames from 'classnames/bind';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { FaPlus, FaEllipsisH, FaCaretRight } from 'react-icons/fa';
import TodoItem from 'components/TodoItem';
import { Archive as ArchiveType } from 'store/modules/archives';
import { useModalOpen } from 'hooks/modals';
import { useTododActions } from 'hooks/todos';
import { useArchive, useDeleteArchive } from 'hooks/archives';
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
    const [openMenu, setOpenMenu] = useState(false);

    const onOpen = useModalOpen();
    const { onTarget } = useTododActions();
    const { getArchive } = useArchive();
    const onDeleteArchive = useDeleteArchive(archive._id);

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

                    <Dropdown
                        isOpen={openMenu}
                        toggle={() => setOpenMenu(!openMenu)}
                        className="d-inline-block"
                    >
                        <DropdownToggle>
                            <FaEllipsisH size={15} />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem
                                onClick={() => {
                                    getArchive(archive._id);
                                    onOpen('archiveEditModal');
                                }}
                            >
                                <FaCaretRight className="pb-1" /> 수정
                            </DropdownItem>
                            <DropdownItem onClick={() => onDeleteArchive()}>
                                <FaCaretRight className="pb-1" /> 삭제
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </CardHeader>
            <CardBody className={cx('archive__body', 'bg-light m-0')} tag="ul">
                {archive.todos.map(todo => (
                    <TodoItem
                        key={todo._id}
                        archive={archive._id}
                        todo={todo}
                    />
                ))}
            </CardBody>
            <CardFooter className="text-right">
                <small>{archive.timestamp.regDt}</small>
            </CardFooter>
        </Card>
    );
}
