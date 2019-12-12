import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from 'store/modules/archives';
import { RootState } from 'store';

export default function useDeleteTodo() {
    const dispatch = useDispatch();
    const archiveId = useSelector(
        (state: RootState) => state.archives.archiveId,
    );
    const todoId = useSelector((state: RootState) => state.archives.todoId);

    return useCallback(
        () => dispatch(deleteTodo.request({ archiveId, todoId })),
        [dispatch, archiveId, todoId],
    );
}
