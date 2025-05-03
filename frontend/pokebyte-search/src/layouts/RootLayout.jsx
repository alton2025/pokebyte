import { Outlet } from "react-router-dom"
import {Box} from "@chakra-ui/react"


export default function RootLayout() {
  return (
    <Box
      minH="100vh"
      bgImage="url('/pokebyte-wallpaper.jpg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      >
      <Outlet />
    </Box>
  )
}
