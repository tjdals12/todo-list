import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { open } from 'store/modules/modals';

export default function useModalOpen(name: string) {
    const dispatch = useDispatch();
    return useCallback(() => dispatch(open(name)), [dispatch, name]);
}
