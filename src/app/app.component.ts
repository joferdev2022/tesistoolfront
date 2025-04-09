import { Component, OnInit } from '@angular/core';
import { AnswersService } from './services/answers.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'tesisfront';
  // shortLabel = ["1", "2", "3", "4", "5", "6" ,"7", "8", "9", "10"]
  // shortLabel = ["tipo inv", "dominio", "herramientas", "tamaño org", "tipo org", "algoritmos" ,"beneficios", "lecciones", "procesos", "problemas"]
  // shortLabel = ["tema", "practicas", "beneficios organi", "beneficios producto", "tecnica", "herramienta" ,"interes organizacion", "iteres devs", "metodos agiles", "competitividad"]
  // shortLabel = ["objeto", "apreciacion del objeto", "intervancion", "tipo de evaluacion", "alcance", "aplicable" ,"topico clave", "paradigma de progra", "enfoque/metodologia/estrateg", "tipo de tool", "lenguaje", "orientado a" ]
  // shortLabel = ["contexto", "Tipo Test", "tipo invest", "metodologia", "stage", "tipo propuesta" ,"lenguaje", "testTool", "infraestructure tool", "vc", "tipo app", "tipo arquitectura", "seguridad", "devops" ]
  // shortLabel = ["enfoque", "Tipo herramienta", "lenguaje de programacion", "orienta a estudiantes", "licencia", "habilidades blandas" ,"tipo de investigacion", "temas de desarrollo de software", "tecnicas gamificacion", "beneficios", "actividades gamificadas", "enfoque de progra", "Nivel de progra", "limitaciones", "herramientas" ]
  // shortLabel = ["modelo/arqui", "Algoritmos", "tecnologia", "problema solucionado", "datos", "dificultades" ,"cultivos", "tematica", "limitaciones", "alcance investigacion", "herramientas", "lenguaje de progra" ]
  // pdfData: any;
  // form!: FormGroup;
  // isLoading = false;


  // constructor(private answersService : AnswersService,
  //             private fb: FormBuilder) {

  //   answersService.retrieveAllAnswers().subscribe((res: any) => {
  //     this.pdfData = res;
  //     console.log(this.pdfData)
  //   });

  // }

  ngOnInit(): void {

   
}

  // getData() {
  //   this.answersService.retrieveAllAnswers().subscribe((res: any) => {
  //     this.pdfData = res;
  //     console.log(this.pdfData)
  //   });
  // }

  // onRun() {
  //   this.isLoading = true;
  //   this.answersService.runTool().subscribe((res: any) => {
  //     this.getData();
  //     this.isLoading = false;
  //     console.log(res)
  //   });
  // }

  // onExport() {
  //   this.isLoading = true;
  //   this.answersService.exportExcel().subscribe((res: any) => {
  //     this.isLoading = false;
  //     console.log(res)
  //   });
  // }


}
