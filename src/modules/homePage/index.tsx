import { Box, Button, ButtonGroup, Card, Container } from "@material-ui/core"
import { Link } from "react-router-dom"
import { FC } from 'react'

export const HomePage: FC<{}> = () => {
  return(
    <Container>
      <ButtonGroup variant='contained' color='primary'>
        <Button
          component={Link} 
          to='/taskList'
        >
          taskList
        </Button>
      </ButtonGroup>
    </Container>
  )
}