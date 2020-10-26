import api from './api.service';
import {IdentityResponse} from '../interfaces/IdentityResponse';
import { IdentityRequest } from '../interfaces/IdentityRequest';

const findUsername = (username: string): Promise<IdentityResponse> => api.post(`/identity/username/find`, {username});
const authenticate = (username: string, password: string): Promise<IdentityResponse> => api.post(`/identity/signin`, {username, password});
const signup = (data: IdentityRequest): Promise<IdentityResponse> => api.post(`/identity/signup`, data);

const identityService = {
    findUsername,
    authenticate,
    signup
};

export default identityService;