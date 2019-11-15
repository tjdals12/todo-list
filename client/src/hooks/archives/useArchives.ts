import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { getArchives } from 'store/modules/archives';

export default function useArchives() {
    const archives = useSelector((state: RootState) => state.archives.archives);
    const dispatch = useDispatch();

    return {
        archives,
        getArchives: useCallback(() => dispatch(getArchives.request()), [
            dispatch,
        ]),
    };
}
