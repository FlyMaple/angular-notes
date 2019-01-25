import { Observable } from "rxjs";
import { ValidationErrors } from "@angular/forms";

export interface HeroService {
    isAlterEgoTaken: (alter: string) => Observable<ValidationErrors>;
}
