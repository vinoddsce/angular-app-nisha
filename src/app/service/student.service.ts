import { Injectable } from '@angular/core';
import Student from '../model/Student';


export const STUDENTS: Student[] = [
    { _id: "1", name: "Vinod", course: "Angular8", fees: 1000 }
]


@Injectable()
export default class StudentService {

    getAllStudents(): Student[] {
        return STUDENTS;
    }
}