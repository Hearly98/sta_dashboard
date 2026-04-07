import { FormControl } from '@angular/forms';
import { ClienteForm } from './../types/cliente.form';
export const buildClienteForm = (): {
  [K in keyof ClienteForm]: FormControl<ClienteForm[K]>;
} => {
  return {
    nombre: new FormControl<string | null>(null),
    codigo: new FormControl<string | null>(null),
    direccion: new FormControl<string | null>(null),
    email: new FormControl<string | null>(null),
    telefono: new FormControl<string | null>(null),
    tipoDocumento: new FormControl<string | null>(null),
  };
};
