import { Injectable } from '@angular/core';
import Student from '../model/Student';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
}

export const STUDENTS: Student[] = [
    { _id: "1", name: "Vinod", course: "Angular8", fees: 1000 },
    { _id: "2", name: "Nisha", course: "ReactJS", fees: 0 }
]


@Injectable()
export default class StudentService {
    constructor(private http: HttpClient) {
    }

    getAllStudents(): Observable<Student[]> {
        return this.http.get<any>('http://localhost:8000/students');
    }
}