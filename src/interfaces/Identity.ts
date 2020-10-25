export interface Identity {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
    email: string;
    first_name: string;
    last_name: string;
    username: string;
}