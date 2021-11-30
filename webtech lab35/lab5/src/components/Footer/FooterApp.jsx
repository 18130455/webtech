class FooterApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            footer: []
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            footer: this.props.footer
        });
    }    
    
    render(){
        const{error, isLoaded, footer} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <footer className="footer container bg-primary text-white">
                    <FooterDesc/>
                </footer>
            );
        }
    }
}

class FooterDesc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true
        });
    }    
    
    render(){
        const{error, isLoaded} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <footer className="container">
                    <div className="row align-items-start">
                        <FooterData title={"Объявления"} value={"Место для объявлений"}/>
                        <FooterData title={"Объявления"} value={"Место для объявлений"}/>
                        <FooterData title={"Разработка"} value={"React JS"}/>
                    </div>
                </footer>
            );
        }
    }
}

class FooterData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            title: "",
            value: ""
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            title: this.props.title,
            value: this.props.value
        });
    }    
    
    render(){
        const{error, isLoaded, title, value} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="col-sm">
                    <h1 className="text-sm-start user-select-none border-bottom">
                        {title}
                    </h1>
                    <p className="text-sm-start user-select-none">
                        {value}
                    </p>
                </div>
            );
        }
    }
}