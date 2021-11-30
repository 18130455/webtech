class App extends React.Component{
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
        fetch("src/api/lengthNews.php")
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
        console.log(length[0].count);
        console.log(eRange);
        if(length[0].count<eRange){
            alert("Новости закончились");
        }
        this.setState({
            eRange: eRange+cRange
        });
        let jData = {
            sRange: sRange,
            eRange: eRange
        };
        fetch("src/api/loadNews.php", {
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
        fetch("src/api/lengthNews.php")
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
        fetch("src/api/loadNews.php", {
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
    
    componentDidUpdate(prevProps){
        
    }
    
    render(){
        const{error, isLoaded, items, comm} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            let mC = "comment";
            let mS = "save";
            return(
                <div className="app">
                    <HeaderApp handleClick={this.handleClick} modal={mC}/>
                    <ContentApp items={items}/>
                    <FooterApp/>
                    <ModalApp save={mS} modal={mC} title={"Комментарии"}/>
                    <ModalSaveApp save={mS} modal={mC} title={"Комментарии"}/>
                </div>
            );
        }
    }
}