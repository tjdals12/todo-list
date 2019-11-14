import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { getArchive } from 'store/modules/archive';

export default function useArchive(id: string) {
    const archive = useSelector((state: RootState) => state.archive.archive);
    const dispatch = useDispatch();

    return {
        archive,
        getArchive: useCallback(() => dispatch(getArchive.request(id)), [
            dispatch,
            id,
        ]),
    };
}
