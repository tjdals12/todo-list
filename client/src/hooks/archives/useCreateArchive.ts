import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createArchive } from 'store/modules/archives';

export default function useCreateArchive() {
    const dispatch = useDispatch();

    return useCallback(
        (title: string) => dispatch(createArchive.request(title)),
        [dispatch],
    );
}
