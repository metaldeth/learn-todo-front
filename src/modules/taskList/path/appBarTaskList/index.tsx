import { Button, ButtonGroup } from '@material-ui/core'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const AppBarTaskList: FC<{}> = () => {
  return(
    <ButtonGroup variant='contained' color='primary'>
      <Button
        component={Link} 
        to='/taskList/create'
      >
        create
      </Button>
      <Button
        component={Link} 
        to='/taskList'
      >
        list
      </Button>
    </ButtonGroup>
  )
}