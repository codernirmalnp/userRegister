import { CardActions, CardContent, TextField ,Typography,Card, Button,Icon} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {makeStyles} from '@material-ui/styles'
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {create} from './api.user'
const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing(2),
      color: theme.palette.openTitle
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    }
  }))

  
export default function signUp(){
    const classes = useStyles()
    const [values, setValues] = useState({
      name: '',
      password: '',
      email: '',
      open: false,
      error: ''
    })
    const clickSubmit=()=>{
      const user={
          name:values.name || undefined,
          email:values.email || undefined,
          password:values.password || undefined
      }
    
      create(user).then((data)=>{
          if(data.error)
          {
              setValues({...values,error:data.error})
          }
          else{
              setValues({...values,error:'',open:true})
          }
      })
  }


    
    const handelChange=name=>(event)=>
    {
        setValues({...values,[name]:event.target.value})
    }

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                <Typography variant="h6" className={classes.title}>    
                        Sign Up        
                </Typography>

                <TextField id="name" label="Name" className={classes.TextField}
                 value={values.name} onChange={handelChange('name')}/>
                <br/>
                <TextField id="email" type="email" label="Email" className={classes.TextField} 
                value={values.email} onChange={handelChange("email")} margin="normal"/>
                  <br/>

                <TextField id="password" label="Password" type="password" className={classes.TextField} value={values.password} onChange={handelChange('password')} margin="normal"/>
                <br/>
                {
                    values.error && (<Typography component="p" color="error" >
                        <Icon color="error" className={classes.error}>
                            error
                        </Icon>
                        {values.error}
                    </Typography>)
                }
                </CardContent>
                <CardActions>
                    <Button color="primary" varient="contained" onClick={clickSubmit} className={classes.submit}>
                         Submit
                    </Button>
                </CardActions>

            </Card>
            <Dialog open={values.open} disableBackdropClick={true}>
                <DialogTitle>New Account</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        New Account Created Successfully
                    </DialogContentText>
                    <DialogActions>
             <Link to="/signin">
             <Button color="primary" variant="contained"  className={classes.submit}>Sign In</Button>
             </Link>
   </DialogActions>

                </DialogContent>
                
            </Dialog>

        </div>
    )

  }
