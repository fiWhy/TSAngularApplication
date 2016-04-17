import {IAuthorizeService} from '../../../core/services/authorize/authorize.service';

export interface IAppService {
    checkForAuth(): boolean;
}

export class AppService
    implements IAppService {
    public static $inject = ['AuthorizeService'];
    constructor(private AuthorizeService: IAuthorizeService) {
    }

    checkForAuth(): boolean {
        return (this.AuthorizeService.isLoggedIn()
            && !this.AuthorizeService.checkIsTokenExpired());
    }

    private redirectToLogin(): void {

    }
}