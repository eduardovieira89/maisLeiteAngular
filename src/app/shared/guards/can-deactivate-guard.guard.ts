import { CanDeactivateFn } from "@angular/router";
import { CanComponentDeactivate } from "./ican-component-deactivade.guard";

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
    component: CanComponentDeactivate
) => {
    if (component.canDeactivate) {
        return component.canDeactivate();
    }
    return true;
}