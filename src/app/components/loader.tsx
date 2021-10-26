import { Box, CircularProgress } from "@material-ui/core"

export const Loader = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  )
}