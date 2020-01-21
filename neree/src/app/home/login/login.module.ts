import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { HeaderModule } from 'src/app/shared/components/header/header/header.module';
import { FooterModule } from 'src/app/shared/components/footer/footer/footer.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    SharedModule
  ],
  exports:[
    //LoginComponent
  ]
})
export class LoginModule { }
