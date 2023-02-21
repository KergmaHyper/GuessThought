

const cont = document.getElementById('root');
const root = ReactDOM.createRoot(cont);

const headerEl = document.getElementById("header");
const headerR = ReactDOM.createRoot(headerEl);

class Hello extends React.Component {
    render() {
        return <sup>
            Hello first Name: '{this.props.name}'  second Name: '{this.props.secName}'
        </sup>
    }
}

class App extends React.Component {
    render() {
        return (
            <sup>
                {new Date().toLocaleTimeString()}
            </sup>
        )
    }
}

class HeaderSet extends React.Component {
    render() {
        return (
            <div>
                <h2><App /></h2>
            </div>
        )
    }
}

class BodySet extends React.Component {
    render() {
        return (
            <div>
                <p><App /> <Hello name="Alex" secName="Fich" /></p>
                <p><App /> <Hello name="Bob" secName="Brown" /></p>
                <p><App /> <Hello name="Charly" secName="Smit" /></p>
            </div>
        )
    }
}


root.render(<BodySet />);

function buildHead() {
    headerR.render(<HeaderSet />);
}

setInterval(buildHead, 1000);

