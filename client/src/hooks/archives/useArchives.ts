import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { getArchives } from 'store/modules/archives';

export default function useArchives() {
    const archives = useSelector((state: RootState) => state.archives.archives);
    const lastPage = useSelector((state: RootState) => state.archives.lastPage);
    const dispatch = useDispatch();

    return {
        archives,
        lastPage,
        getArchives: useCallback(
            (page: number) => dispatch(getArchives.request(page)),
            [dispatch],
        ),
    };
}
