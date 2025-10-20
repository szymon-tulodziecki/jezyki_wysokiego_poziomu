module.exports = function() {
    return `
    <html>
        <header>
            Kontakt

            <br><br>
            <a href="/about">O mnie</a> | 
            <a href="/home">Home</a>
        </header>

        <main>
            <p>Skontaktuj się ze mną:</p>
            
            <table border="1">
                <tr>
                    <th>Metoda</th>
                    <th>Dane kontaktowe</th>
                </tr>
                <tr>
                    <td>Telefon</td>
                    <td>+48 123 456 789</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>kontakt@example.com</td>
                </tr>
                <tr>
                    <td>Adres</td>
                    <td>ul. Przykładowa 123, Warszawa</td>
                </tr>
            </table>
        </main>

        <footer>
            &copy; 2025 Moja Strona
        </footer>
    </html>
    `;
}
