import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

const base_url = "https://tesistool.onrender.com/api";
// const base_url = "http://localhost:8000/api";
@Injectable({
  providedIn: 'root'
})

export class AnswersService {
    private isLoadingSubject = new BehaviorSubject<boolean>(false);
    isLoading$ = this.isLoadingSubject.asObservable();

    private isSuccessfulSubject = new BehaviorSubject<boolean>(false);
    isSuccessful$ = this.isSuccessfulSubject.asObservable();

    private isErrorSubject = new BehaviorSubject<boolean>(false);
    isError$ = this.isErrorSubject.asObservable();

    constructor(private http: HttpClient) {}

    retrieveAllAnswers() {

        // const url = `${ base_url }/chats?id_user=${idUser}&thread_id=thread_iOLtSYytP5Y4QwHA2rIrRkCk`;
        const url = `${ base_url }/result`;
        // return this.http.get(url).pipe(map((res: any) => res.chats));
        
        return this.http.get(url);
    
      }
    runTool() {
        const url = `${ base_url }/tool`;

        return this.http.get(url);
    } 

    // exportExcel() {
    //   const url = `${ base_url }/pdf`;

    //   this.http
    //     .get(url, { responseType: 'blob' }) // Solicita el archivo como un blob
    //       .subscribe((response) => {
    //         const blob = new Blob([response], {
    //           type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    //         });
    //         const url = window.URL.createObjectURL(blob);
    //         const a = document.createElement('a');
    //         a.href = url;
    //         a.download = 'output.xlsx'; // Nombre del archivo descargado
    //         a.click();
    //         window.URL.revokeObjectURL(url); // Limpia la URL creada
    //       });
    // }

    exportExcel(): Observable<Blob> {
        const url = `${ base_url }/sheet`;

        return this.http.get(url, { responseType: 'blob' });
    }


    uploadExcel(file: File): any {
      const url = `${ base_url }/upload-xlsx`;
      const formData = new FormData();
      formData.append('file', file);
  
      return this.http.post(url, formData);
    }

    uploadFiles(files: File[]): any {
      const url = `${ base_url }/upload-pdfs`;
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('files', file);
      });
  
      return this.http.post(url, formData);
    }


    setLoading(value: boolean) {
      this.isLoadingSubject.next(value);
    }

    setSuccessful(value: boolean) {
      this.isSuccessfulSubject.next(value);
    }
    
    setError(value: boolean) {
      this.isErrorSubject.next(value);
    }
}