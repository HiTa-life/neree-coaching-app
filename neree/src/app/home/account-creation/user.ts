export interface User{
    id: number;
    name: string;
    surname: string;
    phone: string;
    email: string;
    function: string;
    nameSociety: string;
    addressSociety: string;
    phoneSociety: string;
    coachName: string;
    coachingBeginning: Date;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
    role: string;
    isUpdating: boolean
}