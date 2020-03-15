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
                            name="nameValue"
                            value={this.props.nameValue} 
                            onChange={(event) => this.props.onChange(event)} 
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
                    type="text"
                    name="textAreaValue"
                    value={this.props.textAreaValue}
                    onChange={(event) => this.props.onChange(event)}
                />
           </div>
        )
    }

    renderSubmitButton() {
        return (
            <div>
                <button onClick={this.props.onSubmit}>
                    Submit
                </button>
            </div>
        )
    }

    renderSelectOptions() {
        return (
            <div>
                <select 
                    onChange={(event) => this.props.onChange(event)}
                    name="selectedOption"
                >
                    <option value="option1">Option1</option>
                    <option value="option2">Option2</option>
                    <option value="option3">Option3</option>
                    <option value="option4">Option4</option>
                    <option value="option5">Option5</option>
                    <option value="option6">Option6</option>
                </select>
            </div>
        )
    }
    
    render() {
        return (
            <div>
                { this.renderNameInput() }
                { this.renderTextArea() }
                { this.renderSelectOptions() }
                { this.renderSubmitButton() }
            </div>
        )
    }
}

class MyFormHandler extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nameValue: "",
            textAreaValue: "",
            selectedOption: "",
        }
    }

    onChange(event) {
        const name = event.target.name
        const value = event.target.value;
        this.setState({ [name]: value })
    }

    onSubmit() {
        console.log("Add to database...");
    }

    render() {
        return (
            <div>
                <FormInput 
                    onChange = { this.onChange }
                    onSubmit = { this.onSubmit }
                    formValue = { this.state.nameValue }
                    textAreaValue = { this.state.textAreaValue }
                    
                />
            </div>
        )
    }
}


ReactDOM.render(<MyFormHandler/>, document.getElementById("root"))