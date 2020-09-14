export declare enum EventEnum {
    Start = "START",
    Next = "NEXT",
    Previous = "PREVIOUS",
    Abort = "ABORT",
    Finish = "FINISH",
    Escape = "ESCAPE"
}
export interface Event {
    event: EventEnum;
    step: Step;
}
export interface Step {
    target: string;
    title: string;
    description: string;
    enabled?: boolean;
    visible?: boolean;
    bounds?: StepBounds;
}
export interface LensBounds {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface StepBounds {
    left: number;
    top: number;
    modifiers: string;
    lens: LensBounds;
}
export interface Setup {
    a11ty: {
        roleDescription: string;
    };
    initialStep: string;
    controls: {
        abort: string;
        previous: string;
        next: string;
        done: string;
    };
}
