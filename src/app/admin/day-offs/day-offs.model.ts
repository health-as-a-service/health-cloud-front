import { UserDetails } from "src/app/core/models/userDetails";

export class DayOff {
    public id: string;
    public startDate: Date = new Date();
    public endDate: Date = new Date();
    public reason: string;
    public status: string;
    public user: UserDetails
}
