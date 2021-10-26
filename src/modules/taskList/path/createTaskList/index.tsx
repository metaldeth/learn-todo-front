import { Button, Card, CardContent, Container, Grid, makeStyles, TextField } from '@material-ui/core'
import { useFormik } from 'formik'
import { FC } from 'react'
import { useHistory } from 'react-router'
import { useAppDispatch } from '../../../../app/hooks'
import { CreateTaskListDTO } from '../../../../types/serverInterface/taskList/taskListDTO'
import { createTaskList, fetchTaskList } from '../../state'
import { createTaskListValidationScheme } from './validationScheme'

const initialValues: CreateTaskListDTO = {
  caption: ''
}

const useStyles = makeStyles((theme) => ({
  content: {
    width: theme.spacing(35),
    margin: theme.spacing(1)
  }
}))

export const CreateTaskList: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const classes = useStyles();

  const formik = useFormik({
    validationSchema: createTaskListValidationScheme,
    initialValues,
    onSubmit: (values, formikHelpers) => {
      return dispatch(createTaskList(values)).then(() => dispatch(fetchTaskList()).then(() => {
        history.push('/taskList')
      }, () => {
        formikHelpers.setSubmitting(false);
      }))
    }
  })

  return(
    <Container>
      <Grid container spacing={4} justify='center'>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  id='standart-basic'
                  label='название'
                  name='caption'
                  type='search'
                  onChange={formik.handleChange}
                  value={formik.values.caption}
                  className={classes.content}
                />
                <div className='button'>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    disabled={formik.isSubmitting}
                  >Сохранить</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}