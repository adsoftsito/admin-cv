import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHeaderComponent  }  from './admin-header/admin-header.component';
import { AdminWorkexperienceComponent  }  from './admin-workexperience/admin-workexperience.component';
//import { AdminHeaderComponent  }  from './admin-header/admin-header.component';
//import { AdminHeaderComponent  }  from './admin-header/admin-header.component';
//import { AdminHeaderComponent  }  from './admin-header/admin-header.component';
//import { AdminHeaderComponent  }  from './admin-header/admin-header.component';
//import { AdminHeaderComponent  }  from './admin-header/admin-header.component';


const routes: Routes = [
 { path: 'header', component:  AdminHeaderComponent },
 { path: 'workexperience', component:  AdminWorkexperienceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
