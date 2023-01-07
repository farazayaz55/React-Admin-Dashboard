import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Pages/global/Topbar";
import Sidebar from "./Pages/global/Sidebar";
import Dashboard from "./Pages/dashboard";
import Team from "./Pages/team";
import Invoices from "./Pages/invoices";
import Contacts from "./Pages/contacts";
import Bar from "./Pages/bar";
import Form from "./Pages/form";
import Line from "./Pages/line";
import Pie from "./Pages/pie";
import FAQ from "./Pages/faq";
import Geography from "./Pages/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./Pages/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
