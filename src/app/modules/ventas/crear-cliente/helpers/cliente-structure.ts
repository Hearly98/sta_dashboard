export const clienteStructure = () => {
  return [
    {
      label: 'Código',
      formControlName: 'codigo',
      type: 'text',
    },
    {
      label: 'Nombre Cliente / Empresa',
      formControlName: 'nombre',
      type: 'text',
    },
    {
      label: 'Tipo Documento',
      formControlName: 'tipoDocumento',
      type: 'select',
      options: [
        { label: 'RUC', value: 'ruc' },
        { label: 'DNI', value: 'dni' },
      ],
    },
    {
      label: 'Teléfono',
      type: 'text',
      formControlName: 'telefono',
    },
    {
      label: 'Email',
      type: 'text',
      formControlName: 'email',
    },
    {
      label: 'Dirección',
      type: 'text',
      formControlName: 'direccion',
    },
  ];
};
