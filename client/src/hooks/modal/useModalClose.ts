import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { close } from 'store/modules/modals';

export default function useModalClose() {
    const dispatch = useDispatch();
    return useCallback(name => dispatch(close(name)), [dispatch]);
}
