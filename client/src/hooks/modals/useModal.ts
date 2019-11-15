import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function useModal(name: string) {
    return useSelector((state: RootState) => state.modals[name]);
}
