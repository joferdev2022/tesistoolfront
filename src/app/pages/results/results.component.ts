import { Component } from '@angular/core';
import { AnswersService } from 'src/app/services/answers.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  pdfData: any;
  isLoading = false;
  isSuccessful = false;


  constructor(private answerService: AnswersService) { 
    answerService.retrieveAllAnswers().subscribe((res: any) => {
      this.pdfData = res;
      console.log(this.pdfData)
      });
  }


 

  // onExport() {
  //   this.isLoading = true;
  //   this.answerService.exportExcel().subscribe((res: any) => {
  //     this.isLoading = false;
  //     console.log(res)
  //     this.isSuccessful = true;
  //     Swal.fire({
  //       title: "¡Listo!",
  //       text: "El archivo se ha generado correctamente.",
  //       icon: "success"
  //     });
  //   });
  // }
  onExport() {
    this.isLoading = true;
    this.answerService.exportExcel().subscribe((res: Blob) => {
      this.isLoading = false;
      const blob = new Blob([res], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const url = window.URL.createObjectURL(blob);
      console.log(res)

      const a = document.createElement('a');
      a.href = url;
      a.download = 'output.xlsx'; // Nombre del archivo descargado
      a.click();

      // Limpiar el objeto URL
      window.URL.revokeObjectURL(url);

      this.isSuccessful = true;
      Swal.fire({
        title: "¡Listo!",
        text: "El archivo se ha generado correctamente.",
        icon: "success"
      });
    });
  }
}
