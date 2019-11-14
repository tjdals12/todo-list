import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteArchive } from 'store/modules/archive';

export default function useDeleteArchive(id: string) {
    const dispatch = useDispatch();

    return useCallback(() => dispatch(deleteArchive.request(id)), [
        dispatch,
        id,
    ]);
}
