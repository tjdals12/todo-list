import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Archive from 'components/Archive';
import { useArchives } from 'hooks/archives';
import { Button } from 'reactstrap';
import { MdChevronRight } from 'react-icons/md';
import styles from './ArchiveList.scss';

const cx = classNames.bind(styles);

type ArchiveListProps = {
    className?: string;
};

export default function ArchiveList({
    className,
}: ArchiveListProps): React.ReactElement {
    const [page, setPage] = useState(1);
    const { archives, lastPage, getArchives } = useArchives();

    const onRequestArchives = (page: number): void => {
        getArchives(page + 1);
        setPage(page + 1);
    };

    useEffect(() => {
        getArchives(1);
    }, [getArchives]);

    return (
        <div className={cx(className, 'archive-list d-flex break-md')}>
            {archives.map(archive => (
                <Archive key={archive._id} archive={archive} />
            ))}

            <Button
                color={page === lastPage ? 'secondary' : 'primary'}
                disabled={page === lastPage}
                onClick={(): void => onRequestArchives(page)}
            >
                <MdChevronRight size={30} />
            </Button>
        </div>
    );
}
