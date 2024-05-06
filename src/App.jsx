import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

// https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2Fshakilahmedatik%2FsoloSphere-resources%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3Jmh8uxRgVzdUEcphgaDS5GHY8E6lwD5PwH2CFxhGTYBYGA3wYKl5Y1nI_aem_Ae6UQsyF2Dq46uFsOOxMAUV3eQu96jprcbqUrnIi2REdcBfm_7_4NGmiKrsUjcm_AzLsIIBAb9ENsQNIJhSeEal_&h=AT1LwkPEu41AQQgCGnyR5Ke-JJ6wFjulyVuTVxGBVC_wcS4FHXEXfixW5AwtCid58zB54rUzuOoWrXzJrgM0PDJ7qmKlDQ5y5ZuUbeNiw4e4zjbAPTnzgGbrnEOFwaa3vBi1&__tn__=R]-R&c[0]=AT3NMwPhdcSSx3W-jKctIsIi6l9cKBSttGamKhlHDrVrNH6sYI3haB6mgMDWrs71WOcV4ZDrrz7IZm-E9hrulUydFNRzMSutWEzIyYFHtlFrQoV1RW_Tm_6OuEjhKZKhhFuxRstOJaUh1tEr6bMnDIvqaT3SPlTB5MQ-c4RU031sybVAKDiA7wdvUm3mxCnS0uTK1ex697Zx05-gh4y7mWFNeWw7fhgfhuByZgCo

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
