import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class AriaLabelPipe {
    transform(label, total, index) {
        index = index + 1;
        return label
            .replace('{total}', total.toString())
            .replace('{index}', index.toString());
    }
}
AriaLabelPipe.ɵfac = function AriaLabelPipe_Factory(t) { return new (t || AriaLabelPipe)(); };
AriaLabelPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "ariaLabel", type: AriaLabelPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AriaLabelPipe, [{
        type: Pipe,
        args: [{ name: 'ariaLabel' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJpYS1sYWJlbC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZmVhdHVyZS10b3VyL3NyYy9saWIvcGlwZXMvYXJpYS1sYWJlbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sYUFBYTtJQUN4QixTQUFTLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxLQUFhO1FBQ25ELEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLE9BQU8sS0FBSzthQUNULE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3BDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7MEVBUFUsYUFBYTtpRUFBYixhQUFhO2tEQUFiLGFBQWE7Y0FEekIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnYXJpYUxhYmVsJyB9KVxuZXhwb3J0IGNsYXNzIEFyaWFMYWJlbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGxhYmVsOiBzdHJpbmcsIHRvdGFsOiBudW1iZXIsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGluZGV4ID0gaW5kZXggKyAxO1xuXG4gICAgcmV0dXJuIGxhYmVsXG4gICAgICAucmVwbGFjZSgne3RvdGFsfScsIHRvdGFsLnRvU3RyaW5nKCkpXG4gICAgICAucmVwbGFjZSgne2luZGV4fScsIGluZGV4LnRvU3RyaW5nKCkpO1xuICB9XG59XG4iXX0=