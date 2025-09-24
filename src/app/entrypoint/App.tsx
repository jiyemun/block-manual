import { BrowserRouter } from "react-router-dom";
import AppRouter from "@/app/routes/AppRouter.tsx";
import { Providers } from "@/app/entrypoint/Providers.tsx";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <AppRouter />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
