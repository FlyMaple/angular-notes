import { Injectable } from '@angular/core';
import { UserModule } from './user/user.module';

@Injectable({
    providedIn: UserModule
})
export class UserService {

    constructor() { }
}
