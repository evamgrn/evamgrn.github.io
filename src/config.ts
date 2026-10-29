// Datos únicos de la web: si cambia algo de contacto o legal, se cambia solo aquí.

export const SITIO = {
  url: 'https://teamvaxor.es',
  nombre: 'VAXOR · Sistemas para inmobiliarias',
  descripcion:
    'Te traemos clientes interesados y nos aseguramos de que no se escape ninguno. Campañas en tu zona, respuesta al momento y seguimiento de cada contacto. Sin permanencia.',
};

export const CONTACTO = {
  email: 'eva@teamvaxor.es',
  whatsappNumero: '+34 605 09 56 87',
  whatsapp: 'https://wa.me/34605095687?text=Hola%20Eva%2C%20te%20escribo%20desde%20la%20web',
  calendly: 'https://calendly.com/eva-teamvaxor/hablemos',
  duracionLlamada: '20 minutos',
};

// Flujo de n8n «VAXOR · Consultoría web» (scripts/prospeccion/wf_consultoria.py → wf_consultoria.json)
export const WEBHOOK_CONSULTORIA = 'https://n8n.srv2065993.hstgr.cloud/webhook/vaxor-consultoria-3945ebad659e0206b97d';

export const LEGAL = {
  titular: 'Eva Melagrani Navarro',
  nif: '23929460F',
  domicilio: 'Plaza Rafael Casanova, 3, 08754 El Papiol (Barcelona)',
  email: 'eva@teamvaxor.es',
  actualizado: '28 de octubre de 2026',
};

export const OPCIONES_MEJORAR = [
  { id: 'propietarios', texto: 'Conseguir más propietarios' },
  { id: 'compradores', texto: 'Más compradores o inquilinos' },
  { id: 'responder', texto: 'Responder antes a los contactos' },
  { id: 'seguimiento', texto: 'Hacer seguimiento sin que se escape nadie' },
];
