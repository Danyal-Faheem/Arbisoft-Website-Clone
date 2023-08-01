import { Button } from "@mui/material"

export interface ICustomButtonProps {
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | string,
    text: string,
    link?: string,
    EndIcon?: any,
    styles?: any
}

export const CustomButton = ({color, text, link, EndIcon, styles} : ICustomButtonProps) => {

  return (
    <Button variant="outlined" sx={{...{borderRadius: 10}, ...styles}} color={color} endIcon={EndIcon ? <EndIcon/> : <></>}>
      {text}
    </Button>
  )
}
