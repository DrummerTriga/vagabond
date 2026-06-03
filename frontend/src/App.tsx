import { Navigate, Routes } from "react-router";
import FeedLayout from "./layouts/Feed/FeedLayout";
import { Route } from "react-router";
import FeedPage from "./pages/Feed/FeedPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<FeedLayout />}>
          <Route path="" element={<FeedPage />} />
        </Route>

        {/* deal with the rest */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
