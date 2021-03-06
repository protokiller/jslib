import { PlatformUtilsService } from '../abstractions/platformUtils.service';

export class ConstantsService {
    static readonly environmentUrlsKey: string = 'environmentUrls';
    static readonly disableGaKey: string = 'disableGa';
    static readonly disableAddLoginNotificationKey: string = 'disableAddLoginNotification';
    static readonly disableContextMenuItemKey: string = 'disableContextMenuItem';
    static readonly disableFaviconKey: string = 'disableFavicon';
    static readonly disableAutoTotpCopyKey: string = 'disableAutoTotpCopy';
    static readonly enableAutoFillOnPageLoadKey: string = 'enableAutoFillOnPageLoad';
    static readonly lockOptionKey: string = 'lockOption';
    static readonly lastActiveKey: string = 'lastActive';
    static readonly neverDomainsKey: string = 'neverDomains';
    static readonly installedVersionKey: string = 'installedVersion';

    readonly environmentUrlsKey: string = ConstantsService.environmentUrlsKey;
    readonly disableGaKey: string = ConstantsService.disableGaKey;
    readonly disableAddLoginNotificationKey: string = ConstantsService.disableAddLoginNotificationKey;
    readonly disableContextMenuItemKey: string = ConstantsService.disableContextMenuItemKey;
    readonly disableFaviconKey: string = ConstantsService.disableFaviconKey;
    readonly disableAutoTotpCopyKey: string = ConstantsService.disableAutoTotpCopyKey;
    readonly enableAutoFillOnPageLoadKey: string = ConstantsService.enableAutoFillOnPageLoadKey;
    readonly lockOptionKey: string = ConstantsService.lockOptionKey;
    readonly lastActiveKey: string = ConstantsService.lastActiveKey;
    readonly neverDomainsKey: string = ConstantsService.neverDomainsKey;
    readonly installedVersionKey: string = ConstantsService.installedVersionKey;

    // TODO: Convert these objects to enums
    readonly encType: any = {
        AesCbc256_B64: 0,
        AesCbc128_HmacSha256_B64: 1,
        AesCbc256_HmacSha256_B64: 2,
        Rsa2048_OaepSha256_B64: 3,
        Rsa2048_OaepSha1_B64: 4,
        Rsa2048_OaepSha256_HmacSha256_B64: 5,
        Rsa2048_OaepSha1_HmacSha256_B64: 6,
    };

    readonly cipherType: any = {
        login: 1,
        secureNote: 2,
        card: 3,
        identity: 4,
    };

    readonly fieldType: any = {
        text: 0,
        hidden: 1,
        boolean: 2,
    };

    readonly twoFactorProvider: any = {
        u2f: 4,
        yubikey: 3,
        duo: 2,
        authenticator: 0,
        email: 1,
        remember: 5,
        organizationDuo: 6,
    };

    twoFactorProviderInfo: any[];

    constructor(i18nService: any, delayLoad: number) {
        if (delayLoad && delayLoad > 0) {
            // delay for i18n fetch
            setTimeout(() => {
                this.bootstrap(i18nService);
            }, delayLoad);
        } else {
            this.bootstrap(i18nService);
        }
    }

    private bootstrap(i18nService: any) {
        this.twoFactorProviderInfo = [
            {
                type: 0,
                name: i18nService.authenticatorAppTitle,
                description: i18nService.authenticatorAppDesc,
                active: true,
                free: true,
                displayOrder: 0,
                priority: 1,
            },
            {
                type: 3,
                name: i18nService.yubiKeyTitle,
                description: i18nService.yubiKeyDesc,
                active: true,
                displayOrder: 1,
                priority: 3,
            },
            {
                type: 2,
                name: 'Duo',
                description: i18nService.duoDesc,
                active: true,
                displayOrder: 2,
                priority: 2,
            },
            {
                type: 4,
                name: i18nService.u2fTitle,
                description: i18nService.u2fDesc,
                active: true,
                displayOrder: 3,
                priority: 4,
            },
            {
                type: 1,
                name: i18nService.emailTitle,
                description: i18nService.emailDesc,
                active: true,
                displayOrder: 4,
                priority: 0,
            },
            {
                type: 6,
                name: 'Duo (' + i18nService.organization + ')',
                description: i18nService.duoOrganizationDesc,
                active: true,
                displayOrder: -1,
                priority: 10,
            },
        ];
    }
}
