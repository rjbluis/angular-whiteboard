import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }

  addTask(newTask: any): Observable<any> {
    return this.http.post<any>(this.API_URL, newTask);
  }

  editTask(task: any): Observable<any> {
    const url = `${this.API_URL}/${task.id}`;
    return this.http.put<any>(url, task);
  }

  deleteTask(taskId: number): Observable<any> {
    const url = `${this.API_URL}/${taskId}`;
    return this.http.delete<any>(url);
  }
}
