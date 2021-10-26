import { useAppSelector } from "../../../../app/hooks"
import { selectListOfTaskList } from "../../state/selectors"
import { FC } from 'react'
import { Drawer, Typography } from "@material-ui/core";

export const ListOfTaskList: FC<{}> = () => {
  const listOfTaskList = useAppSelector(selectListOfTaskList);

  return(
    <>
      {listOfTaskList.map(taskList => {
        return(
          <>
            <Typography variant='h6'>{taskList.caption}</Typography>
            <Typography variant='subtitle1'>Id: {taskList.id}</Typography>
            <Drawer/>
          </>
        )
      })}
    </>
  )
}