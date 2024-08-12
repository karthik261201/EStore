import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchPassowrds: ValidatorFn = (control: AbstractControl) : ValidationErrors | null => {
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')
    if (password?.value !== confirmPassword?.value) {
        return {passwordMismatch: true}
    }
    return null;
}