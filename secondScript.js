document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('sortableTable');
    const headers = table.querySelectorAll('th');
    const tableBody = table.querySelector('tbody');
    const rows = Array.from(tableBody.querySelectorAll('tr'));

    headers.forEach((header, index) => {
        header.addEventListener('click', () => {
            const type = header.getAttribute('data-type');
            sortColumn(index, type);
        });
    });

    function sortColumn(index, type) {
        const sortedRows = rows.sort((a, b) => {
            const aText = a.querySelectorAll('td')[index].innerText;
            const bText = b.querySelectorAll('td')[index].innerText;

            if (type === 'number') {
                return Number(aText) - Number(bText);
            } else {
                return aText.localeCompare(bText);
            }
        });

        while (tableBody.firstChild) {
            tableBody.removeChild(tableBody.firstChild);
        }

        tableBody.append(...sortedRows);
    }
});
