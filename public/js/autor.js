document.addEventListener('DOMContentLoaded', function () {
    // Botones de editar
    const editButtons = document.querySelectorAll('.btnEditaru');
    const modal = new bootstrap.Modal(document.getElementById('modalAutor'));

    editButtons.forEach(button => {
      button.addEventListener('click', function () {
        const row = this.closest('tr');
        const id = row.cells[0].textContent;
        const idAutor = row.cells[1].textContent;
        const nombre = row.cells[2].textContent;
        const apellido = row.cells[3].textContent;
        const pais = row.cells[4].textContent;

        document.getElementById('e_id').value = id;
        document.getElementById('e_aut').value = idAutor;
        document.getElementById('e_nom').value = nombre;
        document.getElementById('e_ape').value = apellido;
        document.getElementById('e_pa').value = pais;

        modal.show();
      });
    });
  });