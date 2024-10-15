import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from './useWorkoutsContext';

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: dispatchWorkouts } = useWorkoutsContext();

    const logout = async () => {
        // Remove user from localStorage
        localStorage.removeItem('user')

        dispatch({ type: 'LOGOUT' })
        dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
    }

    return { logout }
}