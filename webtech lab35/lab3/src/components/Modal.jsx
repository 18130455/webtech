class ModalApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            cRange: 5,
            sRange: 0,
            eRange: 5,
            length: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        const{cRange, eRange, sRange, length} = this.state;
        fetch("src/api/lengthComment.php")
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    length: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
        if(length[0].count<eRange){
            alert("Комментарии закончились");
        }
        this.setState({
            eRange: eRange+cRange
        });
        let jData = {
            sRange: sRange,
            eRange: eRange
        };
        fetch("src/api/loadComment.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify(jData)
        })
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    
    componentDidMount(){
        const{cRange, eRange, sRange, length} = this.state;
        fetch("src/api/lengthComment.php")
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    length: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
        this.setState({
            eRange: eRange+cRange
        });
        let jData = {
            sRange: sRange,
            eRange: eRange
        };
        fetch("src/api/loadComment.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify(jData)
        })
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }   
    
    componentDidUpdate(prevProps) {
        
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
                <div 
                    className="modal fade"
                    id={this.props.modal} 
                    tabindex="-1" 
                    aria-labelledby={`${this.props.modal}Label`} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <ModalHeader modal={this.props.modal} title={this.props.title}/>
                            <ModalBody items={items}/>
                            <ModalFooter save={this.props.save} handleClick={this.handleClick}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class ModalHeader extends React.Component{
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
                    <h1 class="modal-title user-select-none" id={`${this.props.modal}Label`}>{this.props.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            );
        }
    }
}

class ModalBody extends React.Component{
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
                <div className="modal-body">
                    {items.map(item => (
                        <ModalData key={item.id} id={item.id} title={item.title} mail={item.mail} value={item.value} date={item.date}/>
                    ))}
                </div>
            );
        }
    }
}

class ModalFooter extends React.Component{
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
                    <button type="button" class="btn btn-primary" onClick={this.props.handleClick}>Загрузить еще</button>
                    <button type="button" class="btn btn-primary" data-bs-target={`#${this.props.save}`} data-bs-toggle="modal" data-bs-dismiss="modal">Написать отзыв</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            );
        }
    }
}

class ModalData extends React.Component{
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
            return(
                <ErrorApp error={error.message}/>
            );
        } 
        else if (!isLoaded) {
            return <LoadingApp/>;
        }
        else{
            return(
                <div className="container-sm m-1 p-1 border border-primary border-3 rounded" id={`data${this.props.id}`}>
                    <div className="row-sm">
                        <ModalId id={this.props.id}/>
                        <ContentDate id={this.props.id} date={this.props.date}/>
                    </div>
                    <div className="row-sm">
                        <ModalTitle id={this.props.id} title={this.props.title}/>
                        <ModalMail id={this.props.id} mail={this.props.mail}/>
                    </div>
                    <div className="row-sm">
                        <ModalValue id={this.props.id} value={this.props.value}/>
                    </div>
                </div>
            );
        }
    }
}


class ModalId extends React.Component{
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
            return(
                <ErrorApp error={error.message}/>
            );
        } 
        else if (!isLoaded) {
            return <LoadingApp/>;
        }
        else{
            return(
                <div className="col-sm" id={`data${this.props.id}`}>
                    <h4 className="user-select-none">
                        <i class="bi bi-reply"></i>
                        {`Комментарий №${this.props.id}  `}
                    </h4>
                </div>
            );
        }
    }
}

class ModalTitle extends React.Component{
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
            return(
                <ErrorApp error={error.message}/>
            );
        } 
        else if (!isLoaded) {
            return <LoadingApp/>;
        }
        else{
            return(
                <div className="col-sm" id={`data${this.props.id}`}>
                    <h4 className="user-select-none">
                        <i class="bi bi-terminal"></i>
                        {`  Имя: ${this.props.title}`}
                    </h4>
                </div>
            );
        }
    }
}

class ModalMail extends React.Component{
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
            return(
                <ErrorApp error={error.message}/>
            );
        } 
        else if (!isLoaded) {
            return <LoadingApp/>;
        }
        else{
            return(
                <div className="col-sm" id={`data${this.props.id}`}>
                    <h4 className="user-select-none">
                        <i class="bi bi-mailbox"></i>
                        {`  Почта: ${this.props.mail}`}
                    </h4>
                </div>
            );
        }
    }
}

class ModalValue extends React.Component{
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
            return(
                <ErrorApp error={error.message}/>
            );
        } 
        else if (!isLoaded) {
            return <LoadingApp/>;
        }
        else{
            return(
                <div className="col-sm" id={`data${this.props.id}`}>
                    <h4 className="user-select-none">
                        <i class="bi bi-bricks"></i>
                        {`  Комментарий:`}
                    </h4>
                    <p className="user-select-none">
                        {this.props.value}
                    </p>
                </div>
            );
        }
    }
}

class ContentDate extends React.Component{
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
            return(
                <ErrorApp error={error.message}/>
            );
        } 
        else if (!isLoaded) {
            return <LoadingApp/>;
        }
        else{
            return(
                <div className="col-sm" id={`data${this.props.id}`}>
                    <h3 className="text-dark user-select-none">
                        <i class="bi bi-calendar-check"></i>
                        Дата комментария:
                        {this.props.date}
                    </h3>
                </div>
            );
        }
    }
}