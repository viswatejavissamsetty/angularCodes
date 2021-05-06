import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordCheckValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const pass = control.get('password')?.value;
    const rPass = control.get('rPassword')?.value;
    // console.log(pass,  rPass);
    if (pass === rPass) {
        return null;
    } else {
        return { passwordError: { message: "Both Password and Re-Enter Password must be same" } };
    }
}