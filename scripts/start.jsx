
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function App() {
    return (
        <div> root root block
            <header>
                <nav>nav block</nav>
            </header>
            <main>
                main block
                <aside class="left-side">left    side</aside>
                <div class="main-div">main div</div>
                <aside class="right-side">right side</aside>
            </main>
            <footer> footer
            </footer>
        </div>
    );
}

root.render(<App />);

