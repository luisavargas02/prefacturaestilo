export interface IdataInformacion<T> {
  data: IarregloInformacion[];
}

export interface Area {
  name?: string;
}

export interface IarregloInformacion {
  codigo?: string;
  Descripcion?: string;
  cantidad?: number;
  valorunitario?: number;
  valortotal?: number;
  icon?: string;
  color?: string;
  area?: Area;
}
