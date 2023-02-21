

const cont = document.getElementById('root');
const root = ReactDOM.createRoot(cont);
function table(a, b, c) {
    return (
        <table >

        </table>
    );
}

function App() {
    return (
        <div id="subroot">
            <header id="header">
                <nav id="nav"></nav>
            </header>
            <main id="main">
                <aside className="left-side"></aside>
                <div id="maindiv">
                </div>
                <aside className="right-side"></aside>
            </main>
            <footer id="footer">

            </footer>
        </div>
    );
}

root.render(<App />);

