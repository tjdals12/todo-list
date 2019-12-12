import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { editArchive } from 'store/modules/archives';

export default function useEditArchive() {
    const dispatch = useDispatch();

    return useCallback(
        (archiveId: string, title: string) =>
            dispatch(editArchive.request({ archiveId, title })),
        [dispatch],
    );
}
