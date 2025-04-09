import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnswersService } from 'src/app/services/answers.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-categorization',
  templateUrl: './categorization.component.html',
  styleUrls: ['./categorization.component.scss']
})
export class CategorizationComponent {

  title = 'tesisfront';
  shortLabel = ["1", "2", "3", "4", "5", "6" ,"7", "8", "9", "10"]
  // shortLabel = ["tipo inv", "dominio", "herramientas", "tamaño org", "tipo org", "algoritmos" ,"beneficios", "lecciones", "procesos", "problemas"]
  // shortLabel = ["tema", "practicas", "beneficios organi", "beneficios producto", "tecnica", "herramienta" ,"interes organizacion", "iteres devs", "metodos agiles", "competitividad"]
  // shortLabel = ["objeto", "apreciacion del objeto", "intervancion", "tipo de evaluacion", "alcance", "aplicable" ,"topico clave", "paradigma de progra", "enfoque/metodologia/estrateg", "tipo de tool", "lenguaje", "orientado a" ]
  // shortLabel = ["contexto", "Tipo Test", "tipo invest", "metodologia", "stage", "tipo propuesta" ,"lenguaje", "testTool", "infraestructure tool", "vc", "tipo app", "tipo arquitectura", "seguridad", "devops" ]
  // shortLabel = ["enfoque", "Tipo herramienta", "lenguaje de programacion", "orienta a estudiantes", "licencia", "habilidades blandas" ,"tipo de investigacion", "temas de desarrollo de software", "tecnicas gamificacion", "beneficios", "actividades gamificadas", "enfoque de progra", "Nivel de progra", "limitaciones", "herramientas" ]
  // shortLabel = ["modelo/arqui", "Algoritmos", "tecnologia", "problema solucionado", "datos", "dificultades" ,"cultivos", "tematica", "limitaciones", "alcance investigacion", "herramientas", "lenguaje de progra" ]
  pdfData: any;
  form!: FormGroup;
  isLoading = false;
  selectedFilePath = '';
  isChecked = false;
  isChecked2 = false;
  isChecked3 = false;
  isError = false;
  isSuccessful = false;
  responseTime: string = '';

  selectedFiles: File[] = [];
  selectedFile: File | null = null;

  constructor(private answersService : AnswersService,
              private fb: FormBuilder,
              private router: Router) {

      // answersService.retrieveAllAnswers().subscribe((res: any) => {
      // this.pdfData = res;
      // console.log(this.pdfData)
      // });
      this.answersService.isLoading$.subscribe(isLoading => {
        this.isLoading = isLoading;
      });

      this.answersService.isSuccessful$.subscribe(isSuccessful => {
        this.isSuccessful = isSuccessful;
      });

      this.answersService.isError$.subscribe(isError => {
        this.isError = isError;
      });

}  

  getData() {
    this.answersService.retrieveAllAnswers().subscribe((res: any) => {
      this.pdfData = res;
      console.log(this.pdfData)
    });
  }

  onFileExcelSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  uploadFile(): void {
    if (!this.selectedFile) {
      Swal.fire('Error', 'Por favor selecciona un archivo.', 'error');
      return;
    }

    this.answersService.uploadExcel(this.selectedFile).subscribe(
      (response:any) => {
        Swal.fire('¡Éxito!', 'El archivo se ha subido correctamente.', 'success');
      },
      (error:any) => {
        Swal.fire('Error', 'Hubo un problema al subir el archivo.', 'error');
      }
    );
  }


  onFileSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
  }

  uploadFiles(): void {
    if (this.selectedFiles.length === 0) {
      Swal.fire('Error', 'Por favor selecciona al menos un archivo.', 'error');
      return;
    }

    this.answersService.uploadFiles(this.selectedFiles).subscribe(
      (response: any) => {
        Swal.fire('¡Éxito!', 'Los archivos se han subido correctamente.', 'success');
      },
      (error: any) => {
        Swal.fire('Error', 'Hubo un problema al subir los archivos.', 'error');
      }
    );
  }

  onRun() {
    this.answersService.setError(false);
    const startTime = Date.now();

    if (this.isChecked2 == true && this.isChecked3 == true) {
      this.answersService.setLoading(true);
    //   this.answersService.runTool().subscribe((res: any) => {
        
    //   this.getData();
    //   this.isLoading = false;
    //   this.isSuccessful = true;
    //   console.log(res)
    // });

    this.answersService.runTool().subscribe({
      next: (res: any) => {
        const endTime = Date.now();
        const elapsedTime = Date.now() - startTime;
        this.responseTime = this.formatTime(elapsedTime);
        this.getData();
        this.answersService.setLoading(false);
        // this.isLoading = false;
        this.answersService.setSuccessful(true);
        this.answersService.setError(false);
        console.log(res)
      }, error: (err: any) => {
        this.answersService.setLoading(false);
        this.answersService.setError(true);
        console.log(err)
      }})

    } else {
      Swal.fire({
        title: "OOPS...",
        text: "Debe de seleccionar 'Estoy listo' en los 3 casos.",
        icon: "error"
      });
    }
    
  }

  // onExport() {
  //   this.isLoading = true;
  //   this.answersService.exportExcel().subscribe((res: any) => {
  //     this.answersService.setLoading(false);
  //     console.log(res)
  //   });
  // }
  onExport() {
    this.answersService.setLoading(true);
    this.answersService.exportExcel().subscribe((res: any) => {
      this.answersService.setLoading(false);
      console.log(res)
      this.answersService.setSuccessful(true);
      Swal.fire({
        title: "¡Listo!",
        text: "El archivo se ha generado correctamente.",
        icon: "success"
      });
    });
  }

  onChange(event: any) {
    this.isChecked = event.checked;
    console.log(this.isChecked);
    console.log(event);
    
  }
  onChange2(event: any) {
    this.isChecked2 = event.checked;
    console.log(this.isChecked2);
    console.log(event);
    
  }
  onChange3(event: any) {
    this.isChecked3 = event.checked;
    console.log(this.isChecked3);
    console.log(event);
    
  }

  onViewResults() {
    this.router.navigate(['/tesis/resultados']);
  }

  private formatTime(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(2);
    return `${minutes} min ${seconds} seg`;
  }
  // onFileSelected(event: any) {
  //   console.log(event);
    
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     const filePath = URL.createObjectURL(file);
  //     console.log(filePath);
  //     // Save the file path to a variable
  //     this.selectedFilePath = filePath;
  //   }
  //   console.log(this.selectedFilePath);
    
  // }
}
