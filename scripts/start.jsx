
const cont = document.getElementById('root');
const root = ReactDOM.createRoot(cont);
function App() {
    return (
        <div>
            <header>
                <nav></nav>
            </header>
            <main>
                <aside class="left-side"></aside>
                <div class="main-div"></div>
                <aside class="right-side"></aside>
            </main>
            <footer>

            </footer>
        </div>
    );
}
root.render(<App />);

