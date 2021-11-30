class LoadingApp extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
    }
    
    render(){
        return(
            <div className="loading_root">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </div>
                </div>
            </div>
        );
    }
}