import * as Yup from 'yup'
import { CreateTaskListDTO } from '../../../../types/serverInterface/taskList/taskListDTO'

export const createTaskListValidationScheme: Yup.SchemaOf<CreateTaskListDTO> = Yup.object().shape({
  caption: Yup.string()
    .required('Required'),
})