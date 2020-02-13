export interface User{
    id: number;
    name: string;
    surname: string;
    phone: string;
    email: string;
    function: string;
    name_society: string;
    address_society: string;
    phone_society: string;
    coach_name: string;
    coaching_beginning: string;
    password: string;
    confirm_password: string;
    accept_terms: boolean;
    // role: string;
    isUpdating: boolean
}