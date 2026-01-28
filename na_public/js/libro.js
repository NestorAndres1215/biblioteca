document.addEventListener('DOMContentLoaded', function () {
    // Botones de editar
    const editButtons = document.querySelectorAll('.btnEditara');
    const modal = new bootstrap.Modal(document.getElementById('modalLibro'));

    editButtons.forEach(button => {
      button.addEventListener('click', function () {
        const row = this.closest('tr');
        const id = row.cells[0].textContent;
        const idLibro = row.cells[1].textContent;
        const titulo = row.cells[2].textContent;
        const idEditorial = row.cells[3].textContent;
        const idAutor = row.cells[4].textContent;

        document.getElementById('e_id').value = id;
        document.getElementById('e_cod').value = idLibro;
        document.getElementById('e_ti').value = titulo;
        document.getElementById('e_edi').value = idEditorial;
        document.getElementById('e_au').value = idAutor;

        modal.show();
      });
    });
  });