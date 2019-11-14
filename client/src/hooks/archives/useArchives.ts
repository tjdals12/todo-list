import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { getArchives } from 'store/modules/archive';

export default function useArchives() {
    const archives = useSelector((state: RootState) => state.archive.archives);
    const dispatch = useDispatch();

    return {
        archives,
        getArchives: useCallback(() => dispatch(getArchives.request()), [
            dispatch,
        ]),
    };
}
