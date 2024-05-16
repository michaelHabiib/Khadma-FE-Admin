import { Component } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { Column } from '../../../core/interfaces/Coulmn';
import { ComponentType } from '@angular/cdk/portal';
import { UsersService } from '../../../core/Services/users.service';
import { NotifictionService } from '../../../shared/Services/notifiction.service';
import { ActionsComponent } from '../../../shared/Components/actions/actions.component';
@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  data!: any;
  language: any;
  componentForm: ComponentType<any> = UserFormComponent;
  tableColumns: Array<Column> = [
    {
      columnDef: 'postion',
      header: 'Postion',
      cell: (element: Record<string, any>) => `${element['postion']}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
    },
    {
      columnDef: 'code',
      header: 'Code',
      cell: (element: Record<string, any>) => `${element['code']}`,
    },
    {
      columnDef: 'level',
      header: 'Level',
      cell: (element: Record<string, any>) => `${element['level']}`,
    },
    {
      columnDef: 'class',
      header: 'Class',
      cell: (element: Record<string, any>) => `${element['class']}`,
    },
    {
      columnDef: 'BuildingNumber',
      header: 'Building Number',
      cell: (element: Record<string, any>) => `${element['BuildingNumber']}`,
    },
    {
      columnDef: 'subStreet',
      header: 'Sub Street',
      isDate: true,
      cell: (element: Record<string, any>) => `${element['subStreet']}`,
    },
    {
      columnDef: 'street',
      header: 'Street',
      cell: (element: Record<string, any>) => `${element['street']}`,
    },
    {
      columnDef: 'area',
      header: 'Area',
      cell: (element: Record<string, any>) => `${element['area']}`,
    },
    {
      columnDef: 'floor',
      header: 'Floor',
      cell: (element: Record<string, any>) => `${element['floor']}`,
    },
    {
      columnDef: 'flatNo',
      header: 'Flat No',
      cell: (element: Record<string, any>) => `${element['flatNo']}`,
    },
    {
      columnDef: 'Descrption',
      header: 'Descrption',
      cell: (element: Record<string, any>) => `${element['Descrption']}`,
    },
    {
      columnDef: 'whatsAppNo',
      header: 'WTS No',
      cell: (element: Record<string, any>) => `${element['whatsAppNo']}`,
    },
    {
      columnDef: 'fatherPhone',
      header: 'Father No',
      cell: (element: Record<string, any>) => `${element['fatherPhone']}`,
    },
    {
      columnDef: 'motherPhone',
      header: 'Mother No',
      cell: (element: Record<string, any>) => `${element['motherPhone']}`,
    },
    {
      columnDef: 'birthday',
      header: 'Birthday',
      cell: (element: Record<string, any>) => `${element['birthday']}`,
    },
    {
      columnDef: 'gender',
      header: 'Gender',
      cell: (element: Record<string, any>) => `${element['gender']}`,
    },
    {
      columnDef: 'NationalId',
      header: 'National ID',
      cell: (element: Record<string, any>) => `${element['NationalId']}`,
    },
    {
      columnDef: 'fatherMail',
      header: 'Father Email',
      cell: (element: Record<string, any>) => `${element['fatherMail']}`,
    },
    {
      columnDef: 'motherMail',
      header: 'Mother Email',
      cell: (element: Record<string, any>) => `${element['motherMail']}`,
    },
    {
      columnDef: 'action',
      header: 'ِActions',
      actionComponent: ActionsComponent,
    },
  ];
  constructor(
    private NotifictionService: NotifictionService,
    private UsersService: UsersService
  ) {}
  ngOnInit(): void {
    this.getAllUsers(1,10);
  }
  getAllUsers(pageNo : number, pageSize : number) {
    this.UsersService.getAllUsers(pageNo, pageSize).subscribe({
      next: (res) => {
        this.data = res;
      },
      error: () => {
        this.NotifictionService.openSnackBar(
          'Failed to Get Data'
        );
      },
    });
  }
  deleteRow(eventData: any){
    this.UsersService.DeleteUsers(eventData.id).subscribe({
      next :(res) =>{
        this.NotifictionService.openSnackBar('Deleted Successfully')
      },
      error : (err) => {
        this.NotifictionService.openSnackBar('Failed to Delete')
      }
    })
  }
}
