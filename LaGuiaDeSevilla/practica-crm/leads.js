const STORAGE_KEY = 'crm_leads'; 
function obtenerLeads() { 
    const datos = localStorage.getItem(STORAGE_KEY); 
    return datos ? JSON.parse(datos) : [];
 } 
 function guardarLead(lead) { 
    const leads = obtenerLeads(); 
    lead.id = Date.now(); 
    lead.fecha = new Date().toLocaleDateString('es-ES');   
    lead.estado = 'Nuevo';   
    leads.push(lead);  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));  
    return lead; 
    }  
     function eliminarLead(id) {   
          const leads = obtenerLeads().filter(l => l.id !== id);    
          localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    } 