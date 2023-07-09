import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { FC, memo } from 'react'
import { PropsLimit } from '../Navbar'

const LimitFilter: FC<PropsLimit> = memo(({ currLimit, setLimit }) => {
  const limit = ['10', '15', '20', '25', '30']
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Лимит запросов</InputLabel>
      <Select sx={{ width: '250px' }}
        labelId="demo-simple-select-labels"
        id="demo-simple-select"
        label="Лимит постов"
        value={currLimit as string}
        onChange={(e: SelectChangeEvent<string>) => setLimit(e.target.value as string)}
      >
        {limit.map(i => <MenuItem value={i} key={i}>{i}</MenuItem>)}
      </Select>
    </FormControl>

  )
})

export default LimitFilter