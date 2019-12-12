import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setTarget } from 'store/modules/archives';

export default function useSetTarget() {
    const dispatch = useDispatch();

    return useCallback(
        (payload: { name: string; value: string }) =>
            dispatch(setTarget(payload)),
        [dispatch],
    );
}
