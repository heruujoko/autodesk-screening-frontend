export interface IdentityRequest {
    firstName: string;
    lastName: string;
    username: string;
    confirmUsername?: string;
    password: string;
    confirmPassword?: string;
}