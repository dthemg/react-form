import React from "react"
import ReactDOM from "react-dom"


class FormInput extends React.Component {
    
    renderNameInput() {
        return (
            <div>
                <form>
                    <label>
                        Name
                        <input 
                            type="text" 
                            value={this.props.nameValue} 
                            onChange={(event) => this.props.onNameChange(event)} 
                        />
                    </label>
                </form>
            </div>
        )
    }

    renderTextArea() {
        return (
            <div>
                <textarea
                    value={this.props.textAreaValue}
                    onChange={(event) => this.props.onTextAreaChange(event)}
                />
           </div>
        )
    }

    renderSubmitButton() {
        return(
            <div>
                <button onClick={this.props.onSubmit}>
                    Submit
                </button>
            </div>
        )
    }
    
    render() {
        return (
            <div>
                { this.renderNameInput() }
                { this.renderTextArea() }
                { this.renderSubmitButton() }
            </div>
        )
    }
}

class MyFormHandler extends React.Component {
    constructor(props) {
        super(props);
        
        this.onNameChange = this.onNameChange.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nameValue: "",
            textAreaValue: "",
        }
    }

    onNameChange(event) {
        this.setState({ formValue: event.target.value });
        console.log(this.state.formValue)
    }

    onTextAreaChange(event) {
        this.setState({ textAreaValue: event.target.value })
        console.log(this.state.textAreaValue)
    }

    onSubmit() {
        console.log("Adding to database...");
    }


    render() {
        return (
            <div>
                <FormInput 
                    onNameChange = { this.onNameChange }
                    onSubmit = { this.onSubmit }
                    formValue = { this.state.nameValue }
                    textAreaValue = { this.state.textAreaValue }
                    onTextAreaChange = { this.onTextAreaChange }
                />
            </div>
        )
    }
}


ReactDOM.render(<MyFormHandler/>, document.getElementById("root"))