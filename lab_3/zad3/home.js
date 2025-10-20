module.exports = function() {
    return `
    <html>
        <header>
            Strona główna

            <br><br>
            <a href="/about">O mnie</a> | 
            <a href="/contact">Kontakt</a>
        </header>

        <main>
            <p>Witaj na mojej stronie!</p>
            
            <table border="1">
                <tr>
                    <th>Sekcja</th>
                    <th>Opis</th>
                </tr>
                <tr>
                    <td>Strona główna</td>
                    <td>Tutaj jesteś właśnie teraz</td>
                </tr>
                <tr>
                    <td>O mnie</td>
                    <td>Dowiedz się więcej o autorze strony</td>
                </tr>
                <tr>
                    <td>Kontakt</td>
                    <td>Skontaktuj się ze mną</td>
                </tr>
            </table>
        </main>

        <footer>
            &copy; 2025 Moja Strona
        </footer>
    </html>
    `;
}
