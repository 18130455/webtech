class ModalSaveApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            title: "",
            mail: "",
            value: "",
            date: moment()
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleClick(){
        const {title, mail, value, date} = this.state;
        let a = false;
        let b = false;
        let c = false;
        if(!((title.trim().length==="0")||(title.trim()===""))){
            a = true;
        }else{
            a = false;
        }
        if(!((mail.trim().length==="0")||(mail.trim()===""))&&(mail.includes('@'))){
            b = true;
        }else{
            b = false;
        }
        if(!((value.trim().length==="0")||(value.trim()===""))){
            c = true;
        }else{
            c = false;
        }
        this.setState({
            date: date.format("DD.MM.YYYY")
        });
        if(a&&b&&c==true){
            let Data = {
                title: title,
                mail: mail,
                value: value,
                date: date
            };
            fetch("src/api/saveComment.php", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }, 
                body: JSON.stringify(Data)
            })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
            alert("Сохраненно!");
        }else{
            alert("Не сохраненно!");
        }
    }
    
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true
        });
    }   
    
    componentDidUpdate(prevProps) {
        
    }
    
    render(){
        const{error, isLoaded, items, title, mail, value} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
                <div 
                    className="modal fade"
                    id={this.props.save} 
                    tabindex="-1" 
                    aria-labelledby={`${this.props.save}Label`} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <ModalSaveHeader save={this.props.save} title={this.props.title}/>
                            <ModalSaveBody title={title} mail={mail} value={value} handleClick={this.handleClick} handleChange={this.handleChange}/>
                            <ModalSaveFooter modal={this.props.modal} handleClick={this.handleClick}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class ModalSaveHeader extends React.Component{
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
                <div className="modal-header bg-primary text-white">
                    <h1 class="modal-title user-select-none" id={`${this.props.save}Label`}>{this.props.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            );
        }
    }
}

class ModalSaveBody extends React.Component{
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
                <div className="modal-body">
                    <ModalSaveData title={this.props.title} mail={this.props.mail} value={this.props.value} handleClick={this.props.handleClick} handleChange={this.props.handleChange}/>
                </div>
            );
        }
    }
}

class ModalSaveFooter extends React.Component{
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
                <div className="modal-footer bg-transparent text-dark">
                    <button type="button" class="btn btn-primary" onClick={this.props.handleClick}>Сохранить</button>
                    <button type="button" class="btn btn-primary" data-bs-target={`#${this.props.modal}`} data-bs-toggle="modal" data-bs-dismiss="modal">Комментарии</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            );
        }
    }
}

class ModalSaveData extends React.Component{
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
                <div className="container-sm">
                    <form autocomplete="off" class="row g-1 needs-validation" onSubmit={this.props.handleClick}>
                        <div class="form-floating flex-nowrap mb-1">
                            <input 
                                type="text" 
                                id="title"
                                name="title"
                                class="form-control" 
                                placeholder="Ф И.О."
                                required
                                value={this.props.title}
                                pattern="[A-Za-z]{4,16}"
                                aria-label="title"
                                aria-describedby="addon-wrapping"
                                onChange={this.props.handleChange}
                            />
                            <label for="title">Введите имя пользователя</label>
                        </div>
                        <div class="form-floating flex-nowrap mb-1">
                            <input 
                                type="email" 
                                id="mail"
                                name="mail"
                                class="form-control" 
                                placeholder="email123@example.com"
                                pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                value={this.props.mail}
                                required
                                aria-label="name"
                                aria-describedby="addon-wrapping"
                                onChange={this.props.handleChange}
                            />
                            <label for="email">Введите почту</label>
                        </div>
                        <div class="form-floating flex-nowrap mb-3">
                            <textarea
                                id="value"
                                name="value"
                                class="form-control" 
                                value={this.props.value}
                                required
                                aria-label="With textarea"
                                placeholder="Комментарий"
                                onChange={this.props.handleChange}
                            >
                            </textarea>
                            <label for="text">Введите комментарий</label>
                        </div>
                    </form>
                </div>
            );
        }
    }
}
