class Nav extends React.Component{
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
            let id = "navbarSupportedContent";
            return( 
                <div className="nav row">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div class="container-fluid">
                            <NavBrand />
                            <NavButton id={id}/>
                            <NavElemets id={id}/>
                        </div>
                    </nav>
                </div>
            );
        }
    }
}

class NavBrand extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };
        
    }
    
    componentDidMount(){
        this.setState({isLoaded: true});
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
                <span class="navbar-brand mb-0 h1 text-sm-start user-select-none fs-6">
                    <i class="bi bi-three-dots-vertical"></i>
                    Панель навигации
                </span>
            );
        }
    }
}

class NavButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: ""
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            id: this.props.id
        });
    }
    
    render(){
        const{error, isLoaded, id} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return( 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-controls={`${id}`} aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            );
        }
    }
}

class NavElemets extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: ""
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            id: this.props.id
        });
    }
    
    render(){
        const{error, isLoaded, id} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return( 
                <div className="collapse navbar-collapse" id={`${id}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                    </ul>
                </div>
            );//<NavElementLink link={"/index.html"} value={"Домой"}/>
        }
    }
}

class NavElementLink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            link: "",
            value: ""
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            value: this.props.value,
            link: this.props.link
        });
    }
    
    render(){
        const{error, isLoaded, link, value} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return( 
                <li className="nav-item">
                    <a 
                        className="nav-link user-select-none btn btn-primary text-white fs-6" 
                        href={link}
                        role="button"
                    >
                        {value}
                    </a>
                </li>
            );
        }
    }
}

class NavElementButton extends React.Component{
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
                <li className="nav-item">
                    <button
                        type="button"
                        className="btn btn-primary fs-6"
                        onClick={this.props.handleClick}
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Загрузить несколько элементов (5)"
                    >
                        <i class="bi bi-play-btn"></i>
                        {`  ${this.props.value}`}
                    </button>
                </li>
            );
        }
    }
}

class NavElementModal extends React.Component{
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
                <li className="nav-item">
                    <button 
                        type="button" 
                        class="btn btn-primary" 
                        data-bs-toggle="modal" 
                        data-bs-target={`#${this.props.modal}`}
                    >
                        <i class="bi bi-rss"></i>
                        {`  ${this.props.value}`}
                    </button>
                    
                </li>
            );
        }
    }
}