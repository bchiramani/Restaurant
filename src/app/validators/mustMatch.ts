import { FormGroup } from "@angular/forms";


export function mustMatch(formControl:string, confirmFormControl:string) {
    return(formGroup: FormGroup)=>{
        const formContorlInput=formGroup.controls[formControl];
        const confirmFormControlnput=formGroup.controls[confirmFormControl];
        if (formContorlInput.value!=confirmFormControlnput.value){
            confirmFormControlnput.setErrors({mustMatch:true})
        }
        else {
            confirmFormControlnput.setErrors(null);
        }
        
    }    
}