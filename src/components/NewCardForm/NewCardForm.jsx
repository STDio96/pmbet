import React from 'react'
import './style.css'

class NewCardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.value.trim().length > 0) {
            this.props.submitHandler(this.state.value.trim());
        } else {
            alert('It couldn\'t be empty -_-');
            return;
        }

        this.setState({
            value: '',
        });
    }

    componentDidMount() {
        this.input.focus();
    }

    render() {
        let { handleSubmit, onChange } = this;

        return <div className="card-form">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    {/* подсмотрел чутка тут :) */}
                    <input type="text" ref={(input) => { this.input = input }} className="form-control" value={this.state.value} placeholder="Enter your comment" onChange={onChange} />
                    <div className="input-group-append">
                        <button className="btn btn-success" type="submit">Create</button>
                    </div>
                </div>
            </form>
        </div>
    }

}

export default NewCardForm;