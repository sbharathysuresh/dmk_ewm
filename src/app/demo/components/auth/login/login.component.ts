import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { __values } from 'tslib';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    signinas!:string;
    user:any=[{name:'admin',value:''}];
    // user(a:any){
    //     console.log("hh");
    //     console.log(this.valSelect1);
    // }
    paymentOptions: any[] = [
        { name: 'Admin', value: 1 },
        { name: 'Super Admin', value: 2 }]

    
    con(){
        console.log(this.user);
    }
    

    constructor(public layoutService: LayoutService) { }
    
}
