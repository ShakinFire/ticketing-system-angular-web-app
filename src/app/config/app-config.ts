export class AppConfig {
    static apiUrl: any;
    static clientUrl: any;
    public readonly apiUrl: string;
    public readonly clientUrl: string

    constructor() {
        this.apiUrl = 'http://localhost:3001/api';
        this.clientUrl = 'http://localhost:4200';
    }
}

