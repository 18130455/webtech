class ErrorApp extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
    }
    
    render(){
        return(
            <div className="error_root">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </div>
                    <p className="user-select-none text-danger">{this.props.message}</p>
                </div>
            </div>
        );
    }
}