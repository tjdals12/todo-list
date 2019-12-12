import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { getArchive } from 'store/modules/archives';

export default function useArchive() {
    const archive = useSelector((state: RootState) => state.archives.archive);
    const dispatch = useDispatch();

    return {
        archive,
        getArchive: useCallback(
            (id: string) => dispatch(getArchive.request(id)),
            [dispatch],
        ),
    };
}
