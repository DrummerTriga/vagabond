import { Navigate, Routes, Route } from "react-router";
import FeedLayout from "./layouts/Feed/FeedLayout";
import FeedPage from "./pages/Feed/FeedPage";

import UserProfileLayout from "./layouts/Profile/UserProfileLayout";
import MePage from "./pages/Profile/MePage";

import CreateNewPage from "./pages/Create/CreateNewPage";

import MessagesLayout from "./layouts/Messages/MessagesLayout";
import MessagesPage from "./pages/Messages/MessagesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<FeedLayout />}>
          <Route path="" element={<FeedPage />} />
        </Route>
        <Route path="profile" element={<UserProfileLayout />}>
          <Route path="me" element={<MePage />} />
        </Route>
        <Route path="create" element={<UserProfileLayout />}>
          <Route path="" element={<CreateNewPage />} />
        </Route>
        <Route path="messages" element={<MessagesLayout />}>
          <Route path="" element={<MessagesPage />} />
        </Route>

        {/* deal with the rest */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
