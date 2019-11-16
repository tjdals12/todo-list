import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function useTodoTarget() {
    return useSelector((state: RootState) => state.todos.target);
}
