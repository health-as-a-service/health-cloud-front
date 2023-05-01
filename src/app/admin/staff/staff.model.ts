import { Role } from "src/app/admin/staff/role.model"

export interface Userr {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    role: Role[];
  }