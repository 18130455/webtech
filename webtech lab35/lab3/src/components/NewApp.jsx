class NewApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            items: this.props.items
        });
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.items !== prevProps.items) {
            this.setState({
                items: this.props.items
            });
        }
    }
    
    render(){
        const{error, isLoaded, items} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="container bg-light text-dark">
                    {items.map(item => (
                        <NewData key={item.id} id={item.id} title={item.title} picture={item.picture} value={item.value}/>
                    ))}
                </div>
            );
        }
    }
}

class NewData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: "",
            title: "",
            picture: "",
            value: ""
        };
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            id: this.props.id,
            title: this.props.title,
            picture: this.props.picture,
            value: this.props.value
        });
    }
    
    render(){
        const{error, isLoaded, id, title, picture, value} = this.state;
        if (error) {
            return(
                <ErrorApp error={error.message}/>
            );
        } 
        else if (!isLoaded) {
            return <LoadingApp/>;
        }
        else{
            return(
                <div className="container-sm m-1 p-1 border border-primary border-3 rounded" id={`data${id}`}>
                    <div class="row-sm align-items-start d-flex flex-row">
                        <NewId id={id}/>
                        <NewTitle id={id} title={title}/>
                    </div> 
                    <div class="row-sm align-items-start d-flex flex-row">
                        <NewPicture id={id} picture={picture}/>
                        <NewValue id={id} value={value}/>
                    </div>
                </div> 
            );
        }
    }
}

class NewId extends React.Component{
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
            return(
                <ErrorApp error={error.message}/>
            );
        } 
        else if (!isLoaded) {
            return <LoadingApp/>;
        }
        else{
            return(
                <div className="col-sm" id={`data${id}`}>
                    <h2 className="user-select-none">
                        <i class="bi bi-paperclip"></i>
                        {`Новость №${id}`}
                    </h2>
                </div> 
            );
        }
    }
}

class NewTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: "",
            title: ""
        };
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            id: this.props.id,
            title: this.props.title
        });
    }
    
    render(){
        const{error, isLoaded, id, title} = this.state;
        if (error) {
            return(
                <ErrorApp error={error.message}/>
            );
        } 
        else if (!isLoaded) {
            return <LoadingApp/>;
        }
        else{
            return(
                <div className="col-sm" id={`data${id}`}>
                    <h2 className="user-select-none">
                        <i class="bi bi-file-earmark-check"></i>
                        {`${title}`}
                    </h2>
                </div>  
            );
        }
    }
}

class NewPicture extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: "",
            picture: ""
        };
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            id: this.props.id,
            picture: this.props.picture
        });
    }
    
    render(){
        const{error, isLoaded, id, picture} = this.state;
        if (error) {
            return(
                <ErrorApp error={error.message}/>
            );
        } 
        else if (!isLoaded) {
            return <LoadingApp/>;
        }
        else{
            return(
                <div className="col-sm" id={`data${id}`}>
                    <img 
                        className="rounded-2" 
                        src={`${picture}`} 
                        width="384" 
                        height="256" 
                    />
                </div> 
            );
        }
    }
}

class NewValue extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: "",
            value: ""
        };
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            id: this.props.id,
            value: this.props.value
        });
    }
    
    render(){
        const{error, isLoaded, id, value} = this.state;
        if (error) {
            return(
                <ErrorApp error={error.message}/>
            );
        } 
        else if (!isLoaded) {
            return <LoadingApp/>;
        }
        else{
            return(
                <div className="col-sm" id={`data${id}`}>
                    <h3 className="user-select-none">
                    <i class="bi bi-info-circle"></i>
                        Описание:
                    </h3>
                    <p className="user-select-none">
                        {value}
                    </p>
                </div>
            );
        }
    }
}