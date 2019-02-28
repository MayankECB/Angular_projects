export class User {
    empId: number;
    firstName: string;
    lastName: string;
    technology: string;

    constructor(
        empId: number = null,
        firstName: string = null,
        lastName: string = null,
        technology: string = null
    ) { 
        this.empId = empId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.technology = technology;
    }
}