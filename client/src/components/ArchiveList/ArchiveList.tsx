import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import Archive from 'components/Archive';
import { useArchives } from 'hooks/archives';
import styles from './ArchiveList.scss';

const cx = classNames.bind(styles);

type ArchiveListProps = {
    className?: string;
};

export default function ArchiveList({
    className,
}: ArchiveListProps): React.ReactElement {
    const { archives, getArchives } = useArchives();

    useEffect(() => {
        getArchives();
    }, [getArchives]);

    return (
        <div className={cx(className, 'archive-list d-flex break-md')}>
            {archives.map(archive => (
                <Archive key={archive._id} archive={archive} />
            ))}
        </div>
    );
}
