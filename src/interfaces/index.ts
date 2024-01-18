export interface IFormData {
  name: string;
  email: string;
  phone: string;
}

export interface IPosts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface ICheckedState {
  department: string;
  subDepartments: string[];
}
