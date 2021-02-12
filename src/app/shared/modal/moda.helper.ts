import { BehaviorSubject } from "rxjs";

export const modalAction$ = new BehaviorSubject<boolean>(false);
export const modalAction = modalAction$.asObservable();