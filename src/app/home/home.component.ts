import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from '../user-data-service.service';
import { Router, RouterModule } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tasks = [
    {
      name:'hello world'
    
    },
    {
      name:'react + nextjs'
    },
    {
      name:'@material-ui'
    }
  ]

  constructor(private UserService:UserDataServiceService, private router:Router) { }
  
  
  
  public nameTask:any ='';
  public us:any = ''
  

  ngOnInit(): void {
  }
  deleteTask(name:any){
    for(let i = 0; i<this.tasks.length;i++){
        this.tasks= this.tasks.filter((item) => item.name !== name);
    }
    
  }
  checkUser(){
    this.UserService.currentUser.subscribe(user =>{
      this.us=user;
      
    })
    if(this.us.name ==undefined || this.us.name ==''){
      alert("Para añadir una tarea tienes que insertar nombre");
      this. router. navigate(['/profile'])
    }else{
    let aux = [ {name:this.nameTask}]

    this.tasks = this.tasks.concat(aux);
    
    }
  }


}
