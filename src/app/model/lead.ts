export class Lead {
    constructor(
        public firstName: string,
        public lastName: string,
        public phone: number,
        public email: number,
        public dob: string,
        public pincode: number,
        public gender: string,
        public smoke: boolean,
        public alcohol: boolean,
        public address: string,
        public dependents: string,
    ) { }
}
