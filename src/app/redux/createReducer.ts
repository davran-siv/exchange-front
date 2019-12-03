import { Action } from 'app/interfaces'
import { Reducer } from "redux";

export default function createReducer<T, S>(
	initialState: S,
	handlers: any
): Reducer<S> {
	const r = (state: S = initialState, action: Action<T, S>): S => {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	};

	return r as Reducer<S>;
}
