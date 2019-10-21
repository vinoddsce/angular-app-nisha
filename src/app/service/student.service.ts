import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BaseService } from './base.service';

import { environment } from '../../environments/environment';
import Student from '../model/Student';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export default class StudentService extends BaseService {
    constructor(private http: HttpClient) {
        super();
    }

    getAllStudents(): Observable<Student[]> {
        return this.http.get<any>('http://localhost:8000/students');
    }

    addStudent(obj: Object) {
        console.log("obj: ", obj);
        return this.http.post('http://localhost:8000/students', obj, httpOptions).pipe(
            catchError(this.handleError)
        );
    }
}