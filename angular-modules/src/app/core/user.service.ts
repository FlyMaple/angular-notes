import { Injectable, Optional } from '@angular/core';

export class UserConfig {
    username = 'Skye..........';
}

@Injectable()
export class UserService {
    username: string = 'kkkkkkkkkkkkkkkkk';

    constructor(@Optional() config: UserConfig) {
        this.username = config.username;
    }

    get userName(): string {
        console.log(`get userName`);
        return this.username;
    }
}
