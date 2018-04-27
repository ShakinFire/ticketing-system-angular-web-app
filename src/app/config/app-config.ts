export class AppConfig {
    static apiUrl: any;
    public readonly apiUrl: string;

    constructor() {
        this.apiUrl = 'http://localhost:3001/api';
    }
}

