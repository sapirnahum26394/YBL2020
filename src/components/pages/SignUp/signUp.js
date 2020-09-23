import React, { useState } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../../firebase/firebase' ;
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import '../Users/UserPage.css'

const useStyles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',

        },
    },
    paper: {
        marginTop:theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        marginTop:theme.spacing(3),
    },
    TextField: {
        alignItems: 'center',
    },
})

function SignUp(props) {
    const { classes } = props

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')


    return (
        <main className={classes.main}>
            <Paper className={classes.paper} style={{
                backgroundColor: "rgba(255,255,255,0.85)",
                borderRadius: "25px"}}>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    טופס הרשמה
                </Typography>
                <form className={classes.form} onSubmit={e => e.preventDefault() && false }>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                inputProps={{style: {textAlign: 'center'}}}
                                id="fname"
                                name="fname"
                                type="string"
                                autoComplete="off"
                                autoFocus 
                                value={fname}
                                onChange={e => setFname(e.target.value)}
                                variant="standard"
                                required
                                fullWidth
                                label="שם פרטי"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                inputProps={{style: {textAlign: 'center'}}}
                                id="lname"
                                name="lname"
                                type="string"
                                autoComplete="off"
                                autoFocus value={lname}
                                onChange={e => setLname(e.target.value)}
                                variant="standard"
                                required
                                fullWidth
                                label="שם משפחה"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                inputProps={{style: {textAlign: 'center'}}}
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="off"
                                autoFocus value={phone}
                                onChange={e => setPhone(e.target.value)}
                                variant="standard"
                                required
                                fullWidth
                                label="פלאפון"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                inputProps={{style: {textAlign: 'center'}}}
                                id="email" 
                                name="email"
                                type="email"
                                autoComplete="off"
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                variant="standard"
                                required
                                fullWidth
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                inputProps={{style: {textAlign: 'center'}}}
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="off"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                variant="standard"
                                required
                                fullWidth
                                label="סיסמא"
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        id="registerBtn"
                        onClick={onRegister}
                        className={classes.submit}
                        register="true">

                        הרשמה
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        id="LoginBtn"
                        component={Link}
                        to="/Login"
                        className={classes.submit}>
                        כבר יש לך משתמש? התחברות
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        id="HomeBtn"
                        component={Link}
                        to="/"
                        className={classes.submit}>
                        חזרה לעמוד הראשי
                    </Button>
                </form>
            </Paper>
        </main>
    )

    async function onRegister() {
        try {
            await firebase.register(fname, email, password)
            props.history.replace('/user')
        } catch(error) {
            alert(error.message)
        }
    }
}

export default withRouter(withStyles(useStyles)(SignUp))