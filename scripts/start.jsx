//import React from "react";
//import table from "./table";


const cont = document.getElementById('root');
const root = ReactDOM.createRoot(cont);
function table(a, b, c) {
    return (
        <table>
            <tr>
                <td>{a}</td>
                <td>{b}</td>
                <td>{c}</td>
            </tr>
            <tr>
                <td>{a + 1}</td>
                <td>{b + 1}</td>
                <td>{c + 1}</td>
            </tr>
            <tr>
                <td>{a + 2}</td>
                <td>{b + 2}</td>
                <td>{c + 2}</td>
            </tr>
        </table>
    );
}

function App() {
    return (
        <div>
            <header>
                <nav></nav>
            </header>
            <main>
                <aside className="left-side"></aside>
                <div className="main-div">
                    {
                        table(1, 2, 3)
                    }
                </div>
                <aside className="right-side"></aside>
            </main>
            <footer>

            </footer>
        </div>
    );
}
root.render(<App />);

