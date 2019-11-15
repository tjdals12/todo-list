import React from 'react';
import { Page } from 'components/Layout';
import { ArchiveCreateModal } from 'components/Modal';
import ArchiveList from 'components/ArchiveList';

export default function MainPage(): React.ReactElement {
    return (
        <Page title="Main">
            <ArchiveList />

            <ArchiveCreateModal />
        </Page>
    );
}
