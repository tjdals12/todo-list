import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { open } from 'store/modules/modals';

export default function useModalOpen() {
    const dispatch = useDispatch();
    return useCallback((name: string) => dispatch(open(name)), [dispatch]);
}
