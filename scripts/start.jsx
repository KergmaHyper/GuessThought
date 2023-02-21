

const cont = document.getElementById('root');
const root = ReactDOM.createRoot(cont);

const headerEl = document.getElementById("header");
const headerR = ReactDOM.createRoot(headerEl);

class Hello extends React.Component {
    render() {
        return (<sup>
            Hello first Name: '{this.props.name}'  second Name: '{this.props.secName}'
        </sup>)
    }
}
Hello.defaultProps = { name: 'Sandra', secName: 'Bullock' };

class GetTime extends React.Component {
    render() {
        return (
            <sup>
                {new Date().toLocaleTimeString()}
            </sup>
        )
    }
}

class GetButton extends React.Component {

    constructor(props) {
        super(props);
        this.press = this.press.bind(this);
    }

    press() {
        let msg = "msg: " + this.props.msg + " ";
        alert(msg);
        console.log(this);
    }


    render() {
        return (
            <button onClick={this.press}> {this.props.caption}</button>
        )
    }
}
GetButton.defaultProps = { caption: "Press", msg: "Test msg." };

class HeaderSet extends React.Component {

    render() {
        return (
            <div>
                <h2><GetTime /></h2>
            </div>
        )
    }
}

let user = [];
user[0] = { name: "Sandra", secName: "Bullock" };
user[1] = { name: "Alex", secName: "Filtch" };
user[2] = { name: "Bob", secName: "Brown" };
user[3] = { name: "Charly", secName: "Smith" };

class GetUser extends React.Component {
    render() {
        return (
            <p>
                <GetTime />
                <Hello name={user[this.props.num].name} secName={user[this.props.num].secName} />
                <GetButton caption={user[this.props.num].name} msg={'Hello ' + user[this.props.num].name} />
            </p>
        );
    }
}
GetUser.defaultProps = { num: "0" }

class BodySet extends React.Component {
    render() {
        return (
            <div>
                <GetUser num="1" />
                <GetUser num="2" />
                <GetUser num="3" />
                <GetUser />
            </div>
        )
    }
}


root.render(<BodySet />);

function buildHead() {
    headerR.render(<HeaderSet />);
}

setInterval(buildHead, 1000);

