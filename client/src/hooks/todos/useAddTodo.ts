import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, TodoParameter } from 'store/modules/todos';

export default function useAddTodo() {
    const dispatch = useDispatch();
    return useCallback(
        (archive, param: TodoParameter) =>
            dispatch(addTodo.request({ archive, param })),
        [dispatch],
    );
}
