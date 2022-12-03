import { createTheme, ThemeProvider } from '@mui/material';
import {useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { theme } from './component/Theme/Theme';
import { router } from './routes/route';


function App() {


  // -------------loading jonno 3 second asyncronus system use in timeInterval -----------//

  // const [submiting, setSubmiting] = useState(false)
  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     setSubmiting(false)
  //   }, 3000);
  //   return () => {
  //     clearTimeout(id)
  //   }
  // }, [submiting])


  // const [darkMode, setDrakMode]= useState(false)

  // const theme = createTheme({
  //   palette: {
  //     mode: "light"
  //   }
  // })
  // const theme2 = createTheme({
  //   palette: {
  //     mode: "dark"
  //   }
  // })


  return (
    <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
