import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setTarget } from 'store/modules/todos';

export default function useTodoActions() {
    const dispatch = useDispatch();
    const onTarget = useCallback((id: string) => dispatch(setTarget(id)), [
        dispatch,
    ]);

    return {
        onTarget,
    };
}
