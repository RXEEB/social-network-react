import React from "react";
import css from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status


    }
activateEditMode =  () => {
       this.setState({
           editMode:true
       })
}
    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange =(e) => {

        this.setState({
            status: e.currentTarget.value
        })

    }
   componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
        }





    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>

                      <span onClick={this.activateEditMode}>{this.props.status || "Нет статуса" }</span>
                    </div>
                }
                {this.state.editMode &&
                    <input autoFocus={true} onChange={this.onStatusChange}  onBlur={this.deactivateEditMode}  value={this.state.status}/>}

            </div>
        )
    }


}

export default ProfileStatus;