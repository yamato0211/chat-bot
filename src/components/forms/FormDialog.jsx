import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from "./Textinput";



export default class FormDialog extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            discription: ""
        }
        this.inputName = this.inputName.bind(this)
        this.inputEmail = this.inputEmail.bind(this)
        this.inputDiscription = this.inputDiscription.bind(this)
    }

    inputName = (event) => {
        this.setState({ name: event.target.value })
    }
    inputEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    inputDiscription = (event) => {
        this.setState({ discription: event.target.value })
    }

    submitForm = () => {
        const name = this.state.name
        const email = this.state.email
        const discription = this.state.discription

        const payload = {
            text: 'お問合せがありました\n' +
                'お名前 :' + name + '\n' +
                'Email :' + email + '\n' +
                '内容 :' + discription
        }
        const url = 'https://hooks.slack.com/services/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'
        if (name === '' || email === '' || discription === '') {
            alert('必須項目はすべて記入してください。')
        } else {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(payload)
            }).then(() => {
                alert('送信が完了しました')
                this.setState({
                    name: '',
                    email: '',
                    discription: ''
                })
                return this.props.handleClose()
            })
        }

    }




    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    フォーム
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TextInput
                            label={"お名前(必須)"}
                            multiline={false}
                            rows={1}
                            value={this.state.name}
                            type={"text"}
                            onChange={this.inputName}
                        />
                        <TextInput
                            label={"メールアドレス(必須)"}
                            multiline={false}
                            rows={1}
                            value={this.state.email}
                            type={"email"}
                            onChange={this.inputEmail}
                        />
                        <TextInput
                            label={"内容(必須)"}
                            multiline={true}
                            rows={5}
                            value={this.state.discription}
                            type={"text"}
                            onChange={this.inputDiscription}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose}>キャンセル</Button>
                    <Button onClick={this.submitForm} autoFocus>
                        送信する
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}