class ContentApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            value: "",
            data: [],
            min: 0,
            max: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleMin = this.handleMin.bind(this);
        this.handleMax = this.handleMax.bind(this);
    }
    
    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
        
    }
    
    handleReset(){
        this.setState({
            data: [],
            min: 0,
            max: 0,
            value: ""
        });
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true
        });
    }
    
    handleMin(ldata) {
        let lmin = Math.min(...ldata);
        this.setState({
            min: lmin
        });
    }
    
    handleMax(ldata) {
        let lmax = Math.max(...ldata);
        this.setState({
            max: lmax
        });
    }
    
    handleClick(){
        this.setState({
            data: []
        });
        let n = this.state.value;
        if(!isNaN(n)&&(n>0)){
            let ldata = [];
        for (let i = 0; i < n; i++) {
            let randomNumber = Math.floor(Math.random() * 201) - 100;
            ldata[i]=randomNumber;
        }
        this.setState({
            data: ldata
        });
        this.handleMin(ldata);
        this.handleMax(ldata);
        //alert(`Генерация начата! всего значений: ${n}`);
        console.log(ldata);
        }else{
            //alert("Введите число");
        }
        
    }
    
    componentDidUpdate(prevProps) {
        
    }
    
    render(){
        const{error, isLoaded, value, data, min, max} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="content container border-start border-end border-primary border border-1">
                    <ContentValue value={value} handleChange={this.handleChange}/>
                    <div className="row">
                    <ContentButton handleClick={this.handleClick}/> <ContentReset handleReset={this.handleReset}/>
                    <ContentMinMax min={min} max={max}/>
                    </div>
                    <ContentGenerate data={this.state.data}/>
                </div>
            );
        }
    }
}

class ContentMinMax extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            min: 0,
            max: 0
        };
        
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            min: this.props.min,
            max: this.props.max
        });
    }
    
    
    componentDidUpdate(prevProps) {
        if (this.props.min !== prevProps.min) {
            this.setState({
                min: this.props.min
            });
        }
        if (this.props.max !== prevProps.max) {
            this.setState({
                max: this.props.max
            });
        }
    }
    
    render(){
        const{error, isLoaded, min, max} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div className="row">
                    <ContentMin data={min}/>
                    <ContentMax data={max}/>
                </div>
            );
        }
    }
}

function ContentMin(props){
    return <div className="col"><h1 className="user-select-none fs-5">Минимальное значение: {props.data}</h1></div>;
}

function ContentMax(props){
    return <div className="col"><h1 className="user-select-none fs-5">Максимальное значение: {props.data}</h1></div>;
}

class ContentValue extends React.Component{
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
    
    
    componentDidUpdate(prevProps) {
        
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
                <div className="row py-1 my-1">
                    <h1 className="text-center user-select-none fs-5">Введите данные</h1>
                    <div class="form-floating">
                        <input type="text" class="form-control" name="value" id="value" placeholder="Введите размер массива" value={this.props.value} onChange={this.props.handleChange}  pattern="^[ 0-9]+$"/>
                        <label className="text-center user-select-none fs-5"for="value">Введите размер массива</label>
                    </div>
                </div>
            );
        }
    }
}

class ContentButton extends React.Component{
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
    
    
    componentDidUpdate(prevProps) {
        
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
                <div className="col py-1 my-1">
                    <button className="btn btn-primary" onClick={this.props.handleClick}>Начать генерацию  <i class="bi bi-gem"></i></button>
                </div>
            );
        }
    }
}

class ContentReset extends React.Component{
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
    
    
    componentDidUpdate(prevProps) {
        
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
                <div className="col py-1 my-1">
                    <button className="btn btn-primary" onClick={this.props.handleReset}>Обнулить <i class="bi bi-gem"></i></button>
                </div>
            );
        }
    }
}

class ContentGenerate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
        
    }
    
    componentDidMount(){
        this.setState({
            data: []
        });
        this.setState({
            isLoaded: true,
            data: this.props.data
        });
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({
            data: []
        });
            this.setState({
                data: this.props.data
            });
        }
    }
    
    render(){
        const{error, isLoaded, data} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            console.log(data);
            return(
                <div className=" container py-1 my-1">
                <h1 className="text-center user-select-none fs-5">Сгенерированные данные</h1>
                    {data.map((item) =>   
                        <div  className="row">
                            <p className="text-center user-select-none fs-6">
                                <i class="bi bi-list-ol"></i>
                                {item}
                            </p>
                        </div>
                    )}
                </div>
            );
        }
    }
}