document.addEventListener('DOMContentLoaded', function() {
    // Botones de editar
    const editButtons = document.querySelectorAll('.btnEditare');
    const modal = new bootstrap.Modal(document.getElementById('modalEditorial'));
    
    editButtons.forEach(button => {
      button.addEventListener('click', function() {
        const row = this.closest('tr');
        const id = row.cells[0].textContent;
        const idEditorial = row.cells[1].textContent;
        const editorial = row.cells[2].textContent;
        
        document.getElementById('e_id').value = id;
        document.getElementById('e_edi').value = idEditorial;
        document.getElementById('e_edit').value = editorial;
        
        modal.show();
      });
    });
  });