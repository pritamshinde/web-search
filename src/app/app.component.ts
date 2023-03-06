import { Component,Input } from '@angular/core';
import { AppService } from 'app/app.service'
import { student } from './student';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent
 {

  constructor(private service: AppService) { }

  title = 'angular-text-search-highlight';
  message : string;
  dataSource : student;
  dataSource1 : any;
  getallstudent:boolean = false;
  //hiding info box
  getstudent:boolean = false;
  firstResult:boolean = false;
  secoundResult:boolean = false;
  projectinfo:boolean = false;
 

  @Input() inputModel: string;  
  //type: string;
  @Input() selecttype: string;

  ngOnInit() {
    this.selecttype = "1";
   // this.type = "1";
   // this.type = this.selecttype;
    //this.getAll();
  }

  //onclick toggling both
  onclickofSearch()
  {
    this.getstudent = true;
    this.getallstudent = false;
    this.firstResult = false;
    this.projectinfo= false;
  }

  onclickofSearchAll()
  {
    this.getstudent = false;
    this.getallstudent = true;
    this.secoundResult = false;
    this.projectinfo= false;

  }

  onClickProjectInfo()
  {
    this.getstudent = false;
    this.getallstudent = false;
    this.secoundResult = false;
    this.getstudent = false;
    this.getallstudent = false;
    this.firstResult = false;
    this.projectinfo= true;

  }

getAllStudents()
    {
      debugger;
      this.service.getStudents().subscribe((results) => {
  
        if(results.length > 0)
        {
            //console.log('Data is received - Result - ', results);
            this.secoundResult = true;
                this.dataSource1 = results;
        }
        else{

        }});
       
         // console.log('Data is received - Result - ', results);
   }

    

  getAll() 
  {
if(this.inputModel == null)
{
  this.message = "Please enter the Enrollment No. Or Seat No.";
  return;
}

     let option = true;
             if(this.selecttype == "2")
             {
                     option = false;
              }
    this.service.getUsers(this.inputModel,option).subscribe((results) => {

      if(results.length > 0 )
      {  
        this.firstResult = true;
          //console.log('Data is received - Result - ', results);
              this.dataSource = results[0];
              this.message = null;
      } 
      else 
      {
        this.firstResult = false;
              this.dataSource = null  ;
              this.message = "Record Not found"

  }
 });
}

 }
  