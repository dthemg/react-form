import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import "./style.css"

class FormInput extends React.Component {
    
    renderNameInput() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        name="nameValue"
                        value={this.props.nameValue} 
                        onChange={(event) => this.props.onChange(event)} 
                    />
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
    
    renderRadioButtons() {
        return (
            <form>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="selectedRadio"
                            value="optionA"
                            checked={this.props.selectedRadio === "optionA"}
                            onChange={(event) => this.props.onChange(event)}
                        />
                        Option A
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="selectedRadio"
                            value="optionB"
                            checked={this.props.selectedRadio === "optionB"}
                            onChange={(event) => this.props.onChange(event)}
                        />
                        Option B
                    </label>
                </div>
            </form>
        )
    }

    render() {
        return (
            <div>
                { this.renderNameInput() }
                { this.renderTextArea() }
                { this.renderSelectOptions() }
                { this.renderRadioButtons() }
                { this.renderSubmitButton() }
            </div>
        )
    }
}

FormInput.propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    nameValue: PropTypes.string,
    textAreaValue: PropTypes.string,
    selectedRadio: PropTypes.string
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
            selectedRadio: "optionA"
        }
    }

    onChange(event) {
        const name = event.target.name
        const value = event.target.value;
        this.setState({ [name]: value })
    }

    onSubmit() {
        console.log("Add to database...");
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <FormInput 
                    onChange = { this.onChange }
                    onSubmit = { this.onSubmit }
                    nameValue = { this.state.nameValue }
                    textAreaValue = { this.state.textAreaValue }
                    selectedRadio = { this.state.selectedRadio }
                />
            </div>
        )
    }
}


ReactDOM.render(<MyFormHandler/>, document.getElementById("root"))