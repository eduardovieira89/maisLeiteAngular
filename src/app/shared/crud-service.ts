import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators';

export class CrudService<T> {

  constructor(protected http: HttpClient, private API_URL: string) {}

  list() {
    return this.http.get<T[]>(this.API_URL);
  }

  loadByID(id: any) {
    return this.http.get<T>(`${this.API_URL}/${id}`);
  }

  private create(record: T) {
    return this.http.post(this.API_URL, record);
  }

  private update(record: any) {
    return this.http.put(`${this.API_URL}/${record['id']}`, record);
  }

  save(record: any) {
    if (record['id']) {
      return this.update(record);
    }
    return this.create(record);
  }

  remove(id: any) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}