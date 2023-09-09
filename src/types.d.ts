// Type definitions for state-local v0.0.1
// Project: state-local
// Definitions by: Suren Atoyan contact@surenatoyan.com

export as namespace state;

export type State<T> = T;
export type Selector<T> = (state: State<T>) => State<T>;
export type ChangeGetter<T> = (state: State<T>) => State<T>;
export type GetState<T> = (selector?: Selector<T>) => State<T>;
export type SetState<T> = (change: State<T> | ChangeGetter<T>) => void;
export type OnUpdate<T> = (handler: (change: State<T>) => any) => void;
export type StateUpdateHandler<T> = (update: State<T>) => T;
export type FieldUpdateHandler<T> = (update: any) => T;
export type Handlers<T> = Record<string, FieldUpdateHandler<T>>;

/**
 * `state.create` is a function with two parameters:
 * the first one (required) is the initial state and it should be a non-empty object
 * the second one (optional) is the handler, which can be function or object
 * if the handler is a function than it should be called immediately after every state update
 * if the handler is an object than the keys of that object should be a subset of the state
 * and the all values of that object should be functions, plus they should be called immediately
 * after every update of the corresponding field in the state
 */
export function create<T>(
  initial: State<T>,
  handler?: StateUpdateHandler<T> | Handlers<T>,
): [GetState<T>, SetState<T>, OnUpdate<T>];
