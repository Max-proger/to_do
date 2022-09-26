import React from 'react'

class ToDoForm extends React.Component {
    constructor(props) {
    super(props)
    this.state = {project: '', note_creator: '', txt: '', update_date: '', active: ''}
    }
    handleChange(event) {
        this.setState( {
            [event.target.name]: event.target.value }
        );
    }
    handleSubmit(event) {
        console.log(this.state.project)
        console.log(this.state.note_creator)
        console.log(this.state.txt)
        console.log(this.state.update_date)
        console.log(this.state.active)

        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <div className="form-group">
                <label for="project">project</label>
                    <input type="text" className="form-control" name="project"
                    value={this.state.project} onChange={(event)=>this.handleChange(event)} />
                </div>
                <div className="form-group">
                <label for="note_creator">note_creator</label>
                    <input type="text" className="form-control" name="note_creator"
                    value={this.state.note_creator} onChange={(event)=>this.handleChange(event)} />
                </div>
                <div className="form-group">
                <label for="txt">txt</label>
                    <input type="text" className="form-control" name="txt"
                    value={this.state.txt} onChange={(event)=>this.handleChange(event)} />
                </div>
                <div className="form-group">
                <label for="update_date">update_date</label>
                    <input type="date" className="form-control" name="update_date"
                    value={this.state.update_date} onChange={(event)=>this.handleChange(event)} />
                </div>
                <div className="form-group">
                <label for="active">active</label>
                    <input type="date" className="form-control" name="active"
                    value={this.state.active} onChange={(event)=>this.handleChange(event)} />
                </div>
            <input type="submit" className="btn btn-primary" value="Save" /> </form>
        );
    }
}
export default ToDoForm