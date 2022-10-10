import { StudentRegistrationServiceService } from "../../../Backend/Service/student-registration-service.service";
import { StudentRegistration } from "../../../Backend/Modal/student-registration";
export class studentTemp{

    student:StudentRegistration[]=[]

        constructor(private service:StudentRegistrationServiceService){}

    studentData(){
        this.service.getAllRegistration().subscribe(data=>this.student=data);
        return this.student
    }

}