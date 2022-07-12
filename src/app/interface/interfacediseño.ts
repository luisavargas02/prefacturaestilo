export interface IdataInformacion<T> {
  data: IarregloInformacion[];
}

export interface Area {
  name: string;
  color: string;
  colorletras: string;
  icon: string;
}

export interface IarregloInformacion {
  codigo?: string;
  Descripcion?: string;
  cantidad?: number;
  valorunitario?: number;
  valortotal?: number;
  icon?: string;
  color?: string;
  Area: Area;
}

export interface IdataTable {
  Estancia: IarregloInformacion[];
  Examenes: IarregloInformacion[];
  Insumos: IarregloInformacion[];
  Medicamentos: IarregloInformacion[];
  Oxigeno: IarregloInformacion[];
}
